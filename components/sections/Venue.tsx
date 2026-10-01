"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.16, 1, 0.3, 1] as const;

export default function Venue() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking identical to Story & Events
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
      className="relative isolate flex min-h-[130vh] w-full items-center justify-center overflow-hidden bg-[#0c0704] py-48 sm:py-60 md:py-72 transform-gpu"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (mry.png - Extended Buffer)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] bg-cover bg-center will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mry.png')",
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
          VENUE CONTENT (Centered in the Isolated Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="mx-auto max-w-5xl px-4 text-center">
            {/* Top Symmetrical Breathing Spacer (Above Location label) */}
            <div className="h-16 sm:h-24 w-full" aria-hidden="true" />

            {/* Venue Header */}
            <div className="text-center">
              {/* 1. Label */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: smoothCurve }}
                className="text-sm uppercase tracking-[6px] text-amber-200 font-semibold"
                style={{ margin: 0 }}
              >
                Location
              </motion.p>

              {/* 2. Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothCurve }}
                className="h-px w-20 bg-amber-400/70 origin-center drop-shadow"
                style={{ margin: "16px auto 32px" }}
              />

              {/* 3. Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
                className="font-heading text-4xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl"
                style={{ margin: 0, lineHeight: 1.15 }}
              >
                Wedding Venue
              </motion.h2>
            </div>

            {/* Guaranteed Physical Spacer between Heading and Content Grid */}
            <div className="h-28 sm:h-36 md:h-44 w-full" aria-hidden="true" />

            {/* Content Grid */}
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
              {/* Left: Venue Details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.4, ease: smoothCurve }}
                className="group relative overflow-hidden rounded-3xl border border-[#b68d40]/40 bg-black/45 px-7 py-10 text-center md:text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 hover:border-[#e5c158]/70 hover:shadow-[0_25px_80px_rgba(182,141,64,0.3)] sm:px-10 will-change-transform transform-gpu"
              >
                <p className="mb-3 text-xs uppercase tracking-[4px] text-amber-200 font-medium">
                  The Celebration
                </p>

                <h3 className="mb-4 font-serif text-2xl sm:text-[1.65rem] font-bold text-amber-100 leading-snug group-hover:text-white transition-colors duration-300">
                  Urmila Palace &amp; Marriage Garden
                </h3>

                <div className="mb-5 h-px w-12 bg-amber-400/30 mx-auto md:mx-0" />

                <p className="mb-7 text-sm sm:text-[0.95rem] leading-7 text-amber-100/75 group-hover:text-amber-100/95 transition-colors duration-300">
                  Join us at this beautiful venue as we celebrate the beginning of
                  our forever journey.
                </p>

                <div className="space-y-3 text-sm leading-7 text-amber-100/90 sm:text-base">
                  <p>
                    <span className="mr-2 text-amber-300">📍</span>
                    Ajmer, Rajasthan[cite: 1]
                  </p>

                  <p>
                    <span className="mr-2 text-amber-300">🕖</span>
                    7:00 PM onwards
                  </p>
                </div>
              </motion.div>

              {/* Right: Map Container (Fully Colorful) */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.5, ease: smoothCurve }}
                className="overflow-hidden rounded-3xl border border-[#b68d40]/40 bg-black/45 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md"
              >
                <div className="h-80 sm:h-96">
                  <iframe
                    className="h-full w-full"
                    src="https://maps.google.com/maps?q=Urmila+palace+%26+marriage+garden+Ajmer&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    title="Urmila Palace & Marriage Garden location map"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom Symmetrical Breathing Spacer inside container */}
            <div className="h-16 sm:h-24 w-full" aria-hidden="true" />
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
