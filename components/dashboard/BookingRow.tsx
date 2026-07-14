"use client";

import { Booking } from "@/lib/bookings";

type Props = {
  booking: Booking;
  onClick: () => void;
};

export default function BookingRow({
  booking,
  onClick,
}: Props) {
  function statusColor() {
    switch (booking.status) {
      case "Confirmed":
        return "bg-green-500/20 text-green-400";

      case "Pending":
        return "bg-yellow-500/20 text-yellow-300";

      case "Completed":
        return "bg-cyan-500/20 text-cyan-300";

      case "Cancelled":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-zinc-700 text-white";
    }
  }

  return (
    <tr
      onClick={onClick}
      className="cursor-pointer border-b border-cyan-400/5 transition hover:bg-cyan-400/5"
    >
      <td className="px-6 py-5 font-medium text-white">
        {booking.customer}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {booking.service}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {booking.date}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {booking.time}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {booking.staff}
      </td>

      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColor()}`}
        >
          {booking.status}
        </span>
      </td>
    </tr>
  );
}