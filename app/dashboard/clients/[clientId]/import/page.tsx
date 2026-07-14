"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function ImportPage() {

    const { clientId } = useParams();

    const [website, setWebsite] = useState("");
    const [status, setStatus] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (clientId) {
            loadStatus();
        }

    }, [clientId]);

    async function loadStatus() {

        const res = await fetch(
            "http://localhost:3001/api/admin/import",
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        const data = await res.json();

        setStatus(data);

        if (data.exists) {
            setWebsite(data.website || "");
        }

    }

    async function startImport() {

        setLoading(true);

        await fetch(
            "http://localhost:3001/api/admin/import",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": String(clientId),
                },
                body: JSON.stringify({
                    website,
                }),
            }
        );

        setLoading(false);

        loadStatus();

    }

    async function deleteImport() {

        if (!confirm("Delete imported website?")) return;

        await fetch(
            "http://localhost:3001/api/admin/import",
            {
                method: "DELETE",
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        setWebsite("");
        setStatus(null);

    }

    return (

        <div className="p-10 space-y-8">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black">
                Website Import
            </h1>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 space-y-6">

                <input
                    className="w-full rounded bg-zinc-800 p-4"
                    placeholder="https://company.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />

                <div className="flex gap-4">

                    <button
                        onClick={startImport}
                        disabled={loading}
                        className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                    >
                        {loading ? "Queuing..." : "Start Import"}
                    </button>

                    <button
                        onClick={loadStatus}
                        className="rounded-xl bg-zinc-700 px-6 py-3 font-bold"
                    >
                        Refresh
                    </button>

                </div>

            </div>

            {status?.exists && (

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 space-y-4">

                    <h2 className="text-2xl font-bold">
                        Current Import
                    </h2>

                    <div>
                        <span className="text-zinc-400">
                            Website
                        </span>

                        <div>
                            {status.website}
                        </div>
                    </div>

                    <div>
                        <span className="text-zinc-400">
                            Status
                        </span>

                        <div className="font-semibold text-cyan-400">
                            {status.status}
                        </div>
                    </div>

                    <div>
                        <span className="text-zinc-400">
                            Created
                        </span>

                        <div>
                            {status.createdAt}
                        </div>
                    </div>

                    <button
                        onClick={deleteImport}
                        className="rounded-xl bg-red-600 px-6 py-3 font-bold hover:bg-red-500"
                    >
                        Delete Import
                    </button>

                </div>

            )}

        </div>

    );

}