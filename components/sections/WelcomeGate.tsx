"use client";

import { ReactNode, useState } from "react";

type WelcomeGateProps = {
  children: ReactNode;
  leftImage?: string;
  rightImage?: string;
};

export default function WelcomeGate({
  children,
  leftImage = "/images/gate-left.jpg",
  rightImage = "/images/gate-right.jpg",
}: WelcomeGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const openGate = () => {
    if (isOpening || isOpened) return;

    // Start wedding music from the user's tap
    window.dispatchEvent(new Event("start-wedding-music"));

    setIsOpening(true);

    // Remove gate after the opening animation finishes
    window.setTimeout(() => {
      setIsOpened(true);
    }, 3200);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-clip">
      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      <div
  className={`w-full min-h-screen transition-all duration-[3000ms] ease-in-out ${
    isOpening
      ? "scale-[1.01] opacity-100 blur-0"
      : "scale-100 opacity-100 blur-[14px]"
  }`}
>
  {children}
</div>

      {/* =====================================================
          WELCOME GATE
      ===================================================== */}

      {!isOpened && (
        <div
          className={`fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-black ${
            isOpening ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          {/* =================================================
              LEFT GATE
          ================================================= */}

          <div
            className={`absolute inset-y-0 left-0 w-1/2 overflow-hidden transition-transform duration-[3000ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${
              isOpening ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <img
              src={leftImage}
              alt=""
              className="block h-full w-full select-none object-cover object-[right_center] sm:object-center"
              draggable={false}
            />
          </div>

          {/* =================================================
              RIGHT GATE
          ================================================= */}

          <div
            className={`absolute inset-y-0 right-0 w-1/2 overflow-hidden transition-transform duration-[3000ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${
              isOpening ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <img
              src={rightImage}
              alt=""
              className="block h-full w-full select-none object-cover object-[left_center] sm:object-center"
              draggable={false}
            />
          </div>

          {/* =================================================
              CENTER GANPATI OPEN BUTTON
          ================================================= */}

          <div
            className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-[1400ms] ease-out ${
              isOpening ? "scale-90 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <button
              type="button"
              onClick={openGate}
              disabled={isOpening}
              aria-label="Open the wedding invitation"
              className="
                group
                relative
                z-30
                flex
                h-[220px]
                w-[220px]
                touch-manipulation
                items-center
                justify-center
                bg-transparent
                p-0
                transition-transform
                duration-700
                hover:scale-105
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/60
                disabled:pointer-events-none
              "
            >
              <img
                src="/themes/rajasthani/ganpati.png"
                alt="Ganpati"
                className="
                  block
                  h-full
                  w-full
                  select-none
                  object-contain
                  opacity-100
                  drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]
                "
                draggable={false}
              />
            </button>
          </div>

          {/* =================================================
              SOFT CENTER OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              bg-black/5
            "
          />
        </div>
      )}
    </main>
  );
}
