"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Is pure wrapper (Hero + Scratch + Countdown) ka window scroll tracking
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Parallax Travel: Smooth dynamic travel scroll ke sath
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  // Opacity Fix: Pure 0.96 (Countdown ke aakhiri bottom) tak full 1 rahega
  const opacityFade = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    [1, 1, 0]
  );

  if (!mounted) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA (Fixed Viewport, High Z-Index 50)
      ===================================================== */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="pointer-events-none fixed inset-y-0 left-0 z-50 hidden md:block w-56 lg:w-80 xl:w-[28rem]"
      >
        <div className="relative h-full w-full flex items-center justify-start overflow-visible">
          <motion.div
            style={{ y: yParallax }}
            className="relative h-[112vh] w-full origin-left scale-110 lg:scale-120"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Left Jharokha"
              className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto max-w-none object-contain drop-shadow-[14px_0_28px_rgba(0,0,0,0.7)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Fixed Viewport, High Z-Index 50)
      ===================================================== */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="pointer-events-none fixed inset-y-0 right-0 z-50 hidden md:block w-56 lg:w-80 xl:w-[28rem]"
      >
        <div className="relative h-full w-full flex items-center justify-end overflow-visible">
          <motion.div
            style={{ y: yParallax }}
            className="relative h-[112vh] w-full origin-right scale-110 lg:scale-120"
          >
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Right Jharokha"
              className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-auto max-w-none -scale-x-100 object-contain drop-shadow-[-14px_0_28px_rgba(0,0,0,0.7)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          CONTENT (Hero + ScratchReveal + Countdown)
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
