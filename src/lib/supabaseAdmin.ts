import { createClient } from '@supabase/supabase-js'

// Uses service role key — server-side only, bypasses RLS
// Fallback placeholders prevent build-time crash when env vars are not yet set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)
