"use client";

import { useState } from "react";

type Tab = "overview" | "analytics" | "projects" | "tasks";

const navigation: { id: Tab; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "analytics", label: "Analytics", icon: "◈" },
  { id: "projects", label: "Projects", icon: "◇" },
  { id: "tasks", label: "Tasks", icon: "✓" },
];

const metrics = [
  {
    label: "AI REQUESTS",
    value: "12,840",
    change: "+18.4%",
    description: "vs last week",
  },
  {
    label: "TASKS COMPLETED",
    value: "1,284",
    change: "+12.8%",
    description: "vs last week",
  },
  {
    label: "TIME SAVED",
    value: "48.6h",
    change: "+24.2%",
    description: "this month",
  },
];

const activities = [
  {
    title: "AI generated project summary",
    time: "2 min ago",
    type: "AI",
  },
  {
    title: "Marketing strategy completed",
    time: "18 min ago",
    type: "TASK",
  },
  {
    title: "New workspace created",
    time: "42 min ago",
    type: "SYSTEM",
  },
];

const chartData = [35, 48, 42, 64, 58, 76, 69, 82, 73, 91, 84, 97];

const projects = [
  {
    name: "Nexora Marketing",
    description: "AI-powered marketing campaign",
    progress: 86,
    status: "Active",
  },
  {
    name: "Product Launch",
    description: "Launch strategy and planning",
    progress: 64,
    status: "In Progress",
  },
  {
    name: "Content Strategy",
    description: "Content ideas and publishing plan",
    progress: 42,
    status: "Planning",
  },
];

const tasks = [
  {
    title: "Review AI generated summary",
    priority: "High",
    due: "Today",
    completed: false,
  },
  {
    title: "Complete marketing strategy",
    priority: "Medium",
    due: "Tomorrow",
    completed: true,
  },
  {
    title: "Generate content ideas",
    priority: "Low",
    due: "Friday",
    completed: false,
  },
  {
    title: "Analyze weekly performance",
    priority: "Medium",
    due: "Saturday",
    completed: false,
  },
];

