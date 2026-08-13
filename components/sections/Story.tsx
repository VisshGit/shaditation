import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function Story() {
  return (
    <ScrollReveal>
      <section
        className="flex items-center justify-center bg-white"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              <p
                className="text-sm uppercase tracking-[6px] text-amber-700"
                style={{ margin: 0 }}
              >
                Our Story
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
                A Beautiful Journey
              </h2>

              <p
                className="text-lg leading-8 text-gray-600"
                style={{ marginTop: "48px" }}
              >
                Two hearts, one beautiful journey. With love, laughter and
                countless memories, Vishal and Varsha begin their forever
                together.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}