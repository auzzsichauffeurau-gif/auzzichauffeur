import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { sendEmail } from '@/lib/email'

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const now = new Date()
    const in105m = new Date(now.getTime() + 105 * 60 * 1000) // 1h 45m
    const in135m = new Date(now.getTime() + 135 * 60 * 1000) // 2h 15m

    const results: any[] = []

    try {
        const { data: bookings, error } = await supabaseAdmin
            .from('bookings')
            .select('id, customer_name, customer_email, customer_phone, pickup_date, pickup_time, pickup_location, dropoff_location, vehicle_type, amount')
            .in('status', ['Confirmed', 'In Progress'])

        if (error) throw error

        for (const booking of bookings || []) {
            const pickupDatetime = new Date(`${booking.pickup_date}T${booking.pickup_time}:00`)

            if (pickupDatetime < in105m || pickupDatetime > in135m) continue

            // Duplicate check
            const { data: existing } = await supabaseAdmin
                .from('reminders_log')
                .select('id')
                .eq('booking_id', booking.id)
                .eq('reminder_type', 'booking_2h')
                .limit(1)

            if (existing && existing.length > 0) continue

            let emailStatus = 'sent'
            let errorMsg = null

            try {
                await sendEmail({
                    to: booking.customer_email,
                    subject: `Your Auzzie Chauffeur arrives in 2 hours`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                            <h2 style="color: #1e3a8a;">Your Driver Arrives in 2 Hours</h2>
                            <p>Dear ${booking.customer_name},</p>
                            <p>Your chauffeur will arrive in approximately <strong>2 hours</strong>.</p>
                            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e3a8a;">
                                <p style="margin: 6px 0;"><strong>Pickup Time:</strong> ${booking.pickup_time}</p>
                                <p style="margin: 6px 0;"><strong>Pickup Location:</strong> ${booking.pickup_location}</p>
                                <p style="margin: 6px 0;"><strong>Dropoff:</strong> ${booking.dropoff_location}</p>
                                <p style="margin: 6px 0;"><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                            </div>
                            <p>Please be ready at the pickup location on time.</p>
                            <p>Best regards,<br>Auzzie Chauffeur Team</p>
                        </div>
                    `
                })
            } catch (e: any) {
                emailStatus = 'failed'
                errorMsg = e.message
            }

            await supabaseAdmin.from('reminders_log').insert([{
                reminder_type: 'booking_2h',
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
