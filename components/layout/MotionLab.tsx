"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MotionLabProps {
  onClose: () => void;
}

type TooltipPosition = "top" | "bottom" | "left" | "right";

// Motion Lab ke andar use hone wala custom Tooltip component
function LabTooltip({
  children,
  library,
  tailwind,
  animation,
  position = "top",
}: {
  children: React.ReactNode;
  library: string;
  tailwind: string;
  animation: string;
  position?: TooltipPosition;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div
        className={`pointer-events-none absolute ${positionClasses[position]} z-[150] w-64 sm:w-72 rounded-2xl border border-violet-500/40 bg-[#0C0E17]/95 p-3.5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-200 ease-out ${
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

export default function MotionLab({ onClose }: MotionLabProps) {
  const [activeTab, setActiveTab] = useState<
    "core" | "gestures" | "variants" | "physics" | "presence" | "layout"
  >("core");
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#08090D]/95 backdrop-blur-2xl px-4 py-6 sm:p-10 text-white">
      
      {/* CLOSE BUTTON HEADER */}
      <div className="mx-auto max-w-6xl flex justify-end mb-2">
        <button
          type="button"
          onClick={onClose}
          className="
            flex h-10 w-10
            cursor-pointer
            items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/[0.04]
            text-white
            transition-all
            duration-300
            hover:bg-white/10
            hover:scale-105
            active:scale-95
          "
          aria-label="Close Motion Lab"
        >
          ✕
        </button>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* LAB HEADER */}
        <div className="mb-10 text-center">
          <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            ✨ Framer Motion Animation Lab & Playground
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Interactive Animation Testing Suite
          </h2>
          <p className="mt-2 text-sm text-white/60 max-w-2xl mx-auto">
            Explore official concepts: motion components, physics springs, gestures, variants, exit transitions, and scroll animations in real-time.
          </p>

          {/* NAVIGATION TABS */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: "core", label: "1. Core & Keyframes" },
              { id: "gestures", label: "2. Gestures (Hover/Tap)" },
              { id: "variants", label: "3. Variants & Stagger" },
              { id: "physics", label: "4. Spring Physics" },
              { id: "presence", label: "5. AnimatePresence" },
              { id: "layout", label: "6. Layout & Scroll" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30 border border-violet-400/50"
                    : "bg-white/[0.04] text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* LAB CONTAINER */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0D13]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          
          {/* TAB 1: CORE & KEYFRAMES */}
          {activeTab === "core" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Core Props: initial, animate, transition & Keyframes</h3>
                <p className="text-xs text-white/50 mt-1">Testing property transitions and multi-step keyframe arrays.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-8">
                {/* Standard Motion Box */}
                <div className="space-y-3">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Tween Animation</span>
                  <LabTooltip
                    library="Framer Motion Component (motion.div)"
                    tailwind="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 font-bold shadow-lg"
                    animation="initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, rotate: 360 }} duration: 1s"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 360 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 font-bold shadow-lg"
                    >
                      Motion Div
                    </motion.div>
                  </LabTooltip>
                </div>

                {/* Keyframe Box */}
                <div className="space-y-3">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Keyframe Sequence</span>
                  <LabTooltip
                    library="Framer Motion Keyframes Array"
                    tailwind="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 font-bold shadow-lg"
                    animation="scale: [1, 1.2, 1], rotate: [0, 90, 0], repeat: Infinity"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 90, 180, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 font-bold shadow-lg"
                    >
                      Keyframes
                    </motion.div>
                  </LabTooltip>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GESTURES */}
          {activeTab === "gestures" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Interactive Gestures: whileHover, whileTap, whileFocus</h3>
                <p className="text-xs text-white/50 mt-1">Direct feedback triggers responding to user hardware actions.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 py-10">
                <LabTooltip
                  library="Framer Motion Button Gesture"
                  tailwind="rounded-2xl border border-violet-400/40 bg-violet-500/20 px-6 py-4 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/20"
                  animation="whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.92 }}"
                >
                  <motion.button
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="rounded-2xl border border-violet-400/40 bg-violet-500/20 px-6 py-4 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/20 cursor-pointer"
                  >
                    Hover & Tap Me
                  </motion.button>
                </LabTooltip>

                <LabTooltip
                  library="Framer Motion Input Focus"
                  tailwind="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none w-72"
                  animation="whileFocus={{ scale: 1.03, borderColor: 'violet' }}"
                >
                  <motion.input
                    whileFocus={{ scale: 1.03, borderColor: "rgba(139, 92, 246, 0.8)" }}
                    placeholder="Click to test whileFocus..."
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none w-72 transition-colors"
                  />
                </LabTooltip>
              </div>
            </div>
          )}

          {/* TAB 3: VARIANTS & STAGGER */}
          {activeTab === "variants" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Variants & Staggered Children Animations</h3>
                <p className="text-xs text-white/50 mt-1">Parent coordinator triggers sequence child reveals with a time delay.</p>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8"
              >
                {[1, 2, 3].map((item) => (
                  <LabTooltip
                    key={item}
                    library="Staggered Variant Item"
                    tailwind="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center text-sm font-medium"
                    animation="variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}"
                  >
                    <motion.div
                      variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center text-sm font-medium hover:border-violet-500/40 transition-colors"
                    >
                      <span className="text-violet-400 block mb-1">Item 0{item}</span>
                      Staggered coordinate layout block
                    </motion.div>
                  </LabTooltip>
                ))}
              </motion.div>
            </div>
          )}

          {/* TAB 4: SPRING PHYSICS */}
          {activeTab === "physics" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Spring Physics vs Tween Timing</h3>
                <p className="text-xs text-white/50 mt-1">Testing natural physical bounce parameters (stiffness & damping).</p>
              </div>

              <div className="flex justify-center py-10">
                <LabTooltip
                  library="Draggable Spring Physics Box"
                  tailwind="flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-500 to-rose-500 font-bold shadow-xl text-center p-4 text-xs"
                  animation="drag + transition={{ type: 'spring', stiffness: 400, damping: 15 }}"
                >
                  <motion.div
                    drag
                    dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                    whileDrag={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex h-36 w-36 cursor-grab active:cursor-grabbing items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-500 to-rose-500 font-bold shadow-xl text-center p-4 text-xs"
                  >
                    Drag Me! (Spring Physics)
                  </motion.div>
                </LabTooltip>
              </div>
              <p className="text-[11px] text-white/40">Hint: Try dragging the box around with your mouse or finger!</p>
            </div>
          )}

          {/* TAB 5: ANIMATE PRESENCE */}
          {activeTab === "presence" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Exit Animations with AnimatePresence</h3>
                <p className="text-xs text-white/50 mt-1">Enables components to animate out smoothly before fully unmounting from DOM.</p>
              </div>

              <div>
                <button
                  onClick={() => setIsBoxVisible(!isBoxVisible)}
                  className="rounded-xl bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs font-medium transition cursor-pointer border border-white/10"
                >
                  {isBoxVisible ? "Unmount Element (Trigger Exit)" : "Mount Element"}
                </button>
              </div>

              <div className="flex justify-center min-h-[140px] items-center">
                <AnimatePresence>
                  {isBoxVisible && (
                    <LabTooltip
                      library="AnimatePresence Exit Component"
                      tailwind="flex h-28 w-56 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold shadow-lg"
                      animation="initial={{ opacity: 0, scale: 0.7 }} exit={{ opacity: 0, scale: 0.7 }}"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="flex h-28 w-56 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold shadow-lg"
                      >
                        ✨ Active in DOM Tree
                      </motion.div>
                    </LabTooltip>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* TAB 6: LAYOUT & SCROLL */}
          {activeTab === "layout" && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-violet-300">Layout & Scroll Animations (whileInView & layout)</h3>
                <p className="text-xs text-white/50 mt-1">Testing layout auto-positioning and scroll-triggered visibility.</p>
              </div>

              {/* Layout Box Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                <div className="space-y-2">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider block">Layout Prop Animation</span>
                  <LabTooltip
                    library="Framer Motion Layout Prop"
                    tailwind="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 font-bold shadow-lg cursor-pointer text-xs"
                    animation="layout + whileTap={{ scale: 0.9 }}"
                  >
                    <motion.div
                      layout
                      whileTap={{ scale: 0.9 }}
                      className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 font-bold shadow-lg cursor-pointer text-xs"
                    >
                      Layout Box
                    </motion.div>
                  </LabTooltip>
                </div>
              </div>

              {/* Scroll Trigger Section */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center px-2">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider">Scroll Trigger (whileInView)</span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-2 py-0.5 rounded-md">
                    whileInView
                  </span>
                </div>

                {/* Fixed Scrollable Container */}
                <div className="h-56 overflow-y-auto rounded-2xl border border-white/10 bg-black/50 p-6 text-left relative">
                  <div className="space-y-36 pb-12">
                    <div className="text-center text-xs text-white/50 pt-2 font-medium">
                      ⬇️ Scroll down inside this box to trigger the whileInView animation...
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-20 w-full rounded-xl bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-400/40 flex items-center justify-center text-violet-200 text-xs font-bold shadow-lg backdrop-blur-md"
                    >
                      ✨ Triggered successfully via whileInView!
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}