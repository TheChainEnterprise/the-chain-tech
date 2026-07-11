"use client";

import { Mail, ArrowUp, Link, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#030508]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-8 py-20">

        <h2 className="text-4xl font-black tracking-tight">
          THE CHAIN
        </h2>

        <p className="mt-3 text-xl uppercase tracking-[0.45em] text-cyan-300">
          Technologies
        </p>

        {/* Navigation */}

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-zinc-400">

          <a
            href="/"
            className="transition hover:text-cyan-300"
          >
            Home
          </a>

          <a
            href="/pricing"
            className="transition hover:text-cyan-300"
          >
            Pricing
          </a>

          <a
            href="/book-demo"
            className="transition hover:text-cyan-300"
          >
            Book Demo
          </a>

          <a
            href="/faq"
            className="transition hover:text-cyan-300"
          >
            FAQ
          </a>

          <a
            href="/contact"
            className="transition hover:text-cyan-300"
          >
            Contact
          </a>

          <a
            href="/privacy"
            className="transition hover:text-cyan-300"
          >
            Privacy
          </a>

          <a
            href="/terms"
            className="transition hover:text-cyan-300"
          >
            Terms
          </a>

        </div>

        {/* Contact */}

<div className="mt-10 flex flex-wrap justify-center gap-8">

  <a
    href="mailto:info@thechain.tech"
    className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#0B1118]/80 px-6 py-3 transition hover:border-cyan-400 hover:bg-[#101925]"
  >
    <Mail
      size={18}
      className="text-cyan-300"
    />

    info@thechain.tech

  </a>

  <a
    href="https://wa.me/61468491094"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#0B1118]/80 px-6 py-3 transition hover:border-cyan-400 hover:bg-[#101925]"
  >
    <span className="text-cyan-300 text-lg">💬</span>

    WhatsApp

  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61591914086139"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#0B1118]/80 px-6 py-3 transition hover:border-cyan-400 hover:bg-[#101925]"
  >
    <Link
      size={18}
      className="text-cyan-300"
    />

    Facebook

  </a>

  <a
    href="https://www.instagram.com/thechaintechnologies/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#0B1118]/80 px-6 py-3 transition hover:border-cyan-400 hover:bg-[#101925]"
  >
    <Globe
      size={18}
      className="text-cyan-300"
    />

    Instagram

  </a>

</div>
        {/* Divider */}

        <div className="mt-16 h-px w-full bg-cyan-400/10" />

        {/* Bottom */}

        <div className="mt-8 flex w-full flex-col items-center justify-between gap-6 text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} The Chain Technologies.
            All rights reserved.
          </p>

          <a
            href="/"
            className="flex items-center gap-2 rounded-full border border-cyan-400/20 px-5 py-2 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <ArrowUp size={16} />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}