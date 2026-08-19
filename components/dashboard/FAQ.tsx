"use client";

import { useState } from "react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Nexora AI?",
    answer:
      "Nexora AI is an intelligent workspace designed to help you organize projects, manage tasks, analyze productivity, and use AI to make your workflow more efficient.",
  },
  {
    id: 2,
    question: "How does the AI Assistant help me?",
    answer:
      "The AI Assistant helps you understand your workspace, summarize projects, analyze productivity, and suggest what you should focus on next.",
  },
  {
    id: 3,
    question: "Can I manage my projects in Nexora?",
    answer:
      "Yes. You can view your projects, monitor progress, check project status, and keep track of tasks associated with your work.",
  },
  {
    id: 4,
    question: "Can I track my productivity?",
    answer:
      "Yes. Nexora provides productivity metrics, AI efficiency scores, workflow insights, and visual analytics to help you understand how you are working.",
  },
  {
    id: 5,
    question: "Can I manage and complete tasks?",
    answer:
      "Yes. You can view your tasks, check their priority and due dates, and mark tasks as completed or pending directly from the workspace.",
  },
  {
    id: 6,
    question: "Is Nexora suitable for individual users?",
    answer:
      "Yes. Nexora is designed as a personal AI workspace where individuals can organize their projects, tasks, productivity data, and AI-assisted workflow in one place.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#08090D]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[20%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-violet-600/[0.035]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[8%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-4xl">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-violet-400/70
            "
          >
            FAQ
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Questions,
            <span className="block text-white/35">
              answered simply.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-white/35
              sm:text-base
              sm:leading-7
            "
          >
            Everything you need to know about your intelligent
            workspace and how Nexora helps you work smarter.
          </p>
        </div>

        {/* =================================================
            FAQ LIST
        ================================================= */}

        <div className="mt-10 space-y-3 sm:mt-12">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white/[0.018]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-out

                  ${
                    isOpen
                      ? "border-violet-400/20 bg-violet-500/[0.035] shadow-[0_15px_50px_rgba(139,92,246,0.05)]"
                      : "border-white/[0.06] hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.03]"
                  }
                `}
              >
                {/* QUESTION BUTTON */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    transition-colors
                    duration-300
                    hover:text-white
                    active:scale-[0.995]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-violet-400/20
                    sm:px-6
                  "
                >
                  <span
                    className={`
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      sm:text-base

                      ${
                        isOpen
                          ? "text-violet-200"
                          : "text-white/65 group-hover:text-white"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS ICON */}

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-lg
                      font-light
                      transition-all
                      duration-500
                      ease-out

                      ${
                        isOpen
                          ? "rotate-45 border-violet-400/25 bg-violet-500/[0.1] text-violet-300"
                          : "border-white/[0.08] bg-white/[0.025] text-white/35 group-hover:scale-105 group-hover:border-violet-400/20 group-hover:text-violet-300"
                      }
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 sm:px-6">
                      <p
                        className="
                          max-w-3xl
                          text-xs
                          leading-6
                          text-white/35
                          transition-colors
                          duration-300
                          sm:text-sm
                          sm:leading-7
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-violet-400/10
            bg-violet-500/[0.035]
            p-5
            text-center
            transition-all
            duration-500
            hover:border-violet-400/20
            hover:bg-violet-500/[0.05]
            sm:p-6
          "
        >
          <p className="text-sm text-white/45">
            Still have questions?
          </p>

          <p className="mt-1 text-xs text-white/20">
            Your AI Assistant is always ready to help.
          </p>

          <button
            type="button"
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-violet-400/15
              bg-violet-500/[0.07]
              px-4
              py-2.5
              text-xs
              font-medium
              text-violet-300
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:gap-3
              hover:border-violet-400/30
              hover:bg-violet-500/[0.12]
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-violet-400/20
            "
          >
            Ask AI Assistant
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}