"use client";

import { useState } from "react";

import LeadRow from "./LeadRow";
import LeadDetails from "./LeadDetails";

import { Lead } from "@/lib/dummyData";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

type Props = {
  leads: Lead[];
  setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
  onEdit: (lead: Lead) => void;
};

export default function LeadTable({ leads, setLeads, onEdit }: Props) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  async function handleDeleteLead() {
    if (!selectedLead) return;

    const confirmed = window.confirm(`Delete lead "${selectedLead.name}"?`);
    if (!confirmed) return;

    try {
      const response = await fetch(`${API}/api/leads/${selectedLead.id}`, {
        method: "DELETE",
        headers: { "x-tenant-id": TENANT_ID },
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Delete failed:", errText);
        throw new Error("Failed to delete lead");
      }

      setLeads((prev) => prev.filter((lead) => lead.id !== selectedLead.id));
      setSelectedLead(null);
    } catch (err) {
      console.error(err);
      alert("Error deleting lead. Check console.");
    }
  }

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0B1118]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-cyan-400/10 bg-[#0F1620] text-left">
              <tr>
                <th className="px-6 py-5 font-semibold text-cyan-300">Name</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Company</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Email</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Phone</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Status</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Assigned</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <LeadRow 
                  key={lead.id} 
                  lead={lead} 
                  onClick={() => setSelectedLead(lead)} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedLead && (
        <LeadDetails
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onDelete={handleDeleteLead}
          onEdit={() => {
            onEdit(selectedLead);
            setSelectedLead(null);
          }}
        />
      )}
    </>
  );
}