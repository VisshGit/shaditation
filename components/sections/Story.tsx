"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const storyTimeline = [
  {
    year: "2025",
    title: "The Spark",
    description:
      "A chance encounter that lit up everything. What began as a simple conversation quickly turned into an undeniable connection.",
  },
  {
    year: "2026",
    title: "The Journey",
    description:
      "Growing together through every season, sharing countless laughs, endless dreams, and building our foundation of love.",
  },
  {
    year: "2027",
    title: "Tying the Sacred Knot",
    description:
      "Hand in hand, with the sacred fire as witness and loved ones around us, we step into our forever.",
  },
];

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth continuous parallax drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[125vh] w-full flex-col justify-start overflow-hidden bg-[#0c0704] pt-36 pb-40 sm:pt-48 sm:pb-52 md:pt-56 md:pb-60"
    >
      {/* =====================================================
          PARALLAX HERITAGE BACKGROUND (cdbg3.png)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cdbg3.png')",
            filter: "blur(1px)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c0704] to-transparent" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="absolute inset-0 bg-[#0c0704]/80 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/70 to-transparent" />

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
          STORY CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto max-w-5xl px-4 text-center">
            {/* 1. Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="text-sm uppercase tracking-[6px] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold"
              style={{ margin: 0 }}
            >
              Counting Down to Forever
            </motion.p>

            {/* 2. Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
              className="h-px w-20 bg-amber-200/70 origin-center drop-shadow"
              style={{ margin: "16px auto 32px" }}
            />

            {/* 3. Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
              className="font-heading text-4xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl"
              style={{ margin: 0, lineHeight: 1.15 }}
            >
              Our Story
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6, ease: smoothCurve }}
              className="mt-6 text-sm sm:text-base leading-relaxed text-amber-100/80 max-w-2xl mx-auto"
            >
              A journey of laughter, dreams, and endless love. Here’s a glimpse into the moments that brought us here.
            </motion.p>

            {/* =====================================================
                GUARANTEED PHYSICAL BREATHING SPACE (Cannot Collapse)
            ===================================================== */}
            <div className="h-28 sm:h-36 md:h-44 w-full" aria-hidden="true" />

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-10 items-stretch">
              {storyTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                    ease: smoothCurve,
                  }}
                  className="relative group rounded-3xl border border-[#b68d40]/40 bg-black/45 px-7 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col items-center hover:border-[#e5c158]/70 hover:shadow-[0_25px_80px_rgba(182,141,64,0.3)] transition duration-300"
                >
                  {/* Floating Year Badge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center h-14 w-32 rounded-full border-2 border-[#b68d40] bg-[#0c0704] shadow-[0_0_20px_rgba(182,141,64,0.55)] group-hover:border-[#e5c158] transition duration-300">
                    <span className="font-heading text-lg sm:text-xl font-bold tracking-widest text-amber-200 group-hover:text-amber-100 transition duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Decorative Spark Divider */}
                  <div className="mb-6 flex items-center gap-3 text-amber-300/80">
                    <span className="h-px w-7 bg-amber-400/80" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-7 bg-amber-400/80" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-[1.65rem] font-bold text-amber-100 leading-snug group-hover:text-white transition duration-300 min-h-[3.5rem] flex items-center justify-center">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-sm sm:text-[0.95rem] leading-7 text-amber-100/75 flex-grow group-hover:text-amber-100/95 transition duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
