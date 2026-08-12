import Container from "@/components/ui/Container";

export default function RSVP() {
  return (
    <section
      className="flex items-center justify-center bg-white"
      style={{
        marginTop: "120px",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm uppercase tracking-[6px] text-amber-700"
            style={{ margin: 0 }}
          >
            RSVP
          </p>

          <div
            className="h-px w-20 bg-amber-700/50"
            style={{ margin: "12px auto 36px" }}
          />

          <h2
            className="font-heading text-4xl md:text-6xl"
            style={{
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Will You Join Us?
          </h2>

          <p
            className="mx-auto max-w-xl text-gray-600"
            style={{
              marginTop: "24px",
              lineHeight: 1.8,
            }}
          >
            Your presence would mean the world to us. Kindly share your
            response below.
          </p>

          <form
            className="rounded-[2rem] border border-amber-700/15 bg-[#fdf8f3] text-left shadow-[0_18px_45px_rgba(82,48,14,0.1)]"
            style={{
              marginTop: "56px",
              padding: "40px",
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[3px] text-amber-800">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-amber-700/15 bg-white px-5 py-4 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[3px] text-amber-800">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-amber-700/15 bg-white px-5 py-4 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10"
                />
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <label className="mb-2 block text-xs uppercase tracking-[3px] text-amber-800">
                Your Response
              </label>

              <select className="w-full rounded-xl border border-amber-700/15 bg-white px-5 py-4 text-gray-700 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10">
                <option>Will you attend?</option>
                <option>Joyfully accept</option>
                <option>Regretfully decline</option>
              </select>
            </div>

            <div style={{ marginTop: "24px" }}>
              <label className="mb-2 block text-xs uppercase tracking-[3px] text-amber-800">
                A Message for the Couple
              </label>

              <textarea
                placeholder="Share your wishes..."
                rows={5}
                className="w-full resize-none rounded-xl border border-amber-700/15 bg-white px-5 py-4 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#a96916] py-4 font-medium tracking-wide text-white shadow-lg shadow-amber-800/20 transition hover:bg-[#8b5a12]"
              style={{ marginTop: "32px" }}
            >
              Send RSVP
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}