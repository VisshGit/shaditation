import WelcomeGate from "@/components/sections/WelcomeGate";
import Hero from "@/components/sections/Hero";
import ScratchReveal from "@/components/sections/ScratchReveal";
import Countdown from "@/components/sections/Countdown";

export default function Home() {
  return (
    <WelcomeGate
      leftImage="/gates/gate-left.jpg"
      rightImage="/gates/gate-right.jpg"
    >
      <Hero />
      <ScratchReveal />
      <Countdown />
    </WelcomeGate>
  );
}
