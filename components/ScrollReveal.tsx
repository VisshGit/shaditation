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

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        element.classList.add("scroll-reveal-visible");
        observer.unobserve(element);

        // Animation khatam hote hi heavy GPU properties hatao
        const timer = setTimeout(() => {
          element.style.willChange = "auto";
          element.style.transform = "none";
          element.style.transition = "none";
        }, delay + 600);

        return () => clearTimeout(timer);
      },
      {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px",
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
