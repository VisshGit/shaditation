"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  speed?: number; // negative ya positive depth control ke liye
  overlayOpacity?: string;
  className?: string;
}

export default function ParallaxSection({
  children,
  bgImage,
  speed = 0.25,
  overlayOpacity = "bg-black/40",
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background smooth parallax move karega
  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`]
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Background Layer */}
      {bgImage && (
        <motion.div
          style={{ y: yBg }}
          className="pointer-events-none absolute -inset-y-24 inset-x-0 -z-10 h-[140%] w-full bg-cover bg-center"
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className={`absolute inset-0 ${overlayOpacity}`} />
        </motion.div>
      )}

      {/* Actual Section Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
