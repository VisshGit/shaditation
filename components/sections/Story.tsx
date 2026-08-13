import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function Story() {
  return (
    <ScrollReveal>
      <section
        className="cinematic-section flex items-center justify-center bg-white"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="cinematic-content flex justify-center">
            <div className="w-full max-w-3xl px-4 text-center sm:px-0">

              {/* Section Label */}
              <p
                className="cinematic-text text-xs uppercase tracking-[5px] text-[var(--primary)] sm:text-sm sm:tracking-[6px]"
                style={{ margin: 0 }}
              >
                Our Story
              </p>

              {/* Elegant Divider */}
              <div
                className="cinematic-divider mx-auto flex items-center justify-center gap-3"
                style={{ margin: "18px auto 34px" }}
              >
                <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />

                <span className="text-sm text-[var(--primary)]">
                  ✦
                </span>

                <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
              </div>

              {/* Heading */}
              <h2
                className="cinematic-heading font-heading text-4xl text-[var(--foreground)] sm:text-5xl md:text-6xl"
                style={{
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                A Beautiful Journey
              </h2>

              {/* Story */}
              <p
                className="cinematic-text mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9"
                style={{ marginTop: "48px" }}
              >
                Two hearts, one beautiful journey. With love, laughter and
                countless memories, Vishal and Varsha begin their forever
                together.
              </p>

              {/* Bottom Ornament */}
              <div
                className="cinematic-item mx-auto mt-12 h-px w-16 bg-[var(--primary)]/25"
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}