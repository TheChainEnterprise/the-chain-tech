"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Network,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    title: "Val",
    icon: Bot,
    description:
      "An AI Negotiating Receptionist capable of answering calls, qualifying leads, negotiating with customers, booking appointments and becoming the intelligent front desk for any business.",
  },
  {
    title: "Negotiation Engine",
    icon: BrainCircuit,
    description:
      "The intelligence behind Val. A decision engine that understands business objectives, pricing strategies, customer psychology and autonomous negotiations.",
  },
  {
    title: "Ownership Protocol",
    icon: ShieldCheck,
    description:
      "A secure ownership verification infrastructure designed for valuable assets, providing transparent provenance and trusted digital ownership.",
  },
  {
    title: "Marketplace",
    icon: Network,
    description:
      "A future AI-powered marketplace where autonomous agents negotiate transactions while ownership is verified through The Chain Protocol.",
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#04070B] py-36"
    >
      {/* Background Glow */}
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
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[260px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-6xl font-black"
        >
          Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 mb-24 max-w-4xl text-center text-2xl leading-10 text-zinc-400"
        >
          We are building an ecosystem of autonomous AI capable of communicating,
          negotiating, executing business operations and verifying ownership
          through intelligent infrastructure.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {technologies.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-cyan-500/20 bg-[#0B1118]/90 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,.25)]"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 transition duration-300 group-hover:bg-cyan-400/20">

                  <Icon
                    size={34}
                    className="text-cyan-300 transition duration-300 group-hover:scale-110"
                  />

                </div>

                <h3 className="mb-5 text-3xl font-bold text-cyan-300">
                  {tech.title}
                </h3>

                <p className="leading-8 text-zinc-400">
                  {tech.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}