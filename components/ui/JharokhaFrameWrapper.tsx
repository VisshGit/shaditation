"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Poore wrapper ka scroll track hoga
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slow parallax depth scroll
  const jharokhaY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      {/* =====================================================
          1. LEFT JHAROKHA PILLAR (Z-40 rakha hai taaki countdown ke upar dikhe)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-40 hidden w-28 md:block lg:w-44 xl:w-56">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: jharokhaY }}
            className="h-[120%] w-full bg-contain bg-left bg-repeat-y opacity-85 drop-shadow-[6px_0_20px_rgba(0,0,0,0.6)]"
            style={{
              backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
              maskImage:
                "linear-gradient(to right, black 65%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 65%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          2. RIGHT JHAROKHA PILLAR (Z-40 rakha hai)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-40 hidden w-28 md:block lg:w-44 xl:w-56">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: jharokhaY }}
            className="h-[120%] w-full bg-contain bg-right bg-repeat-y opacity-85 drop-shadow-[-6px_0_20px_rgba(0,0,0,0.6)]"
            style={{
              backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
              maskImage:
                "linear-gradient(to left, black 65%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 65%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          CONTENT (Hero, Scratch, Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
