import Container from "@/components/ui/Container";
import ScrollReveal from "../ScrollReveal";

export default function Events() {
  return (
    <ScrollReveal>
      <section
        className="flex items-center justify-center bg-[#fdf8f3]"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <p
                className="text-sm uppercase tracking-[6px] text-amber-700"
                style={{ margin: 0 }}
              >
                Wedding Events
              </p>

              <div
                className="h-px w-20 bg-amber-700/50"
                style={{ margin: "12px auto 36px" }}
              />

              <h2
                className="font-heading text-5xl"
                style={{
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Celebration Details
              </h2>

              <div
                className="grid gap-8 md:grid-cols-2"
                style={{ marginTop: "64px" }}
              >
                <div className="rounded-3xl border border-amber-700/15 bg-white p-10 text-center shadow-[0_12px_30px_rgba(82,48,14,0.08)]">
                  <p className="mb-3 text-xs uppercase tracking-[4px] text-amber-700">
                    Ceremony
                  </p>

                  <h3 className="font-heading mb-6 text-3xl">Barat</h3>

                  <p className="leading-8 text-gray-600">
                    Sunday, 31 January 2027
                    <br />
                    11:00 AM onwards
                    <br />
                    Royal Palace Venue
                  </p>
                </div>

                <div className="rounded-3xl border border-amber-700/15 bg-white p-10 text-center shadow-[0_12px_30px_rgba(82,48,14,0.08)]">
                  <p className="mb-3 text-xs uppercase tracking-[4px] text-amber-700">
                    Celebration
                  </p>

                  <h3 className="font-heading mb-6 text-3xl">
                    Reception
                  </h3>

                  <p className="leading-8 text-gray-600">
                    Wednesday, 3 February 2027
                    <br />
                    8:00 PM onwards
                    <br />
                    Grand Celebration Hall
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
