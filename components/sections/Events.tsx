"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const events = [
  {
    title: "Vinayak",
    date: "Monday, 25 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Dhol Night",
    date: "Thursday, 28 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Kalash",
    date: "Friday, 29 January 2027",
    time: "Morning",
    venue: "",
  },
  {
    title: "Bindoli",
    date: "Friday, 29 January 2027",
    time: "Evening",
    venue: "",
  },
  {
    title: "Haldi Ceremony",
    date: "Saturday, 30 January 2027",
    time: "Morning",
    venue: "Urmila Garden",
  },
  {
    title: "Cocktail Party",
    date: "Saturday, 30 January 2027",
    time: "Evening",
    venue: "Urmila Garden",
  },
  {
    title: "Barat",
    date: "Sunday, 31 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Reception",
    date: "Wednesday, 3 February 2027",
    time: "Time to be announced",
    venue: "Urmila Garden",
  },
];

const smoothCurve = [0.16, 1, 0.3, 1] as const;

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking identical to Gallery & Story
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax smooth drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section
      ref={sectionRef}
      /* Standalone cinematic stage with massive breathing buffer and smooth render */
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
          EVENTS CONTENT (Centered in the Isolated Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="mx-auto max-w-5xl px-4 text-center">
            {/* Top Symmetrical Breathing Spacer */}
            <div className="h-16 sm:h-24 w-full" aria-hidden="true" />

            {/* 1. Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="text-sm uppercase tracking-[6px] text-amber-200 font-semibold"
              style={{ margin: 0 }}
            >
              Wedding Events
            </motion.p>

            {/* 2. Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
              className="h-px w-20 bg-amber-400/70 origin-center drop-shadow"
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
              Celebration Details
            </motion.h2>

            {/* Guaranteed Physical Spacer between Heading and Cards */}
            <div className="h-28 sm:h-36 md:h-44 w-full" aria-hidden="true" />

            {/* Events Grid */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-8 items-stretch">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + (index % 2) * 0.15,
                    ease: smoothCurve,
                  }}
                  aria-label="Wedding event card"
                  className="group relative overflow-hidden rounded-3xl border border-[#b68d40]/40 bg-black/45 px-7 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 hover:border-[#e5c158]/70 hover:shadow-[0_25px_80px_rgba(182,141,64,0.3)] sm:px-10 will-change-transform flex flex-col justify-center transform-gpu"
                >
                  <div className="mx-auto mb-7 flex items-center justify-center gap-3 text-amber-300/80">
                    <span className="h-px w-7 bg-amber-400/80" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-7 bg-amber-400/80" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl sm:text-[1.65rem] font-bold text-amber-100 leading-snug group-hover:text-white transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mx-auto mb-5 h-px w-12 bg-amber-400/30" />

                  <p className="text-sm sm:text-[0.95rem] leading-7 text-amber-100/75 group-hover:text-amber-100/95 transition-colors duration-300">
                    {event.date}
                    <br />
                    {event.time}
                    {event.venue && (
                      <>
                        <br />
                        <span className="text-amber-200 font-medium">{event.venue}</span>
                      </>
                    )}
                  </p>
                </motion.div>
              ))}
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
