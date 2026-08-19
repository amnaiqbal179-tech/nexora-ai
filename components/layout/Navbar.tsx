"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "AI Tools", href: "#ai-tools" },
  { name: "Projects", href: "#projects" },
  { name: "Analytics", href: "#analytics" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08090D]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          href="#dashboard"
          className="group flex select-none items-center gap-2"
        >
          {/* Logo Icon */}
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

          {/* Logo Text */}
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

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
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

              {/* Animated underline */}
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

              {/* Small hover indicator */}
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
          ))}
        </div>

        {/* =========================================
            DESKTOP PROFILE
        ========================================= */}

        <div className="relative hidden md:block">

          <button
            type="button"
            onClick={() => setProfileOpen((prev) => !prev)}
            aria-expanded={profileOpen}
            className="
              group flex cursor-pointer select-none
              items-center gap-3
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-3 py-2
              transition-all
              duration-300
              ease-out
              hover:border-white/20
              hover:bg-white/[0.08]
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-violet-400/40
            "
          >
            {/* Avatar */}
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
                ease-out
                group-hover:scale-110
              "
            >
              A
            </span>

            <span className="text-sm font-medium text-white/80">
              Amna
            </span>

            {/* Arrow */}
            <span
              className={`
                text-xs text-white/40
                transition-transform
                duration-300
                ease-out
                ${profileOpen ? "rotate-180" : ""}
              `}
            >
              ↓
            </span>
          </button>

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
            {["Profile", "Preferences", "Settings"].map((item) => (
              <button
                key={item}
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
                {item}
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
            focus:outline-none
            focus:ring-2
            focus:ring-violet-400/40
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
                ${
                  menuOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-2"
                }
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
                ${
                  menuOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-2"
                }
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
              ? "max-h-96 opacity-100"
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
                active:scale-[0.98]
              "
            >
              {item.name}
            </Link>
          ))}

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
                <p className="text-sm font-medium text-white">
                  Amna
                </p>

                <p className="text-xs text-white/40">
                  AI Workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}