"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
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

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-[8rem] font-black leading-none text-cyan-300 md:text-[12rem]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-4 text-4xl font-bold"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 mt-6 max-w-2xl text-xl leading-9 text-zinc-400"
          >
            The page you're looking for doesn't exist, has been moved,
            or the URL may be incorrect.
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
              Book Demo
            </Link>
          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}