export default function AdminLoginTest() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    return (
        <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
            <h1>Admin Login Diagnostics</h1>
            <div style={{ marginTop: '2rem', background: '#f3f4f6', padding: '1rem', borderRadius: '8px' }}>
                <p><strong>Supabase URL:</strong> {supabaseUrl || '❌ MISSING'}</p>
                <p><strong>Anon Key Present:</strong> {hasAnonKey ? '✅ Yes' : '❌ No'}</p>
                <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
                <a href="/admin/login" style={{ color: '#1e3a8a', textDecoration: 'underline' }}>
                    Go to Admin Login
                </a>
            </div>
        </div>
    );
}
