import Image from "next/image";
import Container from "@/components/ui/Container";

const images = [
  { src: "/images/image1.jpeg", alt: "Wedding memory 1", height: "h-80" },
  { src: "/images/image2.jpeg", alt: "Wedding memory 2", height: "h-[420px]" },
  { src: "/images/image3.jpeg", alt: "Wedding memory 3", height: "h-80" },
  { src: "/images/image4.jpeg", alt: "Wedding memory 4", height: "h-[420px]" },
  { src: "/images/image5.jpeg", alt: "Wedding memory 5", height: "h-80" },
  { src: "/images/image6.jpeg", alt: "Wedding memory 6", height: "h-[420px]" },
];

export default function Gallery() {
  return (
    <section
      className="bg-[#fdf8f3]"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      <Container>
        <div className="text-center">
          <p className="m-0 text-sm uppercase tracking-[6px] text-amber-700">
            Memories
          </p>

          <div className="mx-auto mt-3 h-px w-20 bg-amber-700/50" />

          <h2 className="mt-9 font-heading text-5xl leading-tight">
            Our Gallery
          </h2>

          <br />
          <br />
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-3xl shadow-lg ${image.height}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
