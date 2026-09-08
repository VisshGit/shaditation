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

  // Sirf is wrapper ke top se bottom tak scroll track karega
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Parallax float Countdown tak
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -140]);

  if (!mounted) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA (Locked inside wrapper boundary)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-start overflow-hidden">
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
          2. RIGHT JHAROKHA (Locked inside wrapper boundary)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden md:block w-56 lg:w-80 xl:w-[28rem]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end overflow-hidden">
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

      {/* CONTENT (Hero + ScratchReveal + Countdown) */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
