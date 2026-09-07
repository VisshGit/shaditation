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

  // Parallax smooth float
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  // Countdown end hone par clean fade-out
  const opacityFade = useTransform(scrollYProgress, [0, 0.75, 0.95, 1], [1, 1, 0, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =====================================================
          1. LEFT JHAROKHA (Zoomed in & Pushed slightly inside)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-2 md:left-6 lg:left-10 xl:left-14 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-start overflow-visible">
          <motion.div
            style={{ y: yParallax, opacity: opacityFade }}
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
          2. RIGHT JHAROKHA (Zoomed in & Mirrored)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 right-2 md:right-6 lg:right-10 xl:right-14 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end overflow-visible">
          <motion.div
            style={{ y: yParallax, opacity: opacityFade }}
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

      {/* SECTIONS CONTENT */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
