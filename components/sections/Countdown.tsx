"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ScrollReveal";

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
};

function CountdownBox({ label, value }: CountdownBoxProps) {
  const displayValue =
    value === undefined ? "--" : String(value).padStart(2, "0");

  return (
    <div className="min-w-0 text-center">
      <div className="relative flex h-20 w-[4.25rem] items-center justify-center overflow-hidden rounded-xl border-2 border-[#b68d40] bg-white/45 shadow-[0_12px_30px_rgba(182,141,64,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8b5e34] hover:shadow-[0_18px_38px_rgba(182,141,64,0.35)] sm:h-24 sm:w-20 md:h-32 md:w-28 md:rounded-2xl">
        <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-100/70 blur-2xl" />

        <span
          key={`${label}-${displayValue}`}
          className="countdown-number relative z-10 font-heading text-3xl text-[#2b1d0e] sm:text-4xl md:text-5xl"
        >
          {displayValue}
        </span>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-[2px] text-amber-800 sm:mt-3 sm:text-xs sm:tracking-[3px] md:mt-4">
        {label}
      </p>
    </div>
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
    <ScrollReveal>
      <section
        className="flex items-center justify-center bg-[#fdf8f3]"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <p
                className="text-sm uppercase tracking-[6px] text-amber-700"
                style={{ margin: 0 }}
              >
                Counting Down to Forever
              </p>

              <div
                className="h-px w-20 bg-amber-700/50"
                style={{ margin: "12px auto 36px" }}
              />

              <h2
                className="font-heading text-4xl md:text-5xl"
                style={{ margin: 0, lineHeight: 1.15 }}
              >
                The Celebration Begins Soon
              </h2>

              <div
                className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-8"
                style={{ marginTop: "64px" }}
              >
                <CountdownBox label="Days" value={timeLeft?.days} />
                <CountdownBox label="Hours" value={timeLeft?.hours} />
                <CountdownBox label="Minutes" value={timeLeft?.minutes} />
                <CountdownBox label="Seconds" value={timeLeft?.seconds} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}