"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function ServicesPage() {

    const params = useParams();
    const clientId = params.clientId as string;

    const [services, setServices] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadServices();
    }, [clientId]);

    async function loadServices() {

        const res = await fetch(
            "http://localhost:3001/api/admin/services",
            {
                headers: {
                    "x-tenant-id": clientId,
                },
            }
        );

        setServices(await res.json());

    }

    async function save() {

        setSaving(true);

        await fetch(
            "http://localhost:3001/api/admin/services",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": clientId,
                },
                body: JSON.stringify(services),
            }
        );

        setSaving(false);

        alert("Services saved!");

    }

    function update(index: number, field: string, value: any) {

        const copy = [...services];
        copy[index][field] = value;
        setServices(copy);

    }

    function addService() {

        setServices([
            ...services,
            {
                id: Date.now(),
                name: "",
                description: "",
                price: 0,
                monthly: 0,
            },
        ]);

    }

    function removeService(index: number) {

        if (!confirm("Delete this service?")) return;

        const copy = [...services];
        copy.splice(index, 1);
        setServices(copy);

    }

    return (

        <div className="p-10 max-w-5xl">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black mb-10">
                Services
            </h1>

            <div className="space-y-8">

                {services.map((service, index) => (

                    <div
                        key={service.id}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
                    >

                        <input
                            className="w-full mb-4 rounded bg-zinc-800 p-3"
                            placeholder="Service Name"
                            value={service.name}
                            onChange={(e) =>
                                update(index, "name", e.target.value)
                            }
                        />

                        <textarea
                            className="w-full mb-4 rounded bg-zinc-800 p-3"
                            placeholder="Description"
                            value={service.description}
                            onChange={(e) =>
                                update(index, "description", e.target.value)
                            }
                        />

                        <input
                            className="w-full mb-4 rounded bg-zinc-800 p-3"
                            type="number"
                            placeholder="Setup Price"
                            value={service.price}
                            onChange={(e) =>
                                update(index, "price", Number(e.target.value))
                            }
                        />

                        <input
                            className="w-full mb-6 rounded bg-zinc-800 p-3"
                            type="number"
                            placeholder="Monthly Price"
                            value={service.monthly}
                            onChange={(e) =>
                                update(index, "monthly", Number(e.target.value))
                            }
                        />

                        <button
                            onClick={() => removeService(index)}
                            className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-500"
                        >
                            Delete Service
                        </button>

                    </div>

                ))}

            </div>

            <div className="mt-10 flex gap-4">

                <button
                    onClick={addService}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400"
                >
                    Add Service
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