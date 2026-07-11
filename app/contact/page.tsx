"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, User, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070A] pt-20 text-white">

        {/* Hero */}

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

          <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">

            <h1 className="text-7xl font-black">
              Contact Us
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-2xl leading-10 text-zinc-400">
              We'd love to hear about your business and show you how Val can automate your customer communication.
            </p>

          </div>

        </section>

        {/* Contact Form */}

        <section className="py-24">

          <div className="mx-auto max-w-4xl px-8">

            <form className="space-y-8">

              <div className="grid gap-6 md:grid-cols-2">

                <div className="relative">

                  <User
                    size={20}
                    className="absolute left-5 top-5 text-cyan-300"
                  />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] py-5 pl-14 pr-5 outline-none transition focus:border-cyan-400"
                  />

                </div>

                <div className="relative">

                  <Building2
                    size={20}
                    className="absolute left-5 top-5 text-cyan-300"
                  />

                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] py-5 pl-14 pr-5 outline-none transition focus:border-cyan-400"
                  />

                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="relative">

                  <Mail
                    size={20}
                    className="absolute left-5 top-5 text-cyan-300"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] py-5 pl-14 pr-5 outline-none transition focus:border-cyan-400"
                  />

                </div>

                <div className="relative">

                  <Phone
                    size={20}
                    className="absolute left-5 top-5 text-cyan-300"
                  />

                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] py-5 pl-14 pr-5 outline-none transition focus:border-cyan-400"
                  />

                </div>

              </div>

              <textarea
                rows={8}
                placeholder="Tell us how we can help..."
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#0B1118] p-6 outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 py-5 text-xl font-bold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                <Send size={22} />
                Send Message
              </button>

            </form>

            <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-[#0B1118] p-10">

              <h2 className="text-3xl font-bold text-cyan-300">
                Contact Information
              </h2>

              <div className="mt-8 space-y-5 text-lg text-zinc-400">

                <p>
                  📧 info@thechain.tech
                </p>

                <p>
                  🌍 Worldwide Remote Deployment
                </p>

                <p>
                  🤖 AI Negotiating Receptionist Solutions
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}