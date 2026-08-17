"use client";

import { useState } from "react";
import Image from "next/image";
import ScratchCanvas from "@/components/ui/ScratchCanvas";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ScrollReveal";

const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 29) % 96 + 2}%`,
  delay: `${(index % 12) * 0.1}s`,
  color: ["#f6d77c", "#c99832", "#ffffff", "#8b5a12"][index % 4],
}));

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <ScrollReveal>
      <Section className="bg-[#faf7f2] !pt-[150px] !pb-[150px] md:!pt-[160px] md:!pb-[160px]">
        <div className="mb-12 flex flex-col items-center text-center">
          <p
            className="text-sm uppercase tracking-[6px] text-amber-700"
            style={{ margin: 0 }}
          >
            A Special Surprise
          </p>

          <div
            className="h-px w-20 bg-amber-700/50"
            style={{ margin: "12px auto 36px" }}
          />

          <h2
            className="font-heading text-5xl text-[#2d1d15]"
            style={{ margin: 0, lineHeight: 1.15 }}
          >
            Scratch to Reveal The Date
            <br />
            <br />
          </h2>
        </div>

        {/* Scratch Card */}
        <div className="flex justify-center px-0">
          <div className="w-[calc(100%-2rem)] max-w-2xl rounded-[2rem] bg-[#b68d40] p-[3px] shadow-[0_25px_55px_rgba(111,70,13,0.28)] md:w-full">
            <div className="relative h-64 overflow-hidden rounded-[1.85rem] border border-white/20 sm:h-72 md:h-96">
              <div className="absolute inset-0">
                <Image
                  src="/images/card.png"
                  alt="Wedding date reveal"
                  fill
                  priority
                  sizes="(max-width: 768px) calc(100vw - 2rem), 672px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#2b1d0e]/45" />

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <div className="px-3 py-4 text-center sm:px-7 sm:py-8 md:px-12">
                    <p className="text-[10px] uppercase tracking-[4px] text-white/80 sm:text-xs sm:tracking-[6px]">
                      Save the Date
                    </p>

                    <div className="my-4 flex items-center justify-center gap-3 sm:my-5 sm:gap-4">
                      <span className="h-px w-8 bg-amber-200/70 sm:w-12" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                      <span className="h-px w-8 bg-amber-200/70 sm:w-12" />
                    </div>

                    <h3 className="font-heading text-3xl text-white sm:text-4xl md:text-6xl">
                      31 JAN 2027
                    </h3>

                    <p className="mt-3 text-[11px] uppercase tracking-[2px] text-amber-100 sm:mt-4 sm:text-sm sm:tracking-[3px]">
                     
                    </p>
                  </div>
                </div>
              </div>

              {/* Scratch interaction remains untouched */}
              <div className="absolute inset-0 z-30 touch-none select-none">
                <ScratchCanvas onReveal={() => setRevealed(true)} />
              </div>

              {revealed && (
                <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
                  {confettiPieces.map((piece, index) => (
                    <span
                      key={index}
                      className={`confetti confetti-${index % 4}`}
                      style={{
                        left: piece.left,
                        backgroundColor: piece.color,
                        animationDelay: piece.delay,
                      }}
                    />
                  ))}

                  <span className="party-pop party-pop-left">🎉</span>
                  <span className="party-pop party-pop-right">🎉</span>

                  <span className="big-sparkle big-sparkle-one">✦</span>
                  <span className="big-sparkle big-sparkle-two">✦</span>
                  <span className="big-sparkle big-sparkle-three">✦</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </ScrollReveal>
  );
}
