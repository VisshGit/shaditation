import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white bg-[#0c0704]"
    >
      {/* =====================================================
          TOP GOLDEN GLOW & BORDER TRANSITION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-[#b68d40]/30 via-[#b68d40]/10 to-transparent" />

      {/* Top Decorative Amber Gold Border Ribbon */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-24 items-center justify-center -translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>

      {/* Ambient Gold Glow Center */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl z-0"
        style={{
          background: "rgba(182, 141, 64, 0.1)",
        }}
      />

      <Container>
        <div
          className="relative z-10 flex flex-col items-center px-6 text-center"
          style={{
            paddingTop: "64px",
            paddingBottom: "40px",
          }}
        >
          {/* WEDDING NAMES */}
          <div>
            <h2
              className="font-heading text-3xl tracking-wide md:text-5xl text-white"
              style={{
                lineHeight: 1.1,
              }}
            >
              Vishal
              <span
                className="mx-3 text-amber-300"
              >
                &amp;
              </span>
              Varsha
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span
                className="h-px w-12 bg-amber-400/50"
              />
              <span
                className="text-xs text-amber-300"
              >
                ✦
              </span>
              <span
                className="h-px w-12 bg-amber-400/50"
              />
            </div>

            <p
              className="mt-4 text-xs uppercase tracking-[6px] text-amber-200/90 font-medium"
            >
              Forever Begins Here
            </p>
          </div>

          {/* DIVIDER */}
          <div
            className="my-9 h-px w-full max-w-md bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
          />

          {/* BRAND */}
          <div>
            <p
              className="font-heading text-lg tracking-[5px] text-white"
            >
              SHADITATION
            </p>

            <p
              className="mt-2 text-[10px] uppercase tracking-[3px] text-amber-200/70"
            >
              Digital Wedding Invitations
            </p>

            <p
              className="mx-auto mt-3 max-w-md text-xs leading-6 text-amber-100/60"
            >
              Crafted with love for beautiful beginnings.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div
            className="mt-10 text-[10px] tracking-[1.5px] text-white/40"
          >
            © 2026 Shaditation. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
