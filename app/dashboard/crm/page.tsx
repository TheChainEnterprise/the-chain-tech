"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import LeadTable from "@/components/dashboard/LeadTable";
import NewLeadModal from "@/components/dashboard/NewLeadModal";
import { Lead } from "@/lib/dummyData";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

export default function CRMPage() {
  const [openModal, setOpenModal] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    try {
      const response = await fetch(`${API}/api/leads`, {
        headers: { "x-tenant-id": TENANT_ID },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to load");
      const data = await response.json();

      // Robust mapping: handle potentially malformed data
      const mapped: Lead[] = data.map((lead: any) => ({
        id: lead.id || Date.now(),
        name: lead.name || lead.fullName || "Unknown",
        company: lead.company || "",
        email: lead.email || "",
        phone: lead.phone || "",
        status: lead.status || "New",
        source: lead.source || "Manual",
        created: lead.created || new Date().toISOString().slice(0, 10),
        assigned: lead.assigned || "Andres",
        notes: lead.notes || "",
      }));
      setLeads(mapped);
    } catch (err) {
      console.error(err);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadLeads(); }, []);

  async function handleSaveLead(lead: Lead) {
    const isEditing = !!editingLead;
    const url = isEditing ? `${API}/api/leads/${lead.id}` : `${API}/api/leads`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "x-tenant-id": TENANT_ID },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error("Failed to save");
      await loadLeads();
      setOpenModal(false);
      setEditingLead(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save lead.");
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-black text-white">CRM</h1>
          <button onClick={() => { setEditingLead(null); setOpenModal(true); }} className="rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300">
            + New Lead
          </button>
        </div>
        <LeadTable leads={leads} setLeads={setLeads} onEdit={(lead) => { setEditingLead(lead); setOpenModal(true); }} />
        <NewLeadModal open={openModal} onClose={() => { setOpenModal(false); setEditingLead(null); }} onSave={handleSaveLead} editingLead={editingLead} />
      </div>
    </DashboardLayout>
  );
}