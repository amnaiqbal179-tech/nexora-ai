"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "AI Tools", href: "#ai-tools" },
    { label: "AI Workspace", href: "#workspace" },
    { label: "Projects", href: "#projects" },
    { label: "Analytics", href: "#analytics" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090D]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* Main footer content */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-violet-400/20
                  bg-violet-500/[0.08]
                  text-violet-300
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:rotate-3
                  group-hover:border-violet-400/40
                  group-hover:bg-violet-500/[0.12]
                "
              >
                <span className="text-base transition-transform duration-300 group-hover:scale-110">
                  ✦
                </span>
              </div>

              <span className="text-sm font-semibold tracking-tight text-white">
                Nexora AI
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/30">
              An intelligent AI workspace designed to turn ideas into
              action, improve productivity, and help you work smarter.
            </p>

            {/* Status */}
            <div
              className="
                mt-6 inline-flex items-center gap-2
                rounded-full border border-emerald-400/10
                bg-emerald-400/[0.035]
                px-3.5 py-2
                transition-all duration-300
                hover:border-emerald-400/25
                hover:bg-emerald-400/[0.07]
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-300/70">
                All systems operational
              </span>
            </div>
          </div>

          {/* Product */}
          <FooterColumn title="Product" links={footerLinks.Product} />

          {/* Resources */}
          <FooterColumn title="Resources" links={footerLinks.Resources} />

          {/* Company */}
          <FooterColumn title="Company" links={footerLinks.Company} />
        </div>

        {/* Newsletter / CTA */}
        <div
          className="
            group relative mt-12 overflow-hidden
            rounded-2xl border border-violet-400/10
            bg-gradient-to-r from-violet-500/[0.07]
            via-white/[0.015] to-transparent
            p-5 sm:p-6
            transition-all duration-500
            hover:border-violet-400/20
          "
        >
          <div
            className="
              pointer-events-none absolute
              -right-20 -top-20 h-48 w-48
              rounded-full bg-violet-500/10
              blur-3xl
              transition-transform duration-1000
              group-hover:scale-150
            "
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
                Work smarter
              </p>

              <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                Let AI handle the busy work.
              </h3>

              <p className="mt-1 text-xs text-white/25">
                Turn your workflow into an intelligent system.
              </p>
            </div>

            <a
              href="#workspace"
              className="
                group/button flex w-fit items-center gap-2
                rounded-xl border border-violet-400/20
                bg-violet-500/[0.08]
                px-4 py-2.5
                text-xs font-medium text-violet-200
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-violet-400/40
                hover:bg-violet-500/[0.14]
                active:scale-95
                focus:outline-none
                focus:ring-2 focus:ring-violet-400/20
              "
            >
              Explore workspace

              <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            mt-10 flex flex-col gap-4
            border-t border-white/[0.06]
            pt-6
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[10px] text-white/20">
            © 2026 Nexora AI. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="
                text-[10px] text-white/20
                transition-colors duration-300
                hover:text-violet-300
                focus:outline-none
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                text-[10px] text-white/20
                transition-colors duration-300
                hover:text-violet-300
                focus:outline-none
              "
            >
              Terms
            </a>

            <a
              href="#faq"
              className="
                text-[10px] text-white/20
                transition-colors duration-300
                hover:text-violet-300
                focus:outline-none
              "
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/30">
        {title}
      </h4>

      <nav className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              group flex w-fit items-center gap-2
              text-xs text-white/30
              transition-all duration-300
              hover:translate-x-1
              hover:text-violet-300
              focus:outline-none
            "
          >
            <span>{link.label}</span>

            <span
              className="
                opacity-0
                -translate-x-1
                transition-all duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}