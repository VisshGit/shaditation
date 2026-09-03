"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ScrollReveal";

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
    <ScrollReveal>
      {/* =====================================================
          PARALLAX FIXED SECTION (Countdown Same Image & Overlays)
      ===================================================== */}
      <div
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cdbg.PNG')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Soft Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/45" />

        <Section className="relative z-10 !pt-[120px] !pb-[120px] md:!pt-[160px] md:!pb-[160px]">
          <div className="flex w-full justify-center">
            {/* LUXURY ROYAL CARD */}
            <div className="w-full max-w-2xl rounded-3xl border border-[var(--primary)]/35 bg-[var(--background)]/90 px-6 py-12 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-16">
              {/* HEADING */}
              <div className="flex flex-col items-center">
                <p className="text-xs uppercase tracking-[5px] text-[var(--accent)] sm:text-sm sm:tracking-[7px]">
                  We Would Love To Hear From You
                </p>

                <div className="mt-5 h-px w-20 bg-[var(--primary)]/60" />

                <h2 className="mt-6 font-heading text-5xl leading-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
                  RSVP
                </h2>

                <div className="mt-6 h-px w-14 bg-[var(--primary)]/40" />
              </div>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-7 max-w-xl text-center text-sm leading-7 text-[var(--foreground)]/75 sm:text-base sm:leading-8">
                Your presence would mean the world to us.
                <br />
                Kindly let us know if you will be joining our celebration.
              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 w-full max-w-2xl text-left"
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--surface)]/70 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/40 focus:border-[var(--primary)]/60 focus:bg-[var(--surface)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* EMAIL */}
                <div className="mt-7">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                  >
                    Email Address
                    <span className="ml-2 normal-case tracking-normal text-[var(--foreground)]/50">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--surface)]/70 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/40 focus:border-[var(--primary)]/60 focus:bg-[var(--surface)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* RESPONSE */}
                <div className="mt-7">
                  <label
                    htmlFor="response"
                    className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                  >
                    Your Response <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="response"
                    name="response"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--surface)]/70 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 focus:border-[var(--primary)]/60 focus:bg-[var(--surface)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  >
                    <option value="" disabled>
                      Will you attend?
                    </option>

                    <option value="accept">Joyfully accept</option>
                    <option value="decline">Regretfully decline</option>
                  </select>
                </div>

                {/* NUMBER OF MEMBERS */}
                <div className="mt-7">
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                  >
                    How Many Members Are Joining?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="guests"
                    name="guests"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--surface)]/70 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 focus:border-[var(--primary)]/60 focus:bg-[var(--surface)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  >
                    <option value="" disabled>
                      Select number of members
                    </option>
                    <option value="1">1 Member</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                    <option value="5">5 Members</option>
                    <option value="6">6 Members</option>
                    <option value="7">7 Members</option>
                    <option value="8">8 Members</option>
                    <option value="9">9 Members</option>
                    <option value="10">10 Members</option>
                    <option value="10+">10+ Members</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-7">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                  >
                    A Message for the Couple
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your wishes..."
                    className="w-full resize-none rounded-xl border border-[var(--primary)]/25 bg-[var(--surface)]/70 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/40 focus:border-[var(--primary)]/60 focus:bg-[var(--surface)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* FEEDBACK MESSAGE */}
                {statusMessage.text && (
                  <div
                    className={`mt-6 text-center text-sm font-medium ${
                      statusMessage.type === "success"
                        ? "text-emerald-500"
                        : "text-rose-500"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* LUXURY RSVP BUTTON */}
                <div className="mt-10 flex justify-center">
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
          </div>
        </Section>
      </div>
    </ScrollReveal>
  );
}
