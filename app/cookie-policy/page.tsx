"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070A] pt-20 text-white">

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
              Cookie Policy
            </h1>

            <div className="mt-20 space-y-12 text-lg leading-9 text-zinc-400">

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  What Are Cookies?
                </h2>

                <p>
                  Cookies are small text files stored on your device that help
                  websites remember your preferences, improve functionality,
                  analyze traffic, and enhance your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  How We Use Cookies
                </h2>

                <p>
                  The Chain Technologies uses cookies to operate our website,
                  improve performance, understand visitor behavior, and measure
                  the effectiveness of our services and marketing campaigns.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Types of Cookies
                </h2>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong className="text-white">Essential Cookies</strong>
                    {" "}– Required for the website to function correctly.
                  </li>

                  <li>
                    <strong className="text-white">Analytics Cookies</strong>
                    {" "}– Help us understand how visitors use our website.
                  </li>

                  <li>
                    <strong className="text-white">Marketing Cookies</strong>
                    {" "}– Used to measure advertising performance and improve
                    future campaigns.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Managing Cookies
                </h2>

                <p>
                  You may accept or decline non-essential cookies using our
                  cookie banner. Most browsers also allow you to delete or block
                  cookies through their settings.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Contact
                </h2>

                <p>
                  Questions regarding our Cookie Policy can be sent to{" "}
                  <span className="text-cyan-300">
                    info@thechain.tech
                  </span>
                </p>
              </section>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}