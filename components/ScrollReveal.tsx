
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

    // Reduced motion = show immediately
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    // Fallback for older browsers
    if (!("IntersectionObserver" in window)) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    // Apply delay only when actually requested
    if (delay > 0) {
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        const entry = entries[0];

        if (!entry || !entry.isIntersecting) return;

        element.classList.add("scroll-reveal-visible");

        // Reveal only once
        observerInstance.unobserve(element);
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -5% 0px",
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
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
