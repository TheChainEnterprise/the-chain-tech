"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

const API = process.env.NEXT_PUBLIC_API_URL!;

export default function BehaviourPage() {

    const { clientId } = useParams();

    const [behaviour, setBehaviour] = useState<any>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (clientId) {
            loadBehaviour();
        }

    }, [clientId]);

    async function loadBehaviour() {

        const res = await fetch(
            `${API}/api/admin/behaviour`,
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        const data = await res.json();

        setBehaviour({
            personality: "Professional",
            responseLength: "Short",
            emojiUsage: false,
            salesStyle: "Balanced",
            humor: false,
            greeting: "",
            closing: "",
            customInstructions: "",
            ...data
        });

    }

    async function saveBehaviour() {

        setSaving(true);

        await fetch(
            `${API}/api/admin/behaviour`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": String(clientId),
                },
                body: JSON.stringify(behaviour),
            }
        );

        setSaving(false);

        alert("AI Behaviour saved!");

    }

    if (!behaviour) {
        return <div className="p-10">Loading...</div>;
    }

    return (

        <div className="p-10 max-w-5xl space-y-8">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black">
                AI Behaviour
            </h1>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 space-y-8">

                <div>

                    <label className="block mb-2 font-semibold">
                        Personality
                    </label>

                    <select
                        className="w-full rounded bg-zinc-800 p-3"
                        value={behaviour.personality}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                personality:e.target.value
                            })
                        }
                    >
                        <option>Professional</option>
                        <option>Friendly</option>
                        <option>Luxury</option>
                        <option>Sales Focused</option>
                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Response Length
                    </label>

                    <select
                        className="w-full rounded bg-zinc-800 p-3"
                        value={behaviour.responseLength}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                responseLength:e.target.value
                            })
                        }
                    >
                        <option>Short</option>
                        <option>Medium</option>
                        <option>Detailed</option>
                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Sales Style
                    </label>

                    <select
                        className="w-full rounded bg-zinc-800 p-3"
                        value={behaviour.salesStyle}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                salesStyle:e.target.value
                            })
                        }
                    >
                        <option>Soft</option>
                        <option>Balanced</option>
                        <option>Aggressive</option>
                    </select>

                </div>

                <div className="flex gap-10">

                    <label className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            checked={behaviour.emojiUsage}
                            onChange={(e)=>
                                setBehaviour({
                                    ...behaviour,
                                    emojiUsage:e.target.checked
                                })
                            }
                        />

                        Use Emojis

                    </label>

                    <label className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            checked={behaviour.humor}
                            onChange={(e)=>
                                setBehaviour({
                                    ...behaviour,
                                    humor:e.target.checked
                                })
                            }
                        />

                        Use Humor

                    </label>

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Greeting
                    </label>

                    <textarea
                        className="h-24 w-full rounded bg-zinc-800 p-3"
                        value={behaviour.greeting}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                greeting:e.target.value
                            })
                        }
                    />

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Closing Message
                    </label>

                    <textarea
                        className="h-24 w-full rounded bg-zinc-800 p-3"
                        value={behaviour.closing}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                closing:e.target.value
                            })
                        }
                    />

                </div>

                <div>

                    <label className="block mb-2 font-semibold">
                        Additional Instructions
                    </label>

                    <textarea
                        className="h-56 w-full rounded bg-zinc-800 p-3"
                        value={behaviour.customInstructions}
                        onChange={(e)=>
                            setBehaviour({
                                ...behaviour,
                                customInstructions:e.target.value
                            })
                        }
                    />

                </div>

                <button
                    onClick={saveBehaviour}
                    disabled={saving}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    {saving ? "Saving..." : "Save Behaviour"}
                </button>

            </div>

        </div>

    );

}