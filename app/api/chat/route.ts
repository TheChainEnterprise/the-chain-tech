import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { sessionId, message } = await req.json();

    const response = await fetch(
      "https://ainegotiator-8rik.onrender.com/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-tenant-id": "default",
        },
        body: JSON.stringify({
          sessionId,
          message,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      reply: data.response,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to contact AI Engine.",
      },
      { status: 500 }
    );
  }
}