"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const photos = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
  "/images/image6.jpeg",
];

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth continuous parallax drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      /* Standalone cinematic stage with massive breathing buffer */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#faf6ee] py-40 sm:py-52 md:py-60"
    >
      {/* =====================================================
          PARALLAX LIGHT ROYAL PARCHMENT BACKGROUND
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] bg-cover bg-center will-change-transform z-0"
      >
        {/* Soft Royal Parchment Base */}
        <div className="h-full w-full bg-[#faf6ee]" />

        {/* Subtle Ambient Heritage Light Accents */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f3e5c8]/60 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-[#ebd19f]/40 blur-3xl" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions to adjacent dark sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#0c0704] via-[#0c0704]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-48 bg-gradient-to-b from-[#b68d40]/25 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/40 to-transparent" />

      {/* =====================================================
          TOP DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-24 items-center justify-center -translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-500/80 to-amber-600" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-600 drop-shadow-[0_0_10px_rgba(245,215,124,0.7)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-500/80 to-amber-600" />
      </div>

      {/* =====================================================
          GALLERY CONTENT (Centered Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          {/* Gallery Heading */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl px-4 text-center sm:px-0">
              {/* 1. Label */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
                className="text-xs uppercase tracking-[6px] text-[#936a24] font-semibold sm:text-sm sm:tracking-[7px]"
                style={{ margin: 0 }}
              >
                Memories
              </motion.p>

              {/* 2. Divider */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
                className="mx-auto flex items-center justify-center gap-3"
                style={{ margin: "16px auto 28px" }}
              >
                <span className="h-px w-14 bg-[#b68d40]/50 sm:w-20" />
                <span className="text-sm text-[#b68d40]">✦</span>
                <span className="h-px w-14 bg-[#b68d40]/50 sm:w-20" />
              </motion.div>

              {/* 3. Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
                className="font-heading text-4xl text-[#2b1d0e] drop-shadow-sm sm:text-5xl md:text-6xl"
                style={{
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Our Gallery
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.55, ease: smoothCurve }}
                className="mt-5 text-sm sm:text-base leading-relaxed text-[#68523c] max-w-xl mx-auto"
              >
                Captured glances, timeless frames, and beautiful reminiscence of our togetherness.
              </motion.p>
            </div>
          </div>

          {/* Guaranteed Physical Breathing Spacer */}
          <div className="h-20 sm:h-28 md:h-32 w-full" aria-hidden="true" />

          {/* Photos Grid with Staggered Entrance */}
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 px-4 sm:gap-8 sm:px-0 md:grid-cols-3 items-center">
            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + (index % 3) * 0.15,
                  ease: smoothCurve,
                }}
                className={`group relative overflow-hidden rounded-3xl border-2 border-[#b68d40]/35 bg-white shadow-[0_20px_50px_rgba(75,50,22,0.12)] hover:border-[#b68d40]/75 hover:shadow-[0_25px_60px_rgba(182,141,64,0.25)] transition duration-500 will-change-transform ${
                  index % 2 === 1
                    ? "h-[380px] sm:h-[440px]"
                    : "h-[320px] sm:h-[360px]"
                }`}
              >
                {/* Image */}
                <img
                  src={photo}
                  alt={`Wedding memory ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Luxury Film Grain / Light Gold Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1d0e]/25 via-transparent to-white/10 opacity-70 group-hover:opacity-40 transition duration-500" />

                {/* Inner Decorative Golden Border */}
                <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/60 transition duration-300 group-hover:border-amber-200/80" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.7, ease: smoothCurve }}
            className="mt-20 flex justify-center"
          >
            <div className="h-px w-20 bg-[#b68d40]/40 origin-center" />
          </motion.div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-24 items-center justify-center translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-500/80 to-amber-600" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-600 drop-shadow-[0_0_10px_rgba(245,215,124,0.7)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-500/80 to-amber-600" />
      </div>
    </section>
  );
}
