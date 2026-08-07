"use client";

import { Lead } from "@/lib/dummyData";

type LeadRowProps = {
  lead: Lead;
  onClick: () => void;
  selectMode?: boolean;
  checked?: boolean;
  onToggleCheck?: () => void;
};

export default function LeadRow({
  lead,
  onClick,
  selectMode = false,
  checked = false,
  onToggleCheck,
}: LeadRowProps) {
  const statusColors = {
    New: "bg-blue-500/20 text-blue-300",
    Contacted: "bg-yellow-500/20 text-yellow-300",
    Qualified: "bg-purple-500/20 text-purple-300",
    Booked: "bg-cyan-500/20 text-cyan-300",
    Won: "bg-green-500/20 text-green-300",
    Lost: "bg-red-500/20 text-red-300",
  };

  return (
    <tr
      onClick={() => (selectMode ? onToggleCheck?.() : onClick())}
      className="cursor-pointer border-b border-cyan-400/10 transition hover:bg-cyan-400/5"
    >
      {selectMode && (
        <td className="px-6 py-5">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggleCheck?.()}
            onClick={(e) => e.stopPropagation()}
            className="h-4 w-4 accent-cyan-400"
          />
        </td>
      )}

      <td className="px-6 py-5 font-semibold text-white">
        {lead.name}
      </td>

      <td className="px-6 py-5 text-zinc-400">
        {lead.company}
      </td>

      <td className="px-6 py-5 text-zinc-400">
        {lead.email}
      </td>

      <td className="px-6 py-5 text-zinc-400">
        {lead.phone}
      </td>

      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColors[lead.status]}`}
        >
          {lead.status}
        </span>
      </td>

      <td className="px-6 py-5 text-zinc-400">
        {lead.assigned}
      </td>

      <td className="px-6 py-5 text-zinc-500">
        {lead.created}
      </td>
    </tr>
  );
}