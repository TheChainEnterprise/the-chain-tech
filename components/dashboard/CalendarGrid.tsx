"use client";

import CalendarDay from "./CalendarDay";

import { Booking } from "@/lib/bookings";

type Props = {
  bookings: Booking[];
};

export default function CalendarGrid({
  bookings,
}: Props) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const weekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          July 2026
        </h2>

        <div className="flex gap-3">

          <button className="rounded-xl border border-cyan-400/20 px-4 py-2 text-white transition hover:bg-cyan-400 hover:text-black">
            ←
          </button>

          <button className="rounded-xl border border-cyan-400/20 px-4 py-2 text-white transition hover:bg-cyan-400 hover:text-black">
            →
          </button>

        </div>

      </div>

      <div className="grid grid-cols-7 gap-4">

        {weekDays.map((day) => (
          <div
            key={day}
            className="pb-2 text-center font-semibold text-cyan-300"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const dayBookings = bookings.filter((booking) => {
            const bookingDay = Number(
              booking.date.split("-")[2]
            );

            return bookingDay === day;
          });

          return (
            <CalendarDay
              key={day}
              day={day}
              bookings={dayBookings}
            />
          );
        })}

      </div>

    </div>
  );
}