"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";

export default function ClientsPage() {

    const [clients, setClients] = useState<any[]>([]);

    useEffect(() => {
        loadClients();
    }, []);

    async function loadClients() {

        const res = await fetch(
            "http://localhost:3001/api/admin/clients"
        );

        const data = await res.json();

        setClients(data);

    }

    async function deleteClient(id: string) {

        if (!confirm("Delete this client permanently?")) return;

        await fetch(
            `http://localhost:3001/api/admin/clients/${id}`,
            {
                method: "DELETE",
            }
        );

        loadClients();

    }

    return (

        <div className="p-10">

            <BackButton label="Back to Dashboard" />

            <div className="flex items-center justify-between mb-10">

                <div>

                    <h1 className="text-5xl font-black">
                        AI Management
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Select a client to edit their AI.
                    </p>

                </div>

                <Link
                    href="/dashboard/clients/new"
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400 transition"
                >
                    + New Client
                </Link>

            </div>

            <div className="space-y-5">

                {clients.length === 0 && (

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">
                        No clients yet. Click <span className="font-semibold text-cyan-400">+ New Client</span> to create your first AI business.
                    </div>

                )}

                {clients.map((client) => (

                    <div
                        key={client.id}
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                    >

                        <Link
                            href={`/dashboard/clients/${client.id}`}
                            className="flex-1"
                        >

                            <h2 className="text-2xl font-bold">
                                {client.businessName}
                            </h2>

                            <p className="mt-2 text-zinc-400">
                                {client.website || "No website"}
                            </p>

                            <p className="mt-3 text-cyan-400">
                                {client.industry || "No industry"}
                            </p>

                        </Link>

                        <div className="flex gap-3">

                            <Link
                                href={`/dashboard/clients/${client.id}`}
                                className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                            >
                                Open
                            </Link>

                            <button
                                onClick={() => deleteClient(client.id)}
                                className="rounded-xl bg-red-600 px-6 py-3 font-bold hover:bg-red-500"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}