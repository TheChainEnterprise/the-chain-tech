"use client";

import { Bell, Search } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-cyan-400/10 bg-[#05070A] px-8 py-6">

      <div>

        <h1 className="text-3xl font-black">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome back, Andres.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-2xl border border-cyan-400/10 bg-[#0B1118] py-3 pl-11 pr-4 outline-none transition focus:border-cyan-400"
          />

        </div>

        <button
          aria-label="Notifications"
          className="rounded-2xl border border-cyan-400/10 bg-[#0B1118] p-3 transition hover:border-cyan-400"
        >
          <Bell size={20} />
        </button>

        <SignOutButton>
          <button
            className="rounded-2xl border border-red-500/20 bg-[#0B1118] px-5 py-3 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-300"
          >
            Logout
          </button>
        </SignOutButton>

      </div>

    </header>
  );
}