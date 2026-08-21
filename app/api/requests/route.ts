import { NextResponse } from "next/server";

type WeddingRequest = {
  id: string;
  name: string;
  partnerName: string;
  weddingDate: string;
  email: string;
  whatsapp: string;
  message: string;
  themeId: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
};

const requests: WeddingRequest[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      partnerName,
      weddingDate,
      email,
      whatsapp,
      message,
      themeId,
    } = body;

    if (
      !name ||
      !partnerName ||
      !weddingDate ||
      !email ||
      !whatsapp ||
      !themeId
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing.",
        },
        { status: 400 }
      );
    }

    const newRequest: WeddingRequest = {
      id: crypto.randomUUID(),
      name,
      partnerName,
      weddingDate,
      email,
      whatsapp,
      message: message ?? "",
      themeId,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    requests.push(newRequest);

    return NextResponse.json({
      success: true,
      request: newRequest,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    requests,
  });
}