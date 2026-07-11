"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
useEffect(() => {
  const openWidget = () => setOpen(true);

  window.addEventListener("open-val-chat", openWidget);

  return () => {
    window.removeEventListener("open-val-chat", openWidget);
  };
}, []);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  // NEW: Unique visitor session
  const [sessionId, setSessionId] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text:
        "Hello! 👋\n\nI'm Val.\n\nSoon you'll be able to ask me anything about The Chain Technologies.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // NEW: Create one session per visitor
  useEffect(() => {
    let id = localStorage.getItem("thechain-session");

    if (!id) {
id =
  "visitor-" +
  Math.random().toString(36).substring(2, 14);

      localStorage.setItem("thechain-session", id);
    }

    setSessionId(id);
  }, []);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      // Small delay so Val feels like she's thinking.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong.",
        },
      ]);
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
            {/* Header */}

            <div className="border-b border-cyan-400/10 p-5">
              <h2 className="text-2xl font-bold text-white">
                Val
              </h2>

              <p className="mt-1 text-sm text-cyan-300">
                AI Negotiating Receptionist
              </p>
            </div>

            {/* Messages */}

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "assistant"
                      ? "max-w-[100%] rounded-2xl bg-cyan-400 px-4 py-3 whitespace-pre-line text-black"
                      : "ml-auto max-w-[90%] rounded-2xl bg-zinc-800 px-4 py-3 whitespace-pre-line text-white"
                  }
                >
                  {message.text}
                </div>
              ))}

              {loading && (
                <div className="max-w-fit rounded-2xl bg-cyan-400 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="h-2 w-2 rounded-full bg-black"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: 0,
                      }}
                    />

                    <motion.span
                      className="h-2 w-2 rounded-full bg-black"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: 0.2,
                      }}
                    />

                    <motion.span
                      className="h-2 w-2 rounded-full bg-black"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}

            <div className="border-t border-cyan-400/10 p-5">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
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
    </>
  );
}