import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { sendEmail } from '@/lib/email'

export async function GET(req: NextRequest) {
    // Verify cron secret
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = new Date()
    const in23h = new Date(now.getTime() + 23 * 60 * 60 * 1000)
    const in25h = new Date(now.getTime() + 25 * 60 * 60 * 1000)

    const results: any[] = []

    try {
        // Fetch confirmed bookings in the 23–25h window
        const { data: bookings, error } = await supabaseAdmin
            .from('bookings')
            .select('id, customer_name, customer_email, customer_phone, pickup_date, pickup_time, pickup_location, dropoff_location, vehicle_type, amount')
            .in('status', ['Confirmed', 'In Progress'])

        if (error) throw error

        for (const booking of bookings || []) {
            // Build pickup datetime in Australia/Sydney time (AEST = UTC+10, AEDT = UTC+11)
            // pickup_date and pickup_time are stored in local Australian time
            const pickupDatetime = new Date(`${booking.pickup_date}T${booking.pickup_time}:00+10:00`)

            if (pickupDatetime < in23h || pickupDatetime > in25h) continue

            // Check if reminder already sent
            const { data: existing } = await supabaseAdmin
                .from('reminders_log')
                .select('id')
                .eq('booking_id', booking.id)
                .eq('reminder_type', 'booking_24h')
                .limit(1)

            if (existing && existing.length > 0) continue

            // Send email
            let emailStatus = 'sent'
            let errorMsg = null

            try {
                await sendEmail({
                    to: booking.customer_email,
                    subject: `Reminder: Your Auzzie Chauffeur pickup is tomorrow`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                            <h2 style="color: #1e3a8a;">Pickup Reminder — Tomorrow</h2>
                            <p>Dear ${booking.customer_name},</p>
                            <p>This is a friendly reminder that your chauffeur service is scheduled for <strong>tomorrow</strong>.</p>
                            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                <p style="margin: 6px 0;"><strong>Date:</strong> ${booking.pickup_date}</p>
                                <p style="margin: 6px 0;"><strong>Time:</strong> ${booking.pickup_time}</p>
                                <p style="margin: 6px 0;"><strong>Pickup:</strong> ${booking.pickup_location}</p>
                                <p style="margin: 6px 0;"><strong>Dropoff:</strong> ${booking.dropoff_location}</p>
                                <p style="margin: 6px 0;"><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                            </div>
                            <p>Please be ready at least <strong>10 minutes</strong> before your scheduled pickup time.</p>
                            <p>Best regards,<br>Auzzie Chauffeur Team</p>
                        </div>
                    `
                })
            } catch (e: any) {
                emailStatus = 'failed'
                errorMsg = e.message
            }

            // Log the reminder
            await supabaseAdmin.from('reminders_log').insert([{
                reminder_type: 'booking_24h',
                booking_id: booking.id,
                customer_email: booking.customer_email,
                customer_name: booking.customer_name,
                status: emailStatus,
                error_message: errorMsg
            }])

            results.push({ booking_id: booking.id, customer: booking.customer_name, status: emailStatus })
        }

        return NextResponse.json({ success: true, processed: results.length, results })

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
