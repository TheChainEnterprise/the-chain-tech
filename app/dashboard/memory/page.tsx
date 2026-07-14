"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function MemoryPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <section>

          <h1 className="text-4xl font-black">
            Memory
          </h1>

          <p className="mt-2 text-zinc-400">
            View AI memory, customer context and stored conversation intelligence.
          </p>

        </section>


        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <h2 className="text-2xl font-bold">
            AI Memory System
          </h2>

          <p className="mt-4 text-zinc-400">
            Memory management will appear here when persistent customer memory
            is connected to the dashboard.
          </p>

        </section>


      </div>

    </DashboardLayout>
  );
}