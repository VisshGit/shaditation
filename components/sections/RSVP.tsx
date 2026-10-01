"use client";

import { FormEvent, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.16, 1, 0.3, 1] as const;

export default function RSVP() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const sectionRef = useRef<HTMLElement>(null);

  // Parallax tracking identical to Story, Events, & Venue
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax smooth drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatusMessage({ type: null, text: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      response: formData.get("response"),
      guests:
        formData.get("guests") === "10+" ? 10 : Number(formData.get("guests")),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit RSVP");
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your RSVP has been received.",
      });
      form.reset();
    } catch (err: any) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: "Oops! Kuch dikkat aayi, please dobara try karein.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      /* Standalone cinematic stage with balanced breathing buffer and zero layout shift */
      className="relative isolate flex min-h-[120vh] w-full items-center justify-center overflow-hidden bg-[#0c0704] py-36 sm:py-44 md:py-52 transform-gpu"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER (cdbg.PNG - Extended Buffer)
      ===================================================== */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -top-40 -bottom-40 scale-[1.18] bg-cover bg-center will-change-transform z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cdbg.PNG')",
          }}
        />
        {/* Balanced softer dark wash so image remains visible */}
        <div className="absolute inset-0 bg-[#0c0704]/70" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="absolute inset-0 bg-[#0c0704]/25 z-[1]" />

      {/* Top Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* Bottom Golden Glow Gradient (Updated to match top style) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* =====================================================
          TOP DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-24 items-center justify-center -translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>

      {/* =====================================================
          RSVP CONTENT (Centered in the Isolated Stage)
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="mx-auto max-w-4xl px-4 text-center">
            {/* Reduced Top Breathing Spacer */}
            <div className="h-8 sm:h-12 w-full" aria-hidden="true" />

            {/* HEADING SECTION (OUTSIDE THE BOX) */}
            <div className="flex w-full flex-col items-center text-center mb-10 sm:mb-14">
              <p className="text-xs uppercase tracking-[6px] text-amber-200 font-semibold sm:text-sm">
                We Would Love To Hear From You 
                <br> 
                </br>
              </p>

              <div
                className="mt-3.5 h-px w-20 bg-amber-400/70 origin-center drop-shadow"
              />

              <h2 className="mt-3.5 font-heading text-4xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl">
                RSVP
              </h2>

              <div
                className="mt-3.5 h-px w-12 bg-amber-400/50 origin-center"
              />

              {/* SUBTITLE WITH PROPER SPACING BEFORE THE BOX */}
              <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-7 text-amber-100/85 sm:text-base sm:leading-8 mb-4">
               <br> 
                </br>
                Your presence would mean the world to us.
                <br />
                Kindly let us know if you will be joining our celebration.
                <br> 
                </br>
                <br> 
                </br>
                
              </p>
            </div>

            {/* ROYAL GLASSMORPHISM CARD (WITH PROPER LEFT-RIGHT PADDING) */}
            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-[#b68d40]/40 bg-black/45 px-8 sm:px-16 md:px-20 py-10 sm:py-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
              {/* FORM FIELDS */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-xl flex-col text-left mx-auto"
              >
                {/* NAME */}
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-200 font-medium"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-2 focus:ring-amber-300/20"
                  />
                </div>

                {/* EMAIL */}
                <div className="mt-6 w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-200 font-medium"
                  >
                    Email Address{" "}
                    <span className="ml-1.5 normal-case tracking-normal text-white/60">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-2 focus:ring-amber-300/20"
                  />
                </div>

                {/* RESPONSE */}
                <div className="mt-6 w-full">
                  <label
                    htmlFor="response"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-200 font-medium"
                  >
                    Your Response <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="response"
                    name="response"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#2b1d0e]/95 px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-[#2b1d0e] focus:ring-2 focus:ring-amber-300/20"
                  >
                    <option value="" disabled className="bg-[#2b1d0e] text-white/70">
                      Will you attend?
                    </option>
                    <option value="accept" className="bg-[#2b1d0e] text-white">
                      Joyfully accept
                    </option>
                    <option value="decline" className="bg-[#2b1d0e] text-white">
                      Regretfully decline
                    </option>
                  </select>
                </div>

                {/* NUMBER OF MEMBERS */}
                <div className="mt-6 w-full">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-200 font-medium"
                  >
                    How Many Members Are Joining? <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#2b1d0e]/95 px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-[#2b1d0e] focus:ring-2 focus:ring-amber-300/20"
                  >
                    <option value="" disabled className="bg-[#2b1d0e] text-white/70">
                      Select number of members
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-[#2b1d0e] text-white">
                        {num} {num === 1 ? "Member" : "Members"}
                      </option>
                    ))}
                    <option value="10+" className="bg-[#2b1d0e] text-white">
                      10+ Members
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-6 w-full">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-200 font-medium"
                  >
                    A Message for the Couple
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share your wishes and blessings..."
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-2 focus:ring-amber-300/20"
                  />
                </div>

                {/* STATUS MESSAGE */}
                {statusMessage.text && (
                  <div
                    className={`mt-6 w-full rounded-xl border p-3.5 text-center text-sm font-medium backdrop-blur-md ${
                      statusMessage.type === "success"
                        ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                        : "border-rose-500/40 bg-rose-950/40 text-rose-300"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="mt-8 flex w-full justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rsvp-luxury-button group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="rsvp-button-glow" />
                    <span className="rsvp-button-inner">
                      <span className="rsvp-button-icon">✦</span>
                      <span className="rsvp-button-text">
                        {loading ? "Sending..." : "Send RSVP"}
                      </span>
                      <span className="rsvp-button-icon">✦</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Symmetrical Breathing Spacer inside container */}
            <div className="h-8 sm:h-12 w-full" aria-hidden="true" />
          </div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-24 items-center justify-center translate-y-[45px]">
        <div className="h-[2px] w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-6 flex items-center gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-xl">𑁍</span>
          <span className="text-sm">✦</span>
          <span className="text-xl">𑁍</span>
        </div>
        <div className="h-[2px] w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>
    </section>
  );
}
