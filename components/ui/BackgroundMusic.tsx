"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = async () => {
    if (!audioRef.current) {
      const audio = new Audio("/music/wedding-music.mp3");
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Wedding music could not start:", error);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) {
      await startMusic();
      return;
    }

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleGateOpen = () => {
      void startMusic();
    };

    window.addEventListener("start-wedding-music", handleGateOpen);

    return () => {
      window.removeEventListener("start-wedding-music", handleGateOpen);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={
        isPlaying
          ? "Pause background music"
          : "Play background music"
      }
      className="fixed bottom-5 left-5 z-[90] grid h-11 w-11 place-items-center rounded-full border border-amber-100/70 bg-[#2d1d15]/90 text-lg text-[#f8d98a] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-[#4b2e1c] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {isPlaying ? "❚❚" : "♫"}
    </button>
  );
}