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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.style.touchAction = "none";

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );

    gradient.addColorStop(0, "#f8e8b5");
    gradient.addColorStop(0.5, "#c99832");
    gradient.addColorStop(1, "#8b5a12");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";

    let isDrawing = false;
    let isRevealed = false;
    let activePointerId: number | null = null;
    let lastPoint: { x: number; y: number } | null = null;

    const columns = 40;
    const rows = 24;
    const scratchedCells = new Set<string>();

    const markScratchedArea = (x: number, y: number) => {
      const brushSize = 28;
      const cellWidth = canvas.width / columns;
      const cellHeight = canvas.height / rows;

      const startColumn = Math.max(
        0,
        Math.floor((x - brushSize) / cellWidth)
      );
      const endColumn = Math.min(
        columns - 1,
        Math.floor((x + brushSize) / cellWidth)
      );
      const startRow = Math.max(0, Math.floor((y - brushSize) / cellHeight));
      const endRow = Math.min(
        rows - 1,
        Math.floor((y + brushSize) / cellHeight)
      );

      for (let row = startRow; row <= endRow; row += 1) {
        for (let column = startColumn; column <= endColumn; column += 1) {
          const centerX = (column + 0.5) * cellWidth;
          const centerY = (row + 0.5) * cellHeight;

          if (Math.hypot(centerX - x, centerY - y) <= brushSize) {
            scratchedCells.add(`${column}-${row}`);
          }
        }
      }
    };

    const revealCard = () => {
      if (isRevealed) return;

      isRevealed = true;
      isDrawing = false;
      activePointerId = null;
      canvas.style.pointerEvents = "none";
      canvas.style.transition = "opacity 900ms ease-in-out";

      requestAnimationFrame(() => {
        canvas.style.opacity = "0";
      });

      window.setTimeout(() => {
        onRevealRef.current?.();
      }, 700);
    };

    const scratchAt = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      markScratchedArea(x, y);

      if (scratchedCells.size / (columns * rows) >= 0.4) {
        revealCard();
      }
    };

    const getPoint = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const stopDrawing = (pointerId?: number) => {
      if (pointerId !== undefined && activePointerId !== pointerId) return;

      if (
        activePointerId !== null &&
        canvas.hasPointerCapture(activePointerId)
      ) {
        canvas.releasePointerCapture(activePointerId);
      }

      isDrawing = false;
      activePointerId = null;
      lastPoint = null;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (isRevealed || (event.pointerType === "mouse" && event.button !== 0)) {
        return;
      }

      event.preventDefault();
      isDrawing = true;
      activePointerId = event.pointerId;
      canvas.setPointerCapture(event.pointerId);
      lastPoint = getPoint(event);
      scratchAt(lastPoint.x, lastPoint.y);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (
        !isDrawing ||
        !lastPoint ||
        isRevealed ||
        activePointerId !== event.pointerId
      ) {
        return;
      }

      event.preventDefault();
      const currentPoint = getPoint(event);
      const dx = currentPoint.x - lastPoint.x;
      const dy = currentPoint.y - lastPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      for (let step = 0; step <= distance; step += 1) {
        const x = lastPoint.x + (dx * step) / Math.max(distance, 1);
        const y = lastPoint.y + (dy * step) / Math.max(distance, 1);

        scratchAt(x, y);
      }

      lastPoint = currentPoint;
    };

    const handlePointerUp = (event: PointerEvent) => {
      stopDrawing(event.pointerId);
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full touch-none rounded-3xl"
    />
  );
}
