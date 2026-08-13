import Container from "@/components/ui/Container";
import ScrollReveal from "../ScrollReveal";

export default function Closing() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#fdf8f3",
        color: "#5b4636",
        paddingTop: "120px",
        paddingBottom: "0",
      }}
    >
      {/* Top decorative line */}
      <div className="flex justify-center px-6">
        <div
          className="w-full max-w-[540px]"
          style={{ height: "38px" }}
        >
          <svg
            viewBox="0 0 540 38"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <path
              d="M5 19 C75 4, 115 34, 180 19 S300 4, 365 19 S465 34, 535 19"
              fill="none"
              stroke="#c9a45c"
              strokeWidth="1.2"
            />

            <circle cx="75" cy="14" r="2" fill="#c9a45c" />
            <circle cx="145" cy="23" r="1.5" fill="#c9a45c" />
            <circle cx="270" cy="13" r="2" fill="#c9a45c" />
            <circle cx="385" cy="24" r="1.5" fill="#c9a45c" />
            <circle cx="465" cy="13" r="2" fill="#c9a45c" />
          </svg>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          paddingTop: "55px",
          paddingBottom: "55px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-script), cursive",
            fontSize: "clamp(30px, 5vw, 48px)",
            lineHeight: 1.3,
            color: "#b58a3c",
            fontWeight: 500,
          }}
        >
          We can't wait to celebrate with you!
        </p>

        <p
          style={{
            margin: "22px 0 0",
            fontFamily: "var(--font-heading), serif",
            fontSize: "16px",
            letterSpacing: "0.12em",
            color: "#6b5140",
            textTransform: "uppercase",
          }}
        >
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="flex justify-center px-6">
        <div
          className="w-full max-w-[540px]"
          style={{ height: "38px" }}
        >
          <svg
            viewBox="0 0 540 38"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <path
              d="M5 19 C75 34, 115 4, 180 19 S300 34, 365 19 S465 4, 535 19"
              fill="none"
              stroke="#c9a45c"
              strokeWidth="1.2"
            />

            <circle cx="75" cy="24" r="2" fill="#c9a45c" />
            <circle cx="145" cy="15" r="1.5" fill="#c9a45c" />
            <circle cx="270" cy="25" r="2" fill="#c9a45c" />
            <circle cx="385" cy="14" r="1.5" fill="#c9a45c" />
            <circle cx="465" cy="25" r="2" fill="#c9a45c" />
          </svg>
        </div>
      </div>

     <br></br>
     <br></br>
     <br></br>
     <br></br>
    </section>
  );
}