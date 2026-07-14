"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {

    const [services, setServices] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadServices();
    }, []);

    async function loadServices() {

        const res = await fetch(
            "http://localhost:3001/api/admin/services",
            {
                headers: {
                    "x-tenant-id": "default",
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
                    "x-tenant-id": "default",
                },
                body: JSON.stringify(services),
            }
        );

        setSaving(false);

        alert("Saved.");

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

    return (

        <div className="p-10 max-w-5xl">

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
                            className="w-full rounded bg-zinc-800 p-3"
                            type="number"
                            placeholder="Monthly Price"
                            value={service.monthly}
                            onChange={(e) =>
                                update(index, "monthly", Number(e.target.value))
                            }
                        />

                    </div>

                ))}

            </div>

            <div className="flex gap-4 mt-10">

                <button
                    onClick={addService}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black"
                >
                    Add Service
                </button>

                <button
                    onClick={save}
                    disabled={saving}
                    className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
                >
                    {saving ? "Saving..." : "Save"}
                </button>

            </div>

        </div>

    );

}