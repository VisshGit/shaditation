"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 80) {
        setIsVisible(true);
        const progress = Math.min(
          Math.max(-rect.top / (rect.height - windowHeight || 1), 0),
          1
        );
        setParallaxY(progress * -160);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =====================================================
          1. LEFT JHAROKHA (Ease-in slide from Left)
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transform: `translateY(${parallaxY}px)`,
        }}
        className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem] transition-opacity duration-700 ease-in-out"
      >
        <div className="relative h-full w-full flex items-center justify-start overflow-visible">
          <div className="relative h-[112vh] w-full origin-left scale-110 lg:scale-120">
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Left Jharokha"
              className="absolute top-[calc(50%+0.5in)] left-0 -translate-y-1/2 h-full w-auto max-w-none object-contain drop-shadow-[14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Ease-in slide from Right)
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transform: `translateY(${parallaxY}px)`,
        }}
        className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem] transition-opacity duration-700 ease-in-out"
      >
        <div className="relative h-full w-full flex items-center justify-end overflow-visible">
          <div className="relative h-[112vh] w-full origin-right scale-110 lg:scale-120">
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Right Jharokha"
              className="absolute top-[calc(50%+0.5in)] right-0 -translate-y-1/2 h-full w-auto max-w-none -scale-x-100 object-contain drop-shadow-[-14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </motion.div>

      {/* Hero + ScratchReveal + Countdown */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
