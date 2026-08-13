
import Container from "@/components/ui/Container";
import ScrollReveal from "../ScrollReveal";

export default function Closing() {
  return (
    <ScrollReveal>
      <section
        className="flex items-center justify-center bg-white"
        style={{
          paddingTop: "180px",
          paddingBottom: "180px",
        }}
      >
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

            {/* Main Blessing */}
            <p
              className="max-w-xl font-serif text-lg italic leading-[2] text-neutral-600 sm:text-xl md:text-2xl"
              style={{
                letterSpacing: "0.01em",
              }}
            >
              May the years ahead be filled with love, laughter,
              and countless beautiful moments.
            </p>

            {/* Emotional Message */}
            <p
              className="mt-12 max-w-md text-sm leading-[2] text-neutral-400 sm:text-base"
            >
                <br>
                </br>
                
              Thank you for being a part of our beautiful beginning.
            </p>

            {/* Closing */}
            <p
              className="mt-14 text-xs uppercase tracking-[0.35em] text-neutral-400 sm:text-sm"
            ><br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
              With Love & Gratitude
            </p>

            {/* Decorative Element */}
            <div
              className="mt-12 flex items-center gap-3"
              aria-hidden="true"
            ><br>
                </br>
              <span className="h-px w-50 bg-neutral-300" />
              <span className="text-xs text-neutral-400">✦</span>
              <span className="h-px w-50 bg-neutral-300" />
            </div>

          </div>
        </Container>
      </section>
    </ScrollReveal>
  );
}
