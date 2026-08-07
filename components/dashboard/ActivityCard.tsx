"use client";

import {
  Bot,
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  UserPlus,
} from "lucide-react";

type ActivityStats = {
  activeChats?: number;
  leads?: number;
  bookings?: number;
};

export default function ActivityCard({ stats }: { stats?: ActivityStats }) {
  const activities = [
    {
      icon: <Bot size={18} />,
      title: "Val AI Engine",
      description: "AI receptionist is online and responding normally.",
      time: "Live",
    },
    {
      icon: <MessageSquare size={18} />,
      title: "Conversations",
      description:
        stats && (stats.activeChats ?? 0) > 0
          ? `${stats.activeChats} active conversation${stats.activeChats === 1 ? "" : "s"} right now.`
          : "Customer conversations will appear here in real time.",
      time: stats && (stats.activeChats ?? 0) > 0 ? "Live" : "Waiting",
    },
    {
      icon: <UserPlus size={18} />,
      title: "New Leads",
      description:
        stats && (stats.leads ?? 0) > 0
          ? `${stats.leads} lead${stats.leads === 1 ? "" : "s"} captured by Val so far.`
          : "Qualified leads captured by Val will appear here.",
      time: stats && (stats.leads ?? 0) > 0 ? "Live" : "Waiting",
    },
    {
      icon: <CalendarDays size={18} />,
      title: "Bookings",
      description:
        stats && (stats.bookings ?? 0) > 0
          ? `${stats.bookings} confirmed meeting${stats.bookings === 1 ? "" : "s"}.`
          : "Confirmed meetings and demos will appear here.",
      time: stats && (stats.bookings ?? 0) > 0 ? "Live" : "Waiting",
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: "System Status",
      description: "All dashboard services are operating normally.",
      time: "Online",
    },
  ];

  return (
    <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Live Activity
          </h2>

          <p className="mt-2 text-zinc-400">
            Real-time activity across The Chain Technologies.
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
          System Online
        </div>

      </div>

      <div className="mt-8 space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start justify-between rounded-2xl border border-cyan-400/10 bg-[#05070A] p-5 transition hover:border-cyan-400/30"
          >
            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                {activity.icon}
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {activity.description}
                </p>

              </div>

            </div>

            <span className="text-sm text-zinc-500">
              {activity.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}