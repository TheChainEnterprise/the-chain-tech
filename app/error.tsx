"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <AlertTriangle
              size={120}
              className="mx-auto text-cyan-300"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-8 text-6xl font-black"
          >
            Something Went Wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
          >
            An unexpected error occurred while loading this page.
            Please try again or return to the homepage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="relative z-10 mt-12 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={reset}
              className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="rounded-full border border-cyan-400 px-8 py-4 font-semibold transition hover:bg-cyan-400 hover:text-black"
            >
              Return Home
            </Link>
          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}