"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingTable from "@/components/dashboard/BookingTable";
import NewBookingModal from "@/components/dashboard/NewBookingModal";

import {
  bookings as initialBookings,
  Booking,
} from "@/lib/bookings";

export default function BookingsPage() {
  const [bookings, setBookings] =
    useState<Booking[]>(initialBookings);

  const [openModal, setOpenModal] = useState(false);

  function handleSaveBooking(newBooking: Booking) {
    setBookings((prev) => [newBooking, ...prev]);
    setOpenModal(false);
  }

  const today = new Date().toISOString().split("T")[0];

  const todaysBookings = bookings.filter(
    (booking) => booking.date === today
  ).length;

  const upcoming = bookings.filter(
    (booking) =>
      booking.status === "Pending" ||
      booking.status === "Confirmed"
  ).length;

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const cancelled = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-10">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black text-white">
              Bookings
            </h1>

            <p className="mt-3 text-lg text-zinc-400">
              Manage appointments scheduled by Val.
            </p>

          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            + New Booking
          </button>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">
              Today's Bookings
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {todaysBookings}
            </h2>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">
              Upcoming
            </p>

            <h2 className="mt-2 text-4xl font-bold text-cyan-300">
              {upcoming}
            </h2>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">
              Completed
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-400">
              {completed}
            </h2>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
            <p className="text-zinc-400">
              Cancelled
            </p>

            <h2 className="mt-2 text-4xl font-bold text-red-400">
              {cancelled}
            </h2>
          </div>

        </div>

        <BookingTable
          bookings={bookings}
          setBookings={setBookings}
        />

        <NewBookingModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSave={handleSaveBooking}
        />

      </div>
    </DashboardLayout>
  );
}