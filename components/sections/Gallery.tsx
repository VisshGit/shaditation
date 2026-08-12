import Container from "@/components/ui/Container";

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

        <div
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3"
          style={{ marginTop: "64px" }}
        >
          <div className="h-80 rounded-3xl bg-[#f5e6c8] shadow-lg"></div>

          <div className="h-[420px] rounded-3xl bg-[#ead8b8] shadow-lg"></div>

          <div className="h-80 rounded-3xl bg-[#f5e6c8] shadow-lg"></div>

          <div className="h-[420px] rounded-3xl bg-[#ead8b8] shadow-lg"></div>

          <div className="h-80 rounded-3xl bg-[#f5e6c8] shadow-lg"></div>

          <div className="h-[420px] rounded-3xl bg-[#ead8b8] shadow-lg"></div>
        </div>
      </Container>
    </section>
  );
}