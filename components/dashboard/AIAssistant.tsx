"use client";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

const suggestions = [
  "Summarize my projects",
  "What should I work on next?",
  "Analyze my productivity",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi Amna! I'm your AI Assistant. How can I help you today?",
      sender: "ai",
    },
  ]);

  const sendMessage = (message?: string) => {
    const text = message ?? input;

    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(text),
        sender: "ai",
      };

      setMessages((current) => [...current, aiMessage]);
    }, 700);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open AI Assistant"
        className="
          group
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-violet-400/25
          bg-[#11131A]
          text-violet-300
          shadow-[0_15px_50px_rgba(139,92,246,0.2)]
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:scale-110
          hover:rotate-3
          hover:border-violet-400/50
          hover:bg-violet-500/[0.12]
          active:scale-90
          focus:outline-none
          focus:ring-2
          focus:ring-violet-400/30
        "
      >
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-violet-500/10
            blur-xl
            transition-transform
            duration-700
            group-hover:scale-150
          "
        />

        <span
          className="
            relative
            text-xl
            transition-transform
            duration-500
            group-hover:rotate-12
          "
        >
          ✦
        </span>
      </button>

      {/* =====================================================
          AI ASSISTANT PANEL
      ===================================================== */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-5
            z-50
            flex
            h-[min(620px,calc(100vh-120px))]
            w-[min(390px,calc(100vw-40px))]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.09]
            bg-[#0B0D13]
            shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            backdrop-blur-2xl
            animate-nexora-fade-up
          "
        >
          {/* TOP ACCENT */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-400
              to-transparent
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <header
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              px-5
              py-4
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-violet-400/20
                  bg-violet-500/[0.08]
                  text-violet-300
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:rotate-6
                "
              >
                ✦
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  AI Assistant
                </h3>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[9px] text-emerald-300/60">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.07]
                text-white/30
                transition-all
                duration-300
                hover:rotate-90
                hover:border-white/[0.18]
                hover:text-white
                active:scale-90
                focus:outline-none
                focus:ring-2
                focus:ring-violet-400/20
              "
            >
              ×
            </button>
          </header>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div
            className="
              min-h-0
              flex-1
              space-y-4
              overflow-y-auto
              p-4
              [scrollbar-width:thin]
              [scrollbar-color:rgba(139,92,246,0.2)_transparent]
            "
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[82%]
                    rounded-2xl
                    px-4
                    py-3
                    text-xs
                    leading-5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5

                    ${
                      message.sender === "user"
                        ? "rounded-br-md bg-violet-500/[0.15] text-violet-100"
                        : "rounded-bl-md border border-white/[0.06] bg-white/[0.035] text-white/50"
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* QUICK SUGGESTIONS */}

            {messages.length === 1 && (
              <div className="pt-2">
                <p className="mb-2 text-[9px] uppercase tracking-[0.15em] text-white/20">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.02]
                        px-3
                        py-2
                        text-[9px]
                        text-white/35
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-violet-400/20
                        hover:bg-violet-500/[0.06]
                        hover:text-violet-300
                        active:scale-95
                        focus:outline-none
                      "
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              INPUT
          ================================================= */}

          <div className="border-t border-white/[0.06] p-4">
            <form
              onSubmit={handleSubmit}
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-2
                transition-all
                duration-300
                focus-within:border-violet-400/25
                focus-within:bg-white/[0.04]
              "
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask your AI assistant..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-2
                  text-xs
                  text-white
                  outline-none
                  placeholder:text-white/20
                  selection:bg-violet-500/30
                "
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/[0.12]
                  text-violet-300
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-violet-500/[0.2]
                  active:scale-90
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-400/20
                "
              >
                →
              </button>
            </form>

            <p className="mt-2 text-center text-[8px] text-white/15">
              AI Assistant • Powered by Nexora
            </p>
          </div>
        </div>
      )}
    </>
  );
}

/* =====================================================
   DEMO AI RESPONSE
===================================================== */

function getAIResponse(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("project")) {
    return "You currently have active projects including Nexora Marketing, Product Launch and Content Strategy. Your strongest project is Nexora Marketing at 86% progress.";
  }

  if (text.includes("productivity") || text.includes("performance")) {
    return "Your current productivity score is 86%. Nexora detected a 24.2% improvement compared with your previous weekly performance.";
  }

  if (text.includes("next") || text.includes("work")) {
    return "Based on your current workflow, completing the Product Launch tasks would be a good next step.";
  }

  return "I understand. I'm analyzing your workspace and will help you turn that idea into an actionable next step.";
}