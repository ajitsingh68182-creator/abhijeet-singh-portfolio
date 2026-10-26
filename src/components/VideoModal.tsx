"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectItem } from "@/data/projectsData";
import { X, ExternalLink, Volume2, VolumeX, Cloud, Zap } from "lucide-react";

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [playerMode, setPlayerMode] = useState<"full" | "preview">("full");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
        setIsMuted(false);
        setPlayerMode("full");
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [project]);

  // Global Escape key listener & backdrop click fallback
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Fallback for browsers without native closedby="any" support (Modern Web Guidance)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (isInside) return;
      onClose();
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("click", handleBackdropClick);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("click", handleBackdropClick);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  if (!project) return null;

  const isVertical = project.aspectRatio === "9/16";

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      aria-labelledby="video-modal-title"
      aria-modal="true"
      className="m-auto p-0 bg-transparent text-[#F5F3EF] outline-none max-w-4xl w-[95vw] backdrop:bg-black/85 backdrop:backdrop-blur-md rounded-3xl"
    >
      <div className="relative bg-[#111111] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F] bg-[#141414]">
          <div className="flex items-center gap-3 pr-4 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] shrink-0 animate-pulse" />
            <div className="overflow-hidden">
              <span className="font-mono text-[10px] text-[#C6FF3D] uppercase tracking-wider block">
                {project.category} • {project.format}
              </span>
              <h3 id="video-modal-title" className="font-display font-bold text-base text-[#F5F3EF] truncate">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Player Engine Switcher */}
            <div className="hidden sm:flex items-center bg-[#1A1A1A] p-0.5 rounded-full border border-[#262626] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setPlayerMode("full")}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                  playerMode === "full"
                    ? "bg-[#C6FF3D] text-[#080808] font-bold shadow-[0_0_10px_rgba(198,255,61,0.4)]"
                    : "text-[#A3A3A3] hover:text-white"
                }`}
                title="Play complete original video without time limits"
              >
                <Cloud className="w-3 h-3" />
                <span>Full Video</span>
              </button>
              {project.videoSrc && (
                <button
                  type="button"
                  onClick={() => setPlayerMode("preview")}
                  className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    playerMode === "preview"
                      ? "bg-[#C6FF3D] text-[#080808] font-bold shadow-[0_0_10px_rgba(198,255,61,0.4)]"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                  title="Looping 8-second fast preview clip"
                >
                  <Zap className="w-3 h-3" />
                  <span>8s Preview</span>
                </button>
              )}
            </div>

            <a
              href={project.driveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] text-xs font-mono text-[#F5F3EF] hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors"
              title="Open full resolution master on Google Drive"
            >
              <span>OPEN IN DRIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#C6FF3D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D]"
              aria-label="Close video player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <div
            className={`relative w-full ${
              isVertical ? "max-w-[340px] aspect-[9/16]" : "aspect-[16/9]"
            } rounded-2xl overflow-hidden border border-[#222222] shadow-2xl bg-[#080808] flex items-center justify-center`}
          >
            {playerMode === "full" ? (
              /* Complete Full Original Video via Google Drive Cloud Player */
              <iframe
                key={project.id}
                src={`${project.drivePreviewEmbedUrl}?autoplay=1`}
                title={`Full video player for ${project.title}`}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            ) : (
              /* 8-second Preview Loop Mode */
              <video
                ref={videoRef}
                src={project.videoSrc}
                poster={project.thumbnail}
                autoPlay
                loop
                muted={isMuted}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Modal Footer / Details */}
        <div className="p-5 bg-[#121212] border-t border-[#1C1C1C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#181818] border border-[#262626] font-mono text-[10px] text-[#737373]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {playerMode === "preview" && project.videoSrc && (
              <button
                type="button"
                onClick={toggleSound}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border text-xs font-mono transition-colors ${
                  isMuted
                    ? "bg-[#1A1A1A] border-[#2C2C2C] text-[#F5F3EF] hover:border-[#C6FF3D]"
                    : "bg-[#C6FF3D] text-[#080808] border-[#C6FF3D] font-bold shadow-[0_0_15px_#C6FF3D]"
                }`}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isMuted ? "Unmute Sound" : "Mute Sound"}</span>
              </button>
            )}

            <a
              href={project.driveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C6FF3D] text-[#080808] font-bold text-xs tracking-wide uppercase hover:bg-[#d4ff5e] hover:shadow-[0_0_15px_rgba(198,255,61,0.3)] transition-all w-full sm:w-auto"
            >
              <span>WATCH ON GOOGLE DRIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
