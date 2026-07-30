"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Val?",
    answer:
      "Val is an AI-powered negotiating receptionist that answers calls, qualifies leads, books appointments, and communicates naturally with your customers 24/7.",
  },
  {
    question: "Can Val negotiate with customers?",
    answer:
      "Yes. Val can negotiate within the pricing limits and business rules you define. She never exceeds your approved boundaries.",
  },
  {
    question: "Can I control negotiation limits?",
    answer:
      "Absolutely. You decide the minimum price, discounts, policies and negotiation strategy. Val always follows your configured rules.",
  },
  {
    question: "Does Val replace my receptionist?",
    answer:
      "Val can replace repetitive front-desk tasks or work alongside your existing staff by handling calls, FAQs, bookings and lead qualification.",
  },
  {
    question: "Which businesses can use Val?",
    answer:
      "Val is designed for clinics, agencies, real estate companies, dealerships, legal firms, consultants, service businesses and many other industries.",
  },
  {
    question: "Which languages does Val support?",
    answer:
      "Val can communicate in multiple languages depending on the AI model and voice configuration selected for your business.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most deployments can be completed within a few days after we receive your business information, pricing rules and integrations.",
  },
  {
    // CHANGED: was "Installation is €500, monthly maintenance is €50, and we only earn a 10% success fee..."
    question: "How much does it cost?",
    answer:
      "Installation plus your first year is $1,000, then just $500/year to renew — no monthly bills. Want to try it first? A one-month test drive is $500, and you can convert to the annual plan anytime after.",
  },
  {
    // CHANGED: was "No. Our service operates on a month-to-month basis unless a custom agreement is made."
    question: "Is there a long-term contract?",
    answer:
      "No lock-in beyond a year at a time. Plans run on a simple annual basis and renew at $500/year — cancel anytime before renewal, no surprise fees.",
  },
  {
    // NEW: entry, matches the new Website + Val bundle on the pricing page
    question: "I don't have a website yet — can you help?",
    answer:
      "Yes. We build the site and bring Val to it in one package, starting at $1,500 total for a single-page site plus Val's first year, or $2,000 for a custom multi-page site.",
  },
  {
    question: "Can Val integrate with my existing systems?",
    answer:
      "Yes. Val can integrate with calendars, CRMs, phone systems, email, WhatsApp and other business tools depending on your requirements.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070A] pt-20 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-cyan-400/10 py-28">

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
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-zinc-400">
              Everything you need to know about Val and The Chain Technologies.
            </p>

          </div>

        </section>

        {/* FAQ */}

        <section className="py-28">

          <div className="mx-auto max-w-5xl space-y-6 px-8">

            {faqs.map((faq) => (

              <div
                key={faq.question}
                className="rounded-3xl border border-cyan-400/15 bg-[#0B1118] p-8 transition hover:border-cyan-400/40"
              >

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold">
                    {faq.question}
                  </h2>

                  <ChevronDown
                    className="text-cyan-300"
                    size={22}
                  />

                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
