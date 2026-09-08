"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Is pure wrapper (Hero + Scratch + Countdown) ka scroll track karega
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth Parallax Float:
  // 0% se 85% tak smooth float karega (-150px)
  // 85% se 100% (Countdown end) par travel ruk jayega aur position naturally freeze/lock ho jayegi
  const yParallax = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [0, -150, -150]
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA (Sticky - Zero Layout Jerk)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-start overflow-visible">
          <motion.div
            style={{ y: yParallax }}
            className="relative h-[112vh] w-full origin-left scale-110 lg:scale-120"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Left Jharokha"
              className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto max-w-none object-contain drop-shadow-[14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Sticky - Zero Layout Jerk)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end overflow-visible">
          <motion.div
            style={{ y: yParallax }}
            className="relative h-[112vh] w-full origin-right scale-110 lg:scale-120"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Right Jharokha"
              className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-auto max-w-none -scale-x-100 object-contain drop-shadow-[-14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Hero + ScratchReveal + Countdown */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
