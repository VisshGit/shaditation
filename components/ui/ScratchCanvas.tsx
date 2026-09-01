
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

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // ---------------------------------------------------------
    // CANVAS SIZE
    // ---------------------------------------------------------

    const rect = canvas.getBoundingClientRect();

    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    canvas.width = width;
    canvas.height = height;

    // IMPORTANT:
    // Only the canvas disables browser touch scrolling.
    // The rest of the page remains normally scrollable.
    canvas.style.touchAction = "none";

    // ---------------------------------------------------------
    // SCRATCH SURFACE
    // ---------------------------------------------------------

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

    // ---------------------------------------------------------
    // STATE
    // ---------------------------------------------------------

    let isDrawing = false;
    let isRevealed = false;
    let activePointerId: number | null = null;
    let lastPoint: Point | null = null;
    let revealTimeout: number | null = null;

    // ---------------------------------------------------------
    // SCRATCH TRACKING
    // ---------------------------------------------------------

    const columns = 40;
    const rows = 24;
    const totalCells = columns * rows;

    const scratchedCells = new Set<string>();

    const brushSize = 28;
    const brushSizeSquared = brushSize * brushSize;

    const cellWidth = canvas.width / columns;
    const cellHeight = canvas.height / rows;

    const markScratchedArea = (x: number, y: number) => {
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
        const centerY = (row + 0.5) * cellHeight;

        for (
          let column = startColumn;
          column <= endColumn;
          column += 1
        ) {
          const centerX = (column + 0.5) * cellWidth;

          const dx = centerX - x;
          const dy = centerY - y;

          if (dx * dx + dy * dy <= brushSizeSquared) {
            scratchedCells.add(`${column}-${row}`);
          }
        }
      }
    };

    // ---------------------------------------------------------
    // REVEAL
    // ---------------------------------------------------------

    const revealCard = () => {
      if (isRevealed) return;

      isRevealed = true;
      isDrawing = false;
      activePointerId = null;
      lastPoint = null;

      canvas.style.pointerEvents = "none";
      canvas.style.transition = "opacity 700ms ease-out";

      requestAnimationFrame(() => {
        canvas.style.opacity = "0";
      });

      revealTimeout = window.setTimeout(() => {
        onRevealRef.current?.();
      }, 650);
    };

    // ---------------------------------------------------------
    // SCRATCH AT POINT
    // ---------------------------------------------------------

    const scratchAt = (x: number, y: number) => {
      if (isRevealed) return;

      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();

      markScratchedArea(x, y);

      const percentage =
        scratchedCells.size / totalCells;

      if (percentage >= 0.4) {
        revealCard();
      }
    };

    // ---------------------------------------------------------
    // SCRATCH BETWEEN POINTS
    // ---------------------------------------------------------

    const scratchBetween = (
      from: Point,
      to: Point
    ) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;

      const distance = Math.hypot(dx, dy);

      if (distance === 0) {
        scratchAt(to.x, to.y);
        return;
      }

      // Maximum 16 operations per pointer event.
      const steps = Math.min(
        16,
        Math.max(1, Math.ceil(distance / 10))
      );

      for (let i = 1; i <= steps; i += 1) {
        const progress = i / steps;

        const x = from.x + dx * progress;
        const y = from.y + dy * progress;

        scratchAt(x, y);

        if (isRevealed) return;
      }
    };

    // ---------------------------------------------------------
    // POINTER POSITION
    // ---------------------------------------------------------

    const getPoint = (
      event: PointerEvent
    ): Point => {
      const currentRect =
        canvas.getBoundingClientRect();

      return {
        x: event.clientX - currentRect.left,
        y: event.clientY - currentRect.top,
      };
    };

    // ---------------------------------------------------------
    // POINTER DOWN
    // ---------------------------------------------------------

    const handlePointerDown = (
      event: PointerEvent
    ) => {
      if (isRevealed) return;

      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      // Prevent browser gesture/scroll.
      event.preventDefault();

      isDrawing = true;
      activePointerId = event.pointerId;

      try {
        canvas.setPointerCapture(event.pointerId);
      } catch {
        // Some browsers may reject capture.
      }

      const point = getPoint(event);

      lastPoint = point;

      scratchAt(point.x, point.y);
    };

    // ---------------------------------------------------------
    // POINTER MOVE
    // ---------------------------------------------------------

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      if (
        !isDrawing ||
        isRevealed ||
        activePointerId !== event.pointerId ||
        !lastPoint
      ) {
        return;
      }

      event.preventDefault();

      const currentPoint = getPoint(event);

      scratchBetween(
        lastPoint,
        currentPoint
      );

      lastPoint = currentPoint;
    };

    // ---------------------------------------------------------
    // STOP DRAWING
    // ---------------------------------------------------------

    const stopDrawing = (
      pointerId?: number
    ) => {
      if (
        pointerId !== undefined &&
        activePointerId !== pointerId
      ) {
        return;
      }

      if (
        activePointerId !== null &&
        canvas.hasPointerCapture(
          activePointerId
        )
      ) {
        try {
          canvas.releasePointerCapture(
            activePointerId
          );
        } catch {
          // Ignore release errors.
        }
      }

      isDrawing = false;
      activePointerId = null;
      lastPoint = null;
    };

    // ---------------------------------------------------------
    // POINTER END
    // ---------------------------------------------------------

    const handlePointerUp = (
      event: PointerEvent
    ) => {
      stopDrawing(event.pointerId);
    };

    const handlePointerCancel = (
      event: PointerEvent
    ) => {
      stopDrawing(event.pointerId);
    };

    // ---------------------------------------------------------
    // EVENTS
    // ---------------------------------------------------------

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
      handlePointerCancel
    );

    canvas.addEventListener(
      "lostpointercapture",
      () => {
        stopDrawing();
      }
    );

    // ---------------------------------------------------------
    // CLEANUP
    // ---------------------------------------------------------

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
        handlePointerCancel
      );

      if (revealTimeout !== null) {
        window.clearTimeout(revealTimeout);
      }

      canvas.style.pointerEvents = "";
      canvas.style.opacity = "";
      canvas.style.transition = "";
      canvas.style.touchAction = "";
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
      aria-label="Scratch to reveal the wedding date"
    />
  );
}
