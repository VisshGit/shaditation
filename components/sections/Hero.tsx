"use client";

import { useMemo } from "react";

export default function Hero() {
  // 1. ROSE PETALS GENERATOR (Smooth & Randomised Falling)
  const petals = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => {
      const left = `${(i * 4.6 + (i % 3) * 2.5) % 100}%`;
      const size = `${14 + (i % 5) * 4}px`;
      const duration = `${5.5 + (i % 4) * 1.6}s`;
      const delay = `${(i * 0.35) % 4}s`;
      const drift = `${(i % 2 === 0 ? 1 : -1) * (40 + (i % 4) * 25)}px`;
      const rotate = `${(i % 2 === 0 ? 1 : -1) * (180 + (i % 5) * 45)}deg`;

      return { id: i, left, size, duration, delay, drift, rotate };
    });
  }, []);

  // 2. FIRE SPARKS GENERATOR (Warm Golden Rising Ember Effect)
  const fireSparks = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const left = `${(i * 5.8 + (i % 4) * 3.2) % 96 + 2}%`;
      const size = `${3 + (i % 4) * 2.5}px`;
      const duration = `${3.2 + (i % 3) * 1.4}s`;
      const delay = `${(i * 0.45) % 3.5}s`;
      const animType = i % 3 === 0 ? "hero-fire-spark-1" : i % 3 === 1 ? "hero-fire-spark-2" : "";

      return { id: i, left, size, duration, delay, animType };
    });
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--background)] px-4 py-20 text-center">
      {/* =====================================================
          1. RAJASTHANI ROSE PETALS (FLOWER RAIN)
      ===================================================== */}
      <div className="hero-rose-petals pointer-events-none absolute inset-0 z-[6] overflow-hidden">
        {petals.map((petal) => (
          <span
            key={`petal-${petal.id}`}
            className="hero-rose-petal"
            style={
              {
                left: petal.left,
                width: petal.size,
                height: `calc(${petal.size} * 1.35)`,
                animationDuration: petal.duration,
                animationDelay: petal.delay,
                animationIterationCount: "infinite",
                "--petal-drift": petal.drift,
                "--petal-rotate": petal.rotate,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* =====================================================
          2. ROYAL FIRE SPARKS (EMBERS EFFECT)
      ===================================================== */}
      <div className="hero-fire-sparks pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        {fireSparks.map((spark) => (
          <span
            key={`spark-${spark.id}`}
            className={`hero-fire-spark ${spark.animType}`}
            style={{
              left: spark.left,
              width: spark.size,
              height: spark.size,
              animationDuration: spark.duration,
              animationDelay: spark.delay,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          HERO MAIN CONTENT
      ===================================================== */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* GANPATI BADGE / TOP ICON */}
        <div className="mb-6 flex items-center justify-center">
          <img
            src="/themes/rajasthani/ganpati.png"
            alt="Lord Ganesha"
            className="h-16 w-16 object-contain drop-shadow-[0_2px_10px_rgba(182,141,64,0.35)] sm:h-20 sm:w-20"
          />
        </div>

        <p className="font-heading text-xs font-semibold uppercase tracking-[6px] text-[var(--accent)] sm:text-sm sm:tracking-[8px]">
          || श्री गणेशाय नमः ||
        </p>

        <p className="mt-4 text-xs uppercase tracking-[4px] text-[var(--muted)] sm:text-sm sm:tracking-[6px]">
          We Invite You To Celebrate The Wedding Of
        </p>

        {/* ROYAL GOLDEN SHIMMER NAME */}
        <h1 className="font-heading text-gold-gradient py-4 text-4xl font-bold tracking-wider sm:text-6xl md:text-7xl">
          Vishal <span className="font-script text-3xl font-normal sm:text-5xl">&amp;</span> Varsha
        </h1>

        <div className="mt-2 flex items-center gap-3">
          <div className="h-px w-12 bg-[var(--primary)]/50 sm:w-20" />
          <span className="text-xs tracking-[3px] text-[var(--primary)]">✦ ✦ ✦</span>
          <div className="h-px w-12 bg-[var(--primary)]/50 sm:w-20" />
        </div>

        <p className="mt-6 font-heading text-base font-medium tracking-[3px] text-[var(--foreground)] sm:text-lg">
          SAVE THE DATE
        </p>

        <p className="mt-2 text-sm uppercase tracking-[4px] text-[var(--accent)] sm:text-base">
          31st January 2027
        </p>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator mt-14 sm:mt-16">
          <span className="text-[var(--primary)]">SCROLL DOWN</span>
          <div className="scroll-line bg-[var(--primary)]" />
        </div>
      </div>
    </section>
  );
}
