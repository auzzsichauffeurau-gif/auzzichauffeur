-- Run this in Supabase SQL Editor
CREATE TABLE IF NOT EXISTS reminders_log (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    reminder_type TEXT NOT NULL CHECK (reminder_type IN ('booking_24h', 'booking_2h', 'invoice_3d')),
    booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
    invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
    customer_email TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'failed')),
    error_message TEXT,
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast duplicate checks
CREATE INDEX IF NOT EXISTS idx_reminders_log_booking_type
    ON reminders_log(booking_id, reminder_type);

CREATE INDEX IF NOT EXISTS idx_reminders_log_invoice_type
    ON reminders_log(invoice_id, reminder_type);

-- Enable RLS
ALTER TABLE reminders_log ENABLE ROW LEVEL SECURITY;

-- Allow service role full access
CREATE POLICY "Service role full access" ON reminders_log
    FOR ALL USING (true);
