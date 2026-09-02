import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "var(--foreground)",
      }}
    >
      {/* Ambient Gold Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "rgba(182, 141, 64, 0.08)",
        }}
      />

      <Container>
        <div
          className="relative flex flex-col items-center px-6 text-center"
          style={{
            paddingTop: "42px",
            paddingBottom: "24px",
          }}
        >
          {/* WEDDING NAMES */}
          <div>
            <h2
              className="font-heading text-3xl tracking-wide md:text-5xl"
              style={{
                color: "var(--white)",
                lineHeight: 1.1,
              }}
            >
              Vishal
              <span
                className="mx-2"
                style={{
                  color: "var(--primary)",
                }}
              >
                &amp;
              </span>
              Varsha
            </h2>

            <div className="mt-3 flex items-center justify-center gap-3">
              <span
                className="h-px w-10"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--primary) 50%, transparent)",
                }}
              />

              <span
                className="text-[9px]"
                style={{
                  color: "var(--primary)",
                }}
              >
                ✦
              </span>

              <span
                className="h-px w-10"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--primary) 50%, transparent)",
                }}
              />
            </div>

            <p
              className="mt-3 text-[9px] uppercase tracking-[4px]"
              style={{
                color: "var(--secondary)",
              }}
            >
              Forever Begins Here
            </p>
          </div>

          {/* DIVIDER */}
          <div
            className="my-7 h-px w-full max-w-md"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--primary), transparent)",
              opacity: 0.45,
            }}
          />

          {/* BRAND */}
          <div>
            <p
              className="font-heading text-lg tracking-[4px]"
              style={{
                color: "var(--white)",
              }}
            >
              SHADITATION
            </p>

            <p
              className="mt-2 text-[9px] uppercase tracking-[2.5px]"
              style={{
                color: "var(--secondary)",
                opacity: 0.65,
              }}
            >
              Digital Wedding Invitations
            </p>

            <p
              className="mx-auto mt-3 max-w-md text-[11px] leading-5"
              style={{
                color: "var(--white)",
                opacity: 0.45,
              }}
            >
              Crafted with love for beautiful beginnings.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div
            className="mt-7 text-[9px] tracking-[1.2px]"
            style={{
              color: "var(--white)",
              opacity: 0.28,
            }}
          >
            © 2026 Shaditation. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
