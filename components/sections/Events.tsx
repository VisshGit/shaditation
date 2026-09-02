import Container from "@/components/ui/Container";
import ScrollReveal from "../ScrollReveal";

const events = [
  {
    title: "Vinayak",
    date: "Monday, 25 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Dhol Night",
    date: "Thursday, 28 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Kalash",
    date: "Friday, 29 January 2027",
    time: "Morning",
    venue: "",
  },
  {
    title: "Bindoli",
    date: "Friday, 29 January 2027",
    time: "Evening",
    venue: "",
  },
  {
    title: "Haldi Ceremony",
    date: "Saturday, 30 January 2027",
    time: "Morning",
    venue: "Urmila Garden",
  },
  {
    title: "Cocktail Party",
    date: "Saturday, 30 January 2027",
    time: "Evening",
    venue: "Urmila Garden",
  },
  {
    title: "Barat",
    date: "Sunday, 31 January 2027",
    time: "Time to be announced",
    venue: "",
  },
  {
    title: "Reception",
    date: "Wednesday, 3 February 2027",
    time: "Time to be announced",
    venue: "Urmila Garden",
  },
];

export default function Events() {
  return (
    <ScrollReveal>
      <section
        className="flex items-center justify-center bg-[var(--background)]"
        style={{
          marginTop: "120px",
          paddingTop: "160px",
          paddingBottom: "160px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl px-4 text-center sm:px-0">
              <p
                className="text-xs uppercase tracking-[5px] text-[var(--primary)] sm:text-sm sm:tracking-[6px]"
                style={{ margin: 0 }}
              >
                Wedding Events
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
                Celebration Details
              </h2>

              <div
                className="grid gap-6 md:grid-cols-2 md:gap-8"
                style={{ marginTop: "64px" }}
              >
                {events.map((event) => (
                  <div
                    key={event.title}
                    aria-label="Wedding event card"
                    className="group relative overflow-hidden rounded-3xl border border-[var(--primary)]/15 bg-white px-7 py-10 text-center shadow-[0_15px_40px_rgba(43,29,14,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(43,29,14,0.11)] sm:px-10"
                  >
                    <div className="mx-auto mb-7 flex items-center justify-center gap-3">
                      <span className="h-px w-10 bg-[var(--primary)]/30" />
                      <span className="text-sm text-[var(--primary)]">
                        ✦
                      </span>
                      <span className="h-px w-10 bg-[var(--primary)]/30" />
                    </div>

                    <h3 className="mb-6 font-heading text-3xl text-[var(--foreground)] sm:text-4xl">
                      {event.title}
                    </h3>

                    <div className="mx-auto mb-7 h-px w-12 bg-[var(--primary)]/25" />

                    <p className="text-sm leading-8 text-gray-600 sm:text-base">
                      {event.date}
                      <br />
                      {event.time}
                      {event.venue && (
                        <>
                          <br />
                          {event.venue}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
