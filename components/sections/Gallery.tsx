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

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth continuous parallax background drift (GPU friendly)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      /* 1. STANDALONE CINEMATIC STAGE: min-h-[120vh] with massive vertical padding */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#faf6ee] py-44 sm:py-52 md:py-60"
    >
      {/* =====================================================
          2. DEEP PARALLAX BACKGROUND LAYER (-top-36 -bottom-36 scale-[1.15])
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-36 -bottom-36 scale-[1.15] will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cdbg.PNG')",
          }}
        />
        {/* Clean Royal Light Tint (No heavy blend modes to prevent stutter) */}
        <div className="absolute inset-0 bg-[#faf6ee]/92" />
      </motion.div>

      {/* =====================================================
          3. ATMOSPHERIC EDGE GRADIENT BUFFERS (Soft Cinema Cuts)
      ===================================================== */}
      {/* Top transition from dark section to cream */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#0c0704] via-[#0c0704]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-48 bg-gradient-to-b from-[#b68d40]/25 to-transparent" />

      {/* Bottom transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#b68d40]/25 to-transparent" />

      {/* Top Amber Ribbon */}
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
          4. CONTENT CONTAINER (Centered Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          {/* Header Block */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl px-4 text-center sm:px-0">
              {/* Label */}
              <p className="text-xs uppercase tracking-[6px] text-[#936a24] font-semibold sm:text-sm sm:tracking-[7px]">
                Memories
              </p>

              {/* Divider */}
              <div className="mx-auto my-5 flex items-center justify-center gap-3">
                <span className="h-px w-14 bg-[#b68d40]/50 sm:w-20" />
                <span className="text-sm text-[#b68d40]">✦</span>
                <span className="h-px w-14 bg-[#b68d40]/50 sm:w-20" />
              </div>

              {/* Heading */}
              <h2 className="font-heading text-4xl text-[#2b1d0e] drop-shadow-sm sm:text-5xl md:text-6xl">
                Our Gallery
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#68523c] max-w-xl mx-auto">
                Captured glances, timeless frames, and beautiful reminiscence of our togetherness.
              </p>
            </div>
          </div>

          {/* Guaranteed Breathing Spacer */}
          <div className="h-20 sm:h-28 md:h-32 w-full" aria-hidden="true" />

          {/* Photos Grid - Pure hardware performance without scale collision */}
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-0 md:grid-cols-3 items-center">
            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                className={`group relative overflow-hidden rounded-3xl border-2 border-[#b68d40]/30 bg-white shadow-[0_16px_40px_rgba(75,50,22,0.1)] transition-colors duration-300 hover:border-[#b68d40]/70 ${
                  index % 2 === 1
                    ? "h-[380px] sm:h-[440px]"
                    : "h-[320px] sm:h-[360px]"
                }`}
              >
                <img
                  src={photo}
                  alt={`Wedding memory ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Luxury Film Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1d0e]/20 via-transparent to-white/10 opacity-60" />

                {/* Inner Border Accent */}
                <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/60" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Ornament */}
          <div className="mt-20 flex justify-center">
            <div className="h-px w-20 bg-[#b68d40]/40" />
          </div>
        </Container>
      </div>

      {/* Bottom Amber Ribbon */}
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
