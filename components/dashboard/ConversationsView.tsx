"use client";

import { useEffect, useState, useCallback } from "react";

const API =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3001";

type ConversationListItem = {
    sessionId: string;
    name: string;
    phone: string;
    status: string;
    lastMessage: string;
    lastRole: string;
    lastUpdated?: string;
};

type Message = {
    role: "user" | "assistant";
    content: string;
};

type ConversationDetail = {
    sessionId: string;
    channel: string;
    status: string;
    lead: {
        fullName?: string;
        phone?: string;
        email?: string;
    };
    messages: Message[];
};

export default function ConversationsView({ tenantId }: { tenantId: string }) {
    const [channel, setChannel] = useState<"whatsapp" | "website">("whatsapp");
    const [list, setList] = useState<ConversationListItem[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [detail, setDetail] = useState<ConversationDetail | null>(null);
    const [replyText, setReplyText] = useState("");
    const [sending, setSending] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const loadList = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/admin/conversations?channel=${channel}`, {
                headers: { "x-tenant-id": tenantId },
                cache: "no-store",
            });
            if (!res.ok) return;
            const data = await res.json();
            setList(data);
        } catch (err) {
            console.error("Error loading conversations:", err);
        }
    }, [channel, tenantId]);

    const loadDetail = useCallback(async (sessionId: string) => {
        try {
            const res = await fetch(
                `${API}/api/admin/conversations/${encodeURIComponent(sessionId)}`,
                { headers: { "x-tenant-id": tenantId }, cache: "no-store" }
            );
            if (!res.ok) return;
            const data = await res.json();
            setDetail(data);
        } catch (err) {
            console.error("Error loading conversation detail:", err);
        }
    }, [tenantId]);

    // Reload the list when the channel tab changes, and poll every 5s for live updates
    useEffect(() => {
        loadList();
        const interval = setInterval(loadList, 5000);
        return () => clearInterval(interval);
    }, [loadList]);

    // Poll the open conversation every 4s so incoming messages show up live
    useEffect(() => {
        if (!selectedId) return;
        loadDetail(selectedId);
        const interval = setInterval(() => loadDetail(selectedId), 4000);
        return () => clearInterval(interval);
    }, [selectedId, loadDetail]);

    async function sendReply() {
        if (!selectedId || !replyText.trim()) return;
        setSending(true);
        try {
            const res = await fetch(
                `${API}/api/admin/conversations/${encodeURIComponent(selectedId)}/reply`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "x-tenant-id": tenantId },
                    body: JSON.stringify({ message: replyText.trim() }),
                }
            );
            if (res.ok) {
                setReplyText("");
                await loadDetail(selectedId);
                await loadList();
            }
        } catch (err) {
            console.error("Error sending reply:", err);
        } finally {
            setSending(false);
        }
    }

    async function toggleOverride(mode: "HUMAN" | "AI") {
        if (!selectedId) return;
        try {
            const res = await fetch(`${API}/api/override`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-tenant-id": tenantId },
                body: JSON.stringify({ sessionId: selectedId, mode }),
            });
            if (res.ok) {
                await loadDetail(selectedId);
                await loadList();
            }
        } catch (err) {
            console.error("Error toggling override:", err);
        }
    }

    async function deleteConversation(sessionId: string) {
        if (!confirm("Delete this conversation permanently? This cannot be undone.")) return;

        setDeleting(true);
        try {
            const res = await fetch(
                `${API}/api/admin/conversations/${encodeURIComponent(sessionId)}`,
                {
                    method: "DELETE",
                    headers: { "x-tenant-id": tenantId },
                }
            );
            if (res.ok) {
                if (selectedId === sessionId) {
                    setSelectedId(null);
                    setDetail(null);
                }
                await loadList();
            }
        } catch (err) {
            console.error("Error deleting conversation:", err);
        } finally {
            setDeleting(false);
        }
    }

    const selectedListItem = list.find((c) => c.sessionId === selectedId);
    const isPaused = detail?.status === "Manual Override";

    // Newest first, using lastUpdated if the backend provides it.
    // Falls back to original order if it's not present yet.
    const sortedList = [...list].sort((a, b) => {
        if (!a.lastUpdated || !b.lastUpdated) return 0;
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    });

    const filteredList = sortedList.filter((c) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
            c.name?.toLowerCase().includes(q) ||
            c.phone?.toLowerCase().includes(q) ||
            c.lastMessage?.toLowerCase().includes(q)
        );
    });

    return (
        <div className="space-y-6">
            {/* Channel Tabs */}
            <div className="flex gap-3">
                <button
                    onClick={() => {
                        setChannel("whatsapp");
                        setSelectedId(null);
                        setDetail(null);
                    }}
                    className={`rounded-xl px-6 py-3 font-bold transition ${
                        channel === "whatsapp"
                            ? "bg-cyan-400 text-black"
                            : "border border-cyan-400/20 bg-[#0B1118] text-zinc-400"
                    }`}
                >
                    WhatsApp
                </button>
                <button
                    onClick={() => {
                        setChannel("website");
                        setSelectedId(null);
                        setDetail(null);
                    }}
                    className={`rounded-xl px-6 py-3 font-bold transition ${
                        channel === "website"
                            ? "bg-cyan-400 text-black"
                            : "border border-cyan-400/20 bg-[#0B1118] text-zinc-400"
                    }`}
                >
                    Website
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Conversation List */}
                <div className="col-span-3 rounded-3xl border border-cyan-400/10 bg-[#0B1118]">
                    <div className="border-b border-cyan-400/10 p-6 space-y-3">
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search name, phone, message..."
                            className="w-full rounded-xl bg-[#05070A] px-4 py-3 text-sm text-white outline-none"
                        />
                        <p className="text-sm text-zinc-500">
                            {filteredList.length} conversation{filteredList.length === 1 ? "" : "s"}
                        </p>
                    </div>

                    <div className="space-y-2 p-3">
                        {filteredList.length === 0 && (
                            <p className="p-4 text-sm text-zinc-500">
                                No {channel} conversations {searchQuery ? "match your search." : "yet."}
                            </p>
                        )}

                        {filteredList.map((c) => (
                            <div
                                key={c.sessionId}
                                className={`group relative rounded-2xl transition ${
                                    selectedId === c.sessionId
                                        ? "bg-cyan-400/20"
                                        : "hover:bg-cyan-400/10"
                                }`}
                            >
                                <button
                                    onClick={() => setSelectedId(c.sessionId)}
                                    className="w-full p-4 text-left"
                                >
                                    <h3 className="pr-8 font-semibold text-white">
                                        {c.name}
                                    </h3>
                                    <p className="mt-1 truncate pr-8 text-sm text-zinc-400">
                                        {c.lastMessage || "No messages yet"}
                                    </p>
                                    <p className="mt-2 text-xs text-cyan-300">
                                        {c.status}
                                    </p>
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteConversation(c.sessionId);
                                    }}
                                    disabled={deleting}
                                    title="Delete conversation"
                                    className="absolute right-3 top-3 rounded-lg px-2 py-1 text-xs text-zinc-500 opacity-0 transition hover:bg-red-500/20 hover:text-red-400 group-hover:opacity-100 disabled:opacity-50"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat */}
                <div className="col-span-6 flex flex-col rounded-3xl border border-cyan-400/10 bg-[#0B1118]">
                    <div className="border-b border-cyan-400/10 p-6">
                        <h2 className="text-2xl font-bold text-white">
                            {selectedListItem?.name || "Select a conversation"}
                        </h2>
                        <p className="text-zinc-400">
                            {channel === "whatsapp" ? "WhatsApp" : "Website Chat"}
                        </p>
                    </div>

                    <div className="flex-1 space-y-5 overflow-y-auto p-8">
                        {detail?.messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    message.role === "user" ? "justify-start" : "justify-end"
                                }`}
                            >
                                <div
                                    className={`max-w-md rounded-2xl p-4 ${
                                        message.role === "user"
                                            ? "bg-[#111A24] text-white"
                                            : "bg-cyan-400 text-black"
                                    }`}
                                >
                                    <p>{message.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedId && (
                        <div className="border-t border-cyan-400/10 p-6">
                            <div className="flex gap-3">
                                <input
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") sendReply();
                                    }}
                                    placeholder="Type a reply..."
                                    className="flex-1 rounded-xl bg-[#05070A] px-4 py-3 text-white outline-none"
                                />
                                <button
                                    onClick={sendReply}
                                    disabled={sending}
                                    className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black hover:bg-cyan-300 disabled:opacity-50"
                                >
                                    Send
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-zinc-500">
                                Sending a reply pauses Val for this conversation.
                            </p>
                        </div>
                    )}
                </div>

                {/* Customer Panel */}
                <div className="col-span-3 rounded-3xl border border-cyan-400/10 bg-[#0B1118] p-6">
                    <h2 className="text-2xl font-bold text-white">Customer</h2>

                    {detail ? (
                        <div className="mt-8 space-y-5">
                            <div>
                                <p className="text-sm text-zinc-500">Name</p>
                                <p className="text-white">
                                    {detail.lead?.fullName || selectedListItem?.name || "—"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Phone</p>
                                <p className="text-white">
                                    {detail.lead?.phone || selectedListItem?.phone || "—"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Email</p>
                                <p className="break-all text-white">
                                    {detail.lead?.email || "—"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">Status</p>
                                <p className="font-semibold text-cyan-300">
                                    {detail.status}
                                </p>
                            </div>

                            <div className="space-y-3 border-t border-cyan-400/10 pt-6">
                                {isPaused ? (
                                    <button
                                        onClick={() => toggleOverride("AI")}
                                        className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black hover:bg-cyan-300"
                                    >
                                        Resume Val
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => toggleOverride("HUMAN")}
                                        className="w-full rounded-xl border border-cyan-400/30 px-6 py-3 font-bold text-cyan-300 hover:bg-cyan-400/10"
                                    >
                                        Pause Val (take over)
                                    </button>
                                )}

                                <button
                                    onClick={() => deleteConversation(selectedId!)}
                                    disabled={deleting}
                                    className="w-full rounded-xl border border-red-500/30 px-6 py-3 font-bold text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                                >
                                    Delete Conversation
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-8 text-zinc-500">
                            Select a conversation to see customer details.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
