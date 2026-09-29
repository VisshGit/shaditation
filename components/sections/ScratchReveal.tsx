"use client";

import { useState, useRef, useEffect } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  // Mobile Autoplay Force Trigger
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser blocks first attempt
          const handleInteraction = () => {
            video.play();
            window.removeEventListener("touchstart", handleInteraction);
          };
          window.addEventListener("touchstart", handleInteraction, { once: true });
        });
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[120vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0c0704] py-48 sm:py-60 md:py-72"
    >
      {/* =====================================================
          PARALLAX BACKGROUND VIDEO LAYER
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] will-change-transform z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/scbg1.png"
          preload="auto"
          className="h-full w-full object-cover object-center"
        >
          <source src="/images/scbg4.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Atmospheric Royal Golden Vignettes & Ambient Tint */}
      <div className="absolute inset-0 bg-[#1a0f05]/35 mix-blend-multiply z-[1]" />

      {/* Top Transparent Fade & Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-48 bg-gradient-to-b from-[#faf6ee] via-[#0c0704]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* Bottom Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* Content wrapper */}
      <div className="relative z-10 my-auto flex w-full flex-col items-center justify-center px-4">
        {/* Top Symmetrical Breathing Spacer */}
        <div className="h-16 sm:h-24 w-full" aria-hidden="true" />

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
          style={{ margin: "16px auto 32px" }}
        />

        {/* 3. Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
          className="font-heading text-4xl sm:text-5xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-center"
          style={{ margin: 0, lineHeight: 1.15 }}
        >
          Scratch to Reveal The Date
        </motion.h2>

        {/* 4. Down Arrow */}
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

        {/* Floating Scratch Card Container */}
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl rounded-[1.75rem] md:rounded-[2rem] bg-[#b68d40]/70 p-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-[1px]">
          <div className="relative h-56 overflow-hidden rounded-[1.6rem] border border-white/25 sm:h-72 md:h-96 md:rounded-[1.85rem] bg-transparent">
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

        {/* Bottom Symmetrical Breathing Spacer */}
        <div className="h-16 sm:h-24 w-full" aria-hidden="true" />
      </div>
    </section>
  );
}
