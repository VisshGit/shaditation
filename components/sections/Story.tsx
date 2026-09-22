"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <section
      className="relative isolate overflow-hidden flex items-center justify-center bg-[#120b06]"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      {/* Background Image with Soft Blurred & Feathered Edges */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed scale-105"
        style={{
          backgroundImage: "url('/images/cdbg3.png')",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 80% at 50% 50%, black 40%, rgba(0, 0, 0, 0.5) 75%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 95% 80% at 50% 50%, black 40%, rgba(0, 0, 0, 0.5) 75%, transparent 100%)",
        }}
      />

      {/* Soft Vignette / Edge Blur Tint */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-0" />

      {/* Smooth Gradient Transitions for Top and Bottom Edges */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#120b06] via-[#120b06]/60 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120b06] via-[#120b06]/60 to-transparent pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 cinematic-content flex justify-center">
          <div className="w-full max-w-3xl px-4 text-center sm:px-0">
            {/* 1. Section Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="cinematic-text text-xs uppercase tracking-[5px] text-amber-100 sm:text-sm sm:tracking-[6px]"
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
              style={{ margin: "18px auto 34px" }}
            >
              <span className="h-px w-12 bg-amber-100/40 sm:w-20" />
              <span className="text-sm text-amber-100">✦</span>
              <span className="h-px w-12 bg-amber-100/40 sm:w-20" />
            </motion.div>

            {/* 3. Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.55, ease: smoothCurve }}
              className="cinematic-heading font-heading text-4xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,1)] sm:text-5xl md:text-6xl"
              style={{
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              A Beautiful Journey
            </motion.h2>

            {/* 4. Story Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.75, ease: smoothCurve }}
              className="cinematic-text mx-auto max-w-2xl text-base leading-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)] sm:text-lg sm:leading-9"
              style={{ marginTop: "48px" }}
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
              className="cinematic-item mx-auto mt-12 h-px w-16 bg-amber-100/30 origin-center"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
