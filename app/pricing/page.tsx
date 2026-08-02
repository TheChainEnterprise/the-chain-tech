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
  HelpCircle,
} from "lucide-react";

export default function PricingPage() {
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
              Invest Once.
              <br />
              <span className="text-cyan-300">Let Val Work Every Day.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-zinc-400"
            >
              No monthly subscriptions. No hidden fees.
              <br />
              Just an AI receptionist that answers customers, captures leads, and books appointments 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mx-auto mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold text-cyan-300"
            >
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0B1118] px-5 py-2.5">
                <CheckCircle2 size={16} /> 30-Day Pilot
              </span>
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0B1118] px-5 py-2.5">
                <CheckCircle2 size={16} /> Cancel Anytime
              </span>
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0B1118] px-5 py-2.5">
                <CheckCircle2 size={16} /> No Contracts
              </span>
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0B1118] px-5 py-2.5">
                <CheckCircle2 size={16} /> Setup Included
              </span>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-8 lg:grid-cols-3">
            
            {/* 30-Day Pilot */}
            <motion.div
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
            >
              <div>
                <Rocket className="mb-8 text-cyan-300" size={40} />

                <h2 className="text-4xl font-black">30-Day Pilot</h2>

                <div className="mt-6 text-6xl font-black text-cyan-300">$500</div>

                <p className="mt-2 font-medium text-zinc-300">
                  See Val speak with real customers before making a long-term decision.
                </p>

                <div className="mt-10 space-y-5">
                  <Feature text="Full Val Installation" />
                  <Feature text="Learns your business" />
                  <Feature text="30 Days Live on Your Site" />
                  <Feature text="Real Customer Conversations" />
                  <Feature text="Risk-Free Trial: Walk away after 30 days if it isn't the right fit." />
                </div>
              </div>

              <p className="mt-10 text-sm text-zinc-500">
                Like what you see? Continue for just{" "}
                <span className="font-semibold text-cyan-300">$500/year</span>.
              </p>
            </motion.div>

            {/* Val AI Receptionist (Annual) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative flex flex-col justify-between rounded-3xl border-2 border-cyan-400 bg-[#0B1118] p-10 shadow-[0_0_50px_rgba(34,211,238,.15)]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-black tracking-wider text-black uppercase">
                Most Popular
              </div>

              <div>
                <Bot className="mb-8 text-cyan-300" size={40} />

                <h2 className="text-4xl font-black">Val AI Receptionist</h2>

                <div className="mt-6 text-6xl font-black text-cyan-300">$1,000</div>

                <p className="mt-2 font-medium text-zinc-300">
                  Everything included. Renews at only $500/year.
                </p>

                <div className="mt-10 space-y-5">
                  <Feature text="Learns your business" />
                  <Feature text="Val Installation" />
                  <Feature text="Answers phone calls with AI" />
                  <Feature text="Automatically captures every lead" />
                  <Feature text="Books appointments automatically" />
                  <Feature text="Trained on your services & FAQs" />
                  <Feature text="Always online & monitored" />
                  <Feature text="Ongoing AI Improvements" />
                  <Feature text="Direct support from our team" />
                </div>
              </div>

              {/* Value Comparison Block */}
              <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-[#05070A] p-5">
                <div className="flex justify-between text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  <span>Hiring a receptionist</span>
                  <span>Val</span>
                </div>
                <div className="flex justify-between items-baseline font-bold">
                  <span className="text-lg text-zinc-400 line-through">$18k–$50k/yr</span>
                  <span className="text-xl text-cyan-300">$500/yr after setup</span>
                </div>
              </div>
            </motion.div>

            {/* Launch Package */}
            <motion.div
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-10"
            >
              <div>
                <Globe className="mb-8 text-cyan-300" size={40} />

                <h2 className="text-4xl font-black">Launch Package</h2>

                <div className="mt-6 text-6xl font-black text-cyan-300">
                  ${bundleTotal.toLocaleString()}
                </div>

                <p className="mt-2 font-medium text-zinc-300">
                  No website? We'll build your online presence, install Val, and have you accepting customers.
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
              </div>
            </motion.div>

          </div>
        </section>

        {/* Included With Every Plan (Trust Section) */}
        <section className="border-t border-cyan-400/10 py-24 bg-[#070b10]">
          <div className="mx-auto max-w-5xl px-8">
            <h3 className="text-center text-3xl font-black mb-16">
              Included With Every Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TrustItem text="AI setup" />
              <TrustItem text="Business training" />
              <TrustItem text="Secure hosting" />
              <TrustItem text="Continuous improvements" />
              <TrustItem text="Human support" />
              <TrustItem text="No monthly subscriptions" />
              <TrustItem text="Your data stays yours" />
              <TrustItem text="Fast installation" />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-cyan-400/10 py-24">
          <div className="mx-auto max-w-4xl px-8">
            <h3 className="text-center text-4xl font-black mb-16">
              Frequently Asked Questions
            </h3>
            <div className="space-y-8">
              <FaqItem
                q="Can I cancel?"
                a="Yes. You own your website and data."
              />
              <FaqItem
                q="How long does setup take?"
                a="Usually within a few business days."
              />
              <FaqItem
                q="Do I need technical knowledge?"
                a="No. We handle everything."
              />
              <FaqItem
                q="Can Val answer customer questions?"
                a="Yes. Val is trained specifically on your business."
              />
              <FaqItem
                q="Can I upgrade later?"
                a="Anytime."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-cyan-400/10 py-28 relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-8 text-center relative z-10">
            <p className="text-cyan-300 font-bold uppercase tracking-widest mb-4">
              If Val books just ONE extra customer per month, she often pays for herself.
            </p>

            <h2 className="text-6xl font-black">
              Hire Val.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-zinc-400">
              She never sleeps. Never misses a lead. Never forgets a customer.
            </p>

            <a
              href="/book-demo"
              className="mt-12 inline-block rounded-full bg-cyan-400 px-10 py-5 text-xl font-semibold text-black transition hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              Book Your Free Demo
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
    <div className="flex items-start gap-3">
      <CheckCircle2 size={20} className="text-cyan-300 shrink-0 mt-0.5" />
      <span className="text-zinc-300">{text}</span>
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-[#0B1118] p-5">
      <CheckCircle2 size={18} className="text-cyan-300 shrink-0" />
      <span className="font-semibold text-zinc-200">{text}</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-[#0B1118] p-8">
      <h4 className="text-xl font-bold text-white flex items-center gap-3">
        <HelpCircle size={20} className="text-cyan-300 shrink-0" />
        {q}
      </h4>
      <p className="mt-3 text-zinc-400 pl-8 leading-relaxed">
        {a}
      </p>
    </div>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{left}</span>
      <span className="font-bold text-cyan-300">{right}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <ArrowRight className="text-cyan-400" size={18} />
    </div>
  );
}