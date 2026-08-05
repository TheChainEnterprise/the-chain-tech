"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CalendarDays,
  MessageSquare,
  Activity,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import QuickAction from "@/components/dashboard/QuickAction";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const TENANT_ID = "the_chain_technologies";

type Stats = {
  leads: number;
  bookings: number;
  messages: number;
  activeChats: number;
};

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    leads: 0,
    bookings: 0,
    messages: 0,
    activeChats: 0,
  });
  const [loading, setLoading] = useState(true);

  async function loadStats() {
    try {
      const response = await fetch(`${API}/api/dashboard/stats`, {
        headers: { "x-tenant-id": TENANT_ID },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to load stats");
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStats();
    const interval = setInterval(loadStats, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Leads"
            value={loading ? "..." : String(stats.leads)}
            icon={<Users size={28} />}
          />

          <StatCard
            title="Bookings"
            value={loading ? "..." : String(stats.bookings)}
            icon={<CalendarDays size={28} />}
          />

          <StatCard
            title="Messages"
            value={loading ? "..." : String(stats.messages)}
            icon={<MessageSquare size={28} />}
          />

          <StatCard
            title="Active Chats"
            value={loading ? "..." : String(stats.activeChats)}
            icon={<Activity size={28} />}
          />
        </section>

        {/* Main Content */}
        <section className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ActivityCard />
          </div>

          <div className="space-y-6">
            <QuickAction
              title="Add Lead"
              description="Create a new customer lead."
              href="/dashboard/crm"
            />

            <QuickAction
              title="Open CRM"
              description="Manage your pipeline."
              href="/dashboard/crm"
            />

            <QuickAction
              title="Open Val"
              description="View conversations and AI activity."
              href="/dashboard/conversations"
            />

            <QuickAction
              title="Settings"
              description="Configure your business."
              href="/dashboard/settings"
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}