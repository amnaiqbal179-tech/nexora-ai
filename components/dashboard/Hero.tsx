"use client";

import Link from "next/link";
import { useState } from "react";

const suggestions = [
  "Create a strategy",
  "Analyze my data",
  "Generate ideas",
];

const stats = [
  ["24", "AI Tools"],
  ["99.9%", "Uptime"],
  ["1.2M", "Tasks"],
  ["42ms", "Response"],
];

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section
      id="dashboard"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#08090D]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main violet glow */}
        <div className="nexora-hero-glow absolute left-1/2 top-[-220px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.07] blur-[140px] nexora-breathe" />

        {/* Left glow */}
        <div className="absolute bottom-[5%] left-[-220px] h-[420px] w-[420px] rounded-full bg-violet-500/[0.06] blur-[130px]" />

        {/* Center core */}
        <div className="nexora-core absolute left-1/2 top-[20%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[100px]" />

        {/* Grid */}
        <div className="nexora-grid absolute -inset-[100px] opacity-[0.035]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,9,13,0.35)_65%,#08090D_100%)]" />

        {/* Particles */}
        <span className="nexora-particle absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-300/60" />
        <span className="nexora-particle absolute left-[18%] top-[60%] h-1 w-1 rounded-full bg-cyan-300/50 [animation-delay:1s]" />
        <span className="nexora-particle absolute right-[14%] top-[23%] h-2 w-2 rotate-45 border border-cyan-300/40 [animation-delay:1.8s]" />
        <span className="nexora-particle absolute right-[20%] top-[65%] h-1 w-1 rounded-full bg-violet-300/60 [animation-delay:2.4s]" />
        <span className="nexora-particle absolute left-[35%] top-[15%] h-1 w-1 rounded-full bg-white/30 [animation-delay:0.6s]" />
        <span className="nexora-particle absolute right-[36%] top-[18%] h-1.5 w-1.5 rounded-full bg-violet-400/50 [animation-delay:3s]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-24">

        {/* =================================================
            AI BADGE
        ================================================= */}

        <div
          className="nexora-fade-up group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-2 backdrop-blur-md"
          style={{ animationDelay: "0ms" }}
        >
          <span className="nexora-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
          </span>

          <span className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            NEXORA Intelligence
          </span>

          <span className="relative text-xs text-white/25 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="mt-8 max-w-5xl text-center">
          <h1 className="text-balance text-[52px] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-[76px] lg:text-[104px]">

            <span
              className="nexora-fade-up block"
              style={{ animationDelay: "150ms" }}
            >
              Build ideas
            </span>

            <span
              className="nexora-fade-up relative mt-2 block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent"
              style={{ animationDelay: "300ms" }}
            >
              beyond limits.

              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/20 via-white/10 to-cyan-400/20 blur-3xl" />
            </span>
          </h1>

          <p
            className="nexora-fade-up mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/40 sm:text-[17px] sm:leading-8"
            style={{ animationDelay: "450ms" }}
          >
            One intelligent workspace for creating, analyzing and
            transforming your ideas with powerful AI tools.
          </p>
        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div
          className="nexora-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "600ms" }}
        >
          <Link
            href="#ai-tools"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_15px_60px_rgba(139,92,246,0.25)] active:scale-95"
          >
            <span className="relative z-10">
              Start Creating
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>

            <span className="nexora-button-shine absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
          </Link>

          <Link
            href="#ai-tools"
            className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.06] hover:text-white active:scale-95"
          >
            Explore workspace

            <span className="transition-transform duration-300 group-hover:rotate-45 group-hover:text-violet-300">
              ✦
            </span>
          </Link>
        </div>

        {/* =================================================
            COMMAND CENTER
        ================================================= */}

        <div
          className="nexora-fade-up relative mt-20 w-full max-w-5xl sm:mt-24"
          style={{ animationDelay: "800ms" }}
        >

          {/* Orbit rings */}

          <div className="pointer-events-none absolute -inset-14 hidden lg:block">

            <div className="nexora-orbit absolute inset-0 rounded-[55px] border border-violet-400/[0.07]">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_25px_rgba(167,139,250,0.9)]" />
            </div>

            <div className="nexora-orbit-reverse absolute inset-8 rounded-[48px] border border-cyan-300/[0.055]">
              <span className="absolute bottom-[-2px] right-[18%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
            </div>

          </div>

          {/* Outer glow */}

          <div className="nexora-pulse absolute -inset-8 rounded-[45px] bg-violet-500/[0.06] blur-3xl" />

          {/* =================================================
              FLOATING LEFT CARD
          ================================================= */}

          <div className="nexora-float absolute -left-8 top-20 z-20 hidden w-44 rounded-2xl border border-white/[0.08] bg-[#10121A]/80 p-4 shadow-2xl backdrop-blur-xl lg:block">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

              <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                AI Engine
              </span>
            </div>

            <p className="mt-3 text-lg font-semibold text-white/85">
              98.4%
            </p>

            <p className="mt-1 text-[9px] text-white/20">
              Processing efficiency
            </p>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="nexora-progress h-full w-[84%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            </div>
          </div>

          {/* =================================================
              FLOATING RIGHT CARD
          ================================================= */}

          <div className="nexora-float-reverse absolute -right-8 top-36 z-20 hidden w-48 rounded-2xl border border-white/[0.08] bg-[#10121A]/80 p-4 shadow-2xl backdrop-blur-xl lg:block">

            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/30">
                Live Activity
              </span>

              <span className="text-[9px] text-violet-300/60">
                +24.2%
              </span>
            </div>

            <div className="mt-4 flex h-12 items-end gap-1">
              {[30, 55, 42, 70, 48, 80, 62].map((height, index) => (
                <div
                  key={index}
                  className="nexora-bar flex-1 rounded-sm bg-violet-400/30"
                  style={{
                    height: `${height / 2}px`,
                    animationDelay: `${index * 120}ms`,
                  }}
                />
              ))}
            </div>

            <p className="mt-3 text-[9px] text-white/20">
              Productivity trend
            </p>
          </div>

          {/* =================================================
              MAIN PANEL
          ================================================= */}

          <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0D0F16]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-[0_35px_100px_rgba(76,29,149,0.18)]">

            {/* Scan beam */}

            <div className="nexora-scan pointer-events-none absolute inset-x-0 top-0 z-30 h-32 bg-gradient-to-b from-transparent via-violet-400/[0.07] to-transparent" />

            {/* Animated corner glow */}

            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:bg-violet-500/20" />

            <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-52 w-52 rounded-full bg-cyan-500/[0.06] blur-3xl" />

            {/* Top bar */}

            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <span className="hidden text-[11px] text-white/25 sm:block">
                  nexora / command-center
                </span>

              </div>

              <div className="flex items-center gap-2">

                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-400/70">
                  Systems online
                </span>

              </div>
            </div>

            {/* Main */}

            <div className="relative z-10 p-5 sm:p-8 lg:p-10">

              {/* AI Identity */}

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="nexora-ai-icon relative flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">

                    <span className="relative z-10 text-lg">
                      ✦
                    </span>

                    <span className="absolute inset-[-5px] rounded-2xl border border-violet-400/10" />

                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/85">
                      NEXORA AI
                    </p>

                    <p className="mt-0.5 text-[11px] text-white/30">
                      Intelligent command center
                    </p>
                  </div>

                </div>

                <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:block">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    Neural Core
                  </span>
                </div>

              </div>

              {/* Command */}

              <div className="mt-8">

                <p className="text-xs uppercase tracking-[0.18em] text-violet-400/60">
                  Command
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <span className="nexora-command-icon text-lg text-violet-400">
                    ✦
                  </span>

                  <p className="text-lg font-medium tracking-tight text-white/80 sm:text-2xl">
                    What would you like to create?
                    <span className="ml-1 inline-block h-5 w-px translate-y-1 animate-pulse bg-violet-400/70" />
                  </p>

                </div>
              </div>

              {/* Input */}

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-2 transition-all duration-300 focus-within:border-violet-400/30 focus-within:bg-violet-500/[0.025] focus-within:shadow-[0_0_50px_rgba(139,92,246,0.08)]">

                <div className="flex items-center gap-3 px-3 py-3">

                  <span className="text-sm text-violet-400/50">
                    ✦
                  </span>

                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask NEXORA anything..."
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/20 selection:bg-violet-500/30"
                  />

                  <button
                    type="button"
                    aria-label="Send prompt"
                    className="nexora-send flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-sm text-white/40 transition-all duration-300 hover:bg-violet-500/20 hover:text-violet-300 active:scale-90"
                  >
                    ↑
                  </button>

                </div>
              </div>

              {/* Suggestions */}

              <div className="mt-4 flex flex-wrap gap-2">

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setPrompt(suggestion)}
                    className="group/suggestion rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/35 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-violet-500/[0.07] hover:text-violet-300 active:scale-95"
                  >
                    <span className="mr-1 text-violet-400/40 group-hover/suggestion:text-violet-300">
                      +
                    </span>

                    {suggestion}
                  </button>
                ))}

              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-6 sm:grid-cols-4">

                {stats.map(([value, label]) => (
                  <div
                    key={label}
                    className="group/stat rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.02]"
                  >
                    <p className="text-base font-semibold tracking-tight text-white/80 transition-all duration-300 group-hover/stat:translate-x-1 group-hover/stat:text-violet-300">
                      {value}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/25">
                      {label}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Bottom energy line */}

            <div className="nexora-energy-line absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <div className="absolute bottom-0 left-1/2 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-sm" />

          </div>
        </div>

        {/* =================================================
            TRUST
        ================================================= */}

        <div
          className="nexora-fade-up mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/20"
          style={{ animationDelay: "1000ms" }}
        >
          <span className="h-px w-8 bg-white/10" />

          <span>
            Built for intelligent workflows
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
}