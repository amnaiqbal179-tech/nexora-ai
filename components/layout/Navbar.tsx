"use client";

import { useState } from "react";
import Link from "next/link";
import MotionLab from "./MotionLab"; // MotionLab component import kiya gaya hai

const navItems = [
  { name: "Dashboard", href: "#dashboard", tooltip: "Go to Main Dashboard" },
  { name: "AI Tools", href: "#ai-tools", tooltip: "Explore AI Tool Suite" },
  { name: "Projects", href: "#projects", tooltip: "View Active Projects" },
  { name: "Analytics", href: "#analytics", tooltip: "Check Performance Metrics" },
];

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
      className={`relative inline-flex items-center ${className}`}
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [motionActive, setMotionActive] = useState(false); // Motion state

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08090D]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* =========================================
              LOGO
          ========================================= */}
          <ElementTooltip
            library="Next.js Link & Brand Logo"
            tailwind="group flex select-none items-center gap-2"
            animation="Hover scale 110%, rotate 6deg transition-all duration-300"
            position="bottom"
          >
            <Link
              href="#dashboard"
              className="group flex select-none items-center gap-2"
            >
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl
                  border border-violet-400/30
                  bg-violet-500/10
                  text-violet-300
                  transition-all
                  duration-300
                  ease-out
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-violet-500/20
                "
              >
                ✦
              </span>

              <span
                className="
                  text-lg font-bold tracking-[0.2em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-violet-300
                "
              >
                NEXORA
              </span>
            </Link>
          </ElementTooltip>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item, index) => (
              <ElementTooltip
                key={item.name}
                library="Next.js Navigation Link"
                tailwind="group relative select-none rounded-lg px-4 py-2.5 text-sm font-medium text-white/55 hover:bg-white/5 hover:text-white"
                animation="Underline expand, hover color transition duration-300"
                position="bottom"
              >
                <Link
                  href={item.href}
                  className="
                    group relative
                    select-none
                    rounded-lg
                    px-4 py-2.5
                    text-sm font-medium
                    text-white/55
                    transition-colors
                    duration-300
                    ease-out
                    hover:bg-white/5
                    hover:text-white
                    active:scale-95
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute bottom-1 left-1/2
                      h-px w-0
                      -translate-x-1/2
                      bg-violet-400
                      transition-all
                      duration-300
                      ease-out
                      group-hover:w-1/2
                    "
                  />

                  {index === 0 && (
                    <span
                      className="
                        absolute -right-0.5 -top-0.5
                        h-1.5 w-1.5
                        rounded-full
                        bg-violet-400
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}
                </Link>
              </ElementTooltip>
            ))}

            {/* =========================================
                MOTION BUTTON ADDED HERE
            ========================================= */}
            <ElementTooltip
              library="React Motion Toggle Button"
              tailwind={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                motionActive
                  ? "border-violet-400/50 bg-violet-500/20 text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white"
              }`}
              animation="Active scale effect, border glow transition duration-300"
              position="bottom"
            >
              <button
                type="button"
                onClick={() => setMotionActive((prev) => !prev)}
                className={`
                  rounded-xl
                  px-4 py-2
                  text-sm font-medium
                  transition-all
                  duration-300
                  border
                  active:scale-95
                  focus:outline-none
                  cursor-pointer
                  ${
                    motionActive
                      ? "border-violet-400/50 bg-violet-500/20 text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                ✨ Motion {motionActive ? "On" : "Off"}
              </button>
            </ElementTooltip>
          </div>

          {/* =========================================
              DESKTOP PROFILE
          ========================================= */}
          <div className="relative hidden md:block">
            <ElementTooltip
              library="React Profile Dropdown Container"
              tailwind="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
              animation="Hover border & background transition duration-350"
              position="bottom-left"
            >
              <button
                type="button"
                onClick={() => setProfileOpen((prev) => !prev)}
                aria-expanded={profileOpen}
                className="
                  group flex cursor-pointer select-none
                  items-center gap-3
                  rounded-full
                  px-1 py-0.5
                  transition-all
                  duration-300
                  focus:outline-none
                "
              >
                <span
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-violet-400
                    to-cyan-400
                    text-xs
                    font-bold
                    text-black
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  A
                </span>

                <span className="text-sm font-medium text-white/80">
                  Amna
                </span>

                <span
                  className={`
                    text-xs text-white/40
                    transition-transform
                    duration-300
                    ${profileOpen ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </button>
            </ElementTooltip>

            {/* Profile Dropdown */}
            <div
              className={`
                absolute right-0 top-full mt-3 w-52
                origin-top-right
                rounded-2xl
                border border-white/10
                bg-[#11131A]/95
                p-2
                shadow-2xl shadow-black/40
                backdrop-blur-xl
                transition-all
                duration-300
                ease-out
                ${
                  profileOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }
              `}
            >
              {[
                { label: "Profile", tip: "View Profile Info" },
                { label: "Preferences", tip: "Customize Workspace" },
                { label: "Settings", tip: "System Configurations" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="
                    w-full
                    cursor-pointer
                    rounded-xl
                    px-3 py-2.5
                    text-left
                    text-sm
                    text-white/60
                    transition-colors
                    duration-200
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {item.label}
                </button>
              ))}

              <div className="my-1 h-px bg-white/10" />

              <button
                type="button"
                className="
                  w-full
                  cursor-pointer
                  rounded-xl
                  px-3 py-2.5
                  text-left
                  text-sm
                  text-red-400/80
                  transition-colors
                  duration-200
                  hover:bg-red-500/10
                  hover:text-red-400
                "
              >
                Logout
              </button>
            </div>
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================= */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="
              flex h-10 w-10
              cursor-pointer
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/[0.04]
              transition-all
              duration-300
              hover:bg-white/[0.08]
              active:scale-90
              md:hidden
            "
          >
            <span className="relative block h-5 w-5">
              <span
                className={`
                  absolute left-0 top-1/2
                  h-px w-5
                  bg-white
                  transition-all
                  duration-300
                  ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"}
                `}
              />
              <span
                className={`
                  absolute left-0 top-1/2
                  h-px w-5
                  bg-white
                  transition-opacity
                  duration-200
                  ${menuOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute left-0 top-1/2
                  h-px w-5
                  bg-white
                  transition-all
                  duration-300
                  ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"}
                `}
              />
            </span>
          </button>
        </nav>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================= */}
        <div
          className={`
            overflow-hidden border-t border-white/5
            bg-[#08090D]/95
            transition-all
            duration-300
            ease-out
            md:hidden
            ${
              menuOpen
                ? "max-h-[420px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  cursor-pointer
                  rounded-xl
                  px-4 py-3
                  text-sm font-medium
                  text-white/60
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:translate-x-1
                  hover:text-white
                "
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Motion Toggle Button */}
            <button
              type="button"
              onClick={() => {
                setMotionActive((prev) => !prev);
              }}
              className={`
                w-full text-left
                cursor-pointer
                rounded-xl
                px-4 py-3
                text-sm font-medium
                transition-all
                duration-300
                border
                ${
                  motionActive
                    ? "border-violet-400/50 bg-violet-500/20 text-violet-200"
                    : "border-white/10 bg-white/[0.04] text-white/70"
                }
              `}
            >
              ✨ Motion {motionActive ? "On" : "Off"}
            </button>

            <div className="mt-3 border-t border-white/10 pt-3">
              <div className="flex items-center gap-3 px-4 py-2">
                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-violet-400
                    to-cyan-400
                    text-xs font-bold
                    text-black
                  "
                >
                  A
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Amna</p>
                  <p className="text-xs text-white/40">AI Workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MOTION LAB WORKSPACE (Renders when Motion is On)
      ========================================= */}
      {motionActive && <MotionLab onClose={() => setMotionActive(false)} />}
    </>
  );
}