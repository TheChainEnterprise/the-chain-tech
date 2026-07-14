"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function KnowledgePage() {

    const { clientId } = useParams();

    const [knowledge, setKnowledge] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (clientId) {
            loadKnowledge();
        }

    }, [clientId]);

    async function loadKnowledge() {

        const res = await fetch(
            "http://localhost:3001/api/admin/knowledge",
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        setKnowledge(await res.json());

    }

    async function saveKnowledge() {

        setSaving(true);

        await fetch(
            "http://localhost:3001/api/admin/knowledge",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": String(clientId),
                },
                body: JSON.stringify(knowledge),
            }
        );

        setSaving(false);

        alert("Knowledge Base saved.");

    }

    function update(index: number, field: string, value: any) {

        const copy = [...knowledge];

        copy[index][field] = value;

        setKnowledge(copy);

    }

    function addArticle() {

        setKnowledge([
            ...knowledge,
            {
                title: "",
                source: "",
                content: "",
            },
        ]);

    }

    function deleteArticle(index: number) {

        if (!confirm("Delete this article?")) return;

        const copy = [...knowledge];

        copy.splice(index, 1);

        setKnowledge(copy);

    }

    return (

        <div className="p-10 space-y-8">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black">
                Knowledge Base
            </h1>

            <div className="space-y-6">

                {knowledge.map((article, index) => (

                    <div
                        key={index}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 space-y-4"
                    >

                        <input
                            className="w-full rounded bg-zinc-800 p-3"
                            placeholder="Title"
                            value={article.title || ""}
                            onChange={(e) =>
                                update(index, "title", e.target.value)
                            }
                        />

                        <input
                            className="w-full rounded bg-zinc-800 p-3"
                            placeholder="Source"
                            value={article.source || ""}
                            onChange={(e) =>
                                update(index, "source", e.target.value)
                            }
                        />

                        <textarea
                            className="h-64 w-full rounded bg-zinc-800 p-3"
                            placeholder="Content"
                            value={article.content || ""}
                            onChange={(e) =>
                                update(index, "content", e.target.value)
                            }
                        />

                        <button
                            onClick={() => deleteArticle(index)}
                            className="rounded-xl bg-red-600 px-5 py-2 font-semibold hover:bg-red-500"
                        >
                            Delete Article
                        </button>

                    </div>

                ))}

            </div>

            <div className="flex gap-4">

                <button
                    onClick={addArticle}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    Add Article
                </button>

                <button
                    onClick={saveKnowledge}
                    disabled={saving}
                    className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black hover:bg-green-400"
                >
                    {saving ? "Saving..." : "Save"}
                </button>

            </div>

        </div>

    );

}