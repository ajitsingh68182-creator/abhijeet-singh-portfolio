"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  Film,
  Sparkles,
} from "lucide-react";
import { creatorInfo } from "@/data/creatorInfo";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState("00:00:00:00");
  const [duration, setDuration] = useState("00:00:00:00");
  const [progress, setProgress] = useState(0);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [userManuallyPaused, setUserManuallyPaused] = useState(false);

  // Verified showcase reel
  const showreelVideoSrc = "/videos/anniversary-reel.mp4";
  const showreelPoster = "/thumbnails/proj-anniversary-1BCJVcR3.jpg";
  const showreelDriveId = "1BCJVcR3XokruwJk9JXXM1Mkaeah6Z24f";
  const showreelTitle = "Cinematic Editing Showreel — Rhythm, Color & Storytelling";
  const showreelDriveUrl = `https://drive.google.com/file/d/${showreelDriveId}/view?usp=sharing`;

  // Autoplay on intersection observer
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userManuallyPaused) {
            video
              .play()
              .then(() => {
                setIsPlaying(true);
                setHasStartedPlaying(true);
              })
              .catch(() => {
                setIsPlaying(false);
              });
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [userManuallyPaused]);

  // Timecode formatting helper
  const formatTimecode = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const f = Math.floor((seconds % 1) * 24);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(formatTimecode(video.currentTime));
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(formatTimecode(video.duration));
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextState = !isMuted;
    video.muted = nextState;
    setIsMuted(nextState);
    if (!nextState && video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserManuallyPaused(false);
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      setUserManuallyPaused(true);
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section id="showreel" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
            03 / SHOWREEL
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
            MY WORK. <br className="hidden sm:inline" />
            <span className="text-[#C6FF3D]">IN MOTION.</span>
          </h2>

          <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
            Editing is the final rewrite of any story. Here is a curated cut demonstrating rhythm, pacing, emotional sound sync, and atmospheric color grading.
          </p>
        </div>
      </motion.div>

      {/* Cinematic Showcase Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden border border-[#262626] bg-[#0E0E0E] shadow-[0_25px_70px_rgba(0,0,0,0.85)] group"
      >
        {/* Aspect Ratio Box with Autoplaying Looping HTML5 Video */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          {/* Authentic Poster Image to eliminate black frame on initial render */}
          <Image
            src={showreelPoster}
            alt="Showreel Preview Frame"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            className={`object-cover transition-opacity duration-700 ease-out ${
              hasStartedPlaying && isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            src={showreelVideoSrc}
            poster={showreelPoster}
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            onPlaying={() => {
              setIsPlaying(true);
              setHasStartedPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
              hasStartedPlaying && isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Cinematic Viewfinder Watermark Overlays */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[#C6FF3D] font-mono text-xs font-bold bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                <span className={`w-2 h-2 rounded-full bg-[#C6FF3D] ${isPlaying ? "animate-ping" : ""}`} />
                {isPlaying ? "AUTO-PLAYING LOOP" : "PAUSED"}
              </span>
              <span className="font-mono text-[11px] text-[#A3A3A3] bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 hidden sm:inline">
                CINEMA MASTER
              </span>
            </div>

            <div className="font-mono text-xs text-[#A3A3A3] bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              TIMECODE: <span className="text-white font-bold">{currentTime}</span>
            </div>
          </div>

          {/* Center Play Overlay Trigger on Hover */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-20 pointer-events-none">
            <button
              type="button"
              onClick={togglePlay}
              className="pointer-events-auto w-16 h-16 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-all transform scale-90 group-hover:scale-100 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D]"
              aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>
          </div>

          {/* Floating Audio Mute / Unmute Button on Video */}
          <div className="absolute bottom-6 right-6 z-20">
            <button
              type="button"
              onClick={toggleSound}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-bold backdrop-blur-md transition-all duration-200 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] ${
                isMuted
                  ? "bg-black/80 text-[#C6FF3D] border border-[#C6FF3D]/40 hover:bg-[#C6FF3D] hover:text-[#080808]"
                  : "bg-[#C6FF3D] text-[#080808] border border-[#C6FF3D] shadow-[0_0_20px_#C6FF3D]"
              }`}
              title={isMuted ? "Click to unmute sound" : "Sound on (click to mute)"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
              <span>{isMuted ? "SOUND MUTED (CLICK TO HEAR)" : "SOUND ACTIVE"}</span>
            </button>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
            <div
              className="h-full bg-[#C6FF3D] shadow-[0_0_8px_#C6FF3D]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lower Control / Metadata Strip */}
        <div className="p-5 sm:p-6 bg-[#121212] border-t border-[#1C1C1C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-[#A3A3A3]">
            <span className="flex items-center gap-1.5 text-[#F5F3EF]">
              <Film className="w-3.5 h-3.5 text-[#C6FF3D]" />
              Playing in Continuous Loop with Muted Sound
            </span>
            <span className="hidden sm:inline text-[#333333]">•</span>
            <span className="hidden sm:inline">Pacing & Grade by Abhijeet Singh</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] text-[#A3A3A3] hover:text-white hover:border-[#C6FF3D] transition-colors"
              title="Fullscreen Mode"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <a
              href={showreelDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-mono text-[#A3A3A3] hover:text-[#C6FF3D] hover:border-[#C6FF3D] transition-colors"
            >
              <span>Watch on Google Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Editor Note Statement */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 p-6 rounded-2xl bg-[#0D0D0D] border border-[#1A1A1A] flex items-start gap-4"
      >
        <Sparkles className="w-5 h-5 text-[#C6FF3D] shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm text-[#A3A3A3] leading-relaxed">
          <span className="text-[#F5F3EF] font-semibold font-display">Director of Post Statement:</span>{" "}
          &ldquo;Every project requires a distinct cadence. A wedding film breathes through emotion and acoustic pauses; an Instagram reel cuts aggressively on transients to arrest attention; a corporate film demands clarity, poise, and immaculate grading.&rdquo;
        </div>
      </motion.div>
    </section>
  );
}
