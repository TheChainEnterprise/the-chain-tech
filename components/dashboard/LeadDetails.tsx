"use client";

import { X } from "lucide-react";
import { Lead } from "@/lib/dummyData";

type LeadDetailsProps = {
  lead: Lead;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function LeadDetails({
  lead,
  onClose,
  onEdit,
  onDelete,
}: LeadDetailsProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-cyan-400/20 bg-[#0B1118] shadow-2xl">
        <div className="flex items-center justify-between border-b border-cyan-400/10 p-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {lead.name}
            </h2>

            <p className="mt-2 text-cyan-300">
              {lead.company}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-cyan-400/20 p-3 transition hover:bg-cyan-400 hover:text-black"
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-8 p-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">
              Contact Information
            </h3>

            <div className="space-y-3 text-zinc-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                {lead.email}
              </p>

              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                {lead.phone}
              </p>

              <p>
                <span className="font-semibold text-white">Company:</span>{" "}
                {lead.company}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">
              Lead Information
            </h3>

            <div className="space-y-3 text-zinc-300">
              <p>
                <span className="font-semibold text-white">Status:</span>{" "}
                {lead.status}
              </p>

              <p>
                <span className="font-semibold text-white">Source:</span>{" "}
                {lead.source}
              </p>

              <p>
                <span className="font-semibold text-white">Assigned:</span>{" "}
                {lead.assigned}
              </p>

              <p>
                <span className="font-semibold text-white">Created:</span>{" "}
                {lead.created}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">
              Notes
            </h3>

            <div className="rounded-2xl border border-cyan-400/10 bg-[#05070A] p-5 text-zinc-300">
              {lead.notes}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onDelete}
              className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
            >
              Delete
            </button>

            <button
              onClick={onEdit}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Edit
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}