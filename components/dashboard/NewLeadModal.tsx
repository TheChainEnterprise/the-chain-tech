"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Lead } from "@/lib/dummyData";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (lead: Lead) => void;
  editingLead?: Lead | null;
};

export default function NewLeadModal({
  open,
  onClose,
  onSave,
  editingLead,
}: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (editingLead) {
      setName(editingLead.name);
      setCompany(editingLead.company);
      setEmail(editingLead.email);
      setPhone(editingLead.phone);
      setNotes(editingLead.notes);
    } else {
      resetForm();
    }
  }, [editingLead, open]);

  if (!open) return null;

  function resetForm() {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setNotes("");
  }

  function handleSave() {
    if (!name.trim() || !email.trim()) {
      alert("Name and email are required.");
      return;
    }

    const lead: Lead = editingLead
      ? {
          ...editingLead,
          name,
          company,
          email,
          phone,
          notes,
        }
      : {
          id: Date.now(),
          name,
          company,
          email,
          phone,
          notes,
          status: "New",
          source: "Dashboard",
          assigned: "Andres",
          created: new Date().toISOString().split("T")[0],
        };

    onSave(lead);

    resetForm();

    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {editingLead ? "Edit Lead" : "New Lead"}
          </h2>

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="rounded-lg p-2 transition hover:bg-white/10"
          >
            <X className="h-6 w-6 text-white" />
          </button>

        </div>

        <div className="space-y-5">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <textarea
            rows={5}
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            {editingLead ? "Save Changes" : "Save Lead"}
          </button>

        </div>

      </div>
    </div>
  );
}