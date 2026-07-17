"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

const API = process.env.NEXT_PUBLIC_API_URL!;

export default function FAQPage() {

    const params = useParams();
    const clientId = params.clientId as string;

    const [faq, setFaq] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadFAQ();
    }, [clientId]);

    async function loadFAQ() {

        const res = await fetch(
            `${API}/api/admin/faq`,
            {
                headers: {
                    "x-tenant-id": clientId,
                },
            }
        );

        setFaq(await res.json());

    }

    async function save() {

        setSaving(true);

        await fetch(
            `${API}/api/admin/faq`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": clientId,
                },
                body: JSON.stringify(faq),
            }
        );

        setSaving(false);

        alert("FAQ saved!");

    }

    function update(index: number, field: string, value: string) {

        const copy = [...faq];
        copy[index][field] = value;
        setFaq(copy);

    }

    function addFAQ() {

        setFaq([
            ...faq,
            {
                id: Date.now(),
                question: "",
                answer: "",
            },
        ]);

    }

    function removeFAQ(index: number) {

        if (!confirm("Delete this FAQ?")) return;

        const copy = [...faq];
        copy.splice(index, 1);

        setFaq(copy);

    }

    return (

        <div className="p-10 max-w-5xl">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black mb-10">
                Frequently Asked Questions
            </h1>

            <div className="space-y-8">

                {faq.map((item, index) => (

                    <div
                        key={`${item.question || "faq"}-${index}`}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
                    >

                        <input
                            className="w-full mb-4 rounded bg-zinc-800 p-3"
                            placeholder="Question"
                            value={item.question}
                            onChange={(e) =>
                                update(index, "question", e.target.value)
                            }
                        />

                        <textarea
                            className="w-full rounded bg-zinc-800 p-3"
                            placeholder="Answer"
                            rows={5}
                            value={item.answer}
                            onChange={(e) =>
                                update(index, "answer", e.target.value)
                            }
                        />

                        <button
                            onClick={() => removeFAQ(index)}
                            className="mt-6 rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-500"
                        >
                            Delete FAQ
                        </button>

                    </div>

                ))}

            </div>

            <div className="mt-10 flex gap-4">

                <button
                    onClick={addFAQ}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    Add FAQ
                </button>

                <button
                    onClick={save}
                    disabled={saving}
                    className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black hover:bg-green-400"
                >
                    {saving ? "Saving..." : "Save"}
                </button>

            </div>

        </div>

    );

}