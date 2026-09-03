"use client";

import Container from "@/components/ui/Container";
import { activeTheme } from "@/config/themes";

export default function Hero() {
  const isRajasthani = activeTheme === "royal-rajasthani";

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Background Image */}
      {isRajasthani && (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/themes/rajasthani/hero-bg.PNG')",
              opacity: 0.95,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-white/35" />
        </>
      )}

      {/* Static Theme Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[var(--secondary)]/20 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[var(--primary)]/10 blur-2xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full min-w-0">
        <Container>
          <div className="flex min-h-screen w-full items-center justify-center px-4 text-center sm:px-6">
            <div className="relative mx-auto w-full max-w-4xl px-3 sm:px-0">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto flex w-full flex-col items-center">
                <p className="mb-10 max-w-[320px] text-center text-[10px] font-medium uppercase tracking-[3px] text-[var(--foreground)] sm:mb-12 sm:max-w-none sm:text-sm sm:tracking-[7px]">
                  Together With Their Families
                </p>

                <h1 className="mb-10 flex w-full min-w-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap font-heading text-[2.2rem] font-semibold leading-[1.15] tracking-normal bg-gradient-to-r from-[#8f641d] via-[#fff1a8] via-[45%] to-[#b98224] bg-[length:220%_100%] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mb-12 sm:gap-5 sm:text-6xl md:text-8xl">
                  <span>Vishal</span>
                  <span className="bg-gradient-to-r from-[#9b6b1f] via-[#fff4b0] to-[#c28a2b] bg-clip-text text-transparent">
                    &
                  </span>
                  <span>Varsha</span>
                </h1>

                <p className="mb-8 max-w-[330px] text-center text-sm leading-8 text-[var(--foreground)] sm:mb-10 sm:max-w-xl sm:text-lg sm:leading-9">
                  Request the pleasure of your company
                  <br />
                  at the celebration of their marriage.
                </p>

                <div className="flex items-center justify-center gap-4 sm:gap-5">
                  <span className="h-px w-14 bg-[var(--primary)] sm:w-20" />
                  <span className="text-lg text-[var(--primary)] sm:text-xl">
                    ✦
                  </span>
                  <span className="h-px w-14 bg-[var(--primary)] sm:w-20" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-16 left-0 right-0 z-20 flex justify-center text-center">
        <div className="scroll-indicator">
          <span className="text-xs uppercase tracking-[5px] text-[var(--foreground)]">
            SCROLL
          </span>
          <div className="scroll-line text-[var(--foreground)]" />
        </div>
      </div>
    </section>
  );
}
