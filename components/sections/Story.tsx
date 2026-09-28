"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0704] py-24 sm:py-32"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-24 -bottom-24 scale-[1.12] bg-cover bg-center will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
            filter: "blur(3px)",
          }}
        />
      </motion.div>

      {/* Atmospheric lighting & soft edge blend */}
      <div className="absolute inset-0 bg-[#0c0704]/80 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-14 bg-gradient-to-b from-[#0c0704] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-[#0c0704] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto max-w-4xl text-center px-4">
            {/* 1. Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="text-sm uppercase tracking-[6px] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold"
              style={{ margin: 0 }}
            >
              A Royal Beginning
            </motion.p>

            {/* 2. Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
              className="h-px w-20 bg-amber-200/70 origin-center drop-shadow"
              style={{ margin: "12px auto 28px" }}
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6, ease: smoothCurve }}
              className="mt-6 text-sm sm:text-base leading-relaxed text-amber-100/80 max-w-2xl mx-auto"
            >
              From spontaneous conversations that turned into cherished memories,
              to promises that will last a lifetime. Here begins our forever.
            </motion.p>

            {/* Couple Cards with Ornate Gold Frame */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Groom */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.7, ease: smoothCurve }}
                className="relative rounded-2xl border border-[#b68d40]/50 bg-black/40 p-6 sm:p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="mx-auto h-32 w-32 sm:h-40 sm:w-40 rounded-full border-2 border-[#b68d40] p-1.5 shadow-[0_0_20px_rgba(182,141,64,0.3)]">
                  <div className="h-full w-full rounded-full bg-stone-800/80 flex items-center justify-center text-amber-200/50 text-2xl font-serif">
                    V
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-amber-200">
                  Vishal
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[3px] text-amber-100/70">
                  The Groom
                </p>
              </motion.div>

              {/* Bride */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8, ease: smoothCurve }}
                className="relative rounded-2xl border border-[#b68d40]/50 bg-black/40 p-6 sm:p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="mx-auto h-32 w-32 sm:h-40 sm:w-40 rounded-full border-2 border-[#b68d40] p-1.5 shadow-[0_0_20px_rgba(182,141,64,0.3)]">
                  <div className="h-full w-full rounded-full bg-stone-800/80 flex items-center justify-center text-amber-200/50 text-2xl font-serif">
                    V
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-amber-200">
                  Varsha
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[3px] text-amber-100/70">
                  The Bride
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
