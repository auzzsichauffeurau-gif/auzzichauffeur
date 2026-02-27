import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import fs from 'fs';

export async function GET() {
    console.log("Testing insert draft post...");
    const { data, error } = await supabase.from('posts').insert([
        { title: 'Test Draft', slug: 'test-draft', content: 'test', excerpt: 'test', is_published: false }
    ]).select();

    if (error) {
        fs.writeFileSync('d:/au/auzzi/test-db-error.json', JSON.stringify(error, null, 2));
        return NextResponse.json({ error: error.message, details: error }, { status: 200 });
    } else {
        if (data && data.length > 0) {
            await supabase.from('posts').delete().eq('id', data[0].id);
        }
        return NextResponse.json({ success: true, data }, { status: 200 });
    }
}
