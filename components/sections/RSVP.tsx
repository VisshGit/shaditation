"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const smoothCurve = [0.22, 1, 0.36, 1] as const;

export default function RSVP() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

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
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
        backgroundImage: "url('/images/cdbg.PNG')",
      }}
    >
      {/* Background Dim Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex justify-center px-4 sm:px-6">
            {/* ROYAL GLASSMORPHISM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.1, ease: smoothCurve }}
              className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 px-6 py-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-16 sm:py-16 md:px-20"
            >
              {/* HEADING SECTION */}
              <div className="flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: smoothCurve }}
                  className="text-xs uppercase tracking-[5px] text-amber-200/90 sm:text-sm sm:tracking-[7px]"
                >
                  We Would Love To Hear From You
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: smoothCurve }}
                  className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent origin-center"
                />

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: smoothCurve }}
                  className="mt-4 font-heading text-4xl leading-tight text-white drop-shadow-md sm:text-6xl md:text-7xl"
                >
                  RSVP
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.55, ease: smoothCurve }}
                  className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent origin-center"
                />
              </div>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: 0.65, ease: smoothCurve }}
                className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-white/85 sm:text-base sm:leading-8"
              >
                Your presence would mean the world to us.
                <br />
                Kindly let us know if you will be joining our celebration.
              </motion.p>

              {/* FORM FIELDS CONTAINER (Centered to red-box width with clean side margins) */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.75, ease: smoothCurve }}
                onSubmit={handleSubmit}
                className="mx-auto mt-10 w-full max-w-md text-left"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-100 font-medium"
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
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-100 font-medium"
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
                <div className="mt-5">
                  <label
                    htmlFor="response"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-100 font-medium"
                  >
                    Your Response <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="response"
                    name="response"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#2b1d0e]/80 sm:bg-white/10 px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-[#2b1d0e]/95 focus:ring-2 focus:ring-amber-300/20"
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
                <div className="mt-5">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-100 font-medium"
                  >
                    How Many Members Are Joining? <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/20 bg-[#2b1d0e]/80 sm:bg-white/10 px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition duration-300 focus:border-amber-300/70 focus:bg-[#2b1d0e]/95 focus:ring-2 focus:ring-amber-300/20"
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
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] uppercase tracking-[3px] text-amber-100 font-medium"
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
                    className={`mt-6 rounded-xl border p-3.5 text-center text-sm font-medium backdrop-blur-md ${
                      statusMessage.type === "success"
                        ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                        : "border-rose-500/40 bg-rose-950/40 text-rose-300"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* BUTTON */}
                <div className="mt-8 flex justify-center">
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
              </motion.form>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
