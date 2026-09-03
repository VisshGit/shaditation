import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Countdown />
      <Story />
    </div>
  );
}
