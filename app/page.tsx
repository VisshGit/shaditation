import Hero from "@/components/sections/Hero";
import ScratchReveal from "@/components/sections/ScratchReveal";
import Countdown from "@/components/sections/Countdown";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ScratchReveal />
      <Countdown />
      <Story />
    </div>
  );
}
