"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#05070A]">

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[900px] w-[900px] rounded-full bg-cyan-400 blur-[240px]"
      />

      <div className="relative z-10 flex flex-col items-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/images/transparent_logo.png"
            alt="The Chain Technologies"
            width={170}
            height={170}
            priority
            className="drop-shadow-[0_0_60px_rgba(34,211,238,0.45)]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="mt-10 text-3xl font-bold text-white"
        >
          Loading...
        </motion.h2>

        <motion.div
          animate={{
            scaleX: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-8 h-1 w-56 origin-center rounded-full bg-cyan-400"
        />

      </div>

    </main>
  );
}