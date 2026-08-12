"use client";

import { ReactNode, useEffect, useState } from "react";

type WelcomeGateProps = {
  children: ReactNode;
};

const sparkPieces = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 19) % 100}%`,
  delay: `${(index % 10) * 0.07}s`,
  size: `${4 + (index % 4) * 2}px`,
}));

export default function WelcomeGate({ children }: WelcomeGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
    useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}, []);

  const openGate = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.dispatchEvent(new Event("start-wedding-music"));

    // The doors get a head start, then the whole gate softly dissolves away.
    window.setTimeout(() => setIsFading(true), 1100);

    window.setTimeout(() => {
      setIsOpen(true);
      setShowSparks(true);

      window.setTimeout(() => setShowSparks(false), 3100);
    }, 2150);
  };

  return (
    <>
      {!isOpen && (
        <div
          className={`gate-screen ${isOpening ? "gate-opening" : ""}`}
          style={{
            opacity: isFading ? 0 : 1,
            filter: isFading ? "blur(10px)" : "blur(0)",
            pointerEvents: isFading ? "none" : "auto",
            transition: "opacity 1050ms ease-in-out, filter 1050ms ease-in-out",
          }}
        >
          <div className="gate-light gate-light-one" />
          <div className="gate-light gate-light-two" />
          <div className="gate-light gate-light-three" />

          <div className="gate-door gate-door-left" />
          <div className="gate-door gate-door-right" />

          <div className="gate-content">
            <div className="royal-gate-visual">
              <div className="royal-gate-arch" />

              <div className="royal-gate-panel royal-gate-panel-left">
                <span />
                <span />
                <span />
              </div>

              <div className="royal-gate-panel royal-gate-panel-right">
                <span />
                <span />
                <span />
              </div>

              <div className="royal-gate-emblem" />
            </div>

            <button
              type="button"
              onClick={openGate}
              className="gate-button"
              disabled={isOpening}
            >
              Tap to Open
            </button>
          </div>
        </div>
      )}

      {children}

      {showSparks && (
        <div className="hero-sparks">
          {sparkPieces.map((spark, index) => (
            <span
              key={index}
              className={`hero-spark hero-spark-${index % 4}`}
              style={{
                left: spark.left,
                width: spark.size,
                height: spark.size,
                animationDelay: spark.delay,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
