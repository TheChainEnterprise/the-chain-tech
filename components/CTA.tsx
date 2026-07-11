"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#05070A] py-40"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[300px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-black"
        >
          Ready To Automate Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-zinc-400"
        >
          Let Val answer your calls, negotiate with customers, qualify leads,
          book appointments and become your AI-powered receptionist —
          available 24 hours a day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >

          <a
            href="#talktoval"
            className="group flex items-center gap-3 rounded-full bg-cyan-400 px-10 py-5 text-xl font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            <Bot size={22} />
            Talk To Val
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="/pricing"
            className="group flex items-center gap-3 rounded-full border border-cyan-400 px-10 py-5 text-xl font-semibold transition duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            <Calendar size={22} />
            View Pricing
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-10 text-zinc-500"
        >

          <div>
            <div className="text-4xl font-black text-cyan-300">
              24/7
            </div>
            <div className="mt-2">
              Availability
            </div>
          </div>

          <div>
            <div className="text-4xl font-black text-cyan-300">
              &lt;2s
            </div>
            <div className="mt-2">
              Response Time
            </div>
          </div>

          <div>
            <div className="text-4xl font-black text-cyan-300">
              ∞
            </div>
            <div className="mt-2">
              Scalability
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}