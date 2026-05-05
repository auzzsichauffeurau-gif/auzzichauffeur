-- Notifications Table
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('booking', 'quote', 'message', 'system', 'payment', 'alert')),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    related_id UUID,
    related_type TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    read_at TIMESTAMP WITH TIME ZONE,
    user_id UUID
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read);
CREATE INDEX IF NOT EXISTS idx_notifications_type ON notifications(type);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_priority ON notifications(priority);

-- Sample notifications
INSERT INTO notifications (type, title, message, read, priority, created_at) VALUES
('booking', 'New Booking Received', 'John Smith booked a Business Class sedan for airport transfer on 2026-02-05', false, 'high', NOW() - INTERVAL '2 hours'),
('quote', 'Quote Request', 'Sarah Johnson requested a quote for wedding car service in Melbourne', false, 'medium', NOW() - INTERVAL '5 hours'),
('message', 'New Contact Message', 'Michael Brown sent: "I need a chauffeur for corporate event next week"', false, 'medium', NOW() - INTERVAL '1 day'),
('booking', 'Booking Confirmed', 'Emily Davis confirmed booking for Byron Bay weekend trip', true, 'high', NOW() - INTERVAL '2 days'),
('payment', 'Payment Received', 'Payment of $450 received from David Wilson for booking #12345', true, 'medium', NOW() - INTERVAL '3 days'),
('alert', 'Urgent: Driver Assignment', 'Booking #12346 scheduled for tomorrow has no driver assigned', false, 'high', NOW() - INTERVAL '4 hours'),
('system', 'System Update', 'New features added to the admin dashboard', true, 'low', NOW() - INTERVAL '5 days'),
('booking', 'Booking Cancelled', 'Lisa Anderson cancelled her booking for 2026-02-10', true, 'medium', NOW() - INTERVAL '1 day'),
('quote', 'Quote Follow-up', 'James Taylor is waiting for quote response - sent 3 days ago', false, 'high', NOW() - INTERVAL '6 hours'),
('message', 'Feedback Received', 'Robert Chen left 5-star review: "Excellent service, very professional"', false, 'low', NOW() - INTERVAL '8 hours'),
('payment', 'Payment Pending', 'Invoice #INV-001 for $650 is overdue by 2 days', false, 'high', NOW() - INTERVAL '1 hour'),
('alert', 'Vehicle Maintenance Due', 'Mercedes S-Class (ABC-123) is due for service in 2 days', false, 'medium', NOW() - INTERVAL '12 hours'),
('booking', 'New Booking Received', 'Amanda White booked hourly chauffeur service for 4 hours', false, 'high', NOW() - INTERVAL '30 minutes'),
('system', 'Backup Completed', 'Daily database backup completed successfully', true, 'low', NOW() - INTERVAL '1 day'),
('message', 'New Contact Message', 'Peter Jones asked about rates for multi-day Melbourne tour', false, 'medium', NOW() - INTERVAL '3 hours');
