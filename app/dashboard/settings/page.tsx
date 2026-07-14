"use client";

import {
  Bell,
  Bot,
  CalendarDays,
  CreditCard,
  Globe,
  Mail,
  Phone,
  Settings as SettingsIcon,
  ShieldCheck,
  UserCog,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <section>

          <h1 className="text-4xl font-black">
            Settings
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage business configuration, Val AI settings and system preferences.
          </p>

        </section>


        {/* Business Profile */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <Globe className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Business Profile
            </h2>

          </div>


          <div className="mt-8 grid gap-6 md:grid-cols-2">


            <div>

              <label className="text-sm text-zinc-400">
                Company Name
              </label>

              <input
                value="The Chain Technologies"
                readOnly
                className="mt-2 w-full rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4 text-white outline-none"
              />

            </div>


            <div>

              <label className="text-sm text-zinc-400">
                Industry
              </label>

              <input
                value="Artificial Intelligence Software"
                readOnly
                className="mt-2 w-full rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4 text-white outline-none"
              />

            </div>


            <div>

              <label className="text-sm text-zinc-400">
                Website
              </label>

              <input
                value="https://thechain.tech"
                readOnly
                className="mt-2 w-full rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4 text-white outline-none"
              />

            </div>


            <div>

              <label className="text-sm text-zinc-400">
                Email
              </label>

              <input
                value="info@thechain.tech"
                readOnly
                className="mt-2 w-full rounded-2xl border border-cyan-400/10 bg-[#05070A] p-4 text-white outline-none"
              />

            </div>


          </div>

        </section>



        {/* Val Configuration */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <Bot className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Val AI Configuration
            </h2>

          </div>


          <div className="mt-8 grid gap-6 md:grid-cols-2">


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                AI Name
              </p>

              <p className="mt-2 font-semibold">
                Val
              </p>

            </div>


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Personality
              </p>

              <p className="mt-2 font-semibold">
                Professional
              </p>

            </div>


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Response Length
              </p>

              <p className="mt-2 font-semibold">
                Short
              </p>

            </div>


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Sales Style
              </p>

              <p className="mt-2 font-semibold">
                Balanced
              </p>

            </div>


          </div>

        </section>



        {/* Booking */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <CalendarDays className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Booking Configuration
            </h2>

          </div>


          <div className="mt-8 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Booking System
              </p>

              <p className="mt-2 text-emerald-400 font-semibold">
                Enabled
              </p>

            </div>


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Timezone
              </p>

              <p className="mt-2 font-semibold">
                Asia/Bangkok
              </p>

            </div>


            <div className="rounded-2xl bg-[#05070A] p-5">

              <p className="text-zinc-400">
                Duration
              </p>

              <p className="mt-2 font-semibold">
                30 minutes
              </p>

            </div>


          </div>

        </section>



        {/* Notifications */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <Bell className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Notifications
            </h2>

          </div>


          <div className="mt-6 space-y-4">


            <div className="flex justify-between rounded-2xl bg-[#05070A] p-5">

              <span>
                Lead Notifications
              </span>

              <span className="text-emerald-400">
                Enabled
              </span>

            </div>


            <div className="flex justify-between rounded-2xl bg-[#05070A] p-5">

              <span>
                Booking Notifications
              </span>

              <span className="text-emerald-400">
                Enabled
              </span>

            </div>


          </div>

        </section>



        {/* Integrations */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <CreditCard className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Integrations
            </h2>

          </div>


          <div className="mt-6 grid gap-4 md:grid-cols-2">


            {[
              "Google Calendar",
              "WhatsApp",
              "Stripe",
              "CRM Integrations",
            ].map((item) => (

              <div
                key={item}
                className="flex justify-between rounded-2xl bg-[#05070A] p-5"
              >

                <span>
                  {item}
                </span>

                <span className="text-yellow-400">
                  Coming Soon
                </span>

              </div>

            ))}


          </div>

        </section>



        {/* Admin Access */}

        <section className="rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-8">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Admin Access
            </h2>

          </div>


          <div className="mt-6 space-y-4">


            <div className="flex items-center gap-3 rounded-2xl bg-[#05070A] p-5">

              <UserCog />

              <span>
                info@thechain.tech
              </span>

            </div>


            <div className="flex items-center gap-3 rounded-2xl bg-[#05070A] p-5">

              <Mail />

              <span>
                thechaintechnologies@gmail.com
              </span>

            </div>


          </div>

        </section>


      </div>

    </DashboardLayout>
  );
}