"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import LeadTable from "@/components/dashboard/LeadTable";
import NewLeadModal from "@/components/dashboard/NewLeadModal";

import { leads as initialLeads, Lead } from "@/lib/dummyData";

export default function CRMPage() {
  const [openModal, setOpenModal] = useState(false);

  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  function handleSaveLead(newLead: Lead) {
    setLeads((prev) => [newLead, ...prev]);
    setOpenModal(false);
  }

  const qualified = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const booked = leads.filter(
    (lead) => lead.status === "Booked"
  ).length;

  const won = leads.filter(
    (lead) => lead.status === "Won"
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-10">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black text-white">
              CRM
            </h1>

            <p className="mt-3 text-lg text-zinc-400">
              Manage leads, customers and your sales pipeline.
            </p>

          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            + New Lead
          </button>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

            <p className="text-zinc-400">
              Total Leads
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {leads.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

            <p className="text-zinc-400">
              Qualified
            </p>

            <h2 className="mt-2 text-4xl font-bold text-cyan-300">
              {qualified}
            </h2>

          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

            <p className="text-zinc-400">
              Booked
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-400">
              {booked}
            </h2>

          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

            <p className="text-zinc-400">
              Won
            </p>

            <h2 className="mt-2 text-4xl font-bold text-yellow-300">
              {won}
            </h2>

          </div>

        </div>

        <LeadTable
          leads={leads}
          setLeads={setLeads}
        />

        <NewLeadModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSave={handleSaveLead}
          editingLead={null}
        />

      </div>
    </DashboardLayout>
  );
}