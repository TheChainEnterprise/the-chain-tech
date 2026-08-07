"use client";

import { useState } from "react";

import BookingRow from "./BookingRow";
import BookingDetails from "./BookingDetails";

import { Booking } from "@/lib/bookings";

const API =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const TENANT_ID = "the_chain_technologies";

type Props = {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  onEdit: (booking: Booking) => void; // Added prop
};

export default function BookingTable({
  bookings,
  setBookings,
  onEdit, // Added prop
}: Props) {
  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);
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

  async function handleDeleteBooking() {
    if (!selectedBooking) return;

    const confirmed = window.confirm(
      `Delete booking for "${selectedBooking.customer}"?`
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `${API}/api/bookings/${selectedBooking.id}`,
        {
          method: "DELETE",
          headers: {
            "x-tenant-id": TENANT_ID,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      setBookings((prev) =>
        prev.filter(
          (booking) => booking.id !== selectedBooking.id
        )
      );

      setSelectedBooking(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete booking.");
    }
  }

  async function handleBulkDelete() {
    if (checkedIds.size === 0) return;
    const confirmed = window.confirm(`Delete ${checkedIds.size} booking(s)? This cannot be undone.`);
    if (!confirmed) return;

    try {
      const response = await fetch(`${API}/api/bookings/bulk-delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-tenant-id": TENANT_ID },
        body: JSON.stringify({ ids: Array.from(checkedIds) }),
      });

      if (!response.ok) throw new Error("Bulk delete failed");

      setBookings((prev) => prev.filter((b) => !checkedIds.has(b.id)));
      setCheckedIds(new Set());
      setSelectMode(false);
    } catch (err) {
      console.error(err);
      alert("Failed to delete bookings.");
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
                  checkedIds.size === bookings.length ? new Set() : new Set(bookings.map((b) => b.id))
                )
              }
              className="text-sm font-semibold text-cyan-300 hover:underline"
            >
              {checkedIds.size === bookings.length && bookings.length > 0 ? "Deselect all" : "Select all"}
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
                <th className="px-6 py-5 font-semibold text-cyan-300">Customer</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Service</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Date</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Time</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Staff</th>
                <th className="px-6 py-5 font-semibold text-cyan-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingRow
                  key={booking.id}
                  booking={booking}
                  onClick={() => setSelectedBooking(booking)}
                  selectMode={selectMode}
                  checked={checkedIds.has(booking.id)}
                  onToggleCheck={() => toggleChecked(booking.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedBooking && (
        <BookingDetails
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onDelete={handleDeleteBooking}
          onEdit={() => {
            onEdit(selectedBooking); // Trigger the edit flow
            setSelectedBooking(null); // Close the details modal
          }}
        />
      )}
    </>
  );
}