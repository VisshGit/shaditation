"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <section
      className="relative isolate overflow-hidden flex items-start justify-center bg-[#120b06]"
      style={{
        paddingTop: "90px",
        paddingBottom: "140px",
      }}
    >
      {/* Background Image (cdbg3.png) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/images/cdbg3.png')",
        }}
      />

      {/* Dim Overlay - text readability ke liye */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Smooth Blending Gradients */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#120b06] to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#120b06] to-transparent pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 cinematic-content flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl px-4 text-center sm:px-0">
            {/* 1. Section Label - SAME POSITION */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="cinematic-text text-xs uppercase tracking-[5px] text-amber-200 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-sm sm:tracking-[6px]"
              style={{ margin: 0 }}
            >
              Our Story
            </motion.p>

            {/* 2. Elegant Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: smoothCurve }}
              className="cinematic-divider mx-auto flex items-center justify-center gap-3"
              style={{ margin: "16px auto 0" }}
            >
              <span className="h-px w-12 bg-amber-200/60 sm:w-20 shadow-sm" />
              <span className="text-sm text-amber-200 drop-shadow">✦</span>
              <span className="h-px w-12 bg-amber-200/60 sm:w-20 shadow-sm" />
            </motion.div>

            {/* 3. Heading - Pushed down to match your red markings */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.55, ease: smoothCurve }}
              className="cinematic-heading font-heading text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,1)] uppercase tracking-wider"
              style={{
                marginTop: "75px", // "A BEAUTIFUL" ko niche le aayega jahan mark kiya hai
                lineHeight: 1.25,
              }}
            >
              <span className="block">A BEAUTIFUL</span>
              <span className="block mt-2">JOURNEY</span>
            </motion.h2>

            {/* 4. Story Description - Shifted down accordingly */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.75, ease: smoothCurve }}
              className="cinematic-text mx-auto max-w-xl text-sm leading-7 sm:text-base sm:leading-8 text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,1)]"
              style={{ marginTop: "55px" }}
            >
              Two hearts, one beautiful journey. With love, laughter and
              countless memories, Vishal and Varsha begin their forever
              together.
            </motion.p>

            {/* 5. Bottom Ornament */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.95, ease: smoothCurve }}
              className="cinematic-item mx-auto mt-8 h-px w-16 bg-amber-200/50 origin-center"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
