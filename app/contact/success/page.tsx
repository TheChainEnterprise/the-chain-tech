"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactSuccessPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070A] pt-20 text-white">

        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-8 text-center">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute h-[900px] w-[900px] rounded-full bg-cyan-400 blur-[240px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <CheckCircle2
              size={120}
              className="mx-auto text-cyan-300"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-8 text-6xl font-black"
          >
            Message Sent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
          >
            Thank you for contacting The Chain Technologies.
            <br />
            Our team will review your message and get back to you as soon as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="relative z-10 mt-12 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/"
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Return Home
            </Link>

            <Link
              href="/book-demo"
              className="rounded-full border border-cyan-400 px-8 py-4 font-semibold transition hover:bg-cyan-400 hover:text-black"
            >
              Book a Demo
            </Link>
          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}