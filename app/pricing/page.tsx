"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Bot,
  Settings,
  Euro,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PricingPage() {
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
            Simple pricing.
            <br />
            We only succeed when your business succeeds.
          </motion.p>

        </div>

      </section>

      {/* Pricing Cards */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-8 px-8 lg:grid-cols-3">

          {/* Installation */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
          >

            <Bot className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Installation
            </h2>

            <div className="mt-6 text-6xl font-black text-cyan-300">
              €500
            </div>

            <p className="mt-2 text-zinc-500">
              One-time payment
            </p>

            <div className="mt-10 space-y-5">

              <Feature text="Business AI Configuration" />
              <Feature text="Val Installation" />
              <Feature text="Phone Integration" />
              <Feature text="CRM Integration" />
              <Feature text="Calendar Integration" />
              <Feature text="Knowledge Setup" />
              <Feature text="Go Live" />

            </div>

          </motion.div>

          {/* Monthly */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border-2 border-cyan-400 bg-[#0B1118] p-10 shadow-[0_0_50px_rgba(34,211,238,.15)]"
          >

            <Settings className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Monthly
            </h2>

            <div className="mt-6 text-6xl font-black text-cyan-300">
              €50
            </div>

            <p className="mt-2 text-zinc-500">
              Per month
            </p>

            <div className="mt-10 space-y-5">

              <Feature text="Hosting" />
              <Feature text="Monitoring" />
              <Feature text="Updates" />
              <Feature text="AI Improvements" />
              <Feature text="Business Knowledge Updates" />
              <Feature text="Priority Support" />

            </div>

          </motion.div>

          {/* Negotiation */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
          >

            <Euro className="mb-8 text-cyan-300" size={40} />

            <h2 className="text-4xl font-black">
              Success Fee
            </h2>

            <div className="mt-6 text-5xl font-black text-cyan-300">
              10%
            </div>

            <p className="mt-2 text-zinc-500">
              Only from additional negotiated profit
            </p>

            <div className="mt-10 space-y-4 rounded-2xl border border-cyan-400/15 bg-[#101720] p-6">

              <Row left="Customer Budget" right="€1000" />

              <Arrow />

              <Row left="Your Minimum Price" right="€900" />

              <Arrow />

              <Row left="Val Negotiates" right="€940" />

              <Arrow />

              <Row left="Extra Profit" right="€40" />

              <Arrow />

              <Row left="You Keep" right="€36" />

              <Arrow />

              <Row left="The Chain" right="€4" />

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-cyan-400/10 py-28">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="text-6xl font-black">
            No Success?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-zinc-400">
            If Val doesn't negotiate additional profit,
            we don't earn a success fee.
            Our incentives are aligned with yours.
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