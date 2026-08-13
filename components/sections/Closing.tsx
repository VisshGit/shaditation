
import ScrollReveal from "@/components/ScrollReveal";

export default function Closing() {
  return (
    <ScrollReveal>
      <section
        className="relative isolate overflow-hidden"
        style={{
          color: "var(--foreground)",
          paddingTop: "120px",
          paddingBottom: "264px",
        }}
      >
        {/* =========================
            CINEMATIC BACKGROUND
        ========================== */}

        <div
          className="pointer-events-none absolute inset-0 -z-30"
          style={{
            backgroundImage: "url('/images/closing-sunset.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            transform: "scale(1.04)",
            opacity: 0.42,
          }}
        />

        {/* Soft Wedding Tone Overlay */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(253,248,243,0.72) 0%, rgba(253,248,243,0.42) 45%, rgba(43,29,14,0.58) 100%)",
          }}
        />

        {/* Warm Cinematic Glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(255,235,190,0.28), transparent 48%)",
          }}
        />

        {/* =========================
            FORT FOREGROUND
        ========================== */}

        <img
          src="/images/closing-fort.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 select-none"
          style={{
            width: "clamp(280px, 43vw, 620px)",
            maxWidth: "62%",
            height: "auto",
            opacity: 0.96,
            filter:
              "drop-shadow(0 -8px 18px rgba(43,29,14,0.18))",
          }}
        />

        {/* =========================
            TOP LUXURY DECORATION
        ========================== */}

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
                opacity="0.75"
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
                opacity="0.35"
              />

              <circle cx="90" cy="15" r="1.8" fill="var(--primary)" />
              <circle cx="180" cy="26" r="1.3" fill="var(--primary)" />
              <circle cx="280" cy="12" r="2" fill="var(--primary)" />
              <circle cx="380" cy="26" r="1.3" fill="var(--primary)" />
              <circle cx="470" cy="15" r="1.8" fill="var(--primary)" />
            </svg>
          </div>
        </div>

        {/* =========================
            CENTER CONTENT
        ========================== */}

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
          <span
            className="mb-6 h-px w-10"
            style={{
              background: "var(--primary)",
              opacity: 0.55,
            }}
          />

          <p
            style={{
              margin: 0,
              paddingTop: "46px",
              paddingBottom: "46px",
              fontFamily: "var(--font-script), cursive",
              fontSize: "clamp(24px, 4vw, 36px)",
              lineHeight: 1.3,
              color: "var(--primary)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            Can't wait to celebrate with you
          </p>

          <div
            className="mt-7 flex items-center gap-4"
            style={{
              color: "var(--primary)",
            }}
          >
            <span
              className="h-px w-14 opacity-40"
              style={{
                background: "var(--primary)",
              }}
            />

            <span className="text-xs opacity-80">✦</span>

            <span
              className="h-px w-14 opacity-40"
              style={{
                background: "var(--primary)",
              }}
            />
          </div>
        </div>

        {/* =========================
            BOTTOM LUXURY DECORATION
        ========================== */}

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
                opacity="0.75"
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
                opacity="0.35"
              />

              <circle cx="90" cy="27" r="1.8" fill="var(--primary)" />
              <circle cx="180" cy="16" r="1.3" fill="var(--primary)" />
              <circle cx="280" cy="30" r="2" fill="var(--primary)" />
              <circle cx="380" cy="16" r="1.3" fill="var(--primary)" />
              <circle cx="470" cy="27" r="1.8" fill="var(--primary)" />
            </svg>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
