import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { sendEmail } from '@/lib/email'

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = new Date()
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)
    const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

    const results: any[] = []

    try {
        // Fetch unpaid invoices older than 3 days but within 90 days (avoid spamming very old invoices)
        const { data: invoices, error } = await supabaseAdmin
            .from('invoices')
            .select('id, invoice_number, customer_name, customer_email, customer_phone, total_amount, issue_date, due_date, booking_id')
            .eq('payment_status', 'unpaid')
            .lt('issue_date', threeDaysAgo.toISOString())
            .gte('issue_date', ninetyDaysAgo.toISOString())

        if (error) throw error

        for (const invoice of invoices || []) {
            // Only send one reminder every 3 days (avoid spamming)
            const threeDaysAgoForCheck = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)
            const { data: existing } = await supabaseAdmin
                .from('reminders_log')
                .select('id, sent_at')
                .eq('invoice_id', invoice.id)
                .eq('reminder_type', 'invoice_3d')
                .gte('sent_at', threeDaysAgoForCheck.toISOString())
                .limit(1)

            if (existing && existing.length > 0) continue

            const isOverdue = invoice.due_date && new Date(invoice.due_date) < now

            let emailStatus = 'sent'
            let errorMsg = null

            try {
                await sendEmail({
                    to: invoice.customer_email,
                    subject: isOverdue
                        ? `Overdue Invoice: ${invoice.invoice_number} — Auzzie Chauffeur`
                        : `Payment Reminder: Invoice ${invoice.invoice_number}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                            <h2 style="color: ${isOverdue ? '#dc2626' : '#1e3a8a'};">
                                ${isOverdue ? 'Overdue Invoice' : 'Payment Reminder'}
                            </h2>
                            <p>Dear ${invoice.customer_name},</p>
                            <p>${isOverdue
                                ? 'This is a notice that the following invoice is <strong>overdue</strong>. Please arrange payment as soon as possible.'
                                : 'This is a friendly reminder that the following invoice is awaiting payment.'
                            }</p>
                            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                <p style="margin: 6px 0;"><strong>Invoice:</strong> ${invoice.invoice_number}</p>
                                <p style="margin: 6px 0;"><strong>Amount Due:</strong> $${invoice.total_amount}</p>
                                <p style="margin: 6px 0;"><strong>Issue Date:</strong> ${new Date(invoice.issue_date).toLocaleDateString()}</p>
                                ${invoice.due_date ? `<p style="margin: 6px 0; color: ${isOverdue ? '#dc2626' : '#374151'};"><strong>Due Date:</strong> ${new Date(invoice.due_date).toLocaleDateString()}${isOverdue ? ' (OVERDUE)' : ''}</p>` : ''}
                            </div>
                            <p>Contact us: <a href="mailto:info@auzziechauffeur.com.au">info@auzziechauffeur.com.au</a></p>
                            <p>Best regards,<br>Auzzie Chauffeur Team</p>
                        </div>
                    `
                })
            } catch (e: any) {
                emailStatus = 'failed'
                errorMsg = e.message
            }

            await supabaseAdmin.from('reminders_log').insert([{
                reminder_type: 'invoice_3d',
                invoice_id: invoice.id,
                booking_id: invoice.booking_id || null,
                customer_email: invoice.customer_email,
                customer_name: invoice.customer_name,
                status: emailStatus,
                error_message: errorMsg
            }])

            results.push({ invoice_id: invoice.id, invoice_number: invoice.invoice_number, customer: invoice.customer_name, status: emailStatus })
        }

        return NextResponse.json({ success: true, processed: results.length, results })

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
