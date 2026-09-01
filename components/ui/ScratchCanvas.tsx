
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

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    canvas.width = width;
    canvas.height = height;

    canvas.style.touchAction = "none";

    // =========================================================
    // SCRATCH SURFACE
    // =========================================================

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

    // =========================================================
    // STATE
    // =========================================================

    let isDrawing = false;
    let isRevealed = false;
    let activePointerId: number | null = null;

    let lastPoint: Point | null = null;
    let pendingPoint: Point | null = null;

    let frameRequested = false;

    const columns = 40;
    const rows = 24;

    const scratchedCells = new Set<string>();

    // =========================================================
    // SCRATCH TRACKING
    // =========================================================

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

      const startRow = Math.max(
        0,
        Math.floor((y - brushSize) / cellHeight)
      );

      const endRow = Math.min(
        rows - 1,
        Math.floor((y + brushSize) / cellHeight)
      );

      for (let row = startRow; row <= endRow; row += 1) {
        for (
          let column = startColumn;
          column <= endColumn;
          column += 1
        ) {
          const centerX = (column + 0.5) * cellWidth;
          const centerY = (row + 0.5) * cellHeight;

          const distance = Math.hypot(
            centerX - x,
            centerY - y
          );

          if (distance <= brushSize) {
            scratchedCells.add(`${column}-${row}`);
          }
        }
      }
    };

    // =========================================================
    // REVEAL
    // =========================================================

    const revealCard = () => {
      if (isRevealed) return;

      isRevealed = true;
      isDrawing = false;
      activePointerId = null;
      pendingPoint = null;
      lastPoint = null;

      canvas.style.pointerEvents = "none";
      canvas.style.transition = "opacity 900ms ease-in-out";

      requestAnimationFrame(() => {
        canvas.style.opacity = "0";
      });

      window.setTimeout(() => {
        onRevealRef.current?.();
      }, 700);
    };

    // =========================================================
    // DRAW
    // =========================================================

    const scratchAt = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      markScratchedArea(x, y);

      const scratchedPercentage =
        scratchedCells.size / (columns * rows);

      if (scratchedPercentage >= 0.4) {
        revealCard();
      }
    };

    // =========================================================
    // DRAW BETWEEN TWO POINTS
    // =========================================================

    const scratchBetween = (from: Point, to: Point) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;

      const distance = Math.hypot(dx, dy);

      // Avoid excessive calculations on extremely fast pointer moves.
      const maxDistance = 120;

      const limitedDistance = Math.min(distance, maxDistance);

      const steps = Math.max(
        1,
        Math.ceil(limitedDistance / 12)
      );

      for (let step = 0; step <= steps; step += 1) {
        const progress = step / steps;

        const x = from.x + dx * progress;
        const y = from.y + dy * progress;

        scratchAt(x, y);

        if (isRevealed) break;
      }
    };

    // =========================================================
    // POINTER POSITION
    // =========================================================

    const getPoint = (event: PointerEvent): Point => {
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    // =========================================================
    // RAF SCRATCH LOOP
    // =========================================================

    const processScratch = () => {
      frameRequested = false;

      if (
        !isDrawing ||
        isRevealed ||
        !pendingPoint
      ) {
        return;
      }

      const currentPoint = pendingPoint;
      pendingPoint = null;

      if (lastPoint) {
        scratchBetween(lastPoint, currentPoint);
      } else {
        scratchAt(currentPoint.x, currentPoint.y);
      }

      lastPoint = currentPoint;
    };

    const requestScratchFrame = () => {
      if (frameRequested) return;

      frameRequested = true;

      requestAnimationFrame(processScratch);
    };

    // =========================================================
    // STOP DRAWING
    // =========================================================

    const stopDrawing = (pointerId?: number) => {
      if (
        pointerId !== undefined &&
        activePointerId !== pointerId
      ) {
        return;
      }

      if (
        activePointerId !== null &&
        canvas.hasPointerCapture(activePointerId)
      ) {
        canvas.releasePointerCapture(activePointerId);
      }

      isDrawing = false;
      activePointerId = null;
      lastPoint = null;
      pendingPoint = null;
    };

    // =========================================================
    // POINTER DOWN
    // =========================================================

    const handlePointerDown = (event: PointerEvent) => {
      if (
        isRevealed ||
        (event.pointerType === "mouse" &&
          event.button !== 0)
      ) {
        return;
      }

      event.preventDefault();

      isDrawing = true;
      activePointerId = event.pointerId;

      canvas.setPointerCapture(event.pointerId);

      const point = getPoint(event);

      lastPoint = point;
      pendingPoint = point;

      requestScratchFrame();
    };

    // =========================================================
    // POINTER MOVE
    // =========================================================

    const handlePointerMove = (event: PointerEvent) => {
      if (
        !isDrawing ||
        isRevealed ||
        activePointerId !== event.pointerId
      ) {
        return;
      }

      event.preventDefault();

      pendingPoint = getPoint(event);

      requestScratchFrame();
    };

    // =========================================================
    // POINTER END
    // =========================================================

    const handlePointerUp = (event: PointerEvent) => {
      stopDrawing(event.pointerId);
    };

    // =========================================================
    // EVENTS
    // =========================================================

    canvas.addEventListener(
      "pointerdown",
      handlePointerDown,
      { passive: false }
    );

    canvas.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: false }
    );

    canvas.addEventListener(
      "pointerup",
      handlePointerUp
    );

    canvas.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    canvas.addEventListener(
      "lostpointercapture",
      () => {
        stopDrawing();
      }
    );

    // =========================================================
    // CLEANUP
    // =========================================================

    return () => {
      canvas.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      canvas.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      canvas.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      canvas.removeEventListener(
        "pointercancel",
        handlePointerUp
      );

      canvas.style.pointerEvents = "";
      canvas.style.opacity = "";
      canvas.style.transition = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        h-full
        w-full
        touch-none
        select-none
        rounded-3xl
      "
    />
  );
}
