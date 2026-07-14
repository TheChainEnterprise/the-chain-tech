import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {

        const {
            sessionId,
            message,
            tenantId,
        } = await req.json();

        // Use local AI engine during development.
        // Change back to your Render URL when deploying.
        const AI_ENGINE =
            process.env.AI_ENGINE_URL ||
            "http://localhost:3001";

        const response = await fetch(
            `${AI_ENGINE}/api/chat`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": tenantId || "default",
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
            response: data.response,
            currentPrice: data.currentPrice,
            status: data.status,
            analysis: data.analysis,
        });

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to contact AI Engine.",
            },
            {
                status: 500,
            }
        );

    }

}