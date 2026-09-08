"use client";

import { useEffect, useState, useRef } from "react";
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

  // Global window scroll track karega (Freeze problem 100% khatam)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Parallax smooth dynamic float (0 se start hoke subtle upward motion)
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -180]);

  // VISIBILITY TIMELINE:
  // Hero (0) se Countdown ke 85% tak pura visible (1)
  // Countdown khatam hote hi (1.0) complete invisible (0)
  const opacityFade = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  if (!mounted) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA (Hero start -> Countdown end pe gayab)
      ===================================================== */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]"
      >
        <div className="relative h-full w-full flex items-center justify-start overflow-visible">
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
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Mirrored, Countdown end pe gayab)
      ===================================================== */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem]"
      >
        <div className="relative h-full w-full flex items-center justify-end overflow-visible">
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
      </motion.div>

      {/* SECTIONS CONTENT (Hero + ScratchReveal + Countdown) */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
