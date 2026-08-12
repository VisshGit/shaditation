import Container from "@/components/ui/Container";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
  <div className="flex items-center justify-between py-6">
        <h2 className="text-2xl font-bold tracking-[10px] text-yellow-700">
          #Varshal
        </h2>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[3px]">
          <a href="#" className="hover:text-yellow-700 transition">
            Home
          </a>

          <a href="#" className="hover:text-yellow-700 transition">
            Story
          </a>

          <a href="#" className="hover:text-yellow-700 transition">
            Events
          </a>

          <a href="#" className="hover:text-yellow-700 transition">
            Gallery
          </a>

          <a href="#" className="hover:text-yellow-700 transition">
            RSVP
          </a>
        </nav>

            </div>
    </Container>
  </header>
  );
}