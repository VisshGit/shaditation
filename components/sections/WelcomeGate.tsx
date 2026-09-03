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

  // Initial load par lock, lekin jaise hi open shuru ho scroll TURANT unlock
  useEffect(() => {
    if (!isOpening && !isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpening, isOpened]);

  const openGate = () => {
    if (isOpening || isOpened) return;

    window.dispatchEvent(new Event("start-wedding-music"));

    // 1. Scroll ko usi millisecond free karo
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setIsOpening(true);

    // 2. Darwaza open hone ke baad DOM se gate safely unmount karo
    window.setTimeout(() => {
      setIsOpened(true);
    }, 2600);
  };

  return (
    <div className="relative w-full">
      {/* =====================================================
          WEBSITE CONTENT (Zero Blocking, Pure Native Render)
      ===================================================== */}
      <div className="w-full">
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
          style={{ touchAction: isOpening ? "auto" : "none" }}
        >
          {/* LEFT GATE */}
          <div
            className={`
              absolute inset-y-0 left-0 w-1/2
              overflow-hidden
              transition-transform
              duration-[2200ms]
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
              duration-[2200ms]
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

          {/* SOFT BACKDROP */}
          <div
            className={`
              pointer-events-none
              absolute inset-0
              z-10
              bg-black/10
              transition-opacity
              duration-1000
              ${isOpening ? "opacity-0" : "opacity-100"}
            `}
          />
        </div>
      )}
    </div>
  );
}
