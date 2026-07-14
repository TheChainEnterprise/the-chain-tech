import { NextResponse } from "next/server";

export async function GET() {
  try {
    const analytics = {
      clients: 0,
      conversations: 0,
      leads: 0,
      bookings: 0,
      revenue: 0,

      recentActivity: [],
    };

    return NextResponse.json(analytics);

  } catch (error) {
    console.error("Analytics API error:", error);

    return NextResponse.json(
      {
        error: "Failed to load analytics",
      },
      {
        status: 500,
      }
    );
  }
}