export default function AIWorkspace() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const [completedTasks, setCompletedTasks] = useState<string[]>([
    "Complete marketing strategy",
  ]);

  const toggleTask = (title: string) => {
    setCompletedTasks((current) =>
      current.includes(title)
        ? current.filter((task) => task !== title)
        : [...current, title]
    );
  };

  return (
    <section
      id="workspace"
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
        lg:pt-14
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
          left-[4%]
          top-[18%]
          h-[420px]
          w-[420px]
          animate-nexora-glow
          rounded-full
          bg-violet-600/[0.045]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[4%]
          right-[3%]
          h-[380px]
          w-[380px]
          animate-nexora-glow
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
            SECTION INTRO
        =================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              animate-nexora-fade-up
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/15
              bg-violet-500/[0.045]
              px-4
              py-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-violet-300/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-nexora-pulse
                rounded-full
                bg-violet-400
                shadow-[0_0_12px_rgba(139,92,246,0.7)]
              "
            />

            Intelligent Workspace
          </div>

          <h2
            className="
              mt-5
              animate-nexora-fade-up
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
            style={{ animationDelay: "120ms" }}
          >
            Your work,

            <span
              className="
                block
                bg-gradient-to-r
                from-white
                via-white/80
                to-white/25
                bg-clip-text
                text-transparent
              "
            >
              intelligently organized.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              animate-nexora-fade-up
              text-sm
              leading-6
              text-white/35
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
            style={{ animationDelay: "240ms" }}
          >
            A unified AI workspace that turns ideas into action,
            monitors productivity and helps you make better
            decisions in real time.
          </p>
        </div>

        {/* ===================================================
            DASHBOARD SHELL
        =================================================== */}

        <div
          className="
            relative
            mt-8
            w-full
            animate-nexora-scale-in
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.09]
            bg-[#0A0C12]/95
            shadow-[0_40px_120px_rgba(0,0,0,0.5)]
            backdrop-blur-2xl
            sm:mt-10
            sm:rounded-[30px]
            lg:mt-12
          "
          style={{ animationDelay: "400ms" }}
        >
          {/* Top accent */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-400/60
              to-transparent
            "
          />

          {/* =================================================
              DASHBOARD HEADER
          ================================================= */}

          <header
            className="
              flex
              flex-col
              gap-4
              border-b
              border-white/[0.065]
              px-5
              py-4
              sm:px-6
              sm:py-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  group
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-violet-400/20
                  bg-violet-500/[0.08]
                  text-violet-300
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:rotate-3
                  hover:border-violet-400/40
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-violet-400/10
                    blur-xl
                    transition-transform
                    duration-700
                    group-hover:scale-150
                  "
                />

                <span className="relative text-base">✦</span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  Nexora AI
                </h3>

                <p className="mt-0.5 text-[10px] text-white/25">
                  Personal intelligence layer
                </p>
              </div>
            </div>

            {/* System status */}

            <div
              className="
                flex
                w-fit
                cursor-default
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/10
                bg-emerald-400/[0.035]
                px-3.5
                py-1.5
                transition-all
                duration-300
                hover:border-emerald-400/25
                hover:bg-emerald-400/[0.07]
              "
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
                    bg-emerald-400
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-emerald-300/70
                "
              >
                All systems operational
              </span>
            </div>
          </header>

          {/* =================================================
              DASHBOARD BODY
          ================================================= */}

          <div className="grid lg:grid-cols-[205px_1fr]">
            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside
              className="
                border-b
                border-white/[0.065]
                p-4
                lg:border-b-0
                lg:border-r
              "
            >
              <p
                className="
                  mb-2
                  px-3
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                Workspace
              </p>

              <nav
                className="
                  flex
                  gap-1
                  overflow-x-auto
                  lg:flex-col
                "
              >
                {navigation.map((item) => {
                  const active = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      aria-current={active ? "page" : undefined}
                      className={`
                        group
                        relative
                        flex
                        shrink-0
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-left
                        text-xs
                        transition-all
                        duration-300
                        ease-out
                        focus:outline-none
                        focus:ring-2
                        focus:ring-violet-400/20
                        active:scale-[0.97]

                        ${
                          active
                            ? "bg-white/[0.065] text-white"
                            : "text-white/30 hover:bg-white/[0.035] hover:text-white/70"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          text-sm
                          transition-all
                          duration-300
                          group-hover:scale-105

                          ${
                            active
                              ? "bg-violet-500/15 text-violet-300"
                              : "bg-white/[0.03]"
                          }
                        `}
                      >
                        {item.icon}
                      </span>

                      {item.label}

                      {active && (
                        <span
                          className="
                            absolute
                            bottom-1/2
                            right-2
                            hidden
                            h-1.5
                            w-1.5
                            translate-y-1/2
                            rounded-full
                            bg-violet-400
                            shadow-[0_0_10px_rgba(139,92,246,0.8)]
                            lg:block
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* AI Core */}

              <div
                className="
                  mt-7
                  hidden
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.018]
                  p-4
                  transition-all
                  duration-500
                  hover:border-cyan-400/10
                  hover:bg-white/[0.025]
                  lg:block
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
                    AI CORE
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-nexora-pulse
                      rounded-full
                      bg-cyan-400
                    "
                  />
                </div>

                <div className="mt-3 text-lg font-semibold text-white">
                  98.7%
                </div>

                <p className="mt-1 text-[9px] text-white/25">
                  intelligence efficiency
                </p>

                <div
                  className="
                    mt-3
                    h-1
                    overflow-hidden
                    rounded-full
                    bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      h-full
                      w-[98.7%]
                      origin-left
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-400
                      transition-transform
                      duration-1000
                      hover:scale-x-105
                    "
                  />
                </div>
              </div>
            </aside>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <main className="min-w-0 p-5 sm:p-6 lg:p-7">
              {/* Main header */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-violet-300/50
                    "
                  >
                    {activeTab} workspace
                  </p>

                  <h3
                    className="
                      mt-1.5
                      text-xl
                      font-medium
                      tracking-tight
                      text-white
                    "
                  >
                    Good afternoon, Amna.
                  </h3>

                  <p className="mt-1 text-xs text-white/25">
                    Here is what Nexora has learned from your workflow.
                  </p>
                </div>

                <button
                  className="
                    w-fit
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-2.5
                    text-xs
                    text-white/50
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-violet-400/20
                    hover:bg-violet-500/[0.06]
                    hover:text-violet-200
                    active:scale-95
                    focus:outline-none
                    focus:ring-2
                    focus:ring-violet-400/20
                  "
                >
                  + New workspace
                </button>
              </div>

              {/* =================================================
                  TAB CONTENT
              ================================================= */}

              <div
                key={activeTab}
                className="
                  animate-nexora-fade-up
                  transition-opacity
                  duration-500
                "
              >
                {/* =================================================
                    OVERVIEW
                ================================================= */}

                {activeTab === "overview" && (
                  <>
                    {/* Metrics */}

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {metrics.map((metric, index) => (
                        <div
                          key={metric.label}
                          className="
                            group
                            cursor-pointer
                            rounded-2xl
                            border
                            border-white/[0.06]
                            bg-white/[0.018]
                            p-4
                            transition-all
                            duration-500
                            ease-out
                            hover:-translate-y-1
                            hover:border-violet-400/15
                            hover:bg-white/[0.035]
                            hover:shadow-[0_15px_50px_rgba(139,92,246,0.06)]
                          "
                          style={{
                            animationDelay: `${650 + index * 100}ms`,
                          }}
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

                          <div className="mt-3 flex items-end justify-between gap-2">
                            <span
                              className="
                                text-2xl
                                font-semibold
                                tracking-tight
                                text-white
                                transition-transform
                                duration-300
                                group-hover:scale-[1.03]
                              "
                            >
                              {metric.value}
                            </span>

                            <span className="text-[9px] text-white/20">
                              {metric.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Productivity + AI Insight */}

                    <div className="mt-3.5 grid gap-3.5 xl:grid-cols-[1.4fr_0.8fr]">
                      {/* Productivity */}

                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.018]
                          p-5
                          transition-all
                          duration-500
                          hover:border-white/[0.1]
                        "
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p
                              className="
                                text-[9px]
                                uppercase
                                tracking-[0.18em]
                                text-white/25
                              "
                            >
                              Productivity
                            </p>

                            <h4 className="mt-1.5 text-lg font-medium text-white">
                              Weekly performance
                            </h4>
                          </div>

                          <span
                            className="
                              rounded-full
                              bg-emerald-400/[0.08]
                              px-3
                              py-1
                              text-[9px]
                              text-emerald-300/70
                            "
                          >
                            +24.2%
                          </span>
                        </div>

                        {/* Chart */}

                        <div
                          className="
                            relative
                            mt-7
                            h-40
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/[0.035]
                            bg-white/[0.012]
                            px-2
                            pt-3
                          "
                        >
                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              opacity-40
                              [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)]
                              [background-size:100%_25%]
                            "
                          />

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
                                key={index}
                                className="
                                  group/bar
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
                                    to-violet-400/45
                                    transition-all
                                    duration-500
                                    ease-out
                                    group-hover/bar:scale-y-110
                                    group-hover/bar:from-violet-500/20
                                    group-hover/bar:to-violet-300/70
                                  "
                                  style={{
                                    height: `${height}%`,
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className="
                            mt-2
                            flex
                            justify-between
                            px-1
                            text-[8px]
                            text-white/15
                          "
                        >
                          <span>MON</span>
                          <span>TUE</span>
                          <span>WED</span>
                          <span>THU</span>
                          <span>FRI</span>
                          <span>SAT</span>
                          <span>SUN</span>
                        </div>
                      </div>

                      {/* AI Insight */}

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
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-violet-400/25
                          hover:shadow-[0_20px_70px_rgba(139,92,246,0.1)]
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
                              AI Insight
                            </span>

                            <div
                              className="
                                flex
                                h-8
                                w-8
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

                          <h4
                            className="
                              mt-6
                              text-xl
                              font-medium
                              leading-tight
                              tracking-tight
                              text-white
                            "
                          >
                            You are operating

                            <span className="block text-violet-300">
                              24% more efficiently.
                            </span>
                          </h4>

                          <p
                            className="
                              mt-3
                              text-xs
                              leading-6
                              text-white/30
                            "
                          >
                            Nexora detected a consistent improvement in your
                            workflow. Your task completion rate is higher
                            than your previous weekly average.
                          </p>

                          <div className="mt-6">
                            <div className="flex justify-between text-[9px]">
                              <span className="text-white/25">
                                Efficiency score
                              </span>

                              <span className="text-violet-300/70">
                                86 / 100
                              </span>
                            </div>

                            <div
                              className="
                                mt-2.5
                                h-1.5
                                overflow-hidden
                                rounded-full
                                bg-white/[0.06]
                              "
                            >
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
                                  duration-1000
                                  hover:scale-x-105
                                "
                              />
                            </div>
                          </div>

                          <button
                            className="
                              mt-6
                              flex
                              items-center
                              gap-2
                              text-xs
                              font-medium
                              text-violet-300
                              transition-all
                              duration-300
                              hover:gap-3
                              hover:text-violet-200
                              active:scale-95
                              focus:outline-none
                              focus:ring-2
                              focus:ring-violet-400/20
                            "
                          >
                            Explore insights
                            <span>→</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Activity */}

                    <div
                      className="
                        mt-3.5
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-white/[0.018]
                        p-5
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
                            Recent activity
                          </p>

                          <h4 className="mt-1.5 text-sm font-medium text-white">
                            AI activity stream
                          </h4>
                        </div>

                        <button
                          className="
                            text-[10px]
                            text-white/25
                            transition-colors
                            duration-300
                            hover:text-violet-300
                            focus:outline-none
                            focus:text-violet-300
                          "
                        >
                          View all →
                        </button>
                      </div>

                      <div className="mt-4 grid gap-1">
                        {activities.map((activity, index) => (
                          <div
                            key={activity.title}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              border
                              border-transparent
                              px-3
                              py-2.5
                              transition-all
                              duration-300
                              hover:border-white/[0.06]
                              hover:bg-white/[0.025]
                            "
                          >
                            <div
                              className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-white/[0.04]
                                text-[9px]
                                text-violet-300/60
                                transition-all
                                duration-300
                                group-hover:scale-105
                                group-hover:bg-violet-500/[0.08]
                              "
                            >
                              {index === 0 ? "✦" : "•"}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p
                                className="
                                  truncate
                                  text-xs
                                  text-white/60
                                  transition-colors
                                  duration-300
                                  group-hover:text-white
                                "
                              >
                                {activity.title}
                              </p>

                              <p className="mt-0.5 text-[9px] text-white/20">
                                {activity.time}
                              </p>
                            </div>

                            <span
                              className="
                                hidden
                                rounded-full
                                border
                                border-white/[0.06]
                                px-2
                                py-1
                                text-[8px]
                                uppercase
                                tracking-wider
                                text-white/20
                                sm:block
                              "
                            >
                              {activity.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* =================================================
                    ANALYTICS
                ================================================= */}

                {activeTab === "analytics" && (
                  <div className="mt-6 space-y-3.5">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["PRODUCTIVITY", "86%", "+14.8%"],
                        ["AI EFFICIENCY", "98.7%", "+8.2%"],
                        ["WORKFLOW SCORE", "92", "+11.4%"],
                      ].map(([label, value, change]) => (
                        <div
                          key={label}
                          className="
                            group
                            cursor-pointer
                            rounded-2xl
                            border
                            border-white/[0.06]
                            bg-white/[0.018]
                            p-5
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:border-violet-400/20
                            hover:bg-white/[0.035]
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
                              {label}
                            </span>

                            <span className="text-[9px] text-emerald-300/60">
                              {change}
                            </span>
                          </div>

                          <p
                            className="
                              mt-4
                              origin-left
                              text-3xl
                              font-semibold
                              tracking-tight
                              text-white
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                          >
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-white/[0.018]
                        p-5
                        transition-all
                        duration-500
                        hover:border-white/[0.1]
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
                            Analytics
                          </p>

                          <h4 className="mt-1.5 text-lg font-medium text-white">
                            AI usage performance
                          </h4>
                        </div>

                        <span
                          className="
                            rounded-full
                            bg-violet-500/[0.08]
                            px-3
                            py-1
                            text-[9px]
                            text-violet-300/70
                          "
                        >
                          Last 12 weeks
                        </span>
                      </div>

                      <div className="mt-7 grid h-56 grid-cols-12 items-end gap-2">
                        {chartData.map((height, index) => (
                          <div
                            key={index}
                            className="
                              group
                              flex
                              h-full
                              items-end
                            "
                          >
                            <div
                              className="
                                w-full
                                origin-bottom
                                rounded-t-lg
                                bg-gradient-to-t
                                from-violet-500/10
                                to-cyan-400/50
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
                          </div>
                        ))}
                      </div>

                      <div
                        className="
                          mt-3
                          flex
                          justify-between
                          text-[8px]
                          text-white/15
                        "
                      >
                        <span>W1</span>
                        <span>W2</span>
                        <span>W3</span>
                        <span>W4</span>
                        <span>W5</span>
                        <span>W6</span>
                        <span>W7</span>
                        <span>W8</span>
                        <span>W9</span>
                        <span>W10</span>
                        <span>W11</span>
                        <span>W12</span>
                      </div>
                    </div>

                    <div className="grid gap-3.5 md:grid-cols-2">
                      <div
                        className="
                          group
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.018]
                          p-5
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-violet-400/15
                        "
                      >
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                          Most used tool
                        </p>

                        <h4 className="mt-3 text-xl font-medium text-white">
                          AI Writer
                        </h4>

                        <p className="mt-2 text-xs leading-5 text-white/25">
                          42% of your total AI requests this month.
                        </p>

                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="
                              h-full
                              w-[42%]
                              rounded-full
                              bg-gradient-to-r
                              from-violet-500
                              to-cyan-400
                              transition-transform
                              duration-700
                              hover:scale-x-105
                            "
                          />
                        </div>
                      </div>

                      <div
                        className="
                          group
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.018]
                          p-5
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-violet-400/15
                        "
                      >
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                          Time saved
                        </p>

                        <h4 className="mt-3 text-xl font-medium text-white">
                          48.6 hours
                        </h4>

                        <p className="mt-2 text-xs leading-5 text-white/25">
                          Your AI workflow saved 24.2% more time this month.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                          <span className="text-[9px] text-emerald-300/60">
                            Improving
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================
                    PROJECTS
                ================================================= */}

                {activeTab === "projects" && (
                  <div className="mt-6">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                          Projects
                        </p>

                        <h4 className="mt-1.5 text-lg font-medium text-white">
                          Your active projects
                        </h4>
                      </div>

                      <button
                        className="
                          w-fit
                          rounded-xl
                          border
                          border-violet-400/15
                          bg-violet-500/[0.06]
                          px-4
                          py-2.5
                          text-xs
                          text-violet-300
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-violet-400/30
                          hover:bg-violet-500/[0.1]
                          active:scale-95
                          focus:outline-none
                          focus:ring-2
                          focus:ring-violet-400/20
                        "
                      >
                        + Create project
                      </button>
                    </div>

                    <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
                      {projects.map((project) => (
                        <div
                          key={project.name}
                          className="
                            group
                            cursor-pointer
                            rounded-2xl
                            border
                            border-white/[0.06]
                            bg-white/[0.018]
                            p-5
                            transition-all
                            duration-500
                            ease-out
                            hover:-translate-y-1.5
                            hover:border-violet-400/20
                            hover:bg-white/[0.035]
                            hover:shadow-[0_20px_60px_rgba(139,92,246,0.07)]
                          "
                        >
                          <div className="flex items-start justify-between">
                            <div
                              className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-violet-500/[0.08]
                                text-violet-300
                                transition-all
                                duration-500
                                group-hover:scale-110
                                group-hover:rotate-3
                              "
                            >
                              ◇
                            </div>

                            <span
                              className="
                                rounded-full
                                border
                                border-white/[0.06]
                                px-2.5
                                py-1
                                text-[8px]
                                uppercase
                                tracking-wider
                                text-white/25
                                transition-colors
                                duration-300
                                group-hover:border-violet-400/15
                                group-hover:text-violet-300/60
                              "
                            >
                              {project.status}
                            </span>
                          </div>

                          <h4 className="mt-5 text-base font-medium text-white">
                            {project.name}
                          </h4>

                          <p className="mt-2 text-xs leading-5 text-white/25">
                            {project.description}
                          </p>

                          <div className="mt-6">
                            <div className="flex items-center justify-between text-[9px]">
                              <span className="text-white/25">
                                Progress
                              </span>

                              <span className="text-violet-300/60">
                                {project.progress}%
                              </span>
                            </div>

                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
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
                                  width: `${project.progress}%`,
                                }}
                              />
                            </div>
                          </div>

                          <button
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
                            Open project
                            <span>→</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================
                    TASKS
                ================================================= */}

                {activeTab === "tasks" && (
                  <div className="mt-6">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                          Tasks
                        </p>

                        <h4 className="mt-1.5 text-lg font-medium text-white">
                          Stay on top of your work
                        </h4>
                      </div>

                      <button
                        className="
                          w-fit
                          rounded-xl
                          border
                          border-violet-400/15
                          bg-violet-500/[0.06]
                          px-4
                          py-2.5
                          text-xs
                          text-violet-300
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-violet-400/30
                          hover:bg-violet-500/[0.1]
                          active:scale-95
                          focus:outline-none
                          focus:ring-2
                          focus:ring-violet-400/20
                        "
                      >
                        + Add task
                      </button>
                    </div>

                    <div
                      className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-white/[0.018]
                      "
                    >
                      {tasks.map((task) => {
                        const isCompleted = completedTasks.includes(
                          task.title
                        );

                        return (
                          <div
                            key={task.title}
                            className="
                              group
                              flex
                              flex-col
                              gap-3
                              border-b
                              border-white/[0.05]
                              p-4
                              transition-all
                              duration-300
                              last:border-b-0
                              hover:bg-white/[0.025]
                              sm:flex-row
                              sm:items-center
                            "
                          >
                            <button
                              onClick={() => toggleTask(task.title)}
                              aria-label={
                                isCompleted
                                  ? `Mark ${task.title} as incomplete`
                                  : `Mark ${task.title} as complete`
                              }
                              className={`
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                transition-all
                                duration-300
                                active:scale-90
                                focus:outline-none
                                focus:ring-2
                                focus:ring-violet-400/20

                                ${
                                  isCompleted
                                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                                    : "border-white/[0.08] bg-white/[0.025] text-transparent hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
                                }
                              `}
                            >
                              ✓
                            </button>

                            <div className="min-w-0 flex-1">
                              <p
                                className={`
                                  text-sm
                                  transition-all
                                  duration-300
                                  ${
                                    isCompleted
                                      ? "text-white/25 line-through"
                                      : "text-white/65 group-hover:text-white"
                                  }
                                `}
                              >
                                {task.title}
                              </p>

                              <p className="mt-1 text-[9px] text-white/20">
                                Due {task.due}
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <span
                                className={`
                                  rounded-full
                                  border
                                  px-2.5
                                  py-1
                                  text-[8px]
                                  uppercase
                                  tracking-wider
                                  transition-colors
                                  duration-300

                                  ${
                                    task.priority === "High"
                                      ? "border-red-400/15 bg-red-400/[0.04] text-red-300/60"
                                      : task.priority === "Medium"
                                      ? "border-amber-400/15 bg-amber-400/[0.04] text-amber-300/60"
                                      : "border-emerald-400/15 bg-emerald-400/[0.04] text-emerald-300/60"
                                  }
                                `}
                              >
                                {task.priority}
                              </span>

                              <span
                                className={`
                                  hidden
                                  rounded-full
                                  px-2.5
                                  py-1
                                  text-[8px]
                                  sm:block

                                  ${
                                    isCompleted
                                      ? "bg-emerald-400/[0.06] text-emerald-300/50"
                                      : "bg-violet-400/[0.06] text-violet-300/50"
                                  }
                                `}
                              >
                                {isCompleted ? "Completed" : "Pending"}
                              </span>
                            </div>

                            <button
                              disabled={isCompleted}
                              className="
                                hidden
                                text-[10px]
                                text-white/20
                                transition-colors
                                duration-300
                                hover:text-violet-300
                                disabled:cursor-not-allowed
                                disabled:opacity-30
                                sm:block
                              "
                            >
                              →
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-violet-400/10
                        bg-violet-500/[0.035]
                        px-5
                        py-4
                        transition-all
                        duration-500
                        hover:border-violet-400/20
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-violet-300/50
                          "
                        >
                          Task progress
                        </p>

                        <p className="mt-1 text-sm text-white/50">
                          {completedTasks.length} of {tasks.length} tasks
                          completed
                        </p>
                      </div>

                      <span className="text-xl font-semibold text-violet-300">
                        {Math.round(
                          (completedTasks.length / tasks.length) * 100
                        )}
                        %
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}