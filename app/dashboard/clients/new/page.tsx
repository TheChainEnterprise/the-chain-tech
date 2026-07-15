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

        const id = businessName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_");

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
            alert("Failed to create client.");
            return;
        }

        router.push("/dashboard/clients");
    }

    return (

        <div className="max-w-3xl p-10 space-y-6">

            <h1 className="text-5xl font-black">
                Create New Client
            </h1>

            <input
                className="w-full rounded bg-zinc-900 border border-zinc-700 p-4"
                placeholder="Business Name"
                value={businessName}
                onChange={(e)=>setBusinessName(e.target.value)}
            />

            <input
                className="w-full rounded bg-zinc-900 border border-zinc-700 p-4"
                placeholder="Industry"
                value={industry}
                onChange={(e)=>setIndustry(e.target.value)}
            />

            <input
                className="w-full rounded bg-zinc-900 border border-zinc-700 p-4"
                placeholder="Website"
                value={website}
                onChange={(e)=>setWebsite(e.target.value)}
            />

            <input
                className="w-full rounded bg-zinc-900 border border-zinc-700 p-4"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                className="w-full rounded bg-zinc-900 border border-zinc-700 p-4"
                placeholder="Phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
            />

            <button
                onClick={createClient}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
            >
                Create Client
            </button>

        </div>

    );
}