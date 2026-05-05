import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'Invalid quote ID' }, { status: 400 });
    }

    const { data: booking, error: fetchError } = await supabaseAdmin
        .from('bookings')
        .select('*')
        .eq('id', id)
        .single();

    if (fetchError || !booking) {
        console.error('accept-quote fetch error:', fetchError?.message, 'id:', id);
        return NextResponse.json({ error: fetchError?.message || 'Quote not found' }, { status: 404 });
    }

    if (booking.status === 'Confirmed') {
        return NextResponse.json({ already: true, booking });
    }

    const { error: updateError } = await supabaseAdmin
        .from('bookings')
        .update({ status: 'Confirmed' })
        .eq('id', id);

    if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Send confirmation email to customer
    try {
        await sendEmail({
            to: booking.customer_email,
            subject: `Booking Confirmed — Auzzie Chauffeur`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <div style="background-color: #1e3a8a; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 1.5rem;">Auzzie Chauffeur</h1>
                    </div>
                    <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                        <h2 style="color: #065f46;">✓ Your Booking is Confirmed!</h2>
                        <p>Dear <strong>${booking.customer_name}</strong>,</p>
                        <p>Thank you for accepting the quote. Your booking is now <strong>confirmed</strong> and we look forward to serving you.</p>
                        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 6px 0;"><strong>📅 Date:</strong> ${booking.pickup_date}</p>
                            <p style="margin: 6px 0;"><strong>🕐 Time:</strong> ${booking.pickup_time}</p>
                            <p style="margin: 6px 0;"><strong>📍 Pickup:</strong> ${booking.pickup_location}</p>
                            <p style="margin: 6px 0;"><strong>📍 Dropoff:</strong> ${booking.dropoff_location}</p>
                            <p style="margin: 6px 0;"><strong>🚗 Vehicle:</strong> ${booking.vehicle_type}</p>
                            ${booking.amount ? `<p style="margin: 6px 0;"><strong>💰 Amount:</strong> $${booking.amount} AUD</p>` : ''}
                        </div>
                        <p>Our team will contact you shortly with your driver's details and any further instructions.</p>
                        <p>If you have any questions, reply to this email or call us directly.</p>
                        <p style="margin-top: 30px;">Best regards,<br><strong>Auzzie Chauffeur Team</strong></p>
                    </div>
                </div>
            `
        });
    } catch (e) {
        console.error('Customer confirmation email failed:', e);
    }

    // Alert admin
    try {
        await sendEmail({
            to: process.env.SMTP_USER!, // goes to the Gmail inbox admin monitors
            subject: `🎉 Quote Accepted: ${booking.customer_name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #065f46;">Quote Accepted — New Confirmed Booking</h2>
                    <p><strong>${booking.customer_name}</strong> has accepted the quote.</p>
                    <div style="background-color: #d1fae5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                        <p style="margin: 6px 0;"><strong>Customer:</strong> ${booking.customer_name}</p>
                        <p style="margin: 6px 0;"><strong>Email:</strong> ${booking.customer_email}</p>
                        <p style="margin: 6px 0;"><strong>Phone:</strong> ${booking.customer_phone}</p>
                        <p style="margin: 6px 0;"><strong>Date:</strong> ${booking.pickup_date} at ${booking.pickup_time}</p>
                        <p style="margin: 6px 0;"><strong>Route:</strong> ${booking.pickup_location} → ${booking.dropoff_location}</p>
                        <p style="margin: 6px 0;"><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                        ${booking.amount ? `<p style="margin: 6px 0;"><strong>Amount:</strong> $${booking.amount} AUD</p>` : ''}
                    </div>
                    <p>This booking is now <strong>Confirmed</strong> in the admin dashboard.</p>
                </div>
            `
        });
    } catch (e) {
        console.error('Admin alert email failed:', e);
    }

    // Create dashboard notification
    try {
        await supabaseAdmin.from('notifications').insert([{
            type: 'booking',
            title: 'Quote Accepted',
            message: `${booking.customer_name} accepted the quote — booking is now Confirmed.`,
            is_read: false,
            related_id: booking.id,
            priority: 'high'
        }]);
    } catch (e) {
        console.error('Notification insert failed:', e);
    }

    return NextResponse.json({ success: true, booking });
}
