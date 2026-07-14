"use client";

import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400/30">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-wider text-zinc-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
          {icon}
        </div>

      </div>

    </div>
  );
}