"use client";

import { useState } from "react";

import LeadRow from "./LeadRow";
import LeadDetails from "./LeadDetails";
import NewLeadModal from "./NewLeadModal";

import { Lead } from "@/lib/dummyData";

type Props = {
  leads: Lead[];
  setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
};

export default function LeadTable({
  leads,
  setLeads,
}: Props) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  const [openEditModal, setOpenEditModal] = useState(false);

  function handleDeleteLead() {
    if (!selectedLead) return;

    const confirmed = window.confirm(
      `Delete "${selectedLead.name}"?`
    );

    if (!confirmed) return;

    setLeads((prev) =>
      prev.filter((lead) => lead.id !== selectedLead.id)
    );

    setSelectedLead(null);
  }

  function handleUpdateLead(updatedLead: Lead) {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === updatedLead.id
          ? updatedLead
          : lead
      )
    );

    setSelectedLead(updatedLead);

    setEditingLead(null);

    setOpenEditModal(false);
  }

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0B1118]">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="border-b border-cyan-400/10 bg-[#0F1620] text-left">

              <tr>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Name
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Company
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Email
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Phone
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Status
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Assigned
                </th>

                <th className="px-6 py-5 font-semibold text-cyan-300">
                  Created
                </th>

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
            setEditingLead(selectedLead);
            setOpenEditModal(true);
          }}
        />
      )}

      <NewLeadModal
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
          setEditingLead(null);
        }}
        onSave={handleUpdateLead}
        editingLead={editingLead}
      />
    </>
  );
}