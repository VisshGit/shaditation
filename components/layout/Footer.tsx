import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#2b1d0e",
      }}
    >
      {/* Ambient Gold Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "rgba(182, 141, 64, 0.08)",
        }}
      />

      <Container>
        <div
          className="relative flex flex-col items-center px-6 text-center"
          style={{
            paddingTop: "80px",
            paddingBottom: "42px",
          }}
        >
          {/* =========================
              WEDDING NAMES
          ========================== */}
          <div>
            <h2
              className="font-heading text-4xl tracking-wide md:text-6xl"
              style={{
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Vishal
              <span
                className="mx-3"
                style={{
                  color: "#b68d40",
                }}
              >
                &amp;
              </span>
              Varsha
            </h2>

            <div className="mt-5 flex items-center justify-center gap-4">
              <span
                className="h-px w-12"
                style={{
                  backgroundColor: "rgba(182, 141, 64, 0.5)",
                }}
              />

              <span
                className="text-[10px]"
                style={{
                  color: "#b68d40",
                }}
              >
                ✦
              </span>

              <span
                className="h-px w-12"
                style={{
                  backgroundColor: "rgba(182, 141, 64, 0.5)",
                }}
              />
            </div>

            <p
              className="mt-5 text-[10px] uppercase tracking-[5px]"
              style={{
                color: "#f5e6c8",
              }}
            >
              Forever Begins Here
            </p>
          </div>

          {/* =========================
              DIVIDER
          ========================== */}
          <div
            className="my-12 h-px w-full max-w-lg"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(182,141,64,0.45), transparent)",
            }}
          />

          {/* =========================
              BRAND
          ========================== */}
          <div>
            <p
              className="font-heading text-xl tracking-[5px]"
              style={{
                color: "#ffffff",
              }}
            >
              SHADITATION
            </p>

            <p
              className="mt-3 text-[10px] uppercase tracking-[3px]"
              style={{
                color: "rgba(245, 230, 200, 0.65)",
              }}
            >
              Digital Wedding Invitations
            </p>

            <p
              className="mx-auto mt-5 max-w-md text-xs leading-6"
              style={{
                color: "rgba(255, 255, 255, 0.45)",
              }}
            >
              Crafted with love for beautiful beginnings.
            </p>
          </div>

          {/* =========================
              COPYRIGHT
          ========================== */}
          <div
            className="mt-12 text-[10px] tracking-[1.5px]"
            style={{
              color: "rgba(255, 255, 255, 0.28)",
            }}
          >
            © 2026 Shaditation. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}