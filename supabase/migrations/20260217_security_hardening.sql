-- Security Hardening Migration
-- Run this in your Supabase SQL Editor (Auzzie Chauffeur project)
-- NOTE: If function names are ambiguous (overloaded), you must specify arguments.
-- We are attempting to secure functions by name, assuming uniqueness.

-- 1. Enable RLS on tables flagged as public without RLS
-- Use IF EXISTS to prevent errors if tables are missing (though linter says they exist)
DO $$ 
BEGIN 
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'followups') THEN
        ALTER TABLE public.followups ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'notifications') THEN
        ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
    END IF;

    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'fleet_vehicles') THEN
        ALTER TABLE public.fleet_vehicles ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- 2. Create basic policies for these tables (matching your existing pattern of 'authenticated users')
-- WARNING: This allows any logged-in user to access these tables. Refine if you have customer/driver roles.

DO $$ 
BEGIN 
    -- Policy for followups
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'followups') AND
       NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'followups' AND policyname = 'Allow all operations for authenticated users on followups') THEN
        CREATE POLICY "Allow all operations for authenticated users on followups" ON public.followups FOR ALL TO authenticated USING (true) WITH CHECK (true);
    END IF;
    
    -- Policy for notifications
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'notifications') AND
       NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notifications' AND policyname = 'Allow all operations for authenticated users on notifications') THEN
        CREATE POLICY "Allow all operations for authenticated users on notifications" ON public.notifications FOR ALL TO authenticated USING (true) WITH CHECK (true);
    END IF;

    -- Policy for fleet_vehicles
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'fleet_vehicles') AND
       NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'fleet_vehicles' AND policyname = 'Allow all operations for authenticated users on fleet_vehicles') THEN
        CREATE POLICY "Allow all operations for authenticated users on fleet_vehicles" ON public.fleet_vehicles FOR ALL TO authenticated USING (true) WITH CHECK (true);
    END IF;
END $$;

-- 3. Secure Functions by setting search_path = public
-- We use ALTER ROUTINE which covers functions and procedures, and omit arguments to support unique names.
-- If any function is overloaded, this will fail and require specific signatures.

ALTER FUNCTION public.create_notification SET search_path = public;
ALTER FUNCTION public.get_revenue_stats SET search_path = public;
ALTER FUNCTION public.get_popular_routes SET search_path = public;
ALTER FUNCTION public.get_driver_performance SET search_path = public;
ALTER FUNCTION public.notify_new_booking SET search_path = public;
ALTER FUNCTION public.notify_new_quote SET search_path = public;
ALTER FUNCTION public.notify_new_message SET search_path = public;
ALTER FUNCTION public.update_bookings_search_vector SET search_path = public;
ALTER FUNCTION public.search_bookings SET search_path = public;
ALTER FUNCTION public.assign_booking SET search_path = public;
ALTER FUNCTION public.complete_booking SET search_path = public;
ALTER FUNCTION public.log_activity SET search_path = public;
ALTER FUNCTION public.generate_daily_report SET search_path = public;
ALTER FUNCTION public.log_booking_changes SET search_path = public;
ALTER FUNCTION public.process_payment SET search_path = public;
ALTER FUNCTION public.add_review SET search_path = public;
ALTER FUNCTION public.calculate_booking_price SET search_path = public;
ALTER FUNCTION public.get_route_distance SET search_path = public;
ALTER FUNCTION public.get_instant_quote SET search_path = public;
ALTER FUNCTION public.generate_invoice_number SET search_path = public;
ALTER FUNCTION public.create_invoice_from_booking SET search_path = public;
ALTER FUNCTION public.mark_invoice_paid SET search_path = public;
ALTER FUNCTION public.update_invoice_timestamp SET search_path = public;
ALTER FUNCTION public.queue_email SET search_path = public;
ALTER FUNCTION public.queue_sms SET search_path = public;
ALTER FUNCTION public.send_booking_confirmation_email SET search_path = public;
ALTER FUNCTION public.send_booking_sms SET search_path = public;
ALTER FUNCTION public.upsert_customer_from_booking SET search_path = public;
ALTER FUNCTION public.add_customer_interaction SET search_path = public;
ALTER FUNCTION public.get_customer_lifetime_value SET search_path = public;
ALTER FUNCTION public.update_customer_timestamp SET search_path = public;
ALTER FUNCTION public.validate_promo_code SET search_path = public;
ALTER FUNCTION public.apply_promo_code SET search_path = public;
ALTER FUNCTION public.get_expiring_documents SET search_path = public;
ALTER FUNCTION public.get_vehicle_maintenance_summary SET search_path = public;
ALTER FUNCTION public.schedule_maintenance SET search_path = public;
ALTER FUNCTION public.update_document_status SET search_path = public;

-- 4. Secure Views (SECURITY DEFINER -> SECURITY INVOKER)
-- Requires Postgres 15+. Ensures RLS on underlying tables is respected.

DO $$ 
BEGIN 
    IF EXISTS (SELECT FROM pg_views WHERE schemaname = 'public' AND viewname = 'vehicle_stats') THEN
        ALTER VIEW public.vehicle_stats SET (security_invoker = true);
    END IF;
    IF EXISTS (SELECT FROM pg_views WHERE schemaname = 'public' AND viewname = 'dashboard_stats') THEN
        ALTER VIEW public.dashboard_stats SET (security_invoker = true);
    END IF;
    IF EXISTS (SELECT FROM pg_views WHERE schemaname = 'public' AND viewname = 'recent_activity') THEN
        ALTER VIEW public.recent_activity SET (security_invoker = true);
    END IF;
    IF EXISTS (SELECT FROM pg_views WHERE schemaname = 'public' AND viewname = 'driver_stats') THEN
        ALTER VIEW public.driver_stats SET (security_invoker = true);
    END IF;
END $$;

-- End of Migration
