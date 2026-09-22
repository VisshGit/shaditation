"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = async () => {
    if (!audioRef.current) {
      const audio = new Audio("/music/wedding-music.mp3");

      audio.loop = true;
      audio.volume = 0.35;

      audioRef.current = audio;
    }

    try {
      audioRef.current.muted = false;
      await audioRef.current.play();

      setIsPlaying(true);
      setIsMuted(false);
    } catch (error) {
      console.error("Wedding music could not start:", error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const nextMuted = !audioRef.current.muted;

    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  useEffect(() => {
    const handleGateOpen = () => {
      void startMusic();
    };

    // 1. Mobile par browser back karne ya page leave karne par audio band
    const handlePageExit = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    // 2. Tab switch hone ya phone lock hone par pause, wapas aane par resume
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
      } else if (isPlaying && !audioRef.current.muted) {
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("start-wedding-music", handleGateOpen);
    window.addEventListener("pagehide", handlePageExit);
    window.addEventListener("popstate", handlePageExit);
    window.addEventListener("beforeunload", handlePageExit);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("start-wedding-music", handleGateOpen);
      window.removeEventListener("pagehide", handlePageExit);
      window.removeEventListener("popstate", handlePageExit);
      window.removeEventListener("beforeunload", handlePageExit);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying]);

  // Gate open hone se pehle button hidden rahega
  if (!isPlaying) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute wedding music" : "Mute wedding music"}
      title={isMuted ? "Unmute music" : "Mute music"}
      className="
        fixed
        bottom-5
        left-5
        z-[99999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-amber-100/70
        bg-[#2d1d15]/95
        text-lg
        text-[#f8d98a]
        shadow-xl
        backdrop-blur-md
        transition-transform
        duration-300
        hover:scale-105
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-amber-400
      "
    >
      {isMuted ? "🔇" : "🔊"}
    </button>
  );
}
