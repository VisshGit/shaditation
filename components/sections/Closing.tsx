"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollToTop from "@/components/ui/ScrollToTop"; // agar required ho

const smoothCurve = [0.16, 1, 0.3, 1] as const;

export default function Closing() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking identical to Story, Events, Venue, & RSVP
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax smooth drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section
      ref={sectionRef}
      /* Standalone cinematic stage with massive breathing buffer and zero layout shift */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#0c0704] py-48 sm:py-60 md:py-72 transform-gpu"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (closing.jpg - Extended Buffer)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] bg-cover bg-center will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/closing.jpg')",
          }}
        />
        {/* Balanced softer dark wash so image remains visible */}
        <div className="absolute inset-0 bg-[#0c0704]/70" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="absolute inset-0 bg-[#0c0704]/25 z-[1]" />

      {/* Top Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* Bottom Transition Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/70 to-transparent" />

      {/* =====================================================
          TOP DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-24 items-center justify-center -translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>

      {/* =====================================================
          CLOSING CONTENT (Centered in the Isolated Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full px-6 text-center flex flex-col items-center justify-center">
        {/* Top Symmetrical Breathing Spacer */}
        <div className="h-16 sm:h-24 w-full" aria-hidden="true" />

        {/* TOP ORNAMENT */}
        <div className="mb-8 w-full max-w-[500px]">
          <svg
            viewBox="0 0 560 42"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ color: "var(--primary)" }}
          >
            <path
              d="M5 21
                 C55 8, 95 8, 140 21
                 S225 34, 280 21
                 S335 8, 420 21
                 S505 34, 555 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.85"
            />
            <path
              d="M45 21
                 C90 14, 115 14, 150 21
                 S215 28, 280 21
                 S345 14, 410 21
                 S470 28, 515 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.45"
            />
            <circle cx="90" cy="15" r="1.8" fill="currentColor" />
            <circle cx="180" cy="26" r="1.3" fill="currentColor" />
            <circle cx="280" cy="12" r="2" fill="currentColor" />
            <circle cx="380" cy="26" r="1.3" fill="currentColor" />
            <circle cx="470" cy="15" r="1.8" fill="currentColor" />
          </svg>
        </div>

        {/* MAIN TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: smoothCurve }}
          className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          style={{
            margin: 0,
            padding: "10px 0",
            fontFamily: "var(--font-script), cursive",
            fontSize: "clamp(28px, 4.5vw, 46px)",
            lineHeight: 1.3,
            color: "var(--primary)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          Can&apos;t wait to celebrate with you
        </motion.p>

        {/* BOTTOM ORNAMENT */}
        <div className="mt-8 w-full max-w-[500px]">
          <svg
            viewBox="0 0 560 42"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ color: "var(--primary)" }}
          >
            <path
              d="M5 21
                 C55 34, 95 34, 140 21
                 S225 8, 280 21
                 S335 34, 420 21
                 S505 8, 555 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.85"
            />
            <path
              d="M45 21
                 C90 28, 115 28, 150 21
                 S215 14, 280 21
                 S345 28, 410 21
                 S470 14, 515 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.45"
            />
            <circle cx="90" cy="27" r="1.8" fill="currentColor" />
            <circle cx="180" cy="16" r="1.3" fill="currentColor" />
            <circle cx="280" cy="30" r="2" fill="currentColor" />
            <circle cx="380" cy="16" r="1.3" fill="currentColor" />
            <circle cx="470" cy="27" r="1.8" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Symmetrical Breathing Spacer inside container */}
        <div className="h-16 sm:h-24 w-full" aria-hidden="true" />
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-24 items-center justify-center translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>
    </section>
  );
}
