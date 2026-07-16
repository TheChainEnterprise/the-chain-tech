"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingTable from "@/components/dashboard/BookingTable";
import NewBookingModal from "@/components/dashboard/NewBookingModal";
import { Booking } from "@/lib/bookings";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadBookings() {
    try {
      const response = await fetch(`${API}/api/bookings`, {
        headers: { "x-tenant-id": TENANT_ID },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to load");
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function handleSaveBooking(booking: Booking) {
    const isEditing = !!editingBooking;
    const url = isEditing ? `${API}/api/bookings/${booking.id}` : `${API}/api/bookings`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json", 
          "x-tenant-id": TENANT_ID 
        },
        body: JSON.stringify(booking),
      });

      if (!response.ok) throw new Error("Failed to save");

      await loadBookings();
      setOpenModal(false);
      setEditingBooking(null);
    } catch (err) {
      console.error(err);
      alert("Failed to save booking.");
    }
  }

  const today = new Date().toISOString().split("T")[0];
  const todaysBookings = bookings.filter((b) => b.date === today).length;
  const upcoming = bookings.filter((b) => b.status === "Pending" || b.status === "Confirmed").length;
  const completed = bookings.filter((b) => b.status === "Completed").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;

  return (
    <DashboardLayout>
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black text-white">Bookings</h1>
            <p className="mt-3 text-lg text-zinc-400">
              Manage appointments scheduled by Val.
            </p>
          </div>
          <button
            onClick={() => {
              setEditingBooking(null);
              setOpenModal(true);
            }}
            className="rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            + New Booking
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">Today's Bookings</p>
            <h2 className="mt-2 text-4xl font-bold text-white">
              {loading ? "..." : todaysBookings}
            </h2>
          </div>
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">Upcoming</p>
            <h2 className="mt-2 text-4xl font-bold text-cyan-300">{upcoming}</h2>
          </div>
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">Completed</p>
            <h2 className="mt-2 text-4xl font-bold text-green-400">{completed}</h2>
          </div>
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">Cancelled</p>
            <h2 className="mt-2 text-4xl font-bold text-red-400">{cancelled}</h2>
          </div>
        </div>

        <BookingTable 
          bookings={bookings} 
          setBookings={setBookings} 
          onEdit={(booking) => {
            setEditingBooking(booking);
            setOpenModal(true);
          }}
        />

        <NewBookingModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setEditingBooking(null);
          }}
          onSave={handleSaveBooking}
          initialData={editingBooking}
        />
      </div>
    </DashboardLayout>
  );
}