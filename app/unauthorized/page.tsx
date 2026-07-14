"use client";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070A] px-6">
      <div className="w-full max-w-lg rounded-3xl border border-red-500/20 bg-[#0B1118] p-10 text-center">

        <h1 className="text-3xl font-bold text-white">
          Access Denied
        </h1>

        <p className="mt-4 text-zinc-400">
          This account is not authorized to access The Chain Technologies dashboard.
        </p>

        <div className="mt-8 flex flex-col gap-4">

          <SignOutButton>
            <button className="w-full rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600">
              Sign Out
            </button>
          </SignOutButton>

          <Link
            href="/"
            className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}