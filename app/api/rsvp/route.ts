import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, response, guests, message } = body;

    if (!name || !response) {
      return NextResponse.json(
        { error: "Name and response are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("rsvps").insert([
      {
        name,
        email: email || null,
        response,
        guests: Number(guests) || 1,
        message: message || null,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Server API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
