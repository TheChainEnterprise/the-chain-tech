"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function WidgetPage() {
    const { clientId } = useParams();
    const [copied, setCopied] = useState(false);

    const embedCode = `<script
src="https://ainegotiator-8rik.onrender.com/widget.js"
data-tenant-id="${clientId}">
</script>`;

    async function copyCode() {
        await navigator.clipboard.writeText(embedCode);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className="max-w-4xl p-10">

            <BackButton
                href={`/dashboard/clients/${clientId}`}
                label="Back to AI Management"
            />

            <h1 className="mt-6 text-4xl font-black">
                Install AI Widget
            </h1>

            <p className="mt-4 mb-8 text-zinc-400">
                Copy the code below and paste it before the closing
                {" </body> "} tag of your website.
            </p>

            <pre className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 overflow-x-auto text-sm">
                <code>{embedCode}</code>
            </pre>

            <button
                onClick={copyCode}
                className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black"
            >
                {copied ? "Copied!" : "Copy Widget Code"}
            </button>

        </div>
    );
}