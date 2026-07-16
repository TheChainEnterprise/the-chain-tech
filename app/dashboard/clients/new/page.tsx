"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL!;

export default function NewClientPage() {
    const router = useRouter();

    const [businessName, setBusinessName] = useState("");
    const [industry, setIndustry] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function createClient() {
        if (!businessName.trim()) {
            alert("Business Name is required.");
            return;
        }

        const id = businessName
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");

        try {
            const res = await fetch(`${API}/api/admin/clients`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    businessName,
                    industry,
                    website,
                    email,
                    phone,
                }),
            });

            if (!res.ok) {
                const error = await res.json();
                alert(error.error || "Failed to create client.");
                return;
            }

            router.push("/dashboard/clients");
        } catch (err) {
            console.error(err);
            alert("Unable to connect to the AI Engine.");
        }
    }

    return (
        <div className="max-w-3xl p-10 space-y-6">

            <h1 className="text-5xl font-black">
                Create New Client
            </h1>

            <input
                className="w-full rounded border border-zinc-700 bg-zinc-900 p-4"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
            />

            <input
                className="w-full rounded border border-zinc-700 bg-zinc-900 p-4"
                placeholder="Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
            />

            <input
                className="w-full rounded border border-zinc-700 bg-zinc-900 p-4"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
            />

            <input
                className="w-full rounded border border-zinc-700 bg-zinc-900 p-4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="w-full rounded border border-zinc-700 bg-zinc-900 p-4"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <button
                onClick={createClient}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
            >
                Create Client
            </button>

        </div>
    );
}