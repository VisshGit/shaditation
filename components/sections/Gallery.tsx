"use client";

import { motion } from "framer-motion";
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
  return (
    <section
      className="bg-[var(--background)]"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      <Container>
        {/* Gallery Heading */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl px-4 text-center sm:px-0">
            {/* 1. Label (Delay: 0.15s) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
              className="text-xs uppercase tracking-[5px] text-[var(--primary)] sm:text-sm sm:tracking-[6px]"
              style={{ margin: 0 }}
            >
              Memories
            </motion.p>

            {/* 2. Divider (Delay: 0.3s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
              className="mx-auto flex items-center justify-center gap-3"
              style={{ margin: "18px auto 34px" }}
            >
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
              <span className="text-sm text-[var(--primary)]">✦</span>
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
            </motion.div>

            {/* 3. Heading (Delay: 0.45s) */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
              className="font-heading text-4xl text-[var(--foreground)] sm:text-5xl md:text-6xl"
              style={{
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Our Gallery
            </motion.h2>
          </div>
        </div>

        {/* Photos Grid with Staggered Entrance */}
        <div
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-0 md:grid-cols-3"
          style={{ marginTop: "64px" }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + (index % 3) * 0.15, // Har column me staggered timing
                ease: smoothCurve,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--primary)]/15 bg-white shadow-[0_15px_40px_rgba(43,29,14,0.08)] ${
                index % 2 === 1
                  ? "h-[360px] sm:h-[420px]"
                  : "h-[300px] sm:h-80"
              }`}
            >
              {/* Image */}
              <img
                src={photo}
                alt={`Wedding memory ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Subtle Premium Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-70" />

              {/* Inner Border */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/25" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Ornament (Delay: 0.8s) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.8, ease: smoothCurve }}
          className="mt-14 flex justify-center"
        >
          <div className="h-px w-16 bg-[var(--primary)]/25 origin-center" />
        </motion.div>
      </Container>
    </section>
  );
}
