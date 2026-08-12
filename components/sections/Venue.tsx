import Container from "@/components/ui/Container";

export default function Venue() {
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
            Location
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
            Wedding Venue
          </h2>
        </div>

        <div
          className="grid items-center gap-12 md:grid-cols-2"
          style={{ marginTop: "64px" }}
        >
          <div>
            <h3 className="font-heading mb-6 text-3xl">
              Urmila Palace & Marriage Garden
            </h3>

            <p className="mb-6 leading-8 text-gray-600">
              Join us at this beautiful venue as we celebrate the beginning of
              our forever journey.
            </p>

            <p className="text-gray-700">
              📍Ajmer, Rajasthan
              <br />
              🕖 7:00 PM onwards
            </p>
          </div>

          <div className="h-80 overflow-hidden rounded-3xl bg-gray-200">
            <iframe
              className="h-full w-full"
              src="https://maps.google.com/maps?q=Urmila+palace+%26+marriage+garden&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}