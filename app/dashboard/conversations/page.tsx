"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import {
  conversations,
  Conversation,
} from "@/lib/conversations";

export default function ConversationsPage() {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>(conversations[0]);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-5xl font-black text-white">
            Conversations
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Every customer conversation handled by Val.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-6">

          {/* Conversation List */}

          <div className="col-span-3 rounded-3xl border border-cyan-400/10 bg-[#0B1118]">

            <div className="border-b border-cyan-400/10 p-6">

              <input
                placeholder="Search..."
                className="w-full rounded-xl bg-[#05070A] px-4 py-3 text-white outline-none"
              />

            </div>

            <div className="space-y-2 p-3">

              {conversations.map((conversation) => (

                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full rounded-2xl p-4 text-left transition ${
                    selectedConversation.id === conversation.id
                      ? "bg-cyan-400/20"
                      : "hover:bg-cyan-400/10"
                  }`}
                >

                  <h3 className="font-semibold text-white">
                    {conversation.customer}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {conversation.company}
                  </p>

                  <p className="mt-2 text-xs text-cyan-300">
                    {conversation.status}
                  </p>

                </button>

              ))}

            </div>

          </div>

          {/* Chat */}

          <div className="col-span-6 rounded-3xl border border-cyan-400/10 bg-[#0B1118]">

            <div className="border-b border-cyan-400/10 p-6">

              <h2 className="text-2xl font-bold text-white">
                {selectedConversation.customer}
              </h2>

              <p className="text-zinc-400">
                {selectedConversation.channel}
              </p>

            </div>

            <div className="space-y-5 p-8">

              {selectedConversation.messages.map((message, index) => (

                <div
                  key={index}
                  className={`flex ${
                    message.sender === "customer"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >

                  <div
                    className={`max-w-md rounded-2xl p-4 ${
                      message.sender === "customer"
                        ? "bg-[#111A24] text-white"
                        : "bg-cyan-400 text-black"
                    }`}
                  >

                    <p>{message.text}</p>

                    <p className="mt-2 text-xs opacity-60">
                      {message.time}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Customer Panel */}

          <div className="col-span-3 rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">

            <h2 className="text-2xl font-bold text-white">
              Customer
            </h2>

            <div className="mt-8 space-y-5">

              <div>

                <p className="text-sm text-zinc-500">
                  Name
                </p>

                <p className="text-white">
                  {selectedConversation.customer}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Company
                </p>

                <p className="text-white">
                  {selectedConversation.company}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <p className="text-white break-all">
                  {selectedConversation.email}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Phone
                </p>

                <p className="text-white">
                  {selectedConversation.phone}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Status
                </p>

                <p className="font-semibold text-cyan-300">
                  {selectedConversation.status}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Channel
                </p>

                <p className="text-white">
                  {selectedConversation.channel}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}