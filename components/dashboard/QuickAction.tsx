"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QuickActionProps {
  title: string;
  description: string;
  href: string;
}

export default function QuickAction({
  title,
  description,
  href,
}: QuickActionProps) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400 hover:bg-[#101722]"
    >
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0 flex-1">

          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {description}
          </p>

        </div>

        <ArrowRight
          size={22}
          className="mt-1 shrink-0 transition group-hover:translate-x-1"
        />

      </div>
    </Link>
  );
}