"use client";

import { X } from "lucide-react";
import { Booking } from "@/lib/bookings";

type Props = {
  booking: Booking;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function BookingDetails({
  booking,
  onClose,
  onEdit,
  onDelete,
}: Props) {
  function statusColor() {
    switch (booking.status) {
      case "Confirmed":
        return "text-green-400";

      case "Pending":
        return "text-yellow-300";

      case "Completed":
        return "text-cyan-300";

      case "Cancelled":
        return "text-red-400";

      default:
        return "text-white";
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">

      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-cyan-400/20 bg-[#0B1118] shadow-2xl">

        <div className="flex items-center justify-between border-b border-cyan-400/10 p-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {booking.customer}
            </h2>

            <p className="mt-2 text-cyan-300">
              {booking.service}
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
              Customer
            </h3>

            <div className="space-y-3 text-zinc-300">

              <p>
                <span className="font-semibold text-white">
                  Email:
                </span>{" "}
                {booking.email}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Phone:
                </span>{" "}
                {booking.phone}
              </p>

            </div>

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold text-cyan-300">
              Appointment
            </h3>

            <div className="space-y-3 text-zinc-300">

              <p>
                <span className="font-semibold text-white">
                  Service:
                </span>{" "}
                {booking.service}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Date:
                </span>{" "}
                {booking.date}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Time:
                </span>{" "}
                {booking.time}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Staff:
                </span>{" "}
                {booking.staff}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Status:
                </span>{" "}
                <span className={statusColor()}>
                  {booking.status}
                </span>
              </p>

            </div>

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold text-cyan-300">
              Notes
            </h3>

            <div className="rounded-2xl border border-cyan-400/10 bg-[#05070A] p-5 text-zinc-300">
              {booking.notes}
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