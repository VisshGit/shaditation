"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const weddingDate = new Date("2027-01-31T19:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = Math.max(weddingDate - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

type CountdownBoxProps = {
  label: string;
  value: number | undefined;
  delay?: number;
};

function CountdownBox({ label, value, delay = 0 }: CountdownBoxProps) {
  const displayValue =
    value === undefined ? "--" : String(value).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0 text-center"
    >
      <div className="relative flex h-20 w-[4.25rem] items-center justify-center overflow-hidden rounded-xl border-2 border-[#b68d40] bg-white/55 shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#e5c158] hover:shadow-[0_20px_45px_rgba(182,141,64,0.3)] sm:h-24 sm:w-20 md:h-32 md:w-28 md:rounded-2xl">
        <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-100/70 blur-2xl" />

        <span
          key={`${label}-${displayValue}`}
          className="countdown-number relative z-10 font-heading text-3xl font-bold text-[#2b1d0e] sm:text-4xl md:text-5xl"
        >
          {displayValue}
        </span>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-[2px] text-amber-200/90 drop-shadow-md sm:mt-3 sm:text-xs sm:tracking-[3px] md:mt-4 font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft());
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex items-center justify-center overflow-hidden bg-[#0c0704] py-32 sm:py-44 md:py-52"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (cdbg.PNG)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-36 -bottom-36 scale-[1.18] bg-cover bg-center will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cdbg.PNG')",
          }}
        />
      </motion.div>

      {/* Atmospheric lighting & soft edge blend */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-20 bg-gradient-to-b from-[#0c0704]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-[#0c0704]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center px-4">
              {/* 1. Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm uppercase tracking-[6px] text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold"
                style={{ margin: 0 }}
              >
                Counting Down to Forever
              </motion.p>

              {/* 2. Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-20 bg-amber-200/70 origin-center drop-shadow"
                style={{ margin: "14px auto 32px" }}
              />

              {/* 3. Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-4xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl"
                style={{ margin: 0, lineHeight: 1.15 }}
              >
                The Celebration Begins Soon
              </motion.h2>

              {/* 4. Boxes Container */}
              <div
                className="flex flex-nowrap justify-center gap-2.5 sm:gap-4 md:gap-8"
                style={{ marginTop: "60px" }}
              >
                <CountdownBox
                  label="Days"
                  value={timeLeft?.days}
                  delay={0.65}
                />

                <CountdownBox
                  label="Hours"
                  value={timeLeft?.hours}
                  delay={0.75}
                />

                <CountdownBox
                  label="Minutes"
                  value={timeLeft?.minutes}
                  delay={0.85}
                />

                <CountdownBox
                  label="Seconds"
                  value={timeLeft?.seconds}
                  delay={0.95}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
