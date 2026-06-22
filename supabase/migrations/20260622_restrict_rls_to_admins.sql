-- Security Hardening Migration
-- Run this in your Supabase SQL Editor (Auzzie Chauffeur project) to lock down RLS policies safely.

-- 1. Helper function to check if the session user is an admin based on email
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN (
    auth.jwt() ->> 'email' = 'auzzsichauffeur.au@gmail.com' OR
    auth.jwt() ->> 'email' = 'info@auzziechauffeur.com.au' OR
    auth.jwt() ->> 'email' = 'booking@auzziechauffeur.com.au' OR
    auth.jwt() ->> 'email' LIKE '%@auzziechauffeur.com.au'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Restrict Bookings RLS
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'bookings') THEN
        ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on bookings" ON public.bookings;
        DROP POLICY IF EXISTS "Allow public insert on bookings" ON public.bookings;
        DROP POLICY IF EXISTS "Allow admin all on bookings" ON public.bookings;

        CREATE POLICY "Allow admin all on bookings" ON public.bookings FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
        CREATE POLICY "Allow public insert on bookings" ON public.bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
    END IF;
END $$;

-- 3. Restrict Contact Messages RLS
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'contact_messages') THEN
        ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on contact_messages" ON public.contact_messages;
        DROP POLICY IF EXISTS "Allow public insert on contact_messages" ON public.contact_messages;
        DROP POLICY IF EXISTS "Allow admin all on contact_messages" ON public.contact_messages;

        CREATE POLICY "Allow admin all on contact_messages" ON public.contact_messages FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
        CREATE POLICY "Allow public insert on contact_messages" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
    END IF;
END $$;

-- 4. Restrict Posts (Blog) RLS
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'posts') THEN
        ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow public read access on posts" ON public.posts;
        DROP POLICY IF EXISTS "Allow admin all on posts" ON public.posts;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on posts" ON public.posts;

        CREATE POLICY "Allow public read access on posts" ON public.posts FOR SELECT TO anon, authenticated USING (is_published = true);
        CREATE POLICY "Allow admin all on posts" ON public.posts FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- 5. Restrict other Admin-only Tables (No public/standard user access permitted)

-- Customers
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'customers') THEN
        ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on customers" ON public.customers;
        DROP POLICY IF EXISTS "Allow admin all on customers" ON public.customers;
        CREATE POLICY "Allow admin all on customers" ON public.customers FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Drivers
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'drivers') THEN
        ALTER TABLE public.drivers ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on drivers" ON public.drivers;
        DROP POLICY IF EXISTS "Allow admin all on drivers" ON public.drivers;
        CREATE POLICY "Allow admin all on drivers" ON public.drivers FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Fleet Vehicles
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'fleet_vehicles') THEN
        ALTER TABLE public.fleet_vehicles ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on fleet_vehicles" ON public.fleet_vehicles;
        DROP POLICY IF EXISTS "Allow admin all on fleet_vehicles" ON public.fleet_vehicles;
        CREATE POLICY "Allow admin all on fleet_vehicles" ON public.fleet_vehicles FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Invoices
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'invoices') THEN
        ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on invoices" ON public.invoices;
        DROP POLICY IF EXISTS "Allow admin all on invoices" ON public.invoices;
        CREATE POLICY "Allow admin all on invoices" ON public.invoices FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Followups
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'followups') THEN
        ALTER TABLE public.followups ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on followups" ON public.followups;
        DROP POLICY IF EXISTS "Allow admin all on followups" ON public.followups;
        CREATE POLICY "Allow admin all on followups" ON public.followups FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Notifications
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'notifications') THEN
        ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on notifications" ON public.notifications;
        DROP POLICY IF EXISTS "Allow admin all on notifications" ON public.notifications;
        CREATE POLICY "Allow admin all on notifications" ON public.notifications FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Reminders Log
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'reminders_log') THEN
        ALTER TABLE public.reminders_log ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on reminders_log" ON public.reminders_log;
        DROP POLICY IF EXISTS "Allow admin all on reminders_log" ON public.reminders_log;
        CREATE POLICY "Allow admin all on reminders_log" ON public.reminders_log FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Email Templates
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'email_templates') THEN
        ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on email_templates" ON public.email_templates;
        DROP POLICY IF EXISTS "Allow admin all on email_templates" ON public.email_templates;
        CREATE POLICY "Allow admin all on email_templates" ON public.email_templates FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Promo Codes
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'promo_codes') THEN
        ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on promo_codes" ON public.promo_codes;
        DROP POLICY IF EXISTS "Allow admin all on promo_codes" ON public.promo_codes;
        CREATE POLICY "Allow admin all on promo_codes" ON public.promo_codes FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;

-- Leads
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'leads') THEN
        ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on leads" ON public.leads;
        DROP POLICY IF EXISTS "Allow admin all on leads" ON public.leads;
        CREATE POLICY "Allow admin all on leads" ON public.leads FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
    END IF;
END $$;
