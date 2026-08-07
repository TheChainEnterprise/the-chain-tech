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
  const [selectMode, setSelectMode] = useState(false);
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  function toggleChecked(id: number) {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

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

  async function handleBulkDelete() {
    if (checkedIds.size === 0) return;
    const confirmed = window.confirm(`Delete ${checkedIds.size} lead(s)? This cannot be undone.`);
    if (!confirmed) return;

    try {
      const response = await fetch(`${API}/api/leads/bulk-delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-tenant-id": TENANT_ID },
        body: JSON.stringify({ ids: Array.from(checkedIds) }),
      });

      if (!response.ok) throw new Error("Bulk delete failed");

      setLeads((prev) => prev.filter((lead) => !checkedIds.has(lead.id)));
      setCheckedIds(new Set());
      setSelectMode(false);
    } catch (err) {
      console.error(err);
      alert("Error deleting leads. Check console.");
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setSelectMode((v) => !v);
            setCheckedIds(new Set());
          }}
          className="rounded-xl border border-cyan-400/20 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          {selectMode ? "Cancel" : "Select"}
        </button>

        {selectMode && (
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setCheckedIds(
                  checkedIds.size === leads.length ? new Set() : new Set(leads.map((l) => l.id))
                )
              }
              className="text-sm font-semibold text-cyan-300 hover:underline"
            >
              {checkedIds.size === leads.length && leads.length > 0 ? "Deselect all" : "Select all"}
            </button>
            <button
              onClick={handleBulkDelete}
              disabled={checkedIds.size === 0}
              className="rounded-xl bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/20 disabled:opacity-40"
            >
              Delete {checkedIds.size > 0 ? `(${checkedIds.size})` : ""}
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0B1118]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-cyan-400/10 bg-[#0F1620] text-left">
              <tr>
                {selectMode && <th className="px-6 py-5"></th>}
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
                  selectMode={selectMode}
                  checked={checkedIds.has(lead.id)}
                  onToggleCheck={() => toggleChecked(lead.id)}
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