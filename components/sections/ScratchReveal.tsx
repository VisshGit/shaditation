"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScratchCanvas from "@/components/ui/ScratchCanvas";

const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
  left: `${((index * 29) % 96) + 2}%`,
  delay: `${(index % 12) * 0.1}s`,
  color: ["#f6d77c", "#c99832", "#ffffff", "#8b5a12"][index % 4],
}));

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth continuous parallax drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0704] py-32 sm:py-44 md:py-52"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (Extended bounds for breathing room)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-36 -bottom-36 scale-[1.18] bg-cover bg-center will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/scbg1.png')",
          }}
        />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-20 bg-gradient-to-b from-[#0c0704]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-[#0c0704]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* 1. Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: smoothCurve }}
          className="text-sm uppercase tracking-[6px] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold"
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
          className="h-px w-20 bg-amber-200/70 origin-center drop-shadow"
          style={{ margin: "14px auto 32px" }}
        />

        {/* 3. Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
          className="font-heading text-4xl sm:text-5xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          style={{ margin: 0, lineHeight: 1.15 }}
        >
          Scratch to Reveal The Date
        </motion.h2>

        {/* 4. Down Arrow */}
        <div className="mt-8 mb-14 sm:mb-18 flex h-10 items-center justify-center">
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

      {/* Floating Scratch Card Container */}
      <div className="relative z-10 flex justify-center px-4 sm:px-0">
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl rounded-[1.75rem] md:rounded-[2rem] bg-[#b68d40]/70 p-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-[1px]">
          <div className="relative h-52 overflow-hidden rounded-[1.6rem] border border-white/25 sm:h-72 md:h-96 md:rounded-[1.85rem] bg-transparent">
            {/* Revealed Date Layer */}
            <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
              <div className="px-2 py-3 text-center sm:px-7 sm:py-8 md:px-12">
                <p className="text-[10px] uppercase tracking-[3px] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-xs sm:tracking-[6px] font-semibold">
                  Save the Date
                </p>

                <div className="my-2 flex items-center justify-center gap-2 sm:my-5 sm:gap-4">
                  <span className="h-px w-6 bg-amber-200/90 sm:w-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
                  <span className="h-1 w-1 rounded-full bg-amber-200 sm:h-1.5 sm:w-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
                  <span className="h-px w-6 bg-amber-200/90 sm:w-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
                </div>

                <h3 className="font-heading text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_6px_20px_rgba(0,0,0,1)] font-bold">
                  31 JAN 2027
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[2px] text-amber-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:mt-4 sm:text-sm sm:tracking-[3px]" />
              </div>
            </div>

            {/* Scratch Canvas */}
            {!revealed && (
              <div className="absolute inset-0 z-30 select-none">
                <ScratchCanvas onReveal={() => setRevealed(true)} />
              </div>
            )}

            {/* Celebration FX */}
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
    </section>
  );
}
