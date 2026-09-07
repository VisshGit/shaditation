import ScrollToTop from "@/components/ui/ScrollToTop";
import WelcomeGate from "@/components/sections/WelcomeGate";
import Hero from "@/components/sections/Hero";
import ScratchReveal from "@/components/sections/ScratchReveal";
import Countdown from "@/components/sections/Countdown";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import Venue from "@/components/sections/Venue";
import RSVP from "@/components/sections/RSVP";
import Closing from "@/components/sections/Closing";
import ParallaxSection from "@/components/ui/ParallaxSection";

export default function Home() {
  return (
    <>
      <ScrollToTop />

      <WelcomeGate
        leftImage="/gates/gate-left.jpg"
        rightImage="/gates/gate-right.jpg"
      >
        {/* 1. Hero */}
        <Hero />

        {/* 2. Scratch Card Reveal */}
        <ParallaxSection speed={0.15}>
          <ScratchReveal />
        </ParallaxSection>

        {/* 3. Countdown */}
        <Countdown />

        {/* 4. Story Section (Deep Royal Parallax) */}
        <ParallaxSection
          bgImage="/themes/rajasthani/hero-bg.PNG"
          speed={0.2}
          overlayOpacity="bg-black/60"
        >
          <Story />
        </ParallaxSection>

        {/* 5. Gallery */}
        <ParallaxSection speed={0.12}>
          <Gallery />
        </ParallaxSection>

        {/* 6. Events / Schedule */}
        <ParallaxSection
          bgImage="/themes/rajasthani/hero-bg.PNG"
          speed={0.18}
          overlayOpacity="bg-black/70"
        >
          <Events />
        </ParallaxSection>

        {/* 7. Venue / Location */}
        <ParallaxSection speed={0.15}>
          <Venue />
        </ParallaxSection>

        {/* 8. RSVP */}
        <RSVP />

        {/* 9. Closing */}
        <ParallaxSection
          bgImage="/images/cdbg.PNG"
          speed={0.25}
          overlayOpacity="bg-black/50"
        >
          <Closing />
        </ParallaxSection>
      </WelcomeGate>
    </>
  );
}
