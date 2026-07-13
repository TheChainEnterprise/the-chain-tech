"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              Terms of Service
            </h1>

            <div className="mt-20 space-y-12 text-lg leading-9 text-zinc-400">

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Acceptance of Terms
                </h2>

                <p>
                  By using The Chain Technologies website or services, you
                  agree to these Terms of Service and all applicable laws.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Services
                </h2>

                <p>
                  The Chain Technologies provides AI-powered automation,
                  communication, negotiation, and business intelligence
                  solutions. Service availability and features may evolve
                  over time.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Customer Responsibilities
                </h2>

                <p>
                  Customers are responsible for providing accurate
                  information, complying with applicable laws, and using
                  our services in a lawful manner.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Limitation of Liability
                </h2>

                <p>
                  To the maximum extent permitted by law, The Chain
                  Technologies shall not be liable for indirect or
                  consequential damages arising from the use of our
                  services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Changes
                </h2>

                <p>
                  We may update these Terms of Service as our products
                  evolve. Continued use of our services constitutes
                  acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Contact
                </h2>

                <p>
                  Questions regarding these terms can be directed to{" "}
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