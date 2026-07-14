"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function IntegrationsPage() {

    const { clientId } = useParams();

    const [settings, setSettings] = useState<any>({
        enabled: false,
        provider: "google",
        calendarId: "",
    });

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (clientId) {
            loadSettings();
        }

    }, [clientId]);

    async function loadSettings() {

        const res = await fetch(
            "http://localhost:3001/api/admin/integrations",
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        setSettings(await res.json());

    }

    async function save() {

        setSaving(true);

        await fetch(
            "http://localhost:3001/api/admin/integrations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tenant-id": String(clientId),
                },
                body: JSON.stringify(settings),
            }
        );

        setSaving(false);

        alert("Integrations saved.");

    }

    async function connectGoogleCalendar() {

        const res = await fetch(
            "http://localhost:3001/api/admin/calendar/connect",
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        const data = await res.json();

        window.location.href = data.url;

    }

    async function testCalendar() {

        const res = await fetch(
            "http://localhost:3001/api/admin/calendar/list",
            {
                headers: {
                    "x-tenant-id": String(clientId),
                },
            }
        );

        const data = await res.json();

        console.log(data);

        alert(JSON.stringify(data, null, 2));

    }

    return (

        <div className="p-10 max-w-4xl space-y-8">

            <BackButton label="Back to Client" />

            <h1 className="text-5xl font-black">
                Integrations
            </h1>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 space-y-8">

                <label className="flex items-center gap-4">

                    <input
                        type="checkbox"
                        checked={settings.enabled}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                enabled: e.target.checked
                            })
                        }
                    />

                    Enable Google Calendar

                </label>

                <div className="space-y-3">

                    <button
                        onClick={connectGoogleCalendar}
                        className="rounded-xl bg-green-600 px-6 py-3 font-bold hover:bg-green-500"
                    >
                        Connect Google Calendar
                    </button>

                    <p className="text-sm text-zinc-400">
                        Authorize this client's Google Calendar. This only needs to be completed once.
                    </p>

                </div>

                <div className="space-y-3">

                    <button
                        onClick={testCalendar}
                        className="rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500"
                    >
                        Test Calendar Connection
                    </button>

                    <p className="text-sm text-zinc-400">
                        Verify that Val can access this client's Google Calendar.
                    </p>

                </div>

                <button
                    onClick={save}
                    disabled={saving}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black"
                >
                    {saving ? "Saving..." : "Save"}
                </button>

            </div>

        </div>

    );

}