-- Follow-ups Table
CREATE TABLE IF NOT EXISTS followups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    customer_phone TEXT,
    type TEXT NOT NULL CHECK (type IN ('quote', 'booking', 'feedback', 'general')),
    priority TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
    due_date DATE NOT NULL,
    notes TEXT,
    booking_id UUID REFERENCES bookings(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_followups_status ON followups(status);
CREATE INDEX IF NOT EXISTS idx_followups_due_date ON followups(due_date);
CREATE INDEX IF NOT EXISTS idx_followups_priority ON followups(priority);
CREATE INDEX IF NOT EXISTS idx_followups_type ON followups(type);

-- Sample data
INSERT INTO followups (customer_name, customer_email, customer_phone, type, priority, status, due_date, notes) VALUES
('John Smith', 'john@example.com', '+61 400 123 456', 'quote', 'high', 'pending', CURRENT_DATE + INTERVAL '2 days', 'Follow up on wedding car quote - mentioned budget of $2000'),
('Sarah Johnson', 'sarah@example.com', '+61 400 234 567', 'booking', 'urgent', 'pending', CURRENT_DATE, 'Confirm airport pickup for tomorrow morning'),
('Michael Brown', 'michael@example.com', '+61 400 345 678', 'feedback', 'medium', 'pending', CURRENT_DATE + INTERVAL '5 days', 'Request feedback on recent corporate transfer service'),
('Emily Davis', 'emily@example.com', '+61 400 456 789', 'general', 'low', 'completed', CURRENT_DATE - INTERVAL '3 days', 'General inquiry about hourly rates - sent pricing'),
('David Wilson', 'david@example.com', '+61 400 567 890', 'quote', 'high', 'pending', CURRENT_DATE + INTERVAL '1 day', 'Byron Bay weekend trip - waiting for final passenger count'),
('Lisa Anderson', 'lisa@example.com', '+61 400 678 901', 'booking', 'medium', 'pending', CURRENT_DATE + INTERVAL '7 days', 'Confirm wedding booking for next month'),
('James Taylor', 'james@example.com', '+61 400 789 012', 'quote', 'urgent', 'pending', CURRENT_DATE, 'VIP client - needs quote for multi-day Melbourne tour ASAP');
