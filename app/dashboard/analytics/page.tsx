"use client";

import Link from "next/link";

import {
  Activity,
  Bot,
  CalendarDays,
  Euro,
  MessageSquare,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <section>

          <h1 className="text-4xl font-black">
            Analytics
          </h1>

          <p className="mt-2 text-zinc-400">
            Live operational overview for The Chain Technologies.
          </p>

        </section>


        {/* Overview */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Companies"
            value="1"
            icon={<Users size={28} />}
          />

          <StatCard
            title="Conversations"
            value="0"
            icon={<MessageSquare size={28} />}
          />

          <StatCard
            title="Leads"
            value="0"
            icon={<TrendingUp size={28} />}
          />

          <StatCard
            title="Bookings"
            value="0"
            icon={<CalendarDays size={28} />}
          />

        </section>


        {/* Performance */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Revenue"
            value="€0"
            icon={<Euro size={28} />}
          />

          <StatCard
            title="AI Success"
            value="100%"
            icon={<Bot size={28} />}
          />

          <StatCard
            title="Response Time"
            value="<2s"
            icon={<Activity size={28} />}
          />

          <StatCard
            title="System"
            value="Online"
            icon={<ShieldCheck size={28} />}
          />

        </section>


        {/* Main Content */}

        <section className="grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2">

            <ActivityCard />

          </div>


          <div className="space-y-6">


            {/* System Status */}

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

              <h2 className="text-2xl font-bold">
                System Status
              </h2>


              <div className="mt-6 space-y-4">


                <div className="flex items-center justify-between rounded-2xl bg-[#05070A] p-4">

                  <div className="flex items-center gap-3">

                    <Bot className="text-cyan-300" size={20} />

                    <span>
                      Val AI Engine
                    </span>

                  </div>

                  <span className="font-semibold text-emerald-400">
                    Online
                  </span>

                </div>



                <div className="flex items-center justify-between rounded-2xl bg-[#05070A] p-4">

                  <div className="flex items-center gap-3">

                    <Server className="text-cyan-300" size={20} />

                    <span>
                      Backend API
                    </span>

                  </div>

                  <span className="font-semibold text-emerald-400">
                    Online
                  </span>

                </div>



                <div className="flex items-center justify-between rounded-2xl bg-[#05070A] p-4">

                  <div className="flex items-center gap-3">

                    <Activity className="text-cyan-300" size={20} />

                    <span>
                      Dashboard
                    </span>

                  </div>

                  <span className="font-semibold text-emerald-400">
                    Operational
                  </span>

                </div>



                <div className="flex items-center justify-between rounded-2xl bg-[#05070A] p-4">

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="text-cyan-300" size={20} />

                    <span>
                      Authentication
                    </span>

                  </div>

                  <span className="font-semibold text-emerald-400">
                    Protected
                  </span>

                </div>


              </div>

            </div>



            {/* Launch Status */}

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

              <h2 className="text-2xl font-bold">
                Launch Status
              </h2>


              <div className="mt-6 space-y-3 text-sm">


                {[
                  ["Website", "Ready", "text-emerald-400"],
                  ["Dashboard", "Ready", "text-emerald-400"],
                  ["Authentication", "Ready", "text-emerald-400"],
                  ["AI Receptionist", "Beta", "text-yellow-400"],
                ].map(([name, status, color]) => (

                  <div
                    key={name}
                    className="flex justify-between"
                  >

                    <span className="text-zinc-400">
                      {name}
                    </span>

                    <span className={color}>
                      {status}
                    </span>

                  </div>

                ))}


                <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4">

                  <p className="text-sm text-zinc-400">
                    Analytics will automatically populate as conversations,
                    leads, bookings and customers are stored by the AI engine.
                  </p>

                </div>


              </div>

            </div>


          </div>


        </section>



        {/* View Details */}

        <section>

          <h2 className="text-3xl font-black">
            View Details
          </h2>


          <p className="mt-2 text-zinc-400">
            Open detailed admin sections.
          </p>



          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">


            <Link
              href="/dashboard/clients"
              className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400"
            >

              <h3 className="text-xl font-bold">
                Companies
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                View businesses, profiles and AI configurations.
              </p>

              <p className="mt-6 font-semibold text-cyan-300">
                View Details →
              </p>

            </Link>



            <Link
              href="/dashboard/conversations"
              className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400"
            >

              <h3 className="text-xl font-bold">
                Conversations
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                View AI conversations and customer interactions.
              </p>

              <p className="mt-6 font-semibold text-cyan-300">
                View Details →
              </p>

            </Link>



            <Link
              href="/dashboard/crm"
              className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400"
            >

              <h3 className="text-xl font-bold">
                CRM Leads
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Manage leads and customer pipeline.
              </p>

              <p className="mt-6 font-semibold text-cyan-300">
                View Details →
              </p>

            </Link>



            <Link
              href="/dashboard/bookings"
              className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6 transition hover:border-cyan-400"
            >

              <h3 className="text-xl font-bold">
                Bookings
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Review appointments and demos.
              </p>

              <p className="mt-6 font-semibold text-cyan-300">
                View Details →
              </p>

            </Link>


          </div>

        </section>


      </div>

    </DashboardLayout>
  );
}