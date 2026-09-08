"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <div className="relative flex h-20 w-[4.25rem] items-center justify-center overflow-hidden rounded-xl border-2 border-[#b68d40] bg-white/55 shadow-[0_12px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8b5e34] hover:shadow-[0_18px_38px_rgba(0,0,0,0.25)] sm:h-24 sm:w-20 md:h-32 md:w-28 md:rounded-2xl">
        <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-100/70 blur-2xl" />

        <span
          key={`${label}-${displayValue}`}
          className="countdown-number relative z-10 font-heading text-3xl text-[#2b1d0e] sm:text-4xl md:text-5xl"
        >
          {displayValue}
        </span>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-[2px] text-white drop-shadow-md sm:mt-3 sm:text-xs sm:tracking-[3px] md:mt-4">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof getTimeLeft
  > | null>(null);

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
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
        backgroundImage: "url('/images/cdbg.PNG')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Soft Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/45" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              {/* 1. Subtitle - Delay 0.15s */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm uppercase tracking-[6px] text-white drop-shadow-lg"
                style={{ margin: 0 }}
              >
                Counting Down to Forever
              </motion.p>

              {/* 2. Divider - Delay 0.3s */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-20 bg-white/70 origin-center"
                style={{ margin: "12px auto 36px" }}
              />

              {/* 3. Main Heading - Delay 0.45s */}
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-4xl text-white drop-shadow-lg md:text-5xl"
                style={{ margin: 0, lineHeight: 1.15 }}
              >
                The Celebration Begins Soon
              </motion.h2>

              {/* 4. Boxes Container with Staggered Delays (0.65s, 0.75s, 0.85s, 0.95s) */}
              <div
                className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-8"
                style={{ marginTop: "64px" }}
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
