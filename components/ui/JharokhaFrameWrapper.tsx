"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function JharokhaFrameWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPillars, setShowPillars] = useState(true);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jab tak Wrapper (Countdown ka bottom) screen ke viewport me hai, tab tak true rahega
      // Jaise hi Countdown viewport se upar nikal jayega, turant false ho jayega
      if (rect.bottom > 100) {
        setShowPillars(true);
        // Hero se Countdown ke beech smooth parallax offset
        const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight || 1), 0), 1);
        setScrollYOffset(progress * -160);
      } else {
        setShowPillars(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* =====================================================
          1. LEFT JHAROKHA (Hero to Countdown Locked)
      ===================================================== */}
      <motion.div
        animate={{
          opacity: showPillars ? 1 : 0,
          y: scrollYOffset,
          pointerEvents: showPillars ? "none" : "none",
        }}
        // --- SMOOTH FADE TRANSITION FIX ---
        transition={{ 
          opacity: { duration: 0.6, ease: "easeInOut" }, // smoothness metrics ensure accurate mapping
          y: { ease: "linear", duration: 0 } // parallax metrics accurate ensure mapping
        }}
        className={`fixed inset-y-0 left-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem] ${
          !showPillars ? "pointer-events-none invisible" : ""
        }`}
      >
        <div className="relative h-full w-full flex items-center justify-start overflow-visible">
          <div className="relative h-[112vh] w-full origin-left scale-110 lg:scale-120">
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Left Jharokha"
              className="absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto max-w-none object-contain drop-shadow-[14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          2. RIGHT JHAROKHA (Hero to Countdown Locked)
      ===================================================== */}
      <motion.div
        animate={{
          opacity: showPillars ? 1 : 0,
          y: scrollYOffset,
          pointerEvents: showPillars ? "none" : "none",
        }}
        // --- SMOOTH FADE TRANSITION FIX ---
        transition={{ 
          opacity: { duration: 0.6, ease: "easeInOut" }, // smoothness metrics ensure accurate mapping
          y: { ease: "linear", duration: 0 } // parallax metrics accurate ensure mapping
        }}
        className={`fixed inset-y-0 right-0 z-40 hidden md:block w-56 lg:w-80 xl:w-[28rem] ${
          !showPillars ? "pointer-events-none invisible" : ""
        }`}
      >
        <div className="relative h-full w-full flex items-center justify-end overflow-visible">
          <div className="relative h-[112vh] w-full origin-right scale-110 lg:scale-120">
            <img
              src="/themes/rajasthani/jharokha-pillar.png"
              alt="Right Jharokha"
              className="absolute top-1/2 right-0 -translate-y-1/2 h-full w-auto max-w-none -scale-x-100 object-contain drop-shadow-[-14px_0_28px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </motion.div>

      {/* Hero + ScratchReveal + Countdown */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
