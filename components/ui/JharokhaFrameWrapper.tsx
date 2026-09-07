"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax speed - jharokha content se thoda alag pace par chalega
  const jharokhaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =====================================================
          1. LEFT JHAROKHA PILLAR (Floating on the left side)
      ===================================================== */}
      <motion.div
        style={{ y: jharokhaY }}
        className="pointer-events-none absolute left-0 top-0 z-30 hidden h-full w-28 md:block lg:w-48 xl:w-60"
      >
        <div
          className="sticky top-0 h-screen w-full bg-contain bg-left bg-repeat-y opacity-75 drop-shadow-[4px_0_15px_rgba(0,0,0,0.5)]"
          style={{
            backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
            maskImage:
              "linear-gradient(to right, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 60%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA PILLAR (Floating on the right side)
      ===================================================== */}
      <motion.div
        style={{ y: jharokhaY }}
        className="pointer-events-none absolute right-0 top-0 z-30 hidden h-full w-28 md:block lg:w-48 xl:w-60"
      >
        <div
          className="sticky top-0 h-screen w-full bg-contain bg-right bg-repeat-y opacity-75 drop-shadow-[-4px_0_15px_rgba(0,0,0,0.5)]"
          style={{
            backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
            maskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* =====================================================
          ACTUAL CONTENT (Hero + Scratch + Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
