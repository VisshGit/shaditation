import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ScrollReveal";

const photos = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
  "/images/image6.jpeg",
];

export default function Gallery() {
  return (
    <ScrollReveal>
      <section
        className="bg-[#fdf8f3]"
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
                Memories
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
                Our Gallery
              </h2>
            </div>
          </div>

          <div
            className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3"
            style={{ marginTop: "64px" }}
          >
            {photos.map((photo, index) => (
              <div
                key={photo}
                className={`overflow-hidden rounded-3xl shadow-lg ${
                  index % 2 === 1 ? "h-[420px]" : "h-80"
                }`}
              >
                <img
                  src={photo}
                  alt={`Wedding memory ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
