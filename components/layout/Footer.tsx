import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#2b1d0e] text-white">
      <Container>
        <div className="flex flex-col items-center text-center py-16 md:py-20">

          {/* =========================
              PRIMARY — WEDDING
          ========================== */}

          <div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide">
              Vishal
              <span className="mx-3 text-amber-400">&amp;</span>
              Varsha
            </h2>

            <p className="mt-4 text-xs uppercase tracking-[5px] text-amber-200">
              Forever Begins Here
            </p>
          </div>


          {/* =========================
              DIVIDER
          ========================== */}

          <div className="my-10 h-px w-full max-w-xl bg-white/15" />


          {/* =========================
              SECONDARY — BRAND
          ========================== */}

          <div>
            <p className="font-heading text-xl tracking-[4px]">
              SHADITATION
            </p>

            <p className="mt-3 text-xs tracking-[2px] text-white/60">
              Digital Wedding Invitations
            </p>

            <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-white/45">
              Crafted with love for beautiful beginnings.
            </p>
          </div>


          {/* =========================
              COPYRIGHT
          ========================== */}

          <div className="mt-10 text-[11px] tracking-[1px] text-white/40">
            © 2026 Shaditation. All Rights Reserved.
          </div>

        </div>
      </Container>
    </footer>
  );
}