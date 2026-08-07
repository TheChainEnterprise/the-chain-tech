"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Bot,
  CalendarDays,
  CreditCard,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  UserCog,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BackButton from "@/components/BackButton";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

type Business = {
  businessName: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
  timezone: string;
  bookingDurationMinutes: number;
  openHour: number;
  closeHour: number;
};

const DEFAULT_BUSINESS: Business = {
  businessName: "The Chain Technologies",
  industry: "Artificial Intelligence Software",
  website: "https://thechain.tech",
  email: "info@thechain.tech",
  phone: "",
  timezone: "Asia/Bangkok",
  bookingDurationMinutes: 60,
  openHour: 9,
  closeHour: 17,
};

export default function SettingsPage() {
  const [business, setBusiness] = useState<Business>(DEFAULT_BUSINESS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/admin/profile`, {
          headers: { "x-tenant-id": TENANT_ID },
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setBusiness({ ...DEFAULT_BUSINESS, ...data });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  function updateField<K extends keyof Business>(key: K, value: Business[K]) {
    setBusiness((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    setSaving(true);
    setSavedMessage("");
    try {
      const res = await fetch(`${API}/api/admin/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-tenant-id": TENANT_ID },
        body: JSON.stringify(business),
      });
      if (!res.ok) throw new Error("Save failed");
      setSavedMessage("Saved.");
      setTimeout(() => setSavedMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setSavedMessage("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4 text-white outline-none transition focus:border-cyan-400";

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <BackButton href="/dashboard" label="Back to Dashboard" />

        {/* Header */}

        <section className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-black">
              Settings
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage business configuration, Val AI settings and system preferences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {savedMessage && (
              <span className="text-sm text-emerald-400">{savedMessage}</span>
            )}
            <button
              onClick={save}
              disabled={saving || loading}
              className="rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </section>


        {/* Business Profile */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <Globe className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Business Profile
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm text-zinc-400">Company Name</label>
              <input
                value={business.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Industry</label>
              <input
                value={business.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Website</label>
              <input
                value={business.website}
                onChange={(e) => updateField("website", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input
                value={business.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Phone</label>
              <input
                value={business.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={inputClass}
                placeholder="e.g. +66 88 667 5802"
              />
            </div>

          </div>

        </section>


        {/* Val Configuration */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <Bot className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Val AI Configuration
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-[#05070A] p-5">
              <p className="text-zinc-400">AI Name</p>
              <p className="mt-2 font-semibold">Val</p>
            </div>

            <div className="rounded-2xl bg-[#05070A] p-5">
              <p className="text-zinc-400">Personality</p>
              <p className="mt-2 font-semibold">Professional</p>
            </div>

            <div className="rounded-2xl bg-[#05070A] p-5">
              <p className="text-zinc-400">Response Length</p>
              <p className="mt-2 font-semibold">Short</p>
            </div>

            <div className="rounded-2xl bg-[#05070A] p-5">
              <p className="text-zinc-400">Sales Style</p>
              <p className="mt-2 font-semibold">Balanced</p>
            </div>

          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Personality, tone and sales style are configured per-client under AI
            Management → Behaviour. This panel will read from the same place in
            a future update.
          </p>

        </section>


        {/* Booking */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <CalendarDays className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Booking Configuration
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div>
              <label className="text-sm text-zinc-400">Appointment Duration (minutes)</label>
              <input
                type="number"
                min={15}
                step={15}
                value={business.bookingDurationMinutes}
                onChange={(e) =>
                  updateField("bookingDurationMinutes", Number(e.target.value) || 60)
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Opening Hour (24h)</label>
              <input
                type="number"
                min={0}
                max={23}
                value={business.openHour}
                onChange={(e) => updateField("openHour", Number(e.target.value) || 0)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Closing Hour (24h)</label>
              <input
                type="number"
                min={1}
                max={24}
                value={business.closeHour}
                onChange={(e) => updateField("closeHour", Number(e.target.value) || 24)}
                className={inputClass}
              />
            </div>

            <div className="md:col-span-3">
              <label className="text-sm text-zinc-400">Timezone</label>
              <input
                value={business.timezone}
                onChange={(e) => updateField("timezone", e.target.value)}
                className={inputClass}
                placeholder="e.g. Asia/Bangkok"
              />
            </div>

          </div>

          <p className="mt-6 text-xs text-zinc-500">
            This controls how long each appointment slot Val offers actually
            is, and Val's booking hours. Click "Save Changes" above to apply.
          </p>

        </section>


        {/* Notifications */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <Bell className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Notifications
            </h2>
          </div>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between rounded-2xl bg-[#05070A] p-5">
              <span>Lead Notifications</span>
              <span className="text-emerald-400">Enabled</span>
            </div>

            <div className="flex justify-between rounded-2xl bg-[#05070A] p-5">
              <span>Booking Notifications</span>
              <span className="text-emerald-400">Enabled</span>
            </div>

          </div>

        </section>


        {/* Integrations */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <CreditCard className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Integrations
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            {[
              "Google Calendar",
              "WhatsApp",
              "Stripe",
              "CRM Integrations",
            ].map((item) => (
              <div
                key={item}
                className="flex justify-between rounded-2xl bg-[#05070A] p-5"
              >
                <span>{item}</span>
                <span className="text-yellow-400">Coming Soon</span>
              </div>
            ))}

          </div>

        </section>


        {/* Admin Access */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-cyan-300" />
            <h2 className="text-2xl font-bold">
              Admin Access
            </h2>
          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3 rounded-2xl bg-[#05070A] p-5">
              <UserCog />
              <span>info@thechain.tech</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-[#05070A] p-5">
              <Mail />
              <span>thechaintechnologies@gmail.com</span>
            </div>

          </div>

        </section>


      </div>

    </DashboardLayout>
  );
}
