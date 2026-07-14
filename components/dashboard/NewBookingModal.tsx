"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Booking } from "@/lib/bookings";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (booking: Booking) => void;
};

export default function NewBookingModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [staff, setStaff] = useState("Val");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  if (!open) return null;

  function resetForm() {
    setCustomer("");
    setService("");
    setDate("");
    setTime("");
    setStaff("Val");
    setPhone("");
    setEmail("");
    setNotes("");
  }

  function handleSave() {
    if (
      !customer.trim() ||
      !service.trim() ||
      !date ||
      !time
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const booking: Booking = {
      id: Date.now(),
      customer,
      service,
      date,
      time,
      staff,
      phone,
      email,
      notes,
      status: "Pending",
    };

    onSave(booking);

    resetForm();

    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-cyan-400/20 bg-[#0B1118] p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            New Booking
          </h2>

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            <X className="h-6 w-6 text-white" />
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <input
            placeholder="Customer *"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Service *"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Assigned Staff"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-2 rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <textarea
            rows={5}
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="col-span-2 rounded-xl border border-cyan-400/20 bg-[#05070A] px-5 py-4 text-white outline-none focus:border-cyan-400"
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
            Save Booking
          </button>

        </div>

      </div>

    </div>
  );
}