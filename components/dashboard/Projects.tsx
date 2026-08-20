"use client";

import { useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  category: string;
  progress: number;
  status: "Active" | "In Progress" | "Planning";
  tasks: number;
  completedTasks: number;
};

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

const projects: Project[] = [
  {
    id: 1,
    name: "Nexora Marketing",
    description:
      "AI-powered marketing campaign focused on content, strategy and growth.",
    category: "Marketing",
    progress: 86,
    status: "Active",
    tasks: 24,
    completedTasks: 21,
  },
  {
    id: 2,
    name: "Product Launch",
    description:
      "Launch strategy, product planning and campaign preparation.",
    category: "Product",
    progress: 64,
    status: "In Progress",
    tasks: 18,
    completedTasks: 12,
  },
  {
    id: 3,
    name: "Content Strategy",
    description:
      "Content ideas, publishing workflow and AI-assisted planning.",
    category: "Content",
    progress: 42,
    status: "Planning",
    tasks: 15,
    completedTasks: 6,
  },
  {
    id: 4,
    name: "AI Research",
    description:
      "Research workflow for exploring new AI tools and technologies.",
    category: "Research",
    progress: 73,
    status: "Active",
    tasks: 20,
    completedTasks: 15,
  },
  {
    id: 5,
    name: "Website Redesign",
    description:
      "Modern interface redesign focused on usability and performance.",
    category: "Design",
    progress: 55,
    status: "In Progress",
    tasks: 22,
    completedTasks: 12,
  },
  {
    id: 6,
    name: "Growth Dashboard",
    description:
      "Interactive analytics dashboard for monitoring business growth.",
    category: "Analytics",
    progress: 31,
    status: "Planning",
    tasks: 16,
    completedTasks: 5,
  },
];

const categories = [
  "All",
  "Marketing",
  "Product",
  "Content",
  "Research",
  "Design",
  "Analytics",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
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
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[15%]
          h-[400px]
          w-[400px]
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
          right-[5%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[120px]
        "
      />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <ElementTooltip
            library="React Badge Component"
            tailwind="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-400/70"
            animation="None"
            position="bottom"
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-violet-400/70
              "
            >
              YOUR PROJECTS
            </span>
          </ElementTooltip>

          <ElementTooltip
            library="React Heading (H2)"
            tailwind="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            animation="None"
            position="bottom"
            className="w-full mt-3"
          >
            <h2
              className="
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Turn ideas into
              <span className="block text-white/35">
                meaningful progress.
              </span>
            </h2>
          </ElementTooltip>

          <ElementTooltip
            library="HTML Paragraph Element"
            tailwind="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/35 sm:text-base sm:leading-7"
            animation="None"
            position="bottom"
          >
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
              Organize your projects, track progress and keep your
              AI-powered workflow moving forward.
            </p>
          </ElementTooltip>
        </div>

        {/* CATEGORY FILTER */}
        <div
          className="
            mt-10
            flex
            gap-2
            overflow-x-auto
            pb-2
            sm:justify-center
          "
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <ElementTooltip
                key={category}
                library="React Category Filter Button"
                tailwind="shrink-0 cursor-pointer select-none rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em]"
                animation="transition-all duration-300 ease-out active:scale-95"
                position="top"
              >
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0
                    cursor-pointer
                    select-none
                    rounded-full
                    border
                    px-4
                    py-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                    ease-out
                    active:scale-95
                    focus:outline-none
                    focus:ring-2
                    focus:ring-violet-400/20

                    ${
                      active
                        ? "border-violet-400/25 bg-violet-500/[0.1] text-violet-300"
                        : "border-white/[0.07] bg-white/[0.02] text-white/30 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white/70"
                    }
                  `}
                >
                  {category}
                </button>
              </ElementTooltip>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div
          className="
            mt-8
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredProjects.map((project, index) => {
            const isLeft = index % 3 === 0;
            const isRight = index % 3 === 2;
            const pos: TooltipPosition = isLeft
              ? "top-right"
              : isRight
              ? "top-left"
              : "top";

            return (
              <ElementTooltip
                key={project.id}
                library="React Project Card Component"
                tailwind="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-5 backdrop-blur-xl sm:p-6"
                animation="Hover -translate-y-2, scale-[1.01], shadow transition-all duration-500 ease-out"
                position={pos}
                className="w-full"
              >
                <article
                  className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-white/[0.018]
                    p-5
                    w-full
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-2
                    hover:scale-[1.01]
                    hover:border-violet-400/20
                    hover:bg-white/[0.035]
                    hover:shadow-[0_25px_70px_rgba(139,92,246,0.08)]
                    active:scale-[0.99]
                    sm:p-6
                  "
                  onClick={() => setSelectedProject(project)}
                >
                  {/* CARD GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-violet-500/[0.08]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* TOP */}
                  <div className="relative flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        text-violet-300
                        transition-all
                        duration-500
                        ease-out
                        group-hover:scale-110
                        group-hover:rotate-6
                        group-hover:border-violet-400/25
                        group-hover:bg-violet-500/[0.08]
                      "
                    >
                      ◇
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[8px]
                        uppercase
                        tracking-wider
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:border-violet-400/15
                        group-hover:text-violet-300/70
                      "
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="relative mt-6 text-left">
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-violet-300/45
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-lg
                        font-medium
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-violet-200
                      "
                    >
                      {project.name}
                    </h3>

                    <p
                      className="
                        mt-2
                        min-h-[48px]
                        text-xs
                        leading-6
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-white/45
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* PROGRESS */}
                  <div className="relative mt-6 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-white/25">
                        Progress
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-medium
                          text-violet-300/70
                          transition-transform
                          duration-300
                          origin-right
                          group-hover:scale-110
                        "
                      >
                        {project.progress}%
                      </span>
                    </div>

                    <div
                      className="
                        mt-2
                        h-1.5
                        overflow-hidden
                        rounded-full
                        bg-white/[0.06]
                      "
                    >
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
                          ease-out
                          group-hover:scale-x-105
                        "
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/[0.06]
                      pt-4
                    "
                  >
                    <span className="text-[9px] text-white/20">
                      {project.completedTasks} / {project.tasks} tasks
                    </span>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        px-2
                        py-1
                        text-[10px]
                        text-white/30
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:text-violet-300
                        active:scale-95
                        focus:outline-none
                        focus:ring-2
                        focus:ring-violet-400/20
                      "
                    >
                      View project
                      <span>→</span>
                    </button>
                  </div>
                </article>
              </ElementTooltip>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-white/[0.06]
              bg-white/[0.018]
              p-10
              text-center
            "
          >
            <p className="text-sm text-white/40">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-5
            backdrop-blur-sm
          "
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              w-full
              max-w-lg
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.1]
              bg-[#11131A]
              p-6
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
              transition-all
              duration-300
              text-left
            "
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-violet-300/50
                  "
                >
                  {selectedProject.category}
                </span>

                <h3 className="mt-2 text-xl font-medium text-white">
                  {selectedProject.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  text-white/40
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:border-white/[0.2]
                  hover:text-white
                  active:scale-90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-400/20
                "
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/35">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <div className="flex justify-between">
                <span className="text-[10px] text-white/25">
                  Project progress
                </span>

                <span className="text-[10px] text-violet-300">
                  {selectedProject.progress}%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
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
                  "
                  style={{
                    width: `${selectedProject.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-[9px] uppercase tracking-wider text-white/20">
                  Tasks
                </p>

                <p className="mt-2 text-xl font-medium text-white">
                  {selectedProject.tasks}
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-[9px] uppercase tracking-wider text-white/20">
                  Completed
                </p>

                <p className="mt-2 text-xl font-medium text-white">
                  {selectedProject.completedTasks}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="
                mt-6
                w-full
                rounded-xl
                border
                border-violet-400/15
                bg-violet-500/[0.08]
                px-4
                py-3
                text-xs
                font-medium
                text-violet-300
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-400/30
                hover:bg-violet-500/[0.12]
                active:scale-[0.98]
                focus:outline-none
                focus:ring-2
                focus:ring-violet-400/20
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}