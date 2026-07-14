"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  MessageSquare,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/crm",
    label: "CRM",
    icon: Users,
  },
  {
    href: "/dashboard/bookings",
    label: "Bookings",
    icon: CalendarDays,
  },
  {
    href: "/dashboard/conversations",
    label: "Conversations",
    icon: MessageSquare,
  },
  {
    href: "/dashboard/clients",
    label: "AI Management",
    icon: Bot,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-cyan-400/10 bg-[#030508]">
      <div className="border-b border-cyan-400/10 p-8">
        <h1 className="text-3xl font-black">
          THE CHAIN
        </h1>

        <p className="mt-2 text-sm text-cyan-300">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 text-zinc-400 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-cyan-400/10 p-6">
        <p className="text-sm text-zinc-500">
          The Chain Technologies
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Admin Dashboard v2
        </p>
      </div>
    </aside>
  );
}