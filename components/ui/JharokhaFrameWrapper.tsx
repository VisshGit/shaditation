"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Poore container (Hero + Scratch + Countdown) ka scroll track hoga
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Subtle natural depth float
  const jharokhaY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      {/* =====================================================
          1. LEFT JHAROKHA PILLAR
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-24 md:block lg:w-36 xl:w-44">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            className="h-[115%] w-full bg-contain bg-left-top bg-repeat-y drop-shadow-[5px_0_15px_rgba(0,0,0,0.55)]"
            style={{
              y: jharokhaY,
              backgroundImage: "url('/themes/rajasthani/jharokha-pillar.png')",
              backgroundSize: "100% auto",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          2. RIGHT JHAROKHA PILLAR (Mirrored for right border)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-24 md:block lg:w-36 xl:w-44">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            className="h-[115%] w-full -scale-x-100 bg-contain bg-left-top bg-repeat-y drop-shadow-[-5px_0_15px_rgba(0,0,0,0.55)]"
            style={{
              y: jharokhaY,
              backgroundImage: "url('/themes/rajasthani/jharokha-pillar.png')",
              backgroundSize: "100% auto",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT (Hero + ScratchReveal + Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
