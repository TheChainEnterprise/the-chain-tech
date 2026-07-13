"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[950px] w-[950px] rounded-full bg-cyan-400/15 blur-[230px]"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Image
          src="/images/transparent_logo.png"
          alt="The Chain Technologies"
          width={340}
          height={340}
          priority
          className="-mb-8 drop-shadow-[0_0_90px_rgba(121,247,255,.65)]"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative z-10 text-center text-7xl font-black tracking-tight"
      >
        THE CHAIN
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mt-2 text-xl uppercase tracking-[0.45em] text-cyan-300"
      >
        Technologies
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="relative z-10 mt-8 max-w-3xl text-center text-xl leading-9 text-zinc-400"
      >
        Building autonomous business intelligence that negotiates,
        communicates and executes on behalf of businesses.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-5"
      >
        <a
          href="#technologies"
          className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
        >
          Explore Technologies
        </a>

        <button
          onClick={() => {
            alert("Button works!");
            window.dispatchEvent(new Event("open-val-chat"));
          }}
          className="rounded-full border border-cyan-400 px-8 py-4 font-semibold transition duration-300 hover:bg-cyan-400 hover:text-black"
        >
          Try Val Live
        </button>

      </motion.div>

    </section>
  );
}