"use client";

import { motion } from "framer-motion";
import {
  Bot,
  PhoneCall,
  CalendarDays,
  BrainCircuit,
} from "lucide-react";

const products = [
  {
    icon: Bot,
    name: "Val",
    badge: "AVAILABLE NOW",
    description:
      "An AI Negotiating Receptionist capable of answering calls, qualifying leads, negotiating with customers, booking appointments and operating as a 24/7 intelligent front desk.",
  },
  {
    icon: PhoneCall,
    name: "Voice AI",
    badge: "COMING SOON",
    description:
      "Natural voice conversations powered by advanced AI, allowing customers to speak as if they were talking to a real employee.",
  },
  {
    icon: CalendarDays,
    name: "Automation Hub",
    badge: "COMING SOON",
    description:
      "Connect calendars, CRMs, WhatsApp, email, phone systems and internal software into one autonomous workflow.",
  },
  {
    icon: BrainCircuit,
    name: "Business Brain",
    badge: "IN DEVELOPMENT",
    description:
      "Persistent company memory that learns your business, customers, pricing, services and negotiation strategies over time.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#05070A] py-36"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[280px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-black"
        >
          Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-center text-2xl leading-10 text-zinc-400"
        >
          Intelligent software designed to replace repetitive business work,
          improve customer experience and increase operational efficiency.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (

              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-cyan-400/15 bg-[#0B1118]/90 p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,.2)]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 transition group-hover:bg-cyan-400/20">

                    <Icon
                      className="text-cyan-300 transition group-hover:scale-110"
                      size={34}
                    />

                  </div>

                  <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                    {product.badge}
                  </span>

                </div>

                <h3 className="mt-8 text-4xl font-bold text-cyan-300">
                  {product.name}
                </h3>

                <p className="mt-6 text-lg leading-9 text-zinc-400">
                  {product.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}