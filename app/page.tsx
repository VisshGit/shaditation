import Hero from "@/components/sections/Hero";
import ScratchReveal from "@/components/sections/ScratchReveal";
import Countdown from "@/components/sections/Countdown";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import Venue from "@/components/sections/Venue";
import RSVP from "@/components/sections/RSVP";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ScratchReveal />
      <Countdown />
      <Story />
      <Gallery />
      <Events />
      <Venue />
      <RSVP />
      <Closing />
    </div>
  );
}
