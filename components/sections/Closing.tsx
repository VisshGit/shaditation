import ScrollReveal from "@/components/ScrollReveal";

export default function Closing() {
  return (
    <ScrollReveal>
      <section
        className="relative isolate overflow-hidden bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cdbd2.png')",
          paddingTop: "80px",
          paddingBottom: "130px",
        }}
      >
        {/* Base Dark Tint */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* TOP FADE: RSVP ke bottom fade ke sath link hokar seam-free banata hai */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-0" />

        {/* BOTTOM FADE: Footer ki taraf smooth dark fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#120b06] to-transparent pointer-events-none z-0" />

        {/* CENTER CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          
          {/* TOP ORNAMENT */}
          <div className="mb-6 w-full max-w-[500px]">
            <svg
              viewBox="0 0 560 42"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              style={{ color: "var(--primary)" }}
            >
              <path
                d="M5 21
                   C55 8, 95 8, 140 21
                   S225 34, 280 21
                   S335 8, 420 21
                   S505 34, 555 21"
                fill="none"
                stroke="currentColor"
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
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.45"
              />
              <circle cx="90" cy="15" r="1.8" fill="currentColor" />
              <circle cx="180" cy="26" r="1.3" fill="currentColor" />
              <circle cx="280" cy="12" r="2" fill="currentColor" />
              <circle cx="380" cy="26" r="1.3" fill="currentColor" />
              <circle cx="470" cy="15" r="1.8" fill="currentColor" />
            </svg>
          </div>

          {/* MAIN TEXT */}
          <p
            className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{
              margin: 0,
              padding: "10px 0",
              fontFamily: "var(--font-script), cursive",
              fontSize: "clamp(26px, 4.2vw, 42px)",
              lineHeight: 1.3,
              color: "var(--primary)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            Can&apos;t wait to celebrate with you
          </p>

          {/* BOTTOM ORNAMENT */}
          <div className="mt-6 w-full max-w-[500px]">
            <svg
              viewBox="0 0 560 42"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              style={{ color: "var(--primary)" }}
            >
              <path
                d="M5 21
                   C55 34, 95 34, 140 21
                   S225 8, 280 21
                   S335 34, 420 21
                   S505 8, 555 21"
                fill="none"
                stroke="currentColor"
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
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.45"
              />
              <circle cx="90" cy="27" r="1.8" fill="currentColor" />
              <circle cx="180" cy="16" r="1.3" fill="currentColor" />
              <circle cx="280" cy="30" r="2" fill="currentColor" />
              <circle cx="380" cy="16" r="1.3" fill="currentColor" />
              <circle cx="470" cy="27" r="1.8" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
