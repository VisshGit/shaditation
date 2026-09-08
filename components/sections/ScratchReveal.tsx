"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScratchCanvas from "@/components/ui/ScratchCanvas";
import Section from "@/components/ui/Section";

const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
  left: `${((index * 29) % 96) + 2}%`,
  delay: `${(index % 12) * 0.1}s`,
  color: ["#f6d77c", "#c99832", "#ffffff", "#8b5a12"][index % 4],
}));

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <Section className="bg-[var(--surface-soft)] !pt-[150px] !pb-[150px] md:!pt-[160px] md:!pb-[160px]">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        {/* 1. Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
          className="text-sm uppercase tracking-[6px] text-[var(--primary)]"
          style={{ margin: 0 }}
        >
          A Special Surprise
        </motion.p>

        {/* 2. Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: smoothCurve }}
          className="h-px w-20 bg-[var(--primary)]/50 origin-center"
          style={{ margin: "12px auto 28px" }}
        />

        {/* 3. Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
          className="font-heading text-4xl sm:text-5xl text-[var(--foreground)]"
          style={{
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Scratch to Reveal The Date
        </motion.h2>

        {/* 4. Down Arrow Container (Fixed height & smooth fade-out to prevent layout shift) */}
        <div className="mt-8 mb-12 sm:mb-16 flex h-10 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: revealed ? 0 : 1, y: 0 }}
            animate={{ opacity: revealed ? 0 : 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              revealed ? "pointer-events-none invisible" : "visible"
            }`}
          >
            <motion.span
              animate={revealed ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl select-none"
            >
              👇
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Scratch Card Container */}
      <div className="flex justify-center px-4 sm:px-0">
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl rounded-[1.75rem] md:rounded-[2rem] bg-[#b68d40] p-[3px] shadow-[0_20px_50px_rgba(111,70,13,0.25)]">
          <div className="relative h-52 overflow-hidden rounded-[1.6rem] border border-white/20 sm:h-72 md:h-96 md:rounded-[1.85rem]">
            {/* Card Content */}
            <div className="absolute inset-0">
              <Image
                src="/images/card.png"
                alt="Wedding date reveal"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#2b1d0e]/45" />

              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
                <div className="px-2 py-3 text-center sm:px-7 sm:py-8 md:px-12">
                  <p className="text-[9px] uppercase tracking-[3px] text-white/80 sm:text-xs sm:tracking-[6px]">
                    Save the Date
                  </p>

                  <div className="my-2 flex items-center justify-center gap-2 sm:my-5 sm:gap-4">
                    <span className="h-px w-6 bg-amber-200/70 sm:w-12" />
                    <span className="h-1 w-1 rounded-full bg-amber-200 sm:h-1.5 sm:w-1.5" />
                    <span className="h-px w-6 bg-amber-200/70 sm:w-12" />
                  </div>

                  <h3 className="font-heading text-2xl text-white sm:text-4xl md:text-6xl">
                    31 JAN 2027
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[2px] text-amber-100 sm:mt-4 sm:text-sm sm:tracking-[3px]" />
                </div>
              </div>
            </div>

            {/* Scratch Layer */}
            {!revealed && (
              <div className="absolute inset-0 z-30 select-none">
                <ScratchCanvas onReveal={() => setRevealed(true)} />
              </div>
            )}

            {/* Reveal Effects */}
            {revealed && (
              <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
                {confettiPieces.map((piece, index) => (
                  <span
                    key={index}
                    className={`confetti confetti-${index % 4}`}
                    style={{
                      left: piece.left,
                      backgroundColor: piece.color,
                      animationDelay: piece.delay,
                      willChange: "transform, opacity",
                    }}
                  />
                ))}

                <span className="party-pop party-pop-left">🎉</span>
                <span className="party-pop party-pop-right">🎉</span>
                <span className="big-sparkle big-sparkle-one">✦</span>
                <span className="big-sparkle big-sparkle-two">✦</span>
                <span className="big-sparkle big-sparkle-three">✦</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
