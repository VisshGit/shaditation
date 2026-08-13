import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#2b1d0e] py-16 text-white">

      <Container>

        <div className="text-center">


          <h2 className="font-heading text-4xl md:text-5xl mb-5">
            Vishal
            <span className="mx-3 text-amber-400">
              &
            </span>
            Varsha
          </h2>


          <p className="text-sm uppercase tracking-[5px] text-amber-200 mb-8">
            Forever Begins Here
          </p>


          <div className="h-px bg-white/20 mb-8"></div>


          <p className="text-sm text-gray-300">
            © 2026 Shaditation. All Rights Reserved.
          </p>


        </div>


      </Container>

    </footer>
  );
}