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
      /* Section shifted slightly upwards with compact top padding */
      className="relative isolate flex min-h-screen w-full items-start justify-center overflow-hidden bg-[#0c0704] pt-10 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 transform-gpu"
    >
      {/* =====================================================
          PARALLAX BACKGROUND LAYER
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
        <div className="absolute inset-0 bg-[#0c0704]/70" />
      </motion.div>

      {/* Atmospheric lighting & soft edge transitions */}
      <div className="absolute inset-0 bg-[#0c0704]/25 z-[1]" />

      {/* Top Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 sm:h-40 bg-gradient-to-b from-[#b68d40]/40 via-[#b68d40]/10 to-transparent" />

      {/* Bottom Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 sm:h-40 bg-gradient-to-t from-[#b68d40]/40 via-[#b68d40]/10 to-transparent" />

      {/* =====================================================
          RSVP CONTENT
      ===================================================== */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
        <Container>
          <div className="mx-auto flex flex-col items-center w-full max-w-2xl text-center">
            
            {/* HEADING SECTION: Shifted up with clear, generous spacing between lines */}
            <div className="flex w-full flex-col items-center mb-8 sm:mb-12">
              <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-amber-200 font-semibold">
                We Would Love To Hear From You
              </p>

              <div className="mt-4 h-px w-16 sm:w-24 bg-amber-400/70 origin-center drop-shadow" />

              <h2 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-wider leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                RSVP
              </h2>

              <div className="mt-4 h-px w-10 sm:w-14 bg-amber-400/50 origin-center" />

              <p className="mx-auto mt-5 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-amber-100/85 px-3">
                Your presence would mean the world to us. <br className="hidden sm:inline" />
                Kindly let us know if you will be joining our celebration.
              </p>
            </div>

            {/* ROYAL GLASSMORPHISM CARD: Clean margins with solid internal padding */}
            <div className="w-full rounded-2xl sm:rounded-3xl border border-[#b68d40]/40 bg-black/60 px-5 py-7 sm:px-10 sm:py-10 md:px-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col text-left space-y-5 sm:space-y-6"
              >
                {/* NAME */}
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] uppercase tracking-[2.5px] text-amber-200 font-medium"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* EMAIL */}
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] uppercase tracking-[2.5px] text-amber-200 font-medium"
                  >
                    Email Address{" "}
                    <span className="ml-1 text-[10px] normal-case tracking-normal text-white/50">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* RESPONSE */}
                <div className="w-full">
                  <label
                    htmlFor="response"
                    className="mb-2 block text-[11px] uppercase tracking-[2.5px] text-amber-200 font-medium"
                  >
                    Your Response <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="response"
                    name="response"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#180f07] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/40"
                  >
                    <option value="" disabled className="bg-[#180f07] text-white/60">
                      Will you attend?
                    </option>
                    <option value="accept" className="bg-[#180f07] text-white">
                      Joyfully accept
                    </option>
                    <option value="decline" className="bg-[#180f07] text-white">
                      Regretfully decline
                    </option>
                  </select>
                </div>

                {/* NUMBER OF MEMBERS */}
                <div className="w-full">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-[11px] uppercase tracking-[2.5px] text-amber-200 font-medium"
                  >
                    How Many Members Are Joining? <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#180f07] px-4 py-3 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/40"
                  >
                    <option value="" disabled className="bg-[#180f07] text-white/60">
                      Select number of members
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-[#180f07] text-white">
                        {num} {num === 1 ? "Member" : "Members"}
                      </option>
                    ))}
                    <option value="10+" className="bg-[#180f07] text-white">
                      10+ Members
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] uppercase tracking-[2.5px] text-amber-200 font-medium"
                  >
                    A Message for the Couple
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Share your wishes and blessings..."
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* STATUS MESSAGE */}
                {statusMessage.text && (
                  <div
                    className={`rounded-xl border p-3.5 text-center text-xs sm:text-sm font-medium backdrop-blur-md ${
                      statusMessage.type === "success"
                        ? "border-emerald-500/40 bg-emerald-950/50 text-emerald-300"
                        : "border-rose-500/40 bg-rose-950/50 text-rose-300"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="pt-3 sm:pt-4 flex w-full justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rsvp-luxury-button group w-full sm:w-auto px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
          </div>
        </Container>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE AMBER GOLD BORDER RIBBON
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-14 sm:h-20 items-center justify-center translate-y-[15px] sm:translate-y-[25px] pointer-events-none">
        <div className="h-[1.5px] sm:h-[2px] w-[28%] sm:w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-3 sm:mx-6 flex items-center gap-1.5 sm:gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-sm sm:text-xl">𑁍</span>
          <span className="text-[10px] sm:text-sm">✦</span>
          <span className="text-sm sm:text-xl">𑁍</span>
        </div>
        <div className="h-[1.5px] sm:h-[2px] w-[28%] sm:w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>
    </section>
  );
}
