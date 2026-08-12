"use client";

import { useEffect, useRef, useState } from "react";

const chords = [
  [261.63, 329.63, 392.0], // C major
  [220.0, 261.63, 329.63], // A minor
  [174.61, 220.0, 261.63], // F major
  [196.0, 246.94, 293.66], // G major
];

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const chordIndexRef = useRef(0);

  const playChord = (context: AudioContext, startTime: number) => {
    const master = context.createGain();
    master.gain.value = 0.18;
    master.connect(context.destination);

    chords[chordIndexRef.current].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const noteStart = startTime + index * 0.12;
      const noteEnd = noteStart + 1.7;

      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency * (index === 2 ? 2 : 1);
      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.3, noteStart + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start(noteStart);
      oscillator.stop(noteEnd + 0.05);
    });

    chordIndexRef.current = (chordIndexRef.current + 1) % chords.length;
  };

  const startMusic = async () => {
    if (!contextRef.current) {
      const context = new AudioContext();
      contextRef.current = context;
      await context.resume();
      playChord(context, context.currentTime);
      timerRef.current = window.setInterval(
        () => playChord(context, context.currentTime),
        2000,
      );
      setIsPlaying(true);
      return;
    }

    if (contextRef.current.state !== "running") {
      await contextRef.current.resume();
      setIsPlaying(true);
    }
  };

  const toggleMusic = async () => {
    if (contextRef.current?.state === "running") {
      await contextRef.current.suspend();
      setIsPlaying(false);
    } else {
      await startMusic();
    }
  };

  useEffect(() => {
    const handleGateOpen = () => {
      void startMusic();
    };

    window.addEventListener("start-wedding-music", handleGateOpen);

    return () => {
      window.removeEventListener("start-wedding-music", handleGateOpen);
      if (timerRef.current) window.clearInterval(timerRef.current);
      contextRef.current?.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      className="fixed bottom-5 left-5 z-[90] grid h-11 w-11 place-items-center rounded-full border border-amber-100/70 bg-[#2d1d15]/90 text-lg text-[#f8d98a] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-[#4b2e1c] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {isPlaying ? "❚❚" : "♫"}
    </button>
  );
}
