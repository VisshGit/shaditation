"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import BackgroundMusic from "@/components/ui/BackgroundMusic";

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

export default function Hero() {
  const [showPetals, setShowPetals] = useState(true);
  const [showSparks, setShowSparks] = useState(false);
  const [fadeEffects, setFadeEffects] = useState(false);

  const activeTheme = "rajasthani";
  const isRajasthani = activeTheme === "rajasthani";

  useEffect(() => {
    const sparksTimer = window.setTimeout(() => {
      setShowSparks(true);
    }, 3500);

    const fadeTimer = window.setTimeout(() => {
      setFadeEffects(true);
    }, 7500);

    const removeTimer = window.setTimeout(() => {
      setShowPetals(false);
      setShowSparks(false);
    }, 9000);

    return () => {
      window.clearTimeout(sparksTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)]">
      <BackgroundMusic />

      {/* =====================================================
          RAJASTHANI HERO BACKGROUND
      ===================================================== */}

      {isRajasthani && (
        <>
          <div
            className="pointer-events-none absolute inset-0 scale-[1.04] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/themes/rajasthani/hero-bg.PNG')",
              filter: "blur(4px)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-white/35" />
        </>
      )}

      {/* =====================================================
          BACKGROUND LIGHTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-3xl" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      </div>

      {/* =====================================================
          ROSE PETALS
      ===================================================== */}

      {isRajasthani && showPetals && (
        <div
          className={`hero-rose-petals ${
            fadeEffects ? "hero-rose-petals-fade" : ""
          }`}
        >
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
        <div
          className={`hero-fire-sparks ${
            fadeEffects ? "hero-fire-sparks-fade" : ""
          }`}
        >
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

      <div className="relative z-10 w-full">
        <Container>
          <div className="flex min-h-screen w-full items-center justify-center px-4 text-center sm:px-6">

            {/* Text composition */}
            <div className="relative mx-auto w-full max-w-4xl -translate-y-[70px] sm:translate-y-0">

              {/* Dark blurred text backdrop */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/25 blur-3xl sm:h-[440px] sm:w-[90%]"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto flex w-full flex-col items-center">

                {/* Together */}
                <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[3px] text-[#2b1d0e] sm:mb-10 sm:text-sm sm:tracking-[7px]">
                  Together With Their Families
                </p>
                <br />
                <br />

                {/* Names */}
                <h1 className="mb-7 flex w-full items-center justify-center gap-2 whitespace-nowrap font-heading text-[2.25rem] font-semibold leading-none tracking-normal sm:mb-8 sm:gap-4 sm:text-6xl md:text-8xl">
                  <span>Vishal</span>

                  <span className="text-[var(--primary)]">
                    &
                  </span>

                  <span>Varsha</span>
                </h1>
                <br />
                <br />

                {/* Invitation text */}
                <p className="mb-8 max-w-[360px] text-center text-sm leading-7 text-white sm:mb-10 sm:max-w-xl sm:text-lg sm:leading-8">
                  Request the pleasure of your company
                  <br />
                  at the celebration of their marriage.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-4 sm:gap-5">
                  <span className="h-px w-14 bg-white sm:w-20" />

                  <span className="text-lg text-white sm:text-xl">
                    ✦
                  </span>

                  <span className="h-px w-14 bg-white sm:w-20" />
                </div>

              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* =====================================================
          SINGLE WEBSITE SCROLL INDICATOR
      ===================================================== */}

      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center text-center">
        <div className="scroll-indicator">
          <span className="text-xs uppercase tracking-[5px] text-[#2b1d0e]">
            SCROLL
          </span>

          <div className="scroll-line text-[#2b1d0e]" />
        </div>
      </div>
    </section>
  );
}