"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">

      <div className="flex">

        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">

          <Topbar />

          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}