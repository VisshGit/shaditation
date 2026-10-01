"use client";

import { motion } from "framer-motion";

export default function StickyHashtag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-center pointer-events-none py-3 px-4"
    >
      <div className="pointer-events-auto flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#b68d40]/40 bg-black/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-amber-200">
        <span className="text-xs">✦</span>
        <span className="font-heading text-xs sm:text-sm tracking-[3px] uppercase font-medium text-amber-100">
          #Varshal
        </span>
        <span className="text-xs">✦</span>
      </div>
    </motion.div>
  );
}
