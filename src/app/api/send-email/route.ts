import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

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
