"use client";

import Link from "next/link";

const suggestions = [
  "Create a strategy",
  "Analyze my data",
  "Generate ideas",
];

export default function Hero() {
  return (
    <section
      id="dashboard"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#08090D]"
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      {/* Main purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          -z-10
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.10]
          blur-[140px]
          animate-nexora-glow
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-100px]
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/[0.07]
          blur-[130px]
        "
      />

      {/* Left glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[-200px]
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[120px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:70px_70px]
          [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[25%]
          hidden
          lg:block
          animate-nexora-float
        "
      >
        <span className="block h-2 w-2 rounded-full bg-violet-400/60 blur-[1px]" />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[20%]
          hidden
          lg:block
          animate-nexora-float
        "
        style={{ animationDelay: "1.2s" }}
      >
        <span className="block h-3 w-3 rotate-45 border border-cyan-300/40" />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-[25%]
          left-[20%]
          hidden
          lg:block
          animate-nexora-float
        "
        style={{ animationDelay: "2s" }}
      >
        <span className="block h-1.5 w-1.5 rounded-full bg-cyan-300/50" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-24">

        {/* =================================================
            STEP 1 — AI BADGE
        ================================================= */}

        <div
          className="
            animate-nexora-fade-up
            group
            inline-flex
            cursor-default
            select-none
            items-center
            gap-2.5
            rounded-full
            border
            border-violet-400/20
            bg-violet-500/[0.06]
            px-4
            py-2
            backdrop-blur-md
            transition-all
            duration-300
            ease-out
            hover:border-violet-400/40
            hover:bg-violet-500/[0.10]
          "
          style={{
            animationDelay: "0ms",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-violet-400
                opacity-60
              "
            />

            <span className="relative h-2 w-2 rounded-full bg-violet-400" />
          </span>

          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-violet-300/80">
            NEXORA Intelligence
          </span>

          <span
            className="
              text-xs
              text-white/20
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>

        {/* =================================================
            STEP 2 — FIRST HEADING LINE
        ================================================= */}

        <div className="mt-8 max-w-5xl text-center">

          <h1
            className="
              text-balance
              text-[52px]
              font-semibold
              leading-[0.94]
              tracking-[-0.055em]
              text-white
              sm:text-[76px]
              lg:text-[104px]
            "
          >
            <span
              className="
                block
                animate-nexora-fade-up
              "
              style={{
                animationDelay: "150ms",
              }}
            >
              Build ideas
            </span>

            {/* =================================================
                STEP 3 — SECOND HEADING LINE
            ================================================= */}

            <span
              className="
                relative
                mt-2
                block
                animate-nexora-fade-up
                bg-gradient-to-r
                from-violet-300
                via-white
                to-cyan-300
                bg-clip-text
                text-transparent
              "
              style={{
                animationDelay: "300ms",
              }}
            >
              beyond limits.
            </span>
          </h1>

          {/* =================================================
              STEP 4 — DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              animate-nexora-fade-up
              text-[15px]
              leading-7
              text-white/40
              sm:text-[17px]
              sm:leading-8
            "
            style={{
              animationDelay: "450ms",
            }}
          >
            One intelligent workspace for creating, analyzing and
            transforming your ideas with powerful AI tools.
          </p>
        </div>

        {/* =================================================
            STEP 5 — CTA BUTTONS
        ================================================= */}

        <div
          className="
            mt-9
            flex
            animate-nexora-fade-up
            flex-col
            items-center
            gap-3
            sm:flex-row
          "
          style={{
            animationDelay: "600ms",
          }}
        >
          {/* Primary button */}

          <Link
            href="#ai-tools"
            className="
              group
              relative
              flex
              cursor-pointer
              select-none
              items-center
              gap-3
              overflow-hidden
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:scale-[1.025]
              hover:shadow-[0_15px_50px_rgba(139,92,246,0.18)]
              active:translate-y-0
              active:scale-95
            "
          >
            <span className="relative z-10">
              Start Creating
            </span>

            <span
              className="
                relative
                z-10
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1.5
              "
            >
              →
            </span>

            {/* Shine effect */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-black/[0.06]
                to-transparent
                transition-transform
                duration-700
                ease-out
                group-hover:translate-x-full
              "
            />
          </Link>

          {/* Secondary button */}

          <Link
            href="#ai-tools"
            className="
              group
              flex
              cursor-pointer
              select-none
              items-center
              gap-2.5
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-7
              py-3.5
              text-sm
              font-medium
              text-white/60
              backdrop-blur-md
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
              active:scale-95
            "
          >
            Explore workspace

            <span
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              ✦
            </span>
          </Link>
        </div>

        {/* =================================================
            STEP 6 — AI COMMAND CENTER
        ================================================= */}

        <div
          className="
            relative
            mt-20
            w-full
            max-w-4xl
            animate-nexora-fade-up
            sm:mt-24
          "
          style={{
            animationDelay: "800ms",
          }}
        >
          {/* External glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-8
              rounded-[40px]
              bg-violet-500/[0.07]
              blur-3xl
            "
          />

          {/* Orbit border */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-6
              hidden
              rounded-[40px]
              border
              border-violet-400/[0.05]
              lg:block
            "
          />

          {/* Main panel */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#0D0F16]/90
              shadow-2xl
              shadow-black/40
              backdrop-blur-2xl
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:border-white/[0.18]
              hover:shadow-violet-950/20
            "
          >

            {/* Top bar */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                px-5
                py-4
                sm:px-6
              "
            >
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

            {/* Main content */}

            <div className="p-5 sm:p-8 lg:p-10">

              {/* AI identity */}

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-violet-400/20
                      bg-violet-500/10
                      text-violet-300
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <span className="text-lg">
                      ✦
                    </span>

                    <span
                      className="
                        absolute
                        inset-[-4px]
                        rounded-2xl
                        border
                        border-violet-400/10
                        animate-nexora-glow
                      "
                    />
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

              {/* Prompt */}

              <div className="mt-8">

                <p className="text-xs uppercase tracking-[0.18em] text-violet-400/60">
                  Command
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <span className="text-lg text-violet-400">
                    ✦
                  </span>

                  <p className="text-lg font-medium tracking-tight text-white/80 sm:text-2xl">
                    What would you like to create?

                    <span className="ml-1 inline-block h-5 w-px translate-y-1 animate-pulse bg-violet-400/70" />
                  </p>
                </div>
              </div>

              {/* Input */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  p-2
                  transition-all
                  duration-300
                  ease-out
                  focus-within:border-violet-400/30
                  focus-within:bg-violet-500/[0.025]
                  focus-within:shadow-[0_0_40px_rgba(139,92,246,0.06)]
                "
              >
                <div className="flex items-center gap-3 px-3 py-3">

                  <span className="text-sm text-white/25">
                    ✦
                  </span>

                  <input
                    type="text"
                    placeholder="Ask NEXORA anything..."
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/20
                      selection:bg-violet-500/30
                    "
                  />

                  <button
                    type="button"
                    aria-label="Send prompt"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.07]
                      text-sm
                      text-white/40
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-violet-500/20
                      hover:text-violet-300
                      active:scale-90
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-400/30
                    "
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
                    className="
                      cursor-pointer
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      px-3
                      py-1.5
                      text-[11px]
                      text-white/35
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-violet-400/20
                      hover:bg-violet-500/[0.07]
                      hover:text-violet-300
                      active:scale-95
                      focus:outline-none
                      focus:ring-1
                      focus:ring-violet-400/30
                    "
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Analytics */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  border-t
                  border-white/[0.07]
                  pt-6
                  sm:grid-cols-4
                "
              >

                {[
                  ["24", "AI Tools"],
                  ["99.9%", "Uptime"],
                  ["1.2M", "Tasks"],
                  ["42ms", "Response"],
                ].map(([value, label]) => (
                  <div key={label} className="group/stat">

                    <p
                      className="
                        text-base
                        font-semibold
                        tracking-tight
                        text-white/80
                        transition-colors
                        duration-300
                        group-hover/stat:text-violet-300
                      "
                    >
                      {value}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/25">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom animated line */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-px
                w-1/2
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-violet-400/40
                to-transparent
                opacity-50
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />
          </div>
        </div>

        {/* =================================================
            STEP 7 — TRUST LINE
        ================================================= */}

        <div
          className="
            mt-10
            flex
            animate-nexora-fade-up
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/20
          "
          style={{
            animationDelay: "1000ms",
          }}
        >
          <span className="h-px w-8 bg-white/10" />

          Built for intelligent workflows

          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
}