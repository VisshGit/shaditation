"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Respect reduced-motion preference
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    // If IntersectionObserver is not supported,
    // show the content normally.
    if (!("IntersectionObserver" in window)) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    if (delay > 0) {
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) return;

        // Only change the class.
        // No React state update = no extra component re-render.
        entry.target.classList.add("scroll-reveal-visible");

        // Animate only once.
        observerInstance.unobserve(entry.target);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={
        {
          "--reveal-delay": delay > 0 ? `${delay}ms` : "0ms",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
