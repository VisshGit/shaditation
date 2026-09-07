"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Poore section ka scroll progress track karega (0 se 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Layer Speeds (Depth / Parallax effect)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);      // Slow (Background)
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);    // Medium (Midground)
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);     // Fast (Foreground passes quickly)

  // Story texts scroll transition
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);
  const scene1Y = useTransform(scrollYProgress, [0, 0.45], ["0px", "-50px"]);

  const scene2Opacity = useTransform(scrollYProgress, [0.42, 0.65, 0.88], [0, 1, 0]);
  const scene2Y = useTransform(scrollYProgress, [0.42, 0.88], ["50px", "-50px"]);

  return (
    <div ref={containerRef} className="relative h-[260vh] w-full bg-[#1b1420]">
      {/* Screen par chipak kar chalne wala viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Layer 1: Background (Sky / Distant Forts) */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 h-[120%] w-full bg-cover bg-center"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')" }}
          />
        </motion.div>

        {/* Layer 2: Midground (Palace Courtyard / Waterfall / Lake) */}
        <motion.div
          style={{ y: midY }}
          className="absolute inset-0 z-10 h-[130%] w-full"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cdbg.PNG')" }}
          />
        </motion.div>

        {/* Layer 3: Foreground (Arches / Pillars / Elements jo screen ke aage se niklenge) */}
        <motion.div
          style={{ y: fgY }}
          className="pointer-events-none absolute inset-0 z-20 h-[150%] w-full"
        >
          <div
            className="h-full w-full bg-cover bg-bottom opacity-40"
            style={{ backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')" }}
          />
        </motion.div>

        {/* Royal Soft Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 z-25 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

        {/* Story Chapter 1 */}
        <motion.div
          style={{ opacity: scene1Opacity, y: scene1Y }}
          className="absolute inset-0 z-30 flex items-center justify-start px-6 md:px-20"
        >
          <Container>
            <div className="max-w-xl text-left">
              <span className="text-xs font-semibold uppercase tracking-[6px] text-[var(--accent)]">
                Chapter 01
              </span>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-wider text-white md:text-6xl">
                The Royal Beginning
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                Two souls crossing paths against the royal heritage of Rajasthan,
                setting forth on a journey crafted in destiny.
              </p>
            </div>
          </Container>
        </motion.div>

        {/* Story Chapter 2 */}
        <motion.div
          style={{ opacity: scene2Opacity, y: scene2Y }}
          className="absolute inset-0 z-30 flex items-center justify-end px-6 md:px-20"
        >
          <Container>
            <div className="max-w-xl text-right ml-auto">
              <span className="text-xs font-semibold uppercase tracking-[6px] text-[var(--accent)]">
                Chapter 02
              </span>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-wider text-white md:text-6xl">
                The Sacred Promise
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                With the timeless blessings of family and eternity in our hearts,
                we celebrate the union of love and tradition.
              </p>
            </div>
          </Container>
        </motion.div>

      </div>
    </div>
  );
}
