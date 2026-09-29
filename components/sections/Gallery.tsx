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

  // Parallax tracking (Exact standard offset)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax continuous smooth drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      /* Standalone cinematic stage with massive breathing buffer (Exact same as Countdown/Story) */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#faf6ee] py-40 sm:py-52 md:py-60"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (Extended Buffer - Exact standard)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] bg-cover bg-center will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cdbg.PNG')",
          }}
        />
        {/* Light theme parchment tint */}
        <div className="absolute inset-0 bg-[#faf6ee]/90" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/70 to-transparent" />

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
          GALLERY CONTENT (Centered inside Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl text-center px-4">
              {/* 1. Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
                className="text-sm uppercase tracking-[6px] text-[#936a24] font-semibold"
                style={{ margin: 0 }}
              >
                Memories
              </motion.p>

              {/* 2. Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
                className="h-px w-20 bg-[#b68d40]/70 origin-center drop-shadow"
                style={{ margin: "16px auto 32px" }}
              />

              {/* 3. Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
                className="font-heading text-4xl text-[#2b1d0e] drop-shadow-sm md:text-5xl"
                style={{ margin: 0, lineHeight: 1.15 }}
              >
                Our Gallery
              </motion.h2>

              {/* 4. Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6, ease: smoothCurve }}
                className="mt-6 text-sm sm:text-base leading-relaxed text-[#68523c] max-w-2xl mx-auto"
              >
                Captured glances, timeless frames, and beautiful reminiscence of our togetherness.
              </motion.p>

              {/* 5. Photos Grid (Matching 72px margin exactly like countdown) */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                style={{ marginTop: "72px" }}
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.65 + (index % 3) * 0.15,
                      ease: smoothCurve,
                    }}
                    className={`group relative overflow-hidden rounded-2xl border-2 border-[#b68d40]/30 bg-white shadow-[0_15px_35px_rgba(75,50,22,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b68d40]/70 hover:shadow-[0_20px_45px_rgba(182,141,64,0.25)] ${
                      index % 2 === 1
                        ? "h-[360px] sm:h-[400px]"
                        : "h-[300px] sm:h-[340px]"
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={photo}
                      alt={`Wedding memory ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1d0e]/20 via-transparent to-white/10 opacity-60" />

                    {/* Inner Border */}
                    <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/60" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
