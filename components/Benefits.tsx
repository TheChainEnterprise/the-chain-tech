"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Clock3,
  CalendarCheck,
  Languages,
  BrainCircuit,
  DollarSign,
  ShieldCheck,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: PhoneCall,
    title: "Never Miss A Call",
    text: "Every incoming customer receives an instant response, day or night.",
  },
  {
    icon: Clock3,
    title: "Available 24/7",
    text: "No weekends, holidays or sick days. Val is always available.",
  },
  {
    icon: CalendarCheck,
    title: "Books Appointments",
    text: "Schedules meetings, consultations and viewings automatically.",
  },
  {
    icon: BrainCircuit,
    title: "Negotiates",
    text: "Qualifies leads and negotiates according to your business rules.",
  },
  {
    icon: Languages,
    title: "Multi-Language",
    text: "Communicates naturally with customers in multiple languages.",
  },
  {
    icon: DollarSign,
    title: "Lower Costs",
    text: "Reduce staffing costs while increasing customer responsiveness.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "Consistent, accurate and professional responses every single time.",
  },
  {
    icon: Zap,
    title: "Instant Replies",
    text: "Responds within seconds, increasing customer satisfaction and conversion.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#05070A] py-36"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[260px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-black"
        >
          Why Businesses Choose Val
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-center text-2xl leading-10 text-zinc-400"
        >
          Built to replace repetitive front-desk work while improving customer
          experience, increasing efficiency and helping businesses grow.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
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
                className="group rounded-3xl border border-cyan-400/15 bg-[#0B1118]/90 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,.18)]"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 transition duration-300 group-hover:bg-cyan-400/20">

                  <Icon
                    size={34}
                    className="text-cyan-300 transition duration-300 group-hover:scale-110"
                  />

                </div>

                <h3 className="text-2xl font-bold text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}