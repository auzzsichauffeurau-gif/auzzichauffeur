import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
    console.log("Testing insert published post...");
    const { data, error } = await supabase.from('posts').insert([
        { title: 'Test Published', slug: 'test-published', content: 'test', excerpt: 'test', is_published: true }
    ]).select();

    if (error) {
        return NextResponse.json({ error: error.message, details: error }, { status: 200 });
    } else {
        if (data && data.length > 0) {
            await supabase.from('posts').delete().eq('id', data[0].id);
        }
        return NextResponse.json({ success: true, data }, { status: 200 });
    }
}
