"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Build autonomous business intelligence that eliminates repetitive work, improves customer experience and gives every company access to an intelligent digital workforce.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A future where AI communicates, negotiates, executes business operations and manages entire organizations alongside humans.",
  },
  {
    icon: Rocket,
    title: "Long-Term Goal",
    text: "Become the infrastructure layer powering autonomous businesses worldwide through The Chain ecosystem.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[260px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-black"
        >
          About The Chain
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-5xl text-center text-2xl leading-10 text-zinc-400"
        >
          We believe every business should have access to an intelligent
          workforce capable of communicating, negotiating, making decisions
          and executing work autonomously.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-zinc-500"
        >
          Today, we begin with Val — an AI Negotiating Receptionist.
          Tomorrow, we continue building the technologies that will power
          autonomous companies around the world.
        </motion.p>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
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
                className="group rounded-3xl border border-cyan-400/15 bg-[#0B1118]/90 p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,.18)]"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 transition group-hover:bg-cyan-400/20">

                  <Icon
                    size={34}
                    className="text-cyan-300 transition group-hover:scale-110"
                  />

                </div>

                <h3 className="text-3xl font-bold text-cyan-300">
                  {card.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-zinc-400">
                  {card.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}