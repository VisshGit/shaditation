"use client";

import { useEffect, useRef } from "react";

type ScratchCanvasProps = {
  onReveal?: () => void;
};

export default function ScratchCanvas({ onReveal }: ScratchCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onRevealRef = useRef(onReveal);

  useEffect(() => {
    onRevealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width) || 400;
    canvas.height = Math.round(rect.height) || 250;

    // Gold scratch surface
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f8e8b5");
    gradient.addColorStop(0.5, "#c99832");
    gradient.addColorStop(1, "#8b5a12");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isDrawing = false;
    let isRevealed = false;
    let lastX = 0;
    let lastY = 0;
    let scratchedPixelsCount = 0;
    const brushRadius = 32;

    const revealCard = () => {
      if (isRevealed) return;
      isRevealed = true;
      isDrawing = false;

      canvas.style.pointerEvents = "none";
      canvas.style.transition = "opacity 500ms ease-out";
      canvas.style.opacity = "0";

      setTimeout(() => {
        onRevealRef.current?.();
      }, 450);
    };

    const scratchCircle = (x: number, y: number) => {
      if (isRevealed) return;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
      ctx.fill();

      scratchedPixelsCount += brushRadius * 1.5;
      const totalAreaEstimate = (canvas.width * canvas.height) / 4;
      if (scratchedPixelsCount > totalAreaEstimate) {
        revealCard();
      }
    };

    const scratchLine = (x1: number, y1: number, x2: number, y2: number) => {
      if (isRevealed) return;
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = brushRadius * 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const dist = Math.hypot(x2 - x1, y2 - y1);
      scratchedPixelsCount += dist * brushRadius;
      const totalAreaEstimate = (canvas.width * canvas.height) / 4;
      if (scratchedPixelsCount > totalAreaEstimate) {
        revealCard();
      }
    };

    const getCoordinates = (e: MouseEvent | Touch) => {
      const b = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - b.left) * (canvas.width / b.width),
        y: (e.clientY - b.top) * (canvas.height / b.height),
      };
    };

    // Mouse handlers
    const onMouseDown = (e: MouseEvent) => {
      if (isRevealed || e.button !== 0) return;
      isDrawing = true;
      const { x, y } = getCoordinates(e);
      lastX = x;
      lastY = y;
      scratchCircle(x, y);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDrawing || isRevealed) return;
      const { x, y } = getCoordinates(e);
      scratchLine(lastX, lastY, x, y);
      lastX = x;
      lastY = y;
    };

    const onMouseUp = () => {
      isDrawing = false;
    };

    // Touch handlers (optimized to scratch without blocking whole window)
    const onTouchStart = (e: TouchEvent) => {
      if (isRevealed || e.touches.length !== 1) return;
      isDrawing = true;
      const touch = e.touches[0];
      const { x, y } = getCoordinates(touch);
      lastX = x;
      lastY = y;
      scratchCircle(x, y);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDrawing || isRevealed || e.touches.length !== 1) return;
      e.preventDefault(); // canvas ke andar dragging allow karta hai
      const touch = e.touches[0];
      const { x, y } = getCoordinates(touch);
      scratchLine(lastX, lastY, x, y);
      lastX = x;
      lastY = y;
    };

    const onTouchEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full cursor-pointer select-none rounded-3xl"
      aria-label="Scratch to reveal the wedding date"
    />
  );
}
