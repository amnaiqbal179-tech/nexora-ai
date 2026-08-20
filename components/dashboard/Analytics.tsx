"use client";

import { useState } from "react";

type TimeRange = "7D" | "30D" | "90D";

type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

// Element Tooltip Component
function ElementTooltip({
  children,
  library,
  tailwind,
  animation = "None",
  position = "top",
  className = "",
}: {
  children: React.ReactNode;
  library: string;
  tailwind: string;
  animation?: string;
  position?: TooltipPosition;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
    "top-right": "bottom-full left-0 mb-3",
    "top-left": "bottom-full right-0 mb-3",
    "bottom-right": "top-full left-0 mt-3",
    "bottom-left": "top-full right-0 mt-3",
  };

  return (
    <div
      className={`relative inline-flex flex-col ${className}`}
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
    >
      {children}
      <div
        className={`pointer-events-none absolute ${positionClasses[position]} z-[999] w-64 sm:w-72 rounded-2xl border border-violet-500/40 bg-[#0C0E17]/95 p-3.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-200 ease-out ${
          isHovered
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-violet-300">
            Library / Tech
          </span>
        </div>
        <p className="mt-1.5 text-xs font-medium text-white/90">{library}</p>

        <div className="mt-3 flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
            Tailwind CSS
          </span>
        </div>
        <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-cyan-100/80 break-words rounded-lg bg-black/60 p-2 border border-white/5">
          {tailwind}
        </p>

        <div className="mt-3 flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
            Animation / Transition
          </span>
        </div>
        <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-amber-100/80 break-words rounded-lg bg-black/60 p-2 border border-white/5">
          {animation}
        </p>
      </div>
    </div>
  );
}

const performanceData = {
  "7D": [42, 58, 51, 68, 63, 78, 72],
  "30D": [35, 48, 42, 64, 58, 76, 69, 82, 73, 91, 84, 97],
  "90D": [28, 35, 42, 39, 51, 58, 54, 67, 63, 72, 78, 86],
};

const days = {
  "7D": ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  "30D": [
    "W1",
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W10",
    "W11",
    "W12",
  ],
  "90D": [
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M7",
    "M8",
    "M9",
    "M10",
    "M11",
    "M12",
  ],
};

const tools = [
  {
    name: "AI Writer",
    usage: 42,
    requests: "5,394",
    trend: "+18.4%",
  },
  {
    name: "Data Analyst",
    usage: 31,
    requests: "3,980",
    trend: "+12.6%",
  },
  {
    name: "Idea Generator",
    usage: 18,
    requests: "2,311",
    trend: "+9.8%",
  },
  {
    name: "AI Assistant",
    usage: 9,
    requests: "1,155",
    trend: "+6.4%",
  },
];

const insights = [
  {
    icon: "✦",
    title: "Productivity is improving",
    description:
      "Your workflow efficiency increased by 24.2% compared with your previous period.",
  },
  {
    icon: "◈",
    title: "AI Writer is your top tool",
    description:
      "You generated 42% of your total AI requests through AI Writer this month.",
  },
  {
    icon: "↗",
    title: "More time saved",
    description:
      "Your AI workflow saved approximately 48.6 hours this month.",
  },
];

const metrics = [
  {
    label: "AI REQUESTS",
    value: "12,840",
    change: "+18.4%",
    description: "vs previous period",
  },
  {
    label: "PRODUCTIVITY",
    value: "86%",
    change: "+14.8%",
    description: "efficiency score",
  },
  {
    label: "TIME SAVED",
    value: "48.6h",
    change: "+24.2%",
    description: "this month",
  },
  {
    label: "WORKFLOW SCORE",
    value: "92",
    change: "+11.4%",
    description: "overall performance",
  },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<TimeRange>("30D");

  const chartData = performanceData[timeRange];
  const chartLabels = days[timeRange];

  return (
    <section
      id="analytics"
      className="
        relative
        overflow-hidden
        bg-[#08090D]
        px-5
        pt-8
        pb-12
        sm:px-8
        sm:pt-10
        sm:pb-14
        lg:px-10
        lg:pt-12
        lg:pb-16
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-600/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[5%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[130px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl">

        {/* ===================================================
            CENTERED HEADER
        =================================================== */}

        <div className="flex flex-col items-center text-center">

          {/* Label */}
          <ElementTooltip
            library="React Badge Component"
            tailwind="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.045] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-violet-300/70"
            animation="None"
            position="bottom"
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-400/15
                bg-violet-500/[0.045]
                px-3
                py-1.5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-violet-300/70
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_10px_rgba(139,92,246,0.7)]
                "
              />
              Analytics
            </div>
          </ElementTooltip>

          {/* Main Heading */}
          <ElementTooltip
            library="React Heading (H2)"
            tailwind="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
            animation="None"
            position="bottom"
            className="w-full mt-3"
          >
            <h2
              className="
                text-3xl
                font-semibold
                tracking-[-0.045em]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Understand your
              <span className="block text-white/30">
                AI-powered workflow.
              </span>
            </h2>
          </ElementTooltip>

          {/* Description */}
          <ElementTooltip
            library="HTML Paragraph Element"
            tailwind="mt-2.5 max-w-2xl text-sm leading-6 text-white/30 sm:text-base"
            animation="None"
            position="bottom"
          >
            <p
              className="
                mt-2.5
                max-w-2xl
                text-sm
                leading-6
                text-white/30
                sm:text-base
              "
            >
              Track productivity, AI usage, workflow efficiency and
              the impact of your work in one place.
            </p>
          </ElementTooltip>

          {/* Time Range Selector */}
          <ElementTooltip
            library="React Time Range Container"
            tailwind="mt-5 flex w-fit items-center rounded-xl border border-white/[0.07] bg-white/[0.025] p-1"
            animation="None"
            position="bottom"
          >
            <div
              className="
                mt-5
                flex
                w-fit
                items-center
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-1
              "
            >
              {(["7D", "30D", "90D"] as TimeRange[]).map((range) => {
                const active = timeRange === range;

                return (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setTimeRange(range)}
                    className={`
                      rounded-lg
                      px-3
                      py-2
                      text-[10px]
                      font-medium
                      transition-all
                      duration-300
                      active:scale-95
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-400/25

                      ${
                        active
                          ? "bg-violet-500/15 text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.08)]"
                          : "text-white/25 hover:bg-white/[0.04] hover:text-white/60"
                      }
                    `}
                  >
                    {range}
                  </button>
                );
              })}
            </div>
          </ElementTooltip>
        </div>

        {/* ===================================================
            METRIC CARDS
        =================================================== */}

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => {
            const pos: TooltipPosition =
              index === 0 ? "top-right" : index === 3 ? "top-left" : "top";

            return (
              <ElementTooltip
                key={metric.label}
                library="React Metric Card Component"
                tailwind="group cursor-pointer rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5"
                animation="Hover -translate-y-1, scale up, shadow transition-all duration-500 ease-out"
                position={pos}
                className="w-full"
              >
                <div
                  className="
                    group
                    cursor-pointer
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.018]
                    p-5
                    w-full
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1
                    hover:border-violet-400/20
                    hover:bg-white/[0.035]
                    hover:shadow-[0_20px_60px_rgba(139,92,246,0.06)]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-white/25
                      "
                    >
                      {metric.label}
                    </span>

                    <span className="text-[9px] text-emerald-300/60">
                      {metric.change}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p
                      className="
                        origin-left
                        text-3xl
                        font-semibold
                        tracking-tight
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-[1.03]
                      "
                    >
                      {metric.value}
                    </p>

                    <p className="mt-1 text-[9px] text-white/20">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </ElementTooltip>
            );
          })}
        </div>

        {/* ===================================================
            PERFORMANCE CHART + AI SCORE
        =================================================== */}

        <div className="mt-3 grid gap-3 xl:grid-cols-[1.5fr_0.7fr]">

          {/* Performance Chart */}
          <ElementTooltip
            library="React Performance Chart Container"
            tailwind="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 sm:p-6"
            animation="None"
            position="top-right"
            className="w-full"
          >
            <div
              className="
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.018]
                p-5
                w-full
                sm:p-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    Performance
                  </p>

                  <h3 className="mt-1.5 text-lg font-medium text-white">
                    Productivity trend
                  </h3>

                  <p className="mt-1 text-[10px] text-white/20">
                    AI-assisted productivity over time
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-400/[0.06]
                    px-3
                    py-1.5
                    text-[9px]
                    text-emerald-300/60
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  +24.2%
                </div>
              </div>

              {/* Chart */}

              <div
                className="
                  relative
                  mt-6
                  h-64
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.035]
                  bg-white/[0.01]
                  px-3
                  pt-4
                "
              >
                {/* Grid */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-40
                    [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:100%_20%]
                  "
                />

                {/* Bars */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    items-end
                    gap-1.5
                    sm:gap-2
                  "
                >
                  {chartData.map((height, index) => (
                    <div
                      key={`${timeRange}-${index}`}
                      className="
                        group
                        relative
                        flex
                        h-full
                        flex-1
                        items-end
                      "
                    >
                      <div
                        className="
                          w-full
                          origin-bottom
                          rounded-t-md
                          bg-gradient-to-t
                          from-violet-500/10
                          to-violet-400/50
                          transition-all
                          duration-500
                          ease-out
                          group-hover:scale-y-110
                          group-hover:from-violet-500/20
                          group-hover:to-cyan-300/70
                        "
                        style={{
                          height: `${height}%`,
                        }}
                      />

                      {/* Tooltip */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-full
                          left-1/2
                          mb-2
                          -translate-x-1/2
                          translate-y-1
                          rounded-lg
                          border
                          border-white/10
                          bg-[#11131A]
                          px-2
                          py-1
                          text-[8px]
                          text-white/70
                          opacity-0
                          shadow-xl
                          transition-all
                          duration-200
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        {height}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Labels */}

              <div className="mt-3 flex justify-between text-[8px] text-white/15">
                {chartLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </ElementTooltip>

          {/* AI Score */}
          <ElementTooltip
            library="React AI Performance Score Card"
            tailwind="group relative overflow-hidden rounded-2xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.09] via-violet-500/[0.025] to-transparent p-5 sm:p-6"
            animation="Hover -translate-y-1, border glow transition-all duration-500"
            position="top-left"
            className="w-full"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-violet-400/10
                bg-gradient-to-br
                from-violet-500/[0.09]
                via-violet-500/[0.025]
                to-transparent
                p-5
                w-full
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-violet-400/25
                hover:shadow-[0_25px_70px_rgba(139,92,246,0.08)]
                sm:p-6
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-violet-500/10
                  blur-3xl
                  transition-transform
                  duration-1000
                  group-hover:scale-150
                "
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-violet-300/60
                    "
                  >
                    AI Performance
                  </span>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-violet-400/15
                      bg-violet-400/[0.06]
                      text-violet-300
                      transition-all
                      duration-500
                      group-hover:rotate-12
                      group-hover:scale-110
                    "
                  >
                    ✦
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                    Efficiency score
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tight text-white">
                      86
                    </span>

                    <span className="mb-1 text-xs text-white/20">
                      / 100
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="
                        h-full
                        w-[86%]
                        origin-left
                        rounded-full
                        bg-gradient-to-r
                        from-violet-500
                        to-cyan-400
                        transition-transform
                        duration-700
                        group-hover:scale-x-105
                      "
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-[9px]">
                    <span className="text-white/20">
                      Current efficiency
                    </span>

                    <span className="text-violet-300/60">
                      Excellent
                    </span>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <p className="text-xs leading-6 text-white/30">
                    Your AI workflow is performing above your
                    previous average. Keep your current workflow
                    pattern to maintain this momentum.
                  </p>
                </div>
              </div>
            </div>
          </ElementTooltip>
        </div>

        {/* ===================================================
            TOOL USAGE
        =================================================== */}

        <div className="mt-3 grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">

          {/* Tool Usage */}
          <ElementTooltip
            library="React Tool Usage Container"
            tailwind="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 sm:p-6"
            animation="None"
            position="top-right"
            className="w-full"
          >
            <div
              className="
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.018]
                p-5
                w-full
                sm:p-6
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    AI Tools
                  </p>

                  <h3 className="mt-1.5 text-lg font-medium text-white">
                    Usage breakdown
                  </h3>
                </div>

                <span className="text-[9px] text-white/20">
                  This month
                </span>
              </div>

              <div className="mt-5 space-y-5">
                {tools.map((tool) => (
                  <div key={tool.name} className="group">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white">
                          {tool.name}
                        </span>

                        <span className="ml-2 text-[9px] text-white/20">
                          {tool.requests} requests
                        </span>
                      </div>

                      <span className="text-[9px] text-violet-300/60">
                        {tool.usage}%
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="
                          h-full
                          origin-left
                          rounded-full
                          bg-gradient-to-r
                          from-violet-500
                          to-cyan-400
                          transition-transform
                          duration-700
                          group-hover:scale-x-105
                        "
                        style={{
                          width: `${tool.usage}%`,
                        }}
                      />
                    </div>

                    <div className="mt-1.5 text-right text-[8px] text-emerald-300/50">
                      {tool.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ElementTooltip>

          {/* Workflow Health */}
          <ElementTooltip
            library="React Workflow Health Container"
            tailwind="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 sm:p-6"
            animation="None"
            position="top-left"
            className="w-full"
          >
            <div
              className="
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.018]
                p-5
                w-full
                sm:p-6
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                Workflow Health
              </p>

              <h3 className="mt-1.5 text-lg font-medium text-white">
                System overview
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  ["AI response quality", "Excellent", "94%"],
                  ["Task completion", "Strong", "88%"],
                  ["Workflow consistency", "Stable", "91%"],
                ].map(([label, status, value]) => (
                  <div
                    key={label}
                    className="
                      rounded-xl
                      border
                      border-white/[0.05]
                      bg-white/[0.015]
                      p-3
                      transition-all
                      duration-300
                      hover:border-violet-400/15
                      hover:bg-white/[0.025]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/35">
                        {label}
                      </span>

                      <span className="text-[9px] text-emerald-300/60">
                        {status}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-violet-500
                            to-cyan-400
                          "
                          style={{
                            width: value,
                          }}
                        />
                      </div>

                      <span className="text-[9px] text-white/25">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ElementTooltip>
        </div>

        {/* ===================================================
            AI INSIGHTS
        =================================================== */}

        <div className="mt-3">
          <div className="mb-4">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Intelligence Layer
            </p>

            <h3 className="mt-1.5 text-lg font-medium text-white">
              AI-generated insights
            </h3>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {insights.map((insight, index) => {
              const pos: TooltipPosition =
                index === 0 ? "top-right" : index === 2 ? "top-left" : "top";

              return (
                <ElementTooltip
                  key={insight.title}
                  library="React Insight Card Component"
                  tailwind="group rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5"
                  animation="Hover -translate-y-1, border transition-all duration-500"
                  position={pos}
                  className="w-full"
                >
                  <div
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-white/[0.018]
                      p-5
                      w-full
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-violet-400/15
                      hover:bg-white/[0.03]
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/[0.07]
                        text-violet-300
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                    >
                      {insight.icon}
                    </div>

                    <h4 className="mt-5 text-sm font-medium text-white">
                      {insight.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-white/25">
                      {insight.description}
                    </p>

                    <button
                      type="button"
                      className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        text-white/25
                        transition-all
                        duration-300
                        group-hover:gap-3
                        group-hover:text-violet-300
                        focus:outline-none
                      "
                    >
                      View insight
                      <span>→</span>
                    </button>
                  </div>
                </ElementTooltip>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}