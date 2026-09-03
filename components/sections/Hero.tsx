"use client";

import { useMemo } from "react";
import Container from "@/components/ui/Container";

export default function Hero() {
  // 1. ROSE PETALS GENERATOR
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

  // 2. FIRE SPARKS GENERATOR
  const fireSparks = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const left = `${(i * 5.8 + (i % 4) * 3.2) % 96 + 2}%`;
      const size = `${3 + (i % 4) * 2.5}px`;
      const duration = `${3.2 + (i % 3) * 1.4}s`;
      const delay = `${(i * 0.45) % 3.5}s`;
      const animType =
        i % 3 === 0
          ? "hero-fire-spark-1"
          : i % 3 === 1
          ? "hero-fire-spark-2"
          : "";

      return { id: i, left, size, duration, delay, animType };
    });
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--background)] py-20">
      {/* =====================================================
          BACKGROUND TEXTURE & CORNER ACCENTS
      ===================================================== */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-center bg-repeat"
        style={{ backgroundImage: "url('/themes/rajasthani/pattern.png')" }}
      />

      {/* =====================================================
          1. FLOWER PETALS RAIN
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
          2. FIRE SPARKS (GOLDEN EMBERS)
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
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            
            {/* GANPATI LOGO */}
            <div className="mb-6">
              <img
                src="/themes/rajasthani/ganpati.png"
                alt="Shree Ganesha"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20 drop-shadow-[0_4px_12px_rgba(182,141,64,0.3)]"
              />
            </div>

            <p className="text-xs uppercase tracking-[6px] text-[var(--accent)] sm:text-sm sm:tracking-[8px]">
              || श्री गणेशाय नमः ||
            </p>

            <div className="my-5 h-px w-20 bg-[var(--primary)]/60" />

            <p className="text-xs uppercase tracking-[4px] text-[var(--muted)] sm:text-sm sm:tracking-[5px]">
              We Request The Pleasure Of Your Company To Celebrate The Wedding Of
            </p>

            {/* COUPLE NAME WITH ROYAL GOLD SHIMMER */}
            <h1 className="mt-4 font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-gold-gradient py-2">
              Vishal <span className="font-script text-3xl sm:text-5xl font-normal">&amp;</span> Varsha
            </h1>

            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-[var(--primary)]/50" />
              <span className="text-[var(--primary)] text-sm">✦</span>
              <div className="h-px w-14 bg-[var(--primary)]/50" />
            </div>

            <p className="mt-6 font-heading text-lg tracking-[3px] text-[var(--foreground)] sm:text-xl">
              SAVE THE DATE
            </p>

            <p className="mt-2 text-sm uppercase tracking-[4px] text-[var(--accent)] sm:text-base">
              Sunday, 31st January 2027
            </p>

            {/* SCROLL INDICATOR */}
            <div className="scroll-indicator mt-16">
              <span className="text-[var(--primary)]">SCROLL</span>
              <div className="scroll-line bg-[var(--primary)]" />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
