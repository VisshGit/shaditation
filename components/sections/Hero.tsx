"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

import { activeTheme } from "@/config/themes";

const fireSparks = Array.from({ length: 34 }, (_, index) => ({
  left: `${((index * 17 + 3) % 96) + 2}%`,
  delay: `${(index % 12) * 0.18}s`,
  size: `${3 + (index % 4) * 1.5}px`,
  duration: `${2.4 + (index % 5) * 0.28}s`,
}));

const rosePetals = Array.from({ length: 32 }, (_, index) => ({
  left: `${(index * 29) % 100}%`,
  delay: `${(index % 12) * 0.16}s`,
  size: `${10 + (index % 5) * 2}px`,
  duration: `${3.8 + (index % 6) * 0.45}s`,
  drift: `${-40 + (index % 9) * 10}px`,
  rotate: `${
    (index % 2 === 0 ? 1 : -1) * (45 + (index % 5) * 25)
  }deg`,
}));

// Reusable smooth entrance transition settings
const smoothTransition = (delay: number) => ({
  duration: 1.0,
  delay: delay,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
});

export default function Hero() {
  const [showPetals, setShowPetals] = useState(true);
  const [showSparks, setShowSparks] = useState(false);

  const isRajasthani = activeTheme === "royal-rajasthani";

  useEffect(() => {
    if (!isRajasthani) return;

    const petalsStopTimer = window.setTimeout(() => {
      setShowPetals(false);
    }, 7000);

    const sparksStartTimer = window.setTimeout(() => {
      setShowSparks(true);
    }, 4000);

    const sparksStopTimer = window.setTimeout(() => {
      setShowSparks(false);
    }, 11000);

    return () => {
      window.clearTimeout(petalsStopTimer);
      window.clearTimeout(sparksStartTimer);
      window.clearTimeout(sparksStopTimer);
    };
  }, [isRajasthani]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* =====================================================
          RAJASTHANI HERO BACKGROUND
      ===================================================== */}
      {isRajasthani && (
        <>
          <div
            className="pointer-events-none absolute inset-0 scale-[1.04] bg-cover bg-center"
            style={{
              backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
              filter: "blur(4px)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-white/35" />
        </>
      )}

      {/* =====================================================
          THEME BACKGROUND LIGHTS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      </div>

      {/* =====================================================
          ROSE PETALS
      ===================================================== */}
      {isRajasthani && showPetals && (
        <div className="hero-rose-petals">
          {rosePetals.map((petal, index) => (
            <span
              key={index}
              className="hero-rose-petal"
              style={{
                left: petal.left,
                width: petal.size,
                height: `calc(${petal.size} * 0.65)`,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                ["--petal-drift" as string]: petal.drift,
                ["--petal-rotate" as string]: petal.rotate,
              }}
            />
          ))}
        </div>
      )}

      {/* =====================================================
          FIRE SPARKS
      ===================================================== */}
      {isRajasthani && showSparks && (
        <div className="hero-fire-sparks">
          {fireSparks.map((spark, index) => (
            <span
              key={index}
              className={`hero-fire-spark ${
                index % 7 === 0 ? "hero-fire-heart" : ""
              } hero-fire-spark-${index % 3}`}
              style={{
                left: spark.left,
                width: spark.size,
                height: spark.size,
                fontSize: `calc(${spark.size} * 1.6)`,
                animationDelay: spark.delay,
                animationDuration: spark.duration,
              }}
            >
              {index % 7 === 0 ? "♥" : null}
            </span>
          ))}
        </div>
      )}

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full min-w-0">
        <Container>
          <div className="flex min-h-screen w-full items-center justify-center px-4 text-center sm:px-6">
            <div className="relative mx-auto w-full max-w-4xl translate-y-[10px] px-3 sm:translate-y-0 sm:px-0">
              {/* Dark backdrop */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/25 blur-3xl sm:h-[440px] sm:w-[90%]"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto flex w-full flex-col items-center">
                {/* 1. TOGETHER (Delay: 0.2s) */}
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={smoothTransition(0.2)}
                  className="
                    mb-8
                    max-w-[320px]
                    text-center
                    text-[10px]
                    font-medium
                    uppercase
                    leading-5
                    tracking-[3px]
                    text-[var(--foreground)]
                    drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]
                    sm:mb-10
                    sm:max-w-none
                    sm:text-sm
                    sm:tracking-[7px]
                  "
                >
                  Together With Their Families
                </motion.p>

                {/* 2. NAMES (Delay: 0.45s) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={smoothTransition(0.45)}
                  className="w-full flex justify-center mb-6"
                >
                  <h1 className="gold-shimmer-text font-serif text-3xl md:text-5xl lg:text-7xl font-bold uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] break-words whitespace-normal text-center">
                    Vishal <span className="mx-3 text-2xl md:text-3xl lg:text-5xl font-normal lowercase">&amp;</span> Varsha
                  </h1>
                </motion.div>

                {/* 3. INVITATION TEXT (Delay: 0.7s) */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={smoothTransition(0.7)}
                  className="
                    mb-8
                    max-w-[330px]
                    text-center
                    text-sm
                    leading-8
                    text-[var(--white)]
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                    sm:mb-10
                    sm:max-w-xl
                    sm:text-lg
                    sm:leading-9
                  "
                >
                  Request the pleasure of your company
                  <br />
                  at the celebration of their marriage.
                </motion.p>

                {/* 4. DECORATIVE DIVIDER (Delay: 0.95s) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={smoothTransition(0.95)}
                  className="flex items-center justify-center gap-4 sm:gap-5"
                >
                  <span className="h-px w-14 bg-[var(--primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)] sm:w-20" />
                  <span className="text-lg text-[var(--primary)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-xl">
                    ✦
                  </span>
                  <span className="h-px w-14 bg-[var(--primary)] shadow-[0_0_8px_rgba(255,255,255,0.35)] sm:w-20" />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* =====================================================
          SCROLL INDICATOR (Mobile view ke liye bottom-32 set kiya)
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-32 sm:bottom-20 left-0 right-0 z-20 flex justify-center text-center pb-[env(safe-area-inset-bottom)]"
      >
        <div className="scroll-indicator">
          <span className="text-xs uppercase tracking-[5px] text-[var(--foreground)]">
            SCROLL
          </span>
          <div className="scroll-line text-[var(--foreground)]" />
        </div>
      </motion.div>
    </section>
  );
}
