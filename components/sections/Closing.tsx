import ScrollReveal from "@/components/ScrollReveal";

export default function Closing() {
  return (
    <ScrollReveal>
      <section
        className="relative isolate overflow-hidden bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cdbg2.PNG')",
          paddingTop: "120px",
          paddingBottom: "220px",
        }}
      >
        {/* Top Blend Overlay: Countdown se smooth transition ke liye */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#1a110a] via-[#1a110a]/80 to-transparent pointer-events-none z-0" />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        {/* TOP LUXURY DECORATION */}
        <div className="relative z-10 flex justify-center px-6">
          <div className="h-[42px] w-full max-w-[560px]">
            <svg
              viewBox="0 0 560 42"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <path
                d="M5 21
                   C55 8, 95 8, 140 21
                   S225 34, 280 21
                   S335 8, 420 21
                   S505 34, 555 21"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1"
                opacity="0.85"
              />

              <path
                d="M45 21
                   C90 14, 115 14, 150 21
                   S215 28, 280 21
                   S345 14, 410 21
                   S470 28, 515 21"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.45"
              />

              <circle cx="90" cy="15" r="1.8" fill="var(--primary)" />
              <circle cx="180" cy="26" r="1.3" fill="var(--primary)" />
              <circle cx="280" cy="12" r="2" fill="var(--primary)" />
              <circle cx="380" cy="26" r="1.3" fill="var(--primary)" />
              <circle cx="470" cy="15" r="1.8" fill="var(--primary)" />
            </svg>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center">
          <span
            className="mb-6 h-px w-12"
            style={{
              background: "var(--primary)",
              opacity: 0.65,
            }}
          />

          <p
            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{
              margin: 0,
              paddingTop: "16px",
              paddingBottom: "16px",
              fontFamily: "var(--font-script), cursive",
              fontSize: "clamp(28px, 4.5vw, 42px)",
              lineHeight: 1.3,
              color: "var(--primary)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            Can&apos;t wait to celebrate with you
          </p>

          <div
            className="mt-6 flex items-center gap-4"
            style={{
              color: "var(--primary)",
            }}
          >
            <span
              className="h-px w-14 opacity-50"
              style={{
                background: "var(--primary)",
              }}
            />

            <span className="text-sm opacity-90 drop-shadow-md">✦</span>

            <span
              className="h-px w-14 opacity-50"
              style={{
                background: "var(--primary)",
              }}
            />
          </div>
        </div>

        {/* BOTTOM LUXURY DECORATION */}
        <div className="relative z-10 flex justify-center px-6">
          <div className="h-[42px] w-full max-w-[560px]">
            <svg
              viewBox="0 0 560 42"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <path
                d="M5 21
                   C55 34, 95 34, 140 21
                   S225 8, 280 21
                   S335 34, 420 21
                   S505 8, 555 21"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1"
                opacity="0.85"
              />

              <path
                d="M45 21
                   C90 28, 115 28, 150 21
                   S215 14, 280 21
                   S345 28, 410 21
                   S470 14, 515 21"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="0.6"
                opacity="0.45"
              />

              <circle cx="90" cy="27" r="1.8" fill="var(--primary)" />
              <circle cx="180" cy="16" r="1.3" fill="var(--primary)" />
              <circle cx="280" cy="30" r="2" fill="var(--primary)" />
              <circle cx="380" cy="16" r="1.3" fill="var(--primary)" />
              <circle cx="470" cy="27" r="1.8" fill="var(--primary)" />
            </svg>
          </div>
        </div>

        {/* Bottom Fade to dark background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#120b06] to-transparent pointer-events-none z-0" />
      </section>
    </ScrollReveal>
  );
}
