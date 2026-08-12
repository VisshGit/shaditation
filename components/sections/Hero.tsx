"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import BackgroundMusic from "@/components/ui/BackgroundMusic";

const fireSparks = Array.from({ length: 34 }, (_, index) => ({
  left: `${(index * 17 + 3) % 96 + 2}%`,
  delay: `${(index % 12) * 0.18}s`,
  size: `${3 + (index % 4) * 1.5}px`,
  duration: `${2.4 + (index % 5) * 0.28}s`,
}));

export default function Hero() {
  const [showSparks, setShowSparks] = useState(true);
  const [fadeSparks, setFadeSparks] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeSparks(true), 6000);
    const removeTimer = window.setTimeout(() => setShowSparks(false), 7000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fdf8f3]">
      <BackgroundMusic />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      {showSparks && (
        <div className={`hero-fire-sparks ${fadeSparks ? "hero-fire-sparks-fade" : ""}`}>
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

      <div className="relative z-10">
        <Container>
          <div className="flex min-h-screen items-center justify-center text-center">
            <div className="mx-auto max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[8px] text-amber-700">
                Together With Their Families
              </p>

              <h1 className="mb-6 whitespace-nowrap font-heading text-5xl font-semibold leading-tight tracking-wide md:text-8xl">
                Vishal <span className="mx-3 text-amber-700">&</span> Varsha
              </h1>

              <p className="mb-10 text-lg leading-8 text-gray-700">
                Request the pleasure of your company
                <br />
                at the celebration of their marriage.
              </p>

              <div className="mb-10 flex items-center justify-center gap-4">
                <span className="h-px w-20 bg-amber-700" />
                <span className="text-xl text-amber-700">✦</span>
                <span className="h-px w-20 bg-amber-700" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-[5px] text-gray-500">Scroll</p>
      </div>
    </section>
  );
}
