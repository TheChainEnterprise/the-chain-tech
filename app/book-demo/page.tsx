"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import {
  Calendar,
  Bot,
  Phone,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function BookDemoPage() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setSuccess("✅ Demo request sent successfully.");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070A] pt-20 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-cyan-400/10 py-32">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[240px]"
          />

          <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

            <h1 className="text-7xl font-black">
              Book A Demo
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-zinc-400">
              Discover how Val can answer calls, negotiate with customers,
              qualify leads and automate your business.
            </p>

          </div>

        </section>

        {/* Demo Features */}

        <section className="py-24">

          <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-2">

            <Card
              icon={<Phone size={34} />}
              title="Live AI Calls"
              text="Experience natural phone conversations handled entirely by Val."
            />

            <Card
              icon={<BrainCircuit size={34} />}
              title="Negotiation Engine"
              text="Watch Val negotiate pricing and qualify customers automatically."
            />

            <Card
              icon={<Bot size={34} />}
              title="Business Knowledge"
              text="See how Val learns your company and answers customer questions."
            />

            <Card
              icon={<Calendar size={34} />}
              title="Calendar Booking"
              text="Appointments are scheduled automatically while you focus on work."
            />

          </div>

        </section>

        {/* Form */}

        <section className="border-t border-cyan-400/10 py-24">

          <div className="mx-auto max-w-3xl px-8">

            <h2 className="text-center text-5xl font-black">
              Request Your Demo
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-14 space-y-6"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-5 outline-none transition focus:border-cyan-400"
                required
              />

              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-5 outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-5 outline-none transition focus:border-cyan-400"
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-5 outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your business and how you'd like Val to help."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-5 outline-none transition focus:border-cyan-400"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 py-5 text-xl font-bold text-black transition hover:scale-[1.02] hover:bg-cyan-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Demo"}
              </button>

              {success && (
                <p className="text-center text-cyan-300">
                  {success}
                </p>
              )}

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-cyan-400/15 bg-[#0B1118] p-8 transition hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
    >
      <div className="mb-6 text-cyan-300">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-2 text-cyan-300">
        <CheckCircle2 size={18} />
        Included in every demo
      </div>
    </motion.div>
  );
}