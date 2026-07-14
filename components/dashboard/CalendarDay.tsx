"use client";

import { Booking } from "@/lib/bookings";

type Props = {
  day: number;
  bookings: Booking[];
};

export default function CalendarDay({
  day,
  bookings,
}: Props) {
  return (
    <div className="min-h-[160px] rounded-2xl border border-cyan-400/10 bg-[#0B1118] p-3">

      <div className="mb-3 text-lg font-bold text-white">
        {day}
      </div>

      <div className="space-y-2">

        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-xl bg-cyan-400/10 p-2 text-sm"
          >
            <p className="font-semibold text-cyan-300">
              {booking.time}
            </p>

            <p className="text-white">
              {booking.customer}
            </p>

            <p className="text-xs text-zinc-400">
              {booking.service}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}