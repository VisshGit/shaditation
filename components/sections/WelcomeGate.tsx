"use client";

import { ReactNode, useState, useEffect } from "react";

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

  // User ne open daba diya toh scroll INSTANTLY unlock karo
  useEffect(() => {
    if (!isOpening && !isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpening, isOpened]);

  const openGate = () => {
    if (isOpening || isOpened) return;

    window.dispatchEvent(new Event("start-wedding-music"));

    // Scroll turant unlock ho jayega
    setIsOpening(true);
    document.body.style.overflow = "auto";

    window.setTimeout(() => {
      setIsOpened(true);
    }, 2800);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* =====================================================
          WEBSITE CONTENT (Zero Render Blocking)
      ===================================================== */}
      <div
        className={`w-full transition-opacity duration-700 ease-out ${
          isOpening || isOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>

      {/* =====================================================
          WELCOME GATE OVERLAY
      ===================================================== */}
      {!isOpened && (
        <div
          className={`fixed inset-0 z-[9999] overflow-hidden select-none ${
            isOpening ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          {/* LEFT GATE */}
          <div
            className={`
              absolute inset-y-0 left-0 w-1/2
              overflow-hidden
              transition-transform
              duration-[2500ms]
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
              duration-[2500ms]
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

          {/* CENTER GANPATI BUTTON */}
          <div
            className={`
              absolute inset-0
              z-20
              flex items-center justify-center
              transition-opacity
              duration-500
              ease-out
              ${isOpening ? "opacity-0 pointer-events-none" : "opacity-100"}
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
                z-30
                flex
                h-[220px]
                w-[220px]
                cursor-pointer
                items-center
                justify-center
                bg-transparent
                p-0
                transition-transform
                duration-300
                hover:scale-105
                focus:outline-none
              "
            >
              <img
                src="/themes/rajasthani/ganpati.png"
                alt="Ganpati"
                className="
                  block
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]
                "
                draggable={false}
              />
            </button>
          </div>

          {/* SOFT CENTER BACKDROP */}
          <div
            className={`
              pointer-events-none
              absolute inset-0
              z-10
              bg-black/10
              transition-opacity
              duration-[2000ms]
              ${isOpening ? "opacity-0" : "opacity-100"}
            `}
          />
        </div>
      )}
    </main>
  );
}
