"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

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
      /* Standalone cinematic stage with balanced breathing buffer and zero layout shift */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#0c0704] py-36 sm:py-44 md:py-52 transform-gpu"
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

      {/* Bottom Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

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
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="mx-auto max-w-4xl px-4 text-center">
            {/* Top Symmetrical Breathing Spacer */}
            <div className="h-10 sm:h-16 w-full" aria-hidden="true" />

            {/* ROYAL GLASSMORPHISM CARD CONTAINER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: smoothCurve }}
              className="flex w-full flex-col items-center justify-center rounded-3xl border border-[#b68d40]/40 bg-black/45 px-8 sm:px-16 py-14 sm:py-20 text-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              {/* TOP DECORATIVE LABEL */}
              <p className="text-xs uppercase tracking-[6px] text-amber-200 font-semibold sm:text-sm">
                Forever Begins Here
              </p>

              {/* TOP DIVIDER */}
              <div className="mt-4 h-px w-20 bg-amber-400/70 origin-center drop-shadow" />

              {/* MAIN SCRIPT TEXT */}
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.2, ease: smoothCurve }}
                className="mt-8 font-serif italic text-3xl sm:text-5xl md:text-6xl text-amber-100 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight"
                style={{ fontFamily: "var(--font-script), cursive" }}
              >
                Can&apos;t wait to celebrate with you
              </motion.p>

              {/* CENTRAL ROYAL MOTIF DIVIDER */}
              <div className="mt-8 flex items-center justify-center gap-3 text-amber-300">
                <span className="h-px w-12 bg-amber-400/60 sm:w-20" />
                <span className="text-sm">✦</span>
                <span className="text-xl">𑁍</span>
                <span className="text-sm">✦</span>
                <span className="h-px w-12 bg-amber-400/60 sm:w-20" />
              </div>

              {/* COUPLE NAMES SIGNATURE */}
              <p className="mt-6 text-xs uppercase tracking-[5px] text-amber-200/90 font-medium">
                Vishal &amp; Varsha
              </p>
            </motion.div>

            {/* Bottom Symmetrical Breathing Spacer */}
            <div className="h-10 sm:h-16 w-full" aria-hidden="true" />
          </div>
        </Container>
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
