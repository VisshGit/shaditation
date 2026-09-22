"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMusicStartedRef = useRef(false);

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
      isMusicStartedRef.current = true;
      setIsPlaying(true);
      setIsMuted(false);
    } catch (error) {
      console.error("Audio playback waiting for interaction:", error);
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

    // Browser back ya tab change par handle
    const handleVisibilityChange = () => {
      if (!audioRef.current || !isMusicStartedRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
      } else if (!audioRef.current.muted) {
        audioRef.current.play().catch(() => {});
      }
    };

    const handlePageExit = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    window.addEventListener("start-wedding-music", handleGateOpen);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageExit);
    window.addEventListener("beforeunload", handlePageExit);

    return () => {
      window.removeEventListener("start-wedding-music", handleGateOpen);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageExit);
      window.removeEventListener("beforeunload", handlePageExit);

      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (!isPlaying) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute wedding music" : "Mute wedding music"}
      title={isMuted ? "Unmute music" : "Mute music"}
      className="fixed bottom-5 left-5 z-[99999] flex h-12 w-12 items-center justify-center rounded-full border border-amber-100/70 bg-[#2d1d15]/95 text-lg text-[#f8d98a] shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
    >
      {isMuted ? "🔇" : "🔊"}
    </button>
  );
}
