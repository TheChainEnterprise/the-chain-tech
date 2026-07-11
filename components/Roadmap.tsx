"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Store,
  Rocket,
} from "lucide-react";

const roadmap = [
  {
    icon: CheckCircle2,
    title: "Val",
    status: "AVAILABLE NOW",
    text: "AI Negotiating Receptionist capable of answering calls, qualifying leads, negotiating with customers and booking appointments 24/7.",
  },
  {
    icon: BrainCircuit,
    title: "Negotiation Engine",
    status: "IN DEVELOPMENT",
    text: "The core intelligence powering autonomous negotiations, decision making and customer interactions.",
  },
  {
    icon: Cpu,
    title: "Execution Engine",
    status: "COMING SOON",
    text: "AI capable of executing complete business workflows including CRM updates, bookings, emails and follow-up actions.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Protocol",
    status: "PLANNED",
    text: "A secure ownership verification protocol for valuable physical and digital assets built on The Chain.",
  },
  {
    icon: Store,
    title: "Marketplace",
    status: "VISION",
    text: "A marketplace where autonomous AI agents negotiate transactions while ownership is verified through The Chain Protocol.",
  },
  {
    icon: Rocket,
    title: "Autonomous Business OS",
    status: "LONG-TERM VISION",
    text: "A complete operating system where AI communicates, negotiates, executes and manages businesses autonomously.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#05070A] py-36"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[280px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-black"
        >
          Roadmap
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-center text-2xl leading-10 text-zinc-400"
        >
          We aren't building a single AI product.
          <br />
          We're building the future infrastructure for autonomous business.
        </motion.p>

        <div className="relative mx-auto mt-28 max-w-5xl">

          {/* Timeline */}
          <div className="absolute left-7 top-0 h-full w-[2px] bg-cyan-400/20" />

          <div className="space-y-14">

            {roadmap.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-8"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400 bg-[#081118] transition duration-300 hover:scale-110">

                    <Icon
                      className="h-6 w-6 text-cyan-300"
                    />

                  </div>

                  <div className="flex-1 rounded-3xl border border-cyan-400/15 bg-[#0B1118]/90 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,.18)]">

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <h3 className="text-3xl font-bold text-cyan-300">
                        {item.title}
                      </h3>

                      <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                        {item.status}
                      </span>

                    </div>

                    <p className="mt-6 text-lg leading-9 text-zinc-400">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}