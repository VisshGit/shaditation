"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  return (
    <section
      className="cinematic-section flex items-center justify-center bg-white"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      <Container>
        <div className="cinematic-content flex justify-center">
          <div className="w-full max-w-3xl px-4 text-center sm:px-0">
            {/* 1. Section Label (Delay: 0.15s) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="cinematic-text text-xs uppercase tracking-[5px] text-[var(--primary)] sm:text-sm sm:tracking-[6px]"
              style={{ margin: 0 }}
            >
              Our Story
            </motion.p>

            {/* 2. Elegant Divider (Delay: 0.35s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: smoothCurve }}
              className="cinematic-divider mx-auto flex items-center justify-center gap-3"
              style={{ margin: "18px auto 34px" }}
            >
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
              <span className="text-sm text-[var(--primary)]">✦</span>
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
            </motion.div>

            {/* 3. Heading (Delay: 0.55s) */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.55, ease: smoothCurve }}
              className="cinematic-heading font-heading text-4xl text-[var(--foreground)] sm:text-5xl md:text-6xl"
              style={{
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              A Beautiful Journey
            </motion.h2>

            {/* 4. Story Description (Delay: 0.75s) */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.75, ease: smoothCurve }}
              className="cinematic-text mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9"
              style={{ marginTop: "48px" }}
            >
              Two hearts, one beautiful journey. With love, laughter and
              countless memories, Vishal and Varsha begin their forever
              together.
            </motion.p>

            {/* 5. Bottom Ornament (Delay: 0.95s) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.95, ease: smoothCurve }}
              className="cinematic-item mx-auto mt-12 h-px w-16 bg-[var(--primary)]/25 origin-center"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
