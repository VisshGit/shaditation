"use client";

import { motion } from "framer-motion";
import React from "react";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function RevealText({
  children,
  delay = 0.2,
  className = "",
  yOffset = 24,
}: RevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Screen pe 30% aate hi trigger hoga, ek hi baar chalega
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
