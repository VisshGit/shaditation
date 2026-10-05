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
      className="relative isolate flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-[#0c0704] py-16 sm:py-24 md:py-32 transform-gpu"
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
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 sm:h-44 bg-gradient-to-b from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* Bottom Golden Glow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 sm:h-44 bg-gradient-to-t from-[#b68d40]/45 via-[#b68d40]/15 to-transparent" />

      {/* =====================================================
          RSVP CONTENT
      ===================================================== */}
      <div className="relative z-10 my-auto w-full">
        <Container>
          <div className="mx-auto max-w-3xl px-2 sm:px-4 text-center">
            {/* HEADING SECTION */}
            <div className="flex w-full flex-col items-center text-center mb-6 sm:mb-8">
              <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-amber-200 font-semibold">
                We Would Love To Hear From You
              </p>

              <div className="mt-3 h-px w-16 sm:w-20 bg-amber-400/70 origin-center drop-shadow" />

              <h2 className="mt-3 font-heading text-3xl sm:text-5xl md:text-6xl font-medium tracking-wide leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                RSVP
              </h2>

              <div className="mt-3 h-px w-10 sm:w-12 bg-amber-400/50 origin-center" />

              <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-amber-100/80">
                Your presence would mean the world to us. <br className="hidden sm:inline" />
                Kindly let us know if you will be joining our celebration.
              </p>
            </div>

            {/* ROYAL GLASSMORPHISM CARD */}
            <div className="mx-auto w-full max-w-xl rounded-2xl sm:rounded-3xl border border-[#b68d40]/40 bg-black/55 px-4 sm:px-8 md:px-10 py-7 sm:py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col text-left space-y-4 sm:space-y-5"
              >
                {/* NAME */}
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-amber-200 font-medium"
                  >
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* EMAIL */}
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-amber-200 font-medium"
                  >
                    Email Address{" "}
                    <span className="ml-1 text-[9px] sm:text-[10px] normal-case tracking-normal text-white/50">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* RESPONSE */}
                <div className="w-full">
                  <label
                    htmlFor="response"
                    className="mb-1.5 block text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-amber-200 font-medium"
                  >
                    Your Response <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="response"
                    name="response"
                    defaultValue=""
                    required
                    className="w-full rounded-lg sm:rounded-xl border border-white/20 bg-[#1e140b] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/40"
                  >
                    <option value="" disabled className="bg-[#1e140b] text-white/60">
                      Will you attend?
                    </option>
                    <option value="accept" className="bg-[#1e140b] text-white">
                      Joyfully accept
                    </option>
                    <option value="decline" className="bg-[#1e140b] text-white">
                      Regretfully decline
                    </option>
                  </select>
                </div>

                {/* NUMBER OF MEMBERS */}
                <div className="w-full">
                  <label
                    htmlFor="guests"
                    className="mb-1.5 block text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-amber-200 font-medium"
                  >
                    How Many Members Are Joining? <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    defaultValue=""
                    required
                    className="w-full rounded-lg sm:rounded-xl border border-white/20 bg-[#1e140b] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/40"
                  >
                    <option value="" disabled className="bg-[#1e140b] text-white/60">
                      Select number of members
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-[#1e140b] text-white">
                        {num} {num === 1 ? "Member" : "Members"}
                      </option>
                    ))}
                    <option value="10+" className="bg-[#1e140b] text-white">
                      10+ Members
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-amber-200 font-medium"
                  >
                    A Message for the Couple
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Share your wishes and blessings..."
                    className="w-full resize-none rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-white/15 focus:ring-1 focus:ring-amber-300/40"
                  />
                </div>

                {/* STATUS MESSAGE */}
                {statusMessage.text && (
                  <div
                    className={`rounded-lg sm:rounded-xl border p-3 text-center text-xs sm:text-sm font-medium backdrop-blur-md ${
                      statusMessage.type === "success"
                        ? "border-emerald-500/40 bg-emerald-950/50 text-emerald-300"
                        : "border-rose-500/40 bg-rose-950/50 text-rose-300"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="pt-2 flex w-full justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rsvp-luxury-button group w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-16 sm:h-20 items-center justify-center translate-y-[20px] sm:translate-y-[30px] pointer-events-none">
        <div className="h-[1.5px] sm:h-[2px] w-[30%] sm:w-[35%] bg-gradient-to-r from-transparent via-amber-400/80 to-amber-500" />
        <div className="mx-3 sm:mx-6 flex items-center gap-1.5 sm:gap-2.5 text-amber-300 drop-shadow-[0_0_10px_rgba(245,215,124,0.9)]">
          <span className="text-base sm:text-xl">𑁍</span>
          <span className="text-xs sm:text-sm">✦</span>
          <span className="text-base sm:text-xl">𑁍</span>
        </div>
        <div className="h-[1.5px] sm:h-[2px] w-[30%] sm:w-[35%] bg-gradient-to-l from-transparent via-amber-400/80 to-amber-500" />
      </div>
    </section>
  );
}
