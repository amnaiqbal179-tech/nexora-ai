Project Documentation: Interactive Next.js Frontend & Animation Lab
1. Project Overview
This project is an advanced web application built using Next.js (App Router), TypeScript, and Tailwind CSS, featuring an interactive Framer Motion Animation Lab with real-time technical tooltips to demonstrate modern UI/UX engineering principles.

2. Tech Stack Used
Framework: Next.js (React Framework with App Router)

Styling: Tailwind CSS (Utility-first responsive design)

Animation Library: Framer Motion (Declarative animations & gesture controls)

Language: TypeScript (Type-safe component architecture)

3. Core Features & Architecture
A. Dynamic Navigation & Tooltips (Navbar.tsx)
Features custom navigation items with responsive hover mechanics.

Integrated Element Tooltips that display underlying technical specifications (Library, Tailwind classes, and Animation properties) upon hovering over UI components.

B. Interactive Motion Testing Suite (MotionLab.tsx)
Designed as a full-screen modal overlay (fixed inset-0 z-[100]) with backdrop blur, structured into 5 key sub-modules:

Core & Keyframes: Demonstrates standard tweens (initial, animate) and multi-step keyframe arrays (scale, rotate, borderRadius).

Interactive Gestures: Showcases hardware response handlers like whileHover, whileTap, and whileFocus.

Variants & Stagger: Uses a parent coordinator component to sequence child element reveals with a defined time delay (staggerChildren).

Spring Physics: Explores natural physical bounce behaviors (type: "spring", stiffness, damping) alongside drag constraints.

AnimatePresence: Manages exit transitions and smooth DOM unmounting animations for conditional elements.

4. How to Run the Project
Clone the repository and navigate to the project directory.

Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser.