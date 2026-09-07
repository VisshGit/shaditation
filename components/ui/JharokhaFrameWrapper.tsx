"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Is Wrapper container ke scroll progress ko track karega
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax subtle float. Upward movement speed badhane ke liye -25% check karle
  const yParallax = useTransform(scrollYProgress,, ["0%", "-20%"]);

  // --- VISIBILITY TIMELINE ---
  // Jharokha frames naturally disappear honge jab Countdown end hone lagega
  // points adjust karle tere actual design ke according
  const opacityFade = useTransform(
    scrollYProgress,
   , // Timeline points
    // Target opacity: 1 (full), 0 (hidden)
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =====================================================
          1. LEFT SIDE (Mirrored Original image)
      ===================================================== */}
      {/* --- SIZE & POSITION FIX --- */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-40 hidden md:block w-36 lg:w-56 xl:w-72">
        <div className="sticky top-0 h-screen w-full flex items-center justify-start overflow-hidden">
          <motion.div
            style={{ y: yParallax, opacity: opacityFade }}
            className="relative h-[85vh] w-full"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png" // interchange image_17.png logic applied
              alt="Left Jharokha"
              // Left border pe mirrored symmetrical, positioned left-edge
              className="absolute top-1/2 -left-16 lg:-left-24 xl:-left-32 -translate-y-1/2 h-full max-w-none -scale-x-100 object-contain drop-shadow-[10px_0_20px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          2. RIGHT SIDE (Original image)
      ===================================================== */}
      {/* --- SIZE & POSITION FIX --- */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-40 hidden md:block w-36 lg:w-56 xl:w-72">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end overflow-hidden">
          <motion.div
            style={{ y: yParallax, opacity: opacityFade }}
            className="relative h-[85vh] w-full"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png" // interchange image_17.png logic applied
              alt="Right Jharokha"
              // No extra mirror here, positioned right-edge
              className="absolute top-1/2 -right-16 lg:-right-24 xl:-right-32 -translate-y-1/2 h-full max-w-none object-contain drop-shadow-[-10px_0_20px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT (Hero + ScratchReveal + Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
