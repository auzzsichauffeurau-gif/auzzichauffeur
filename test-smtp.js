import nodemailer from 'nodemailer';
import 'dotenv/config';

async function testEmail() {
    console.log("Testing SMTP Credentials:");
    console.log("User:", process.env.SMTP_USER);
    console.log("Pass:", process.env.SMTP_PASS ? "*****" + process.env.SMTP_PASS.slice(-4) : "MISSING");

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === 'false' ? false : true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : '',
        }
    });

    try {
        await transporter.verify();
        console.log("✅ SMTP Connection Successful!");

        const info = await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: process.env.SMTP_USER, // Send to yourself
            subject: "Test Email from Auzzie Chauffeur",
            html: "<b>If you receive this, the SMTP is working perfectly.</b>"
        });

        console.log("✅ Test Email Sent! Message ID:", info.messageId);
    } catch (error) {
        console.error("❌ SMTP Error:", error);
    }
}

testEmail();
