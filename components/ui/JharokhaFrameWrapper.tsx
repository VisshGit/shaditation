"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Global window scroll ko direct track karega
  const { scrollY } = useScroll();

  // Scroll karne par pillars smooth upar float karenge (Parallax speed control)
  const yLeft = useTransform(scrollY, [0, 2500], [0, -350]);
  const yRight = useTransform(scrollY, [0, 2500], [0, -350]);

  // Countdown khatam hone ke baad fade out (Opacity transition)
  const opacity = useTransform(scrollY, [0, 1800, 2600], [1, 1, 0]);

  if (!mounted) {
    return <div className="relative w-full">{children}</div>;
  }

  return (
    <div className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA PILLAR (Fixed to Screen Viewport)
      ===================================================== */}
      <motion.div
        style={{ y: yLeft, opacity }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden h-[150vh] w-28 md:block lg:w-36 xl:w-44"
      >
        <div
          className="h-full w-full bg-contain bg-top bg-repeat-y drop-shadow-[8px_0_20px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: "url('/themes/rajasthani/jharokha-pillar.png')",
            backgroundSize: "100% auto",
          }}
        />
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA PILLAR (Mirrored & Fixed)
      ===================================================== */}
      <motion.div
        style={{ y: yRight, opacity }}
        className="pointer-events-none fixed top-0 right-0 z-50 hidden h-[150vh] w-28 md:block lg:w-36 xl:w-44"
      >
        <div
          className="h-full w-full -scale-x-100 bg-contain bg-top bg-repeat-y drop-shadow-[-8px_0_20px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: "url('/themes/rajasthani/jharokha-pillar.png')",
            backgroundSize: "100% auto",
          }}
        />
      </motion.div>

      {/* =====================================================
          MAIN SECTIONS CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
