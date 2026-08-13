import Container from "@/components/ui/Container";
import ScrollReveal from "../ScrollReveal";

export default function Venue() {
  return (
    <ScrollReveal>
      <section
        className="bg-[var(--background)]"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="text-center">
            <p
              className="text-xs uppercase tracking-[5px] text-[var(--primary)] sm:text-sm sm:tracking-[6px]"
              style={{ margin: 0 }}
            >
              Location
            </p>

            <div
              className="mx-auto flex items-center justify-center gap-3"
              style={{ margin: "18px auto 34px" }}
            >
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
              <span className="text-sm text-[var(--primary)]">✦</span>
              <span className="h-px w-12 bg-[var(--primary)]/40 sm:w-20" />
            </div>

            <h2
              className="font-heading text-4xl text-[var(--foreground)] sm:text-5xl md:text-6xl"
              style={{
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Wedding Venue
            </h2>
          </div>

          <div
            className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
            style={{ marginTop: "64px" }}
          >
            <div className="text-center md:text-left">
              <p className="mb-3 text-xs uppercase tracking-[4px] text-[var(--primary)]">
                The Celebration
              </p>

              <h3 className="mb-6 font-heading text-3xl text-[var(--foreground)] sm:text-4xl">
                Urmila Palace & Marriage Garden
              </h3>

              <p className="mb-7 text-sm leading-8 text-gray-600 sm:text-base">
                Join us at this beautiful venue as we celebrate the beginning
                of our forever journey.
              </p>

              <div className="space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                <p>
                  <span className="mr-2 text-[var(--primary)]">📍</span>
                  Ajmer, Rajasthan
                </p>

                <p>
                  <span className="mr-2 text-[var(--primary)]">🕖</span>
                  7:00 PM onwards
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[var(--primary)]/15 bg-white shadow-[0_15px_40px_rgba(43,29,14,0.08)]">
              <div className="h-80 sm:h-96">
                <iframe
                  className="h-full w-full"
                  src="https://maps.google.com/maps?q=Urmila+palace+%26+marriage+garden&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  title="Urmila Palace & Marriage Garden location map"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}