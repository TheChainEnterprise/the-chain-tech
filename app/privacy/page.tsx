"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05070A] text-white">

      <section className="relative overflow-hidden border-b border-cyan-400/10 py-28">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[240px]"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-8">

          <h1 className="text-center text-7xl font-black">
            Privacy Policy
          </h1>

          <div className="mt-20 space-y-12 text-lg leading-9 text-zinc-400">

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Information We Collect
              </h2>

              <p>
                We collect information that you voluntarily provide when
                requesting demonstrations, contacting us or using our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                How We Use Information
              </h2>

              <p>
                Your information is used only to communicate with you,
                provide services, improve our AI systems and deliver customer
                support.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Data Security
              </h2>

              <p>
                We use industry standard security practices to protect customer
                information and continuously improve our infrastructure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Contact
              </h2>

              <p>
                Questions regarding privacy can be sent to
                <span className="text-cyan-300">
                  {" "}
                  info@thechain.tech
                </span>
              </p>
            </section>

          </div>

        </div>

      </section>

    </main>
  );
}