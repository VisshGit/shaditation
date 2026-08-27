"use client";

import { ReactNode, useEffect, useState } from "react";

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

  /*
   * Lock page scrolling while the welcome gate is visible.
   * Restore it immediately after the gate is removed.
   */
  useEffect(() => {
    if (isOpened) {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";

      return;
    }

    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [isOpened]);

  const openGate = () => {
    if (isOpening || isOpened) return;

    // Start wedding music from the user's tap
    window.dispatchEvent(new Event("start-wedding-music"));

    // Start gate animation
    setIsOpening(true);
  };

  /*
   * Remove the gate only after the full 3-second
   * opening animation has completed.
   */
  useEffect(() => {
    if (!isOpening) return;

    const timer = window.setTimeout(() => {
      setIsOpened(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isOpening]);

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[var(--background)]">
      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      <div
        className={`
          relative
          min-h-screen
          w-full
          transition-[filter,transform]
          duration-[3000ms]
          ease-in-out
          ${
            isOpening
              ? "scale-[1.01] blur-0"
              : "scale-100 blur-[14px]"
          }
        `}
      >
        {children}
      </div>

      {/* =====================================================
          WELCOME GATE
      ===================================================== */}

      {!isOpened && (
        <div
          className={`
            fixed
            inset-0
            z-[9999]
            h-[100dvh]
            w-full
            overflow-hidden
            bg-black
            ${
              isOpening
                ? "pointer-events-none"
                : "pointer-events-auto"
            }
          `}
        >
          {/* =================================================
              LEFT GATE
          ================================================= */}

          <div
            className={`
              absolute
              inset-y-0
              left-0
              w-1/2
              overflow-hidden
              transition-transform
              duration-[3000ms]
              ease-[cubic-bezier(0.77,0,0.18,1)]
              ${
                isOpening
                  ? "-translate-x-full"
                  : "translate-x-0"
              }
            `}
          >
            <img
              src={leftImage}
              alt=""
              className="
                block
                h-full
                w-full
                select-none
                object-cover
                object-[right_center]
                sm:object-center
              "
              draggable={false}
            />
          </div>

          {/* =================================================
              RIGHT GATE
          ================================================= */}

          <div
            className={`
              absolute
              inset-y-0
              right-0
              w-1/2
              overflow-hidden
              transition-transform
              duration-[3000ms]
              ease-[cubic-bezier(0.77,0,0.18,1)]
              ${
                isOpening
                  ? "translate-x-full"
                  : "translate-x-0"
              }
            `}
          >
            <img
              src={rightImage}
              alt=""
              className="
                block
                h-full
                w-full
                select-none
                object-cover
                object-[left_center]
                sm:object-center
              "
              draggable={false}
            />
          </div>

          {/* =================================================
              CENTER GANPATI OPEN BUTTON
          ================================================= */}

          <div
            className={`
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              transition-[opacity,transform,filter]
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
            className={`
              pointer-events-none
              absolute
              inset-0
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
