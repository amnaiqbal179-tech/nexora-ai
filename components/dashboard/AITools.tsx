"use client";

import React, { useState } from "react";

type ToolId = "writer" | "analyst" | "ideas";

type Tool = {
  id: ToolId;
  icon: string;
  title: string;
  description: string;
  label: string;
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

// Hero Component Same Design Tooltip
function ElementTooltip({
  children,
  library,
  tailwind,
  position = "top",
  className = "",
}: {
  children: React.ReactNode;
  library: string;
  tailwind: string;
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
        className={`pointer-events-none absolute ${positionClasses[position]} z-[100] w-64 sm:w-72 rounded-2xl border border-violet-500/40 bg-[#0C0E17]/95 p-3.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-200 ease-out ${
          isHovered
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        {/* Library Info */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-violet-300">
            Library / Tech
          </span>
        </div>
        <p className="mt-1.5 text-xs font-medium text-white/90">{library}</p>

        {/* Tailwind CSS Info */}
        <div className="mt-3 flex items-center gap-2 border-b border-white/10 pb-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
            Tailwind CSS
          </span>
        </div>
        <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-cyan-100/80 break-words rounded-lg bg-black/60 p-2 border border-white/5">
          {tailwind}
        </p>
      </div>
    </div>
  );
}

const tools: Tool[] = [
  {
    id: "writer",
    icon: "✦",
    title: "AI Writer",
    description: "Create polished content, ideas and copy in seconds.",
    label: "Create",
  },
  {
    id: "analyst",
    icon: "◈",
    title: "Data Analyst",
    description: "Turn complex information into clear actionable insights.",
    label: "Analyze",
  },
  {
    id: "ideas",
    icon: "◎",
    title: "Idea Generator",
    description: "Explore new concepts and transform ideas into possibilities.",
    label: "Explore",
  },
];

export default function AITools() {
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedTool = tools.find((tool) => tool.id === activeTool);

  const handleToolClick = (toolId: ToolId) => {
    setActiveTool(toolId);
    setPrompt("");
    setResult("");
  };

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setResult("");

    setTimeout(() => {
      if (activeTool === "writer") {
        setResult(`AI Writer created a polished response based on: "${prompt}"`);
      }
      if (activeTool === "analyst") {
        setResult(`Data Analyst identified useful patterns and actionable insights from: "${prompt}"`);
      }
      if (activeTool === "ideas") {
        setResult(`Idea Generator discovered several creative possibilities around: "${prompt}"`);
      }
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section
      id="ai-tools"
      className="relative overflow-x-clip bg-[#08090D] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-[100px]" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-2xl text-center">
          <ElementTooltip
            library="React / HTML Span Badge"
            tailwind="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-400/70"
            position="bottom"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-400/70">
              AI POWERED WORKSPACE
            </span>
          </ElementTooltip>

          <ElementTooltip
            library="React JSX Heading (H2)"
            tailwind="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            position="bottom"
            className="w-full"
          >
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:mt-4 sm:text-5xl lg:text-6xl">
              Everything you need
              <span className="block text-white/35">to build faster.</span>
            </h2>
          </ElementTooltip>

          <ElementTooltip
            library="HTML Paragraph Element"
            tailwind="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/35 sm:text-base sm:leading-7"
            position="bottom"
          >
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/35 sm:mt-5 sm:text-base sm:leading-7">
              Powerful AI tools designed to help you think, create and execute without leaving your workspace.
            </p>
          </ElementTooltip>
        </div>

        {/* TOOL CARDS */}
        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 lg:mt-14">
          {tools.map((tool, index) => {
            const isActive = activeTool === tool.id;
            const isLeftColumn = index % 3 === 0;
            const isRightColumn = index % 3 === 2;
            const cardTooltipPos: TooltipPosition = isLeftColumn
              ? "top-right"
              : isRightColumn
              ? "top-left"
              : "top";

            return (
              <ElementTooltip
                key={tool.id}
                library="React Interactive Card Component"
                tailwind="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl"
                position={cardTooltipPos}
                className="w-full"
              >
                <button
                  type="button"
                  onClick={() => handleToolClick(tool.id)}
                  aria-pressed={isActive}
                  className={`group relative w-full cursor-pointer overflow-hidden rounded-3xl border p-5 text-left backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_25px_70px_rgba(139,92,246,0.08)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-violet-400/30 sm:p-6 ${
                    isActive
                      ? "border-violet-400/40 bg-violet-500/[0.07] shadow-[0_20px_60px_rgba(139,92,246,0.08)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-violet-400/25 hover:bg-white/[0.045]"
                  }`}
                >
                  {/* ACTIVE INDICATOR */}
                  <div
                    className={`pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-violet-400 to-cyan-400 transition-transform duration-500 ${
                      isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  {/* CARD GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* ICON */}
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 ${
                      isActive
                        ? "border-violet-400/40 bg-violet-500/15 text-violet-200"
                        : "border-white/10 bg-white/[0.04] text-violet-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10"
                    }`}
                  >
                    {tool.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="relative mt-6 sm:mt-7">
                    <h3
                      className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
                        isActive ? "text-violet-200" : "text-white group-hover:text-violet-200"
                      }`}
                    >
                      {tool.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/50">
                      {tool.description}
                    </p>
                  </div>

                  {/* BOTTOM ACTION */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-4 sm:mt-8 sm:pt-5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-violet-300/70">
                      {isActive ? "Selected" : tool.label}
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:border-violet-400/25 group-hover:bg-violet-500/10 group-hover:text-violet-300 ${
                        isActive
                          ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                          : "border-white/[0.08] text-white/30"
                      }`}
                    >
                      {isActive ? "✓" : "→"}
                    </span>
                  </div>
                </button>
              </ElementTooltip>
            );
          })}
        </div>

        {/* INTERACTIVE TOOL PANEL */}
        <div
          className={`mt-6 sm:mt-8 rounded-3xl border border-violet-400/10 bg-white/[0.018] backdrop-blur-xl transition-all duration-500 ease-out ${
            activeTool
              ? "max-h-[600px] opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 opacity-0 overflow-hidden"
          }`}
        >
          {selectedTool && (
            <div className="relative p-5 sm:p-7">
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
                      {selectedTool.icon}
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
                        Interactive Tool
                      </p>
                      <h3 className="mt-1 text-lg font-medium text-white">
                        {selectedTool.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTool(null)}
                    aria-label="Close tool"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/30 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  >
                    ×
                  </button>
                </div>

                {/* Input Field with Tooltip positioning UPWARDS */}
                <div className="mt-6">
                  <ElementTooltip
                    library="Controlled HTML Input & Submit Action"
                    tailwind="rounded-xl border border-white/[0.08] bg-white/[0.025] text-xs text-white"
                    position="top-right"
                    className="w-full"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row w-full">
                      <input
                        id="ai-tool-prompt"
                        type="text"
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") handleGenerate();
                        }}
                        placeholder="Type your prompt..."
                        className="min-w-0 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs text-white outline-none placeholder:text-white/20 focus:border-violet-400/30 focus:bg-violet-500/[0.04]"
                      />

                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={!prompt.trim() || isGenerating}
                        className="shrink-0 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] px-5 py-3 text-xs font-medium text-violet-300 transition-all hover:bg-violet-500/[0.13] disabled:opacity-50 cursor-pointer"
                      >
                        {isGenerating ? "Working..." : selectedTool.label}
                      </button>
                    </div>
                  </ElementTooltip>
                </div>

                {/* Result Section */}
                {result && (
                  <div className="mt-6 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4 text-xs text-white/50">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-violet-300/50">
                      AI Response
                    </p>
                    <p className="mt-2 text-white/80">{result}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-[#08090D]" />
    </section>
  );
}