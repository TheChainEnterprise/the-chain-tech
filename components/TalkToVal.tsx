"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const messages = [
  {
    from: "Customer",
    text: "Hi, I'd like to book a consultation for next Tuesday.",
    left: true,
  },
  {
    from: "Val",
    text: "Absolutely. I'd be happy to help. What time works best for you?",
    left: false,
  },
  {
    from: "Customer",
    text: "Any time after 3 PM.",
    left: true,
  },
  {
    from: "Val",
    text: "Perfect. I found availability at 3:30 PM. May I confirm your name and phone number to finalize the booking?",
    left: false,
  },
];

export default function TalkToVal() {
  return (
    <section
      id="talktoval"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#05070A] py-36"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[260px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-black"
        >
          Talk To Val
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-4xl text-center text-2xl leading-10 text-zinc-400"
        >
          Experience how conversations with an AI receptionist feel.
          Soon, this section will become a fully interactive live demo.
        </motion.p>

        <div className="mt-20 space-y-8">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: message.left ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.25,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className={`flex ${
                message.left ? "justify-start" : "justify-end"
              }`}
            >
              <div className="max-w-xl rounded-3xl border border-cyan-400/20 bg-[#0B1118]/90 p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.08)]">

                <div className="mb-4 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10">
                    {message.left ? (
                      <User
                        size={18}
                        className="text-cyan-300"
                      />
                    ) : (
                      <Bot
                        size={18}
                        className="text-cyan-300"
                      />
                    )}
                  </div>

                  <span className="font-semibold text-cyan-300">
                    {message.from}
                  </span>

                </div>

                <p className="text-lg leading-8 text-zinc-300">
                  {message.text}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() =>
              window.dispatchEvent(new Event("open-val-chat"))
            }
            className="rounded-full border border-cyan-400 px-10 py-4 text-lg font-semibold transition duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            Try Val Live
          </button>
        </motion.div>

      </div>
    </section>
  );
}