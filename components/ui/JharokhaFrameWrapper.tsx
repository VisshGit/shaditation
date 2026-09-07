"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Container specific scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax Travel: Smooth upward travel on scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  // --- VISIBILITY TIMELINE FIX ---
  // is 'Start' (Hero) to 'End' (Countdown)
  // pillars naturally fade-out on Countdown section
  // reverse transition on scroll up
  const opacityFade = useTransform(
    scrollYProgress,
   , // Timeline points
    // Target opacity: 1 (full), 0 (hidden)
  );

  if (!mounted) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =====================================================
          1. LEFT JHAROKHA (Half-cut from screen edge)
          --- SIDE FIX: Left pillar positioned LEFT ---
      ===================================================== */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden md:block">
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          className="relative h-screen w-44 lg:w-64 xl:w-80"
        >
          <img
            src="/themes/rajasthani/jharokha-pillar.png"
            alt="Left Border Jharokha"
            // SIDE & MIRROR FIX: No extra mirror here, positioned left-edge
            className="absolute top-1/2 -left-12 lg:-left-20 xl:-left-28 -translate-y-1/2 h-[92vh] max-w-none object-contain drop-shadow-[10px_0_25px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Half-cut & Mirror reversed)
          --- SIDE FIX: Right pillar positioned RIGHT ---
      ===================================================== */}
      <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden md:block">
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          className="relative h-screen w-44 lg:w-64 xl:w-80"
        >
          <img
            src="/themes/rajasthani/jharokha-pillar.png"
            alt="Right Border Jharokha"
            // SIDE & MIRROR FIX: Mirrored symmetrically, positioned right-edge
            className="absolute top-1/2 -right-12 lg:-right-20 xl:-right-28 -translate-y-1/2 h-[92vh] max-w-none -scale-x-100 object-contain drop-shadow-[-10px_0_25px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </div>

      {/* =====================================================
          SECTIONS CONTENT (Hero + ScratchReveal + Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
