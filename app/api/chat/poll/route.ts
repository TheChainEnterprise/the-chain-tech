import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const sessionId = searchParams.get("sessionId");
        const after = searchParams.get("after") || "0";
        const tenantId = searchParams.get("tenantId") || "default";

        if (!sessionId) {
            return NextResponse.json({ error: "sessionId is required." }, { status: 400 });
        }

        const AI_ENGINE = process.env.AI_ENGINE_URL || "http://localhost:3001";

        const response = await fetch(
            `${AI_ENGINE}/api/chat/poll/${encodeURIComponent(sessionId)}?after=${after}`,
            {
                headers: { "x-tenant-id": tenantId },
                cache: "no-store",
            }
        );

        const data = await response.json();
        return NextResponse.json(data);

    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: "Active", messages: [] }, { status: 200 });
    }
}
