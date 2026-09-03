import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, response, guests, message } = body;

    // Supabase me data insert
    const { data, error } = await supabase
      .from('rsvps') // agar table ka naam rsvps ke alawa kuch aur hai toh yahan badal lena
      .insert([
        {
          name,
          email: email || null,
          response,
          guests: guests ? Number(guests) : 1,
          message: message || '',
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
