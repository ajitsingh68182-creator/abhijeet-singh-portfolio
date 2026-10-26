"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle, ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface PortfolioVideoPlayerProps {
  project: ProjectItem;
  onOpenModal?: (p: ProjectItem) => void;
  autoplayOnScroll?: boolean;
  priority?: boolean;
  aspectRatioClass?: string;
  showControls?: boolean;
  objectFit?: "cover" | "contain";
}

export default function PortfolioVideoPlayer({
  project,
  onOpenModal,
  autoplayOnScroll = true,
  priority = false,
  aspectRatioClass,
  showControls = true,
  objectFit = "cover",
}: PortfolioVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // States
  const [isNearViewport, setIsNearViewport] = useState<boolean>(priority);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [userManuallyPaused, setUserManuallyPaused] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check user prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isLandscape = project.aspectRatio === "16/9";
  const defaultAspectClass = isLandscape
    ? "aspect-[16/9]"
    : "aspect-[9/13] sm:aspect-[9/14]";
  const resolvedAspectClass = aspectRatioClass || defaultAspectClass;

  const hasVideoSource = Boolean(project.videoSrc && project.videoSrc.trim() !== "");

  // 1. Preload / Mount Video Stream when within 350px of viewport
  useEffect(() => {
    if (isNearViewport || !hasVideoSource) return;
    const container = containerRef.current;
    if (!container) return;

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: "350px 0px 350px 0px", threshold: 0 }
    );

    nearObserver.observe(container);
    return () => nearObserver.disconnect();
  }, [isNearViewport, hasVideoSource]);

  // 2. Play / Pause when entering or leaving visible viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !autoplayOnScroll || !hasVideoSource) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInViewport(visible);

        const video = videoRef.current;
        if (!video) return;

        if (visible) {
          if (!userManuallyPaused && !prefersReducedMotion) {
            video
              .play()
              .then(() => {
                setIsPlaying(true);
                setHasError(false);
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
      {
        threshold: 0.25,
        rootMargin: "0px",
      }
    );

    visibilityObserver.observe(container);
    return () => visibilityObserver.disconnect();
  }, [autoplayOnScroll, userManuallyPaused, hasVideoSource, prefersReducedMotion]);

  // 3. Playback event handlers on the video element
  const handlePlaying = useCallback(() => {
    setIsPlaying(true);
    setHasStartedPlaying(true);
    setHasError(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsPlaying(false);
  }, []);

  // 4. Toggle Play/Pause manually
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  // 5. Toggle Sound manually
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full ${resolvedAspectClass} overflow-hidden bg-[#0A0A0A] flex items-center justify-center cursor-pointer select-none group/player`}
      onClick={() => onOpenModal && onOpenModal(project)}
      role="region"
      aria-label={`Video player for ${project.title}`}
    >
      {/* Authentic Thumbnail Frame Poster (Unique to each project) */}
      <Image
        src={project.thumbnail}
        alt={`Actual preview of ${project.title}`}
        fill
        sizes={
          isLandscape
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        }
        priority={priority}
        className={`object-${objectFit} transition-all duration-700 ease-out group-hover/player:scale-105 ${
          hasStartedPlaying && isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Unique HTML5 Video Preview for this exact project */}
      {hasVideoSource && isNearViewport && !hasError && (
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.thumbnail}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          width={isLandscape ? 1280 : 720}
          height={isLandscape ? 720 : 1280}
          {...({ loading: "lazy" } as any)}
          onPlaying={handlePlaying}
          onPause={handlePause}
          onError={handleError}
          className={`w-full h-full object-${objectFit} transition-opacity duration-500 ease-out ${
            hasStartedPlaying && isPlaying ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Ambient Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-black/30 pointer-events-none transition-opacity duration-300" />

      {/* Top Floating Badges & Audio Control */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] tracking-widest text-[#C6FF3D] bg-black/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-[#C6FF3D] ${
                isPlaying ? "animate-ping" : ""
              }`}
            />
            {hasVideoSource ? (isPlaying ? "ACTUAL CLIP" : "PREVIEW") : "ORIGINAL MASTER"}
          </span>
          <span className="font-mono text-[9px] text-[#A3A3A3] bg-black/80 px-2 py-0.5 rounded-full backdrop-blur-md border border-white/5 hidden sm:inline">
            {project.format}
          </span>
        </div>

        {/* Audio Mute / Unmute Toggle Button (Only when playing video) */}
        {showControls && hasVideoSource && (
          <button
            type="button"
            onClick={toggleSound}
            className={`p-2 rounded-full backdrop-blur-md border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] shadow-lg ${
              isMuted
                ? "bg-black/80 text-[#A3A3A3] border-white/10 hover:text-white hover:border-[#C6FF3D]"
                : "bg-[#C6FF3D] text-[#080808] border-[#C6FF3D] shadow-[0_0_14px_rgba(198,255,61,0.6)] scale-105"
            }`}
            title={isMuted ? "Click to unmute sound" : "Sound on (click to mute)"}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {/* Center Interactive Controls on Hover */}
      {showControls && (
        <div
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 flex items-center justify-center gap-3.5 z-20 backdrop-blur-[1px] ${
            isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {hasVideoSource && (
            <button
              type="button"
              onClick={togglePlayPause}
              className="w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-all transform scale-90 group-hover/player:scale-100 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D]"
              title={isPlaying ? "Pause preview" : "Resume preview"}
              aria-label={isPlaying ? "Pause preview" : "Resume preview"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>
          )}

          {/* Full-Screen Expand / Watch Button */}
          {onOpenModal && (
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="w-11 h-11 rounded-full bg-[#C6FF3D] text-[#080808] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(198,255,61,0.5)] transform scale-90 group-hover/player:scale-100 transition-all hover:bg-[#d4ff5e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="Expand to cinematic video player"
              aria-label={`Open full player for ${project.title}`}
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none z-20">
        <div className="flex items-center gap-1.5 text-[#A3A3A3] bg-black/70 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
          <span>
            {hasVideoSource
              ? isPlaying
                ? isMuted
                  ? "LOOPING REAL CLIP"
                  : "SOUND ACTIVE"
                : "IN VIEWPORT"
              : "OPEN DRIVE PLAYER"}
          </span>
        </div>

        <span className="text-[#A3A3A3] bg-black/70 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
          {project.category}
        </span>
      </div>

      {/* Fallback notification if video fails to decode */}
      {hasError && (
        <div className="absolute bottom-10 left-3 right-3 p-2 bg-black/85 border border-red-500/30 rounded-lg text-center z-30 pointer-events-none">
          <span className="text-[10px] font-mono text-neutral-300 flex items-center justify-center gap-1">
            <AlertCircle className="w-3 h-3 text-red-400" />
            Click &apos;Watch Project&apos; for original Drive stream
          </span>
        </div>
      )}
    </div>
  );
}
