"use client";

import {
  Users,
  CalendarDays,
  MessageSquare,
  Euro,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import QuickAction from "@/components/dashboard/QuickAction";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Stats */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Leads"
            value="0"
            icon={<Users size={28} />}
          />

          <StatCard
            title="Bookings"
            value="0"
            icon={<CalendarDays size={28} />}
          />

          <StatCard
            title="Messages"
            value="0"
            icon={<MessageSquare size={28} />}
          />

          <StatCard
            title="Revenue"
            value="€0"
            icon={<Euro size={28} />}
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