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

    setIsOpening(true);

    // Give the gate animation time to complete
    window.setTimeout(() => {
      setIsOpened(true);
    }, 3200);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      <div
        className={`transition-all duration-[3000ms] ease-in-out ${
          isOpening
            ? "scale-[1.01] opacity-100 blur-0"
            : "scale-100 opacity-0 blur-[14px]"
        }`}
      >
        {children}
      </div>

      {/* =====================================================
          WELCOME GATE
      ===================================================== */}

      {!isOpened && (
        <div
          className={`fixed inset-0 z-[9999] overflow-hidden ${
            isOpening ? "pointer-events-none" : ""
          }`}
        >
          {/* LEFT GATE */}

          <div
            className={`
              absolute inset-y-0 left-0 w-1/2
              overflow-hidden
              transition-transform
              duration-[3000ms]
              ease-[cubic-bezier(0.77,0,0.18,1)]
              ${isOpening ? "-translate-x-full" : "translate-x-0"}
            `}
          >
            <img
  src={leftImage}
  alt=""
  className="h-full w-full object-cover object-[right_center] sm:object-center"
  draggable={false}
/>
          </div>

          {/* RIGHT GATE */}

          <div
            className={`
              absolute inset-y-0 right-0 w-1/2
              overflow-hidden
              transition-transform
              duration-[3000ms]
              ease-[cubic-bezier(0.77,0,0.18,1)]
              ${isOpening ? "translate-x-full" : "translate-x-0"}
            `}
          >
            <img
  src={rightImage}
  alt=""
  className="h-full w-full object-cover object-[left_center] sm:object-center"
  draggable={false}
/>
          </div>

          {/* CENTER GANPATI OPEN BUTTON */}

          <div
            className={`
              absolute inset-0
              z-20
              flex items-center justify-center
              transition-all
              duration-[1400ms]
              ease-out
              ${
                isOpening
                  ? "scale-90 opacity-0 blur-[12px]"
                  : "scale-100 opacity-100 blur-0"
              }
            `}
          >
            <button
              type="button"
              onClick={openGate}
              disabled={isOpening}
              aria-label="Open the wedding invitation"
              className="
                group
                relative
                flex
                h-[220px]
                w-[220px]
                items-center
                justify-center
                bg-transparent
                p-0
                transition-all
                duration-700
                hover:scale-105
                focus:outline-none
              "
            >
              <img
                src="/themes/rajasthani/ganpati.PNG"
                alt="Ganpati"
                className="
                  h-full
                  w-full
                  object-contain
                  opacity-95
                  drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]
                "
                draggable={false}
              />
            </button>
          </div>

          {/* SOFT CENTER BLUR */}

          <div
            className={`
              pointer-events-none
              absolute inset-0
              z-10
              bg-black/5
              transition-opacity
              duration-[3000ms]
              ${
                isOpening
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />
        </div>
      )}
    </main>
  );
}