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

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0B1118]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-cyan-400/10 bg-[#0F1620] text-left">
              <tr>
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