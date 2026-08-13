import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ScratchReveal from "@/components/sections/ScratchReveal";
import Countdown from "@/components/sections/Countdown";
import Story from "@/components/sections/Story";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Venue from "@/components/sections/Venue";
import RSVP from "@/components/sections/RSVP";
import Closing from "@/components/sections/Closing";
import WelcomeGate from "@/components/sections/WelcomeGate";

export default function Home() {
  return (
    <Layout>
      <WelcomeGate>
        <main
  style={{
    backgroundColor: "var(--background)",
    paddingTop: "48px",
    paddingBottom: "48px",
  }}
>
          <Hero />

          <div style={{ marginTop: "64px" }}>
            <ScratchReveal />
          </div>

          <div style={{ marginTop: "64px" }}>
            <Countdown />
          </div>

          <div style={{ marginTop: "64px" }}>
            <Story />
          </div>

          {/* Gallery */}
          <div style={{ marginTop: "64px" }}>
            <Gallery />
          </div>

          {/* Wedding Celebrations */}
          <div style={{ marginTop: "64px" }}>
            <Events />
          </div>

          <div style={{ marginTop: "64px" }}>
            <Venue />
          </div>

          <div style={{ marginTop: "64px" }}>
            <RSVP />
          </div>

          <div style={{ marginTop: "64px" }}>
            <Closing />
          </div>
        </main>
      </WelcomeGate>
    </Layout>
  );
}