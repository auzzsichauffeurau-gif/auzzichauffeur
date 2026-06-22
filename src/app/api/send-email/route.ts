import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return NextResponse.json({
                error: 'Configuration Error',
                details: `Missing: ${!process.env.SMTP_USER ? 'SMTP_USER ' : ''}${!process.env.SMTP_PASS ? 'SMTP_PASS' : ''}`
            }, { status: 500 });
        }

        const body = await req.json();
        const { to, replyTo, subject, html, text } = body;

        if (!to || !subject) {
            return NextResponse.json({ error: 'Missing required fields: to, subject' }, { status: 400 });
        }

        // --- SESSION AND PERMISSION VALIDATION ---
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
        );
        const { data: { user } } = await supabase.auth.getUser();

        const adminEmails = [
            'auzzsichauffeur.au@gmail.com',
            'info@auzziechauffeur.com.au',
            'booking@auzziechauffeur.com.au'
        ];
        const isAdmin = !!(user?.email && (
            adminEmails.includes(user.email.toLowerCase().trim()) || 
            user.email.toLowerCase().trim().endsWith('@auzziechauffeur.com.au')
        ));

        if (!isAdmin) {
            // Unauthenticated requests must be validated to prevent open relay abuse
            const lowerTo = to.toLowerCase().trim();
            const isToAdmin = lowerTo === 'auzzsichauffeur.au@gmail.com' || lowerTo === 'info@auzziechauffeur.com.au' || lowerTo === 'booking@auzziechauffeur.com.au';

            if (!isToAdmin) {
                // E.g. client auto-replies to customers
                const lowerSubject = subject.toLowerCase().trim();
                const allowedSubjects = [
                    'we received your message - auzzie chauffeur',
                    'quote request received - auzzie chauffeur',
                    'booking request received - auzzie chauffeur'
                ];

                if (!allowedSubjects.includes(lowerSubject)) {
                    return NextResponse.json({ error: 'Unauthorized: Invalid email subject for unauthenticated requests' }, { status: 403 });
                }

                // Check HTML/text body for links to block phishing redirect redirection
                const urlRegex = /https?:\/\/[^\s"'<]+/g;
                const matches = (html || text || '').match(urlRegex) || [];
                for (const url of matches) {
                    try {
                        const parsedUrl = new URL(url);
                        const hostname = parsedUrl.hostname.toLowerCase();
                        if (hostname !== 'auzziechauffeur.com.au' && hostname !== 'www.auzziechauffeur.com.au') {
                            return NextResponse.json({ error: `Unauthorized: External links (${hostname}) not permitted for unauthenticated requests` }, { status: 403 });
                        }
                    } catch (e) {
                        return NextResponse.json({ error: 'Unauthorized: Invalid link format in template' }, { status: 403 });
                    }
                }
            }
        }

        // Send the email
        await sendEmail({ to, subject, html: html || text || '', replyTo });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}

