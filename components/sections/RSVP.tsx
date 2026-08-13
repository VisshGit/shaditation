"use client";

import { FormEvent } from "react";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ScrollReveal";

export default function RSVP() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Thank you! Your RSVP has been received.");
  };

  return (
    <ScrollReveal>
      <Section className="bg-[var(--background)] !pt-[120px] !pb-[120px] md:!pt-[160px] md:!pb-[160px]">
        <div className="flex w-full justify-center">
          <div className="w-full max-w-2xl px-4 text-center sm:px-6">

            {/* HEADING */}

            <div className="flex flex-col items-center">
              <p className="text-xs uppercase tracking-[5px] text-[var(--accent)] sm:text-sm sm:tracking-[7px]">
                We Would Love To Hear From You
                
              </p><br>
              </br>

              <div className="mt-5 h-px w-20 bg-[var(--primary)]/60" />

              <h2 className="mt-6 font-heading text-5xl leading-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
                
                <br>
              </br>
              RSVP
              </h2>

              <div className="mt-6 h-px w-14 bg-[var(--primary)]/40" />
            </div>

            {/* DESCRIPTION */}
            <br>
              </br>

            <p className="mx-auto mt-7 max-w-xl text-center text-sm leading-7 text-[var(--foreground)]/60 sm:text-base sm:leading-8">
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
              <br>
              </br>

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
                  className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--secondary)]/45 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)]/60 focus:bg-[var(--secondary)]/65 focus:ring-2 focus:ring-[var(--primary)]/10"
                />
              </div>

              {/* EMAIL */}
              <br>
              </br>

              <div className="mt-7">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[3px] text-[var(--accent)]"
                >
                  Email Address
                  <span className="ml-2 normal-case tracking-normal text-[var(--foreground)]/40">
                    (Optional)
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--secondary)]/45 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)]/60 focus:bg-[var(--secondary)]/65 focus:ring-2 focus:ring-[var(--primary)]/10"
                />
              </div>

              {/* RESPONSE */}
              <br>
              </br>

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
                  className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--secondary)]/45 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 focus:border-[var(--primary)]/60 focus:bg-[var(--secondary)]/65 focus:ring-2 focus:ring-[var(--primary)]/10"
                >
                  <option value="" disabled>
                    Will you attend?
                  </option>

                  <option value="accept">
                    Joyfully accept
                  </option>

                  <option value="decline">
                    Regretfully decline
                  </option>
                </select>
              </div>

              {/* NUMBER OF MEMBERS */}
              <br>
              </br>

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
                  className="w-full rounded-xl border border-[var(--primary)]/25 bg-[var(--secondary)]/45 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 focus:border-[var(--primary)]/60 focus:bg-[var(--secondary)]/65 focus:ring-2 focus:ring-[var(--primary)]/10"
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
              <br>
              </br>

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
                  className="w-full resize-none rounded-xl border border-[var(--primary)]/25 bg-[var(--secondary)]/45 px-5 py-4 text-sm text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)]/60 focus:bg-[var(--secondary)]/65 focus:ring-2 focus:ring-[var(--primary)]/10"
                />
              </div>
              <br>
              </br>
              <br>
              </br>

              {/* LUXURY RSVP BUTTON */}

              <div className="mt-14 flex justify-center">
                <button
                  type="submit"
                  className="rsvp-luxury-button group"
                >
                  <span className="rsvp-button-glow" />

                  <span className="rsvp-button-inner">
                    <span className="rsvp-button-icon">✦</span>

                    <span className="rsvp-button-text">
                      Send RSVP
                    </span>

                    <span className="rsvp-button-icon">✦</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </ScrollReveal>
  );
}
