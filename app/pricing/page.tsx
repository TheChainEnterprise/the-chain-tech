"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Bot,
  Rocket,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PricingPage() {
  // CHANGED: toggle for the website bundle's site tier (single vs multi page)
  const [siteType, setSiteType] = useState<"single" | "multi">("single");
  const sitePrice = siteType === "single" ? 500 : 1000;
  const valAnnualPrice = 1000;
  const bundleTotal = sitePrice + valAnnualPrice;

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

        <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-black"
          >
            Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .15 }}
            className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-zinc-400"
          >
            Simple, upfront pricing.
            <br />
            No monthly bill to dread.
          </motion.p>

        </div>

      </section>

      {/* Pricing Cards */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-8 px-8 lg:grid-cols-3">

          {/* 1-Month Test Drive */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
          >

            <Rocket className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Test Drive
            </h2>

            <div className="mt-6 text-6xl font-black text-cyan-300">
              $500
            </div>

            <p className="mt-2 text-zinc-500">
              Installation + your first month
            </p>

            <div className="mt-10 space-y-5">

              <Feature text="Full Val Installation" />
              <Feature text="Business AI Configuration" />
              <Feature text="30 Days Live on Your Site" />
              <Feature text="Real Customer Conversations" />
              <Feature text="No Long-Term Commitment" />

            </div>

            <p className="mt-10 text-sm text-zinc-500">
              Like what you see? Continue for just{" "}
              <span className="font-semibold text-cyan-300">$500/year</span>.
            </p>

          </motion.div>

          {/* Val Annual Plan */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border-2 border-cyan-400 bg-[#0B1118] p-10 shadow-[0_0_50px_rgba(34,211,238,.15)]"
          >

            <Bot className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Val — Annual
            </h2>

            <div className="mt-6 text-6xl font-black text-cyan-300">
              $1,000
            </div>

            <p className="mt-2 text-zinc-500">
              First year · then $500/year
            </p>

            <div className="mt-10 space-y-5">

              <Feature text="Business AI Configuration" />
              <Feature text="Val Installation" />
              <Feature text="Phone Integration" />
              <Feature text="CRM Integration" />
              <Feature text="Calendar Integration" />
              <Feature text="Knowledge Setup" />
              <Feature text="Hosting & Monitoring" />
              <Feature text="Ongoing AI Improvements" />
              <Feature text="Priority Support" />

            </div>

          </motion.div>

          {/* Website + Val bundle */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
          >

            <Globe className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Website + Val
            </h2>

            <div className="mt-6 text-6xl font-black text-cyan-300">
              ${bundleTotal.toLocaleString()}
            </div>

            <p className="mt-2 text-zinc-500">
              No website yet? We'll build one, then bring Val to it.
            </p>

            {/* Site type toggle */}
            <div className="mt-8 flex rounded-full border border-cyan-400/20 bg-[#05070A] p-1 text-sm">

              <button
                onClick={() => setSiteType("single")}
                className={`flex-1 rounded-full py-2 font-semibold transition ${
                  siteType === "single"
                    ? "bg-cyan-400 text-black"
                    : "text-zinc-400"
                }`}
              >
                Single Page — $500
              </button>

              <button
                onClick={() => setSiteType("multi")}
                className={`flex-1 rounded-full py-2 font-semibold transition ${
                  siteType === "multi"
                    ? "bg-cyan-400 text-black"
                    : "text-zinc-400"
                }`}
              >
                Multi Page — $1,000
              </button>

            </div>

            <div className="mt-8 space-y-4 rounded-2xl border border-cyan-400/15 bg-[#101720] p-6">

              <Row
                left={
                  siteType === "single"
                    ? "Single-Page Site"
                    : "Multi-Page Custom Site"
                }
                right={`$${sitePrice}`}
              />

              <Arrow />

              <Row left="Val — Annual" right={`$${valAnnualPrice.toLocaleString()}`} />

              <Arrow />

              <Row left="Total, First Year" right={`$${bundleTotal.toLocaleString()}`} />

            </div>

          </motion.div>

        </div>

      </section>

      {/* Success fee — light mention, not a full tier */}

      <section className="border-t border-cyan-400/10 py-20">

        <div className="mx-auto max-w-3xl px-8 text-center">

          <p className="text-lg leading-8 text-zinc-500">
            Want Val to actively negotiate pricing with your customers, with
            a success fee only on the extra profit she wins you? That's
            available as an add-on for select businesses —{" "}
            <a
              href="/contact"
              className="text-cyan-300 underline underline-offset-4"
            >
              ask us about it
            </a>
            .
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-cyan-400/10 py-28">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-6xl font-black">
            Ready when you are.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-zinc-400">
            One flat setup fee, one simple yearly renewal.
            No surprises, no monthly bill to remember.
          </p>

          <a
  href="/book-demo"
  className="mt-14 inline-block rounded-full bg-cyan-400 px-10 py-5 text-xl font-semibold text-black transition hover:scale-105"
>
  Book a Demo
</a>

        </div>

      </section>

    </main>

    <Footer />
  </>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={20}
        className="text-cyan-300"
      />

      <span>{text}</span>

    </div>
  );
}

function Row({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-zinc-400">
        {left}
      </span>

      <span className="font-bold text-cyan-300">
        {right}
      </span>

    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1">

      <ArrowRight
        className="text-cyan-400"
        size={18}
      />

    </div>
  );
}
