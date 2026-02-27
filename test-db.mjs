import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBlogDraft() {
    console.log("Testing insert draft post...");
    const { data, error } = await supabase.from('posts').insert([
        { title: 'Test Draft', slug: 'test-draft', content: 'test', excerpt: 'test', is_published: false }
    ]).select();

    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success! Data:", data);

        // Clean up
        if (data && data.length > 0) {
            await supabase.from('posts').delete().eq('id', data[0].id);
        }
    }
}

checkBlogDraft();
