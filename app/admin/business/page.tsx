"use client";

import { useEffect, useState } from "react";

export default function BusinessProfilePage() {
    const [profile, setProfile] = useState<any>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {
        const res = await fetch("http://localhost:3001/api/admin/profile", {
            headers: {
                "x-tenant-id": "default",
            },
        });

        const data = await res.json();
        setProfile(data);
    }

    async function saveProfile() {
        setSaving(true);

        await fetch("http://localhost:3001/api/admin/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-tenant-id": "default",
            },
            body: JSON.stringify(profile),
        });

        setSaving(false);

        alert("Business profile saved!");
    }

    if (!profile) {
        return <div className="p-10">Loading...</div>;
    }

    return (
        <div className="p-10 max-w-3xl space-y-6">

            <h1 className="text-4xl font-bold">
                Business Profile
            </h1>

            {/* Business Name */}

            <div>
                <label className="block mb-2 font-semibold">
                    Business Name
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.businessName || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            businessName: e.target.value,
                        })
                    }
                />
            </div>

            {/* Industry */}

            <div>
                <label className="block mb-2 font-semibold">
                    Industry
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.industry || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            industry: e.target.value,
                        })
                    }
                />
            </div>

            {/* Description */}

            <div>
                <label className="block mb-2 font-semibold">
                    Description
                </label>

                <textarea
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3 h-32"
                    value={profile.description || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            description: e.target.value,
                        })
                    }
                />
            </div>

            {/* Phone */}

            <div>
                <label className="block mb-2 font-semibold">
                    Phone
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.phone || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            phone: e.target.value,
                        })
                    }
                />
            </div>

            {/* Email */}

            <div>
                <label className="block mb-2 font-semibold">
                    Email
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.email || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            email: e.target.value,
                        })
                    }
                />
            </div>

            {/* Website */}

            <div>
                <label className="block mb-2 font-semibold">
                    Website
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.website || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            website: e.target.value,
                        })
                    }
                />
            </div>

            {/* WhatsApp */}

            <div>
                <label className="block mb-2 font-semibold">
                    WhatsApp
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.whatsapp || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            whatsapp: e.target.value,
                        })
                    }
                />
            </div>

            {/* Address */}

            <div>
                <label className="block mb-2 font-semibold">
                    Address
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.address || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            address: e.target.value,
                        })
                    }
                />
            </div>

            {/* Booking URL */}

            <div>
                <label className="block mb-2 font-semibold">
                    Booking URL
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.bookingUrl || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            bookingUrl: e.target.value,
                        })
                    }
                />
            </div>

            {/* Tone */}

            <div>
                <label className="block mb-2 font-semibold">
                    AI Tone
                </label>

                <input
                    className="w-full rounded bg-neutral-900 border border-neutral-700 p-3"
                    value={profile.tone || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            tone: e.target.value,
                        })
                    }
                />
            </div>

            <button
                onClick={saveProfile}
                disabled={saving}
                className="rounded bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
            >
                {saving ? "Saving..." : "Save Changes"}
            </button>

        </div>
    );
}