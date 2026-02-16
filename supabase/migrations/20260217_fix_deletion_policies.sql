-- Enable RLS on bookings if not already
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Policy to allow ALL operations (SELECT, INSERT, UPDATE, DELETE) for authenticated users on bookings
-- Drop existing if conflict
DROP POLICY IF EXISTS "Allow all operations for authenticated users on bookings" ON public.bookings;
CREATE POLICY "Allow all operations for authenticated users on bookings"
ON public.bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Repeat for other tables likely to need admin management

-- Customers
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on customers" ON public.customers;
CREATE POLICY "Allow all operations for authenticated users on customers" ON public.customers FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Drivers
ALTER TABLE public.drivers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on drivers" ON public.drivers;
CREATE POLICY "Allow all operations for authenticated users on drivers" ON public.drivers FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Fleet Vehicles (already done, but good to reinforce)
ALTER TABLE public.fleet_vehicles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on fleet_vehicles" ON public.fleet_vehicles;
CREATE POLICY "Allow all operations for authenticated users on fleet_vehicles" ON public.fleet_vehicles FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Invoices
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all operations for authenticated users on invoices" ON public.invoices;
CREATE POLICY "Allow all operations for authenticated users on invoices" ON public.invoices FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Leads (if exists)
DO $$ BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'leads') THEN
        ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "Allow all operations for authenticated users on leads" ON public.leads;
        CREATE POLICY "Allow all operations for authenticated users on leads" ON public.leads FOR ALL TO authenticated USING (true) WITH CHECK (true);
    END IF;
END $$;
