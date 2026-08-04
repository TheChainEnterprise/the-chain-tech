"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "./BookingModal"; // Import the native popup modal

type ChatMessage = {
    role: "user" | "assistant";
    text: string;
};

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sessionId, setSessionId] = useState("");

    // Modal state for native website popup
    const [bookingData, setBookingData] = useState<{ tenantId: string; sessionId: string } | null>(null);

    const DEFAULT_MESSAGES: ChatMessage[] = [
        {
            role: "assistant",
            text: "Hello! 👋\n\nI'm Val.\n\nHow can I help you today?",
        },
    ];

    const [messages, setMessages] = useState<ChatMessage[]>(DEFAULT_MESSAGES);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    useEffect(() => {
        let id = localStorage.getItem("thechain-session");
        if (!id) {
            id = "visitor-" + Math.random().toString(36).substring(2, 14);
            localStorage.setItem("thechain-session", id);
        }
        setSessionId(id);

        const savedMessages = localStorage.getItem("thechain-chat");
        if (savedMessages) {
            try { setMessages(JSON.parse(savedMessages)); } catch { localStorage.removeItem("thechain-chat"); }
        }

        if (localStorage.getItem("thechain-chat-open") === "true") {
            setOpen(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("thechain-chat", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem("thechain-chat-open", String(open));
    }, [open]);

    function startNewChat() {
        const id = "visitor-" + Math.random().toString(36).substring(2, 14);
        localStorage.removeItem("thechain-chat");
        localStorage.removeItem("thechain-chat-open");
        localStorage.setItem("thechain-session", id);
        setSessionId(id);
        setMessages(DEFAULT_MESSAGES);
        setInput("");
        setLoading(false);
        setOpen(true);
    }

    async function sendMessage() {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId,
                    message: userMessage,
                    tenantId: "the_chain_technologies",
                }),
            });

            const data = await res.json();
            let rawResponse = data.response || data.error || "Sorry, I couldn't generate a response.";

            // Intercept modal tag and trigger the native website popup instead of window.open or links
            const modalMatch = rawResponse.match(/\[\[OPEN_BOOKING_MODAL:(.*?):(.*?)\]\]/);
            if (modalMatch) {
                const tenantId = modalMatch[1];
                const sId = modalMatch[2];

                rawResponse = rawResponse.replace(/\[\[OPEN_BOOKING_MODAL:.*?\]\]/g, "").trim();
                if (!rawResponse) {
                    rawResponse = "Perfect! Please choose your slot from the popup window.";
                }

                // Open native modal right on the page
                setBookingData({ tenantId, sessionId: sId });
            }

            setMessages((prev) => [...prev, { role: "assistant", text: rawResponse }]);
        } catch {
            setMessages((prev) => [...prev, { role: "assistant", text: "Sorry, something went wrong." }]);
        }

        setLoading(false);
    }

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(!open)}
                className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_0_40px_rgba(34,211,238,.45)]"
            >
                {open ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-28 right-8 z-50 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0B1118] shadow-[0_0_60px_rgba(34,211,238,.15)]"
                    >
                        <div className="flex items-start justify-between border-b border-cyan-400/10 p-5">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Val</h2>
                                <p className="mt-1 text-sm text-cyan-300">AI Receptionist</p>
                            </div>
                            <button
                                onClick={startNewChat}
                                className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs text-cyan-300 transition hover:bg-cyan-400/10"
                            >
                                New Chat
                            </button>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto p-5">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={
                                        message.role === "assistant"
                                            ? "max-w-full whitespace-pre-line rounded-2xl bg-cyan-400 px-4 py-3 text-black"
                                            : "ml-auto max-w-[90%] whitespace-pre-line rounded-2xl bg-zinc-800 px-4 py-3 text-white"
                                    }
                                >
                                    {message.text}
                                </div>
                            ))}

                            {loading && (
                                <div className="max-w-fit rounded-2xl bg-cyan-400 px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
                                        <span className="h-2 w-2 rounded-full bg-black animate-pulse delay-150" />
                                        <span className="h-2 w-2 rounded-full bg-black animate-pulse delay-300" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="border-t border-cyan-400/10 p-5">
                            <div className="flex gap-3">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                                    placeholder="Ask Val anything..."
                                    className="flex-1 rounded-xl border border-cyan-400/20 bg-[#05070A] px-4 py-3 text-white outline-none focus:border-cyan-400"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={loading}
                                    className="rounded-xl bg-cyan-400 p-3 text-black transition hover:bg-cyan-300 disabled:opacity-50"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Native In-Page Popup Modal */}
            {bookingData && (
                <BookingModal 
                    tenantId={bookingData.tenantId}
                    sessionId={bookingData.sessionId}
                    onClose={() => setBookingData(null)}
                    onSuccess={() => {
                        setMessages(prev => [...prev, { role: "assistant", text: "✅ Your appointment is confirmed! We look forward to seeing you." }]);
                    }}
                />
            )}
        </>
    );
}