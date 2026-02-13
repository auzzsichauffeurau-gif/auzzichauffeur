
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email API Route Handler
export async function POST(req: Request) {
    // Wrap everything in a try-catch to allow proper error returns
    try {
        // Debug check (won't show values, just if they exist)
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP Credentials on Server");
            return NextResponse.json({
                error: 'Configuration Error',
                details: `Missing: ${!process.env.SMTP_USER ? 'SMTP_USER ' : ''}${!process.env.SMTP_PASS ? 'SMTP_PASS' : ''}. Please check Vercel Environment Variables.`
            }, { status: 500 });
        }

        const body = await req.json();
        const { to, from, subject, text, html } = body;

        // Configure Nodemailer with Gmail SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE === 'false' ? false : true,
            auth: {
                user: process.env.SMTP_USER,
                // Remove any spaces from the password string just in case
                pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '',
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verify the SMTP connection configuration
        try {
            await transporter.verify();
        } catch (verifyError: any) {
            console.error("SMTP Connection Failed:", verifyError);
            return NextResponse.json(
                { error: 'SMTP Connection Failed', details: verifyError.message || 'Unknown SMTP error' },
                { status: 500 }
            );
        }

        // Define email options
        const mailOptions = {
            from: from || process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@auzziechauffeur.com.au',
            to: to,
            subject: subject,
            text: text,
            html: html,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully', messageId: info.messageId },
            { status: 200 }
        );

    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message, stack: error.stack },
            { status: 500 }
        );
    }
}
