import { NextResponse } from "next/server";

const AI_ENGINE = process.env.AI_ENGINE_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

export async function GET() {
  try {
    const [statsRes, bookingsRes] = await Promise.all([
      fetch(`${AI_ENGINE}/api/dashboard/stats`, {
        headers: { "x-tenant-id": TENANT_ID },
        cache: "no-store",
      }),
      fetch(`${AI_ENGINE}/api/bookings`, {
        headers: { "x-tenant-id": TENANT_ID },
        cache: "no-store",
      }),
    ]);

    const stats = statsRes.ok
      ? await statsRes.json()
      : { leads: 0, bookings: 0, messages: 0, activeChats: 0 };

    const bookings = bookingsRes.ok ? await bookingsRes.json() : [];

    // Revenue isn't tracked per-booking yet (no price field on bookings),
    // so this stays 0 until that's added. Everything else below is real.
    const revenue = 0;

    const recentActivity = Array.isArray(bookings)
      ? bookings
          .slice()
          .sort(
            (a: any, b: any) =>
              new Date(b.timestamp || 0).getTime() -
              new Date(a.timestamp || 0).getTime()
          )
          .slice(0, 5)
          .map((b: any) => ({
            type: "booking",
            label: `${b.customer || "Customer"} booked ${b.service || "a consultation"}`,
            time: b.timestamp,
          }))
      : [];

    return NextResponse.json({
      clients: 1,
      conversations: stats.activeChats ?? 0,
      messages: stats.messages ?? 0,
      leads: stats.leads ?? 0,
      bookings: stats.bookings ?? bookings.length ?? 0,
      revenue,
      recentActivity,
    });
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
