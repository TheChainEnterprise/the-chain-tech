"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-500/10 bg-[#05070A]/80 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/transparent_logo.png"
            alt="The Chain"
            width={30}
            height={30}
            priority
          />

          <span className="text-xl font-bold tracking-[0.18em] text-cyan-300">
            THE CHAIN
          </span>
        </a>

        {/* Navigation */}

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">

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
            href="/#technologies"
            className="transition hover:text-cyan-300"
          >
            Technologies
          </a>

          <a
            href="/#products"
            className="transition hover:text-cyan-300"
          >
            Products
          </a>

          <a
            href="/#roadmap"
            className="transition hover:text-cyan-300"
          >
            Roadmap
          </a>

          <a
            href="/#about"
            className="transition hover:text-cyan-300"
          >
            About
          </a>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href="/dashboard"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Admin Login
          </a>

          <a
            href="/#talktoval"
            className="rounded-full border border-cyan-400 bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Talk to Val
          </a>

        </div>

      </nav>

    </header>
  );
}