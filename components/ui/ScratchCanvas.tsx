"use client";

import { useEffect, useRef } from "react";

type ScratchCanvasProps = {
  onReveal?: () => void;
};

type Point = {
  x: number;
  y: number;
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
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    canvas.width = width;
    canvas.height = height;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f8e8b5");
    gradient.addColorStop(0.5, "#c99832");
    gradient.addColorStop(1, "#8b5a12");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";

    let isDrawing = false;
    let isRevealed = false;
    let activePointerId: number | null = null;
    let lastPoint: Point | null = null;
    let startPoint: Point | null = null;
    let hasDecidedIntent = false;
    let isScratchingIntent = false;

    const columns = 30;
    const rows = 18;
    const totalCells = columns * rows;
    const scratchedCells = new Set<string>();

    const brushSize = 28;
    const brushSizeSquared = brushSize * brushSize;
    const cellWidth = canvas.width / columns;
    const cellHeight = canvas.height / rows;

    const markScratchedArea = (x: number, y: number) => {
      const startColumn = Math.max(0, Math.floor((x - brushSize) / cellWidth));
      const endColumn = Math.min(columns - 1, Math.floor((x + brushSize) / cellWidth));
      const startRow = Math.max(0, Math.floor((y - brushSize) / cellHeight));
      const endRow = Math.min(rows - 1, Math.floor((y + brushSize) / cellHeight));

      for (let row = startRow; row <= endRow; row += 1) {
        const centerY = (row + 0.5) * cellHeight;
        for (let column = startColumn; column <= endColumn; column += 1) {
          const centerX = (column + 0.5) * cellWidth;
          const dx = centerX - x;
          const dy = centerY - y;
          if (dx * dx + dy * dy <= brushSizeSquared) {
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
      lastPoint = null;

      canvas.style.pointerEvents = "none";
      canvas.style.transition = "opacity 600ms ease-out";
      requestAnimationFrame(() => {
        canvas.style.opacity = "0";
      });

      window.setTimeout(() => {
        onRevealRef.current?.();
      }, 550);
    };

    const scratchAt = (x: number, y: number) => {
      if (isRevealed) return;
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();

      markScratchedArea(x, y);

      if (scratchedCells.size / totalCells >= 0.35) {
        revealCard();
      }
    };

    const scratchBetween = (from: Point, to: Point) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.hypot(dx, dy);

      if (distance === 0) {
        scratchAt(to.x, to.y);
        return;
      }

      const steps = Math.min(12, Math.max(1, Math.ceil(distance / 12)));
      for (let i = 1; i <= steps; i += 1) {
        const progress = i / steps;
        scratchAt(from.x + dx * progress, from.y + dy * progress);
        if (isRevealed) return;
      }
    };

    const getPoint = (event: PointerEvent): Point => {
      const currentRect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - currentRect.left,
        y: event.clientY - currentRect.top,
      };
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (isRevealed) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      const pt = getPoint(event);
      activePointerId = event.pointerId;
      startPoint = pt;
      lastPoint = pt;

      if (event.pointerType === "mouse") {
        isDrawing = true;
        hasDecidedIntent = true;
        isScratchingIntent = true;
        try {
          canvas.setPointerCapture(event.pointerId);
        } catch {}
        scratchAt(pt.x, pt.y);
      } else {
        // Touch devices: wait to distinguish scratch from page scroll
        isDrawing = true;
        hasDecidedIntent = false;
        isScratchingIntent = false;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDrawing || isRevealed || activePointerId !== event.pointerId || !lastPoint) {
        return;
      }

      const currentPoint = getPoint(event);

      // Touch gesture intent resolution
      if (!hasDecidedIntent && startPoint) {
        const diffX = Math.abs(currentPoint.x - startPoint.x);
        const diffY = Math.abs(currentPoint.y - startPoint.y);

        if (diffX > 8 || diffY > 8) {
          hasDecidedIntent = true;
          // Agar horizontal movement vertical se zyada hai ya rapid drag hai -> Scratching
          if (diffX > diffY || diffX > 10) {
            isScratchingIntent = true;
            try {
              canvas.setPointerCapture(event.pointerId);
            } catch {}
          } else {
            // Native vertical scroll allow karo
            isScratchingIntent = false;
            isDrawing = false;
            return;
          }
        } else {
          return;
        }
      }

      if (isScratchingIntent) {
        if (event.cancelable) event.preventDefault();
        scratchBetween(lastPoint, currentPoint);
        lastPoint = currentPoint;
      }
    };

    const stopDrawing = (pointerId?: number) => {
      if (pointerId !== undefined && activePointerId !== pointerId) return;

      if (activePointerId !== null && canvas.hasPointerCapture(activePointerId)) {
        try {
          canvas.releasePointerCapture(activePointerId);
        } catch {}
      }

      isDrawing = false;
      activePointerId = null;
      lastPoint = null;
      startPoint = null;
      hasDecidedIntent = false;
      isScratchingIntent = false;
    };

    const handlePointerUp = (e: PointerEvent) => stopDrawing(e.pointerId);
    const handlePointerCancel = (e: PointerEvent) => stopDrawing(e.pointerId);

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
    canvas.addEventListener("pointermove", handlePointerMove, { passive: false });
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerCancel);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerCancel);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full select-none rounded-3xl"
      style={{ touchAction: "pan-y" }}
      aria-label="Scratch to reveal the wedding date"
    />
  );
}
