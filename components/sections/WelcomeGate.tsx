"use client";

import { ReactNode, useEffect, useState } from "react";
import { activeTheme } from "@/config/themes";

type WelcomeGateProps = {
  children: ReactNode;
};

const sparkPieces = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 19) % 100}%`,
  delay: `${(index % 10) * 0.07}s`,
  size: `${4 + (index % 4) * 2}px`,
}));

export default function WelcomeGate({
  children,
}: WelcomeGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSparks, setShowSparks] = useState(false);

  /*
   * =====================================================
   * ACTIVE THEME → GATE VARIANT
   * =====================================================
   *
   * Theme is controlled by:
   *
   * ACTIVE_THEME = "classic"
   * ACTIVE_THEME = "royal"
   * ACTIVE_THEME = "noir"
   * ACTIVE_THEME = "palace"
   *
   * Client wedding data remains completely separate.
   */

  const gateVariant =
    "gate" in activeTheme && activeTheme.gate
      ? activeTheme.gate.variant
      : "classic";

  /*
   * =====================================================
   * RESET SCROLL
   * =====================================================
   */

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  /*
   * =====================================================
   * OPEN GATE
   * =====================================================
   */

  const openGate = () => {
    if (isOpening) return;

    setIsOpening(true);

    window.dispatchEvent(
      new Event("start-wedding-music")
    );

    /*
     * Doors start opening
     */
    window.setTimeout(() => {
  setIsFading(true);
}, 1800);

window.setTimeout(() => {
  setIsOpen(true);
  setShowSparks(true);

  window.setTimeout(() => {
    setShowSparks(false);
  }, 3100);
}, 3000);
  };

  return (
    <>
      {/* =====================================================
          WELCOME GATE
      ===================================================== */}

      {!isOpen && (
        <div
          className={`gate-screen gate-theme-${gateVariant} ${
            isOpening ? "gate-opening" : ""
          }`}
          data-gate={gateVariant}
          style={{
            opacity: isFading ? 0 : 1,
            filter: isFading
              ? "blur(10px)"
              : "blur(0)",
            pointerEvents: isFading
              ? "none"
              : "auto",
            transition:
              "opacity 1500ms ease-in-out, filter 1500ms ease-in-out",
          }}
        >
          {/* =================================================
              AMBIENT LIGHTS
          ================================================= */}

          <div className="gate-light gate-light-one" />
          <div className="gate-light gate-light-two" />
          <div className="gate-light gate-light-three" />

          {/* =================================================
              LEFT DOOR
          ================================================= */}

          <div className="gate-door gate-door-left">
            <div className="gate-door-inner">
              <div className="gate-door-frame" />

              <div className="gate-door-arch" />

              <div className="gate-door-panel">
                <span className="gate-door-line line-one" />
                <span className="gate-door-line line-two" />
                <span className="gate-door-line line-three" />
                <span className="gate-door-line line-four" />
              </div>

              <div className="gate-door-ornament">
                <span />
                <span />
                <span />
              </div>

              <div className="gate-door-handle" />
            </div>
          </div>

          {/* =================================================
              RIGHT DOOR
          ================================================= */}

          <div className="gate-door gate-door-right">
            <div className="gate-door-inner">
              <div className="gate-door-frame" />

              <div className="gate-door-arch" />

              <div className="gate-door-panel">
                <span className="gate-door-line line-one" />
                <span className="gate-door-line line-two" />
                <span className="gate-door-line line-three" />
                <span className="gate-door-line line-four" />
              </div>

              <div className="gate-door-ornament">
                <span />
                <span />
                <span />
              </div>

              <div className="gate-door-handle" />
            </div>
          </div>

          {/* =================================================
              CENTER CONTENT
          ================================================= */}

          <div className="gate-content">
            {/* =================================================
                THEME VISUAL

                CSS controls the actual visual style.

                Example:

                .gate-visual-classic
                .gate-visual-blush
                .gate-visual-ivory
                .gate-visual-champagne
                .gate-visual-royal
                .gate-visual-emerald
                .gate-visual-midnight
                .gate-visual-imperial
                .gate-visual-noir
                .gate-visual-palace
            ================================================= */}

            <div
              className={`gate-visual gate-visual-${gateVariant}`}
            >
              {/* Outer architectural frame */}
              <div className="gate-visual-arch" />

              {/* Left visual panel */}
              <div className="gate-visual-panel gate-visual-panel-left">
                <span />
                <span />
                <span />
              </div>

              {/* Right visual panel */}
              <div className="gate-visual-panel gate-visual-panel-right">
                <span />
                <span />
                <span />
              </div>

              {/* Center emblem */}
              <div className="gate-visual-emblem" />

              {/* Decorative ornaments */}
              <div className="gate-ornament gate-ornament-top" />

              <div className="gate-ornament gate-ornament-bottom" />
            </div>

            {/* =================================================
                OPEN BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={openGate}
              className="gate-button"
              disabled={isOpening}
              aria-label="Open the wedding invitation"
            >
              <span className="gate-button-monogram">
                V&amp;V
              </span>

              <span className="gate-button-label">
                Tap to Open
              </span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      {children}

      {/* =====================================================
          OPENING SPARKS
      ===================================================== */}

      {showSparks && (
        <div className="hero-sparks">
          {sparkPieces.map((spark, index) => (
            <span
              key={index}
              className={`hero-spark hero-spark-${
                index % 4
              }`}
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