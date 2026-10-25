"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { portfolioProjects, projectCategories, ProjectItem } from "@/data/projectsData";
import { creatorInfo } from "@/data/creatorInfo";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Film,
  FolderOpen,
  Video,
  Search,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import VideoModal from "./VideoModal";

function VideoCardItem({
  project,
  onOpenModal,
}: {
  project: ProjectItem;
  onOpenModal: (p: ProjectItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play video on hover or when in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextState = !isMuted;
    video.muted = nextState;
    setIsMuted(nextState);
    if (!nextState) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const isLandscape = project.aspectRatio === "16/9";

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl overflow-hidden border border-[#222222] bg-[#111111] hover:border-[#C6FF3D]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${
        isLandscape ? "md:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Video Media Container with ACTUAL Video Frame Preview */}
      <div
        className={`relative w-full ${
          isLandscape ? "aspect-[16/9]" : "aspect-[9/13] sm:aspect-[9/14]"
        } overflow-hidden bg-[#0A0A0A] flex items-center justify-center cursor-pointer`}
        onClick={() => onOpenModal(project)}
      >
        {/* Actual Video Frame Thumbnail Image (Unique to each project) */}
        <Image
          src={project.thumbnail}
          alt={`Actual preview of ${project.title}`}
          fill
          sizes={isLandscape ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Real HTML5 Video element that plays on hover/interaction */}
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={project.thumbnail}
          loop
          muted={isMuted}
          playsInline
          preload="none"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-black/30 pointer-events-none" />

        {/* Top Controls & Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-[#C6FF3D] bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full bg-[#C6FF3D] ${isPlaying ? "animate-ping" : ""}`} />
              {isPlaying ? "PLAYING" : "PREVIEW"}
            </span>
            <span className="font-mono text-[10px] text-[#A3A3A3] bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/5 hidden sm:inline">
              {project.format}
            </span>
          </div>

          {/* Audio Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-2 rounded-full backdrop-blur-md border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] ${
              isMuted
                ? "bg-black/75 text-[#A3A3A3] border-white/10 hover:text-white hover:border-[#C6FF3D]"
                : "bg-[#C6FF3D] text-[#080808] border-[#C6FF3D] shadow-[0_0_12px_#C6FF3D]"
            }`}
            title={isMuted ? "Click to unmute sound" : "Sound on (click to mute)"}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Center Hover Play/Pause & Expand Actions */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-[1px]">
          <button
            type="button"
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-all transform scale-90 group-hover:scale-100 shadow-xl"
            title={isPlaying ? "Pause video" : "Play preview"}
            aria-label={isPlaying ? "Pause video" : "Play preview"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="w-12 h-12 rounded-full bg-[#C6FF3D] text-[#080808] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(198,255,61,0.5)] transform scale-90 group-hover:scale-100 transition-all hover:bg-[#d4ff5e]"
            title="Expand to full modal video viewer"
            aria-label={`Expand ${project.title}`}
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </button>
        </div>

        {/* Bottom Audio / Status HUD */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono pointer-events-none z-20">
          <div className="flex items-center gap-1.5 text-[#A3A3A3] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
            <span className="w-1 h-1 rounded-full bg-[#C6FF3D]" />
            <span>{isPlaying ? (isMuted ? "MUTED LOOP" : "SOUND ON") : "ACTUAL PREVIEW"}</span>
          </div>

          <span className="text-[#737373] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Metadata Content */}
      <div className="p-6 bg-[#111111] border-t border-[#1A1A1A] flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-display font-bold text-lg text-[#F5F3EF] group-hover:text-[#C6FF3D] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          <p className="text-xs text-[#A3A3A3] line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#C6FF3D] hover:underline"
          >
            <Video className="w-3.5 h-3.5" />
            <span>WATCH PROJECT</span>
          </button>

          <a
            href={project.driveViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-mono text-[#737373] hover:text-[#C6FF3D] flex items-center gap-1 transition-colors"
          >
            <span>Drive View</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(18);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.categorySlug === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleProjects = useMemo(() => {
    if (activeCategory !== "all" || searchQuery.trim() !== "") {
      return filteredProjects;
    }
    return filteredProjects.slice(0, displayCount);
  }, [filteredProjects, activeCategory, searchQuery, displayCount]);

  const hasMore =
    activeCategory === "all" &&
    searchQuery.trim() === "" &&
    displayCount < filteredProjects.length;

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
              02 / SELECTED WORK ({portfolioProjects.length} VIDEOS)
            </span>
            <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
            LESS TALK. <br className="hidden sm:inline" />
            <span className="text-[#C6FF3D]">MORE IMPACT.</span>
          </h2>
        </div>

        {/* Drive Archive Links Pill */}
        <div className="flex flex-wrap items-center gap-2">
          {creatorInfo.driveFolders.map((folder, idx) => (
            <a
              key={folder.url}
              href={folder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#C6FF3D] hover:border-[#C6FF3D] transition-colors"
            >
              <FolderOpen className="w-3.5 h-3.5 text-[#C6FF3D]" />
              <span>Drive Folder {idx + 1}: {folder.label}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Auto-Play Notice Banner */}
      <div className="mb-8 p-3.5 rounded-2xl bg-[#141414] border border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#A3A3A3]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
          <span className="text-[#F5F3EF]">
            Each video displays its own verified frame preview from Google Drive. Hover any card to play preview in loop.
          </span>
        </div>
        <span className="text-[#737373]">Click to expand full original master in modal</span>
      </div>

      {/* Search Input Bar */}
      <div className="mb-8 relative max-w-md">
        <Search className="w-4 h-4 text-[#737373] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search all ${portfolioProjects.length} videos (e.g. Wedding, Rightland, 3 BHK, Makeup)...`}
          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#121212] border border-[#262626] text-xs text-[#F5F3EF] placeholder-[#666666] focus:outline-none focus:border-[#C6FF3D] transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#737373] hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? portfolioProjects.length
              : portfolioProjects.filter((p) => p.categorySlug === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setDisplayCount(18);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? "bg-[#C6FF3D] text-[#080808] font-bold shadow-[0_0_15px_rgba(198,255,61,0.3)]"
                  : "bg-[#121212] border border-[#222222] text-[#A3A3A3] hover:text-white hover:border-[#333333]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-black/20 text-[#080808]" : "bg-[#1E1E1E] text-[#737373]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Editorial Grid with Real Distinct Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visibleProjects.map((project) => (
          <VideoCardItem
            key={project.id}
            project={project}
            onOpenModal={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Load More Button for 'All Projects' */}
      {hasMore && (
        <div className="mt-16 flex flex-col items-center justify-center space-y-3">
          <button
            type="button"
            onClick={() => setDisplayCount((prev) => prev + 18)}
            className="group px-8 py-4 rounded-full bg-[#161616] border border-[#2B2B2B] hover:border-[#C6FF3D] text-[#F5F3EF] font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#1E1E1E] flex items-center gap-2 shadow-xl"
          >
            <span>LOAD MORE VIDEOS ({filteredProjects.length - displayCount} REMAINING)</span>
            <ChevronDown className="w-4 h-4 text-[#C6FF3D] group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => setDisplayCount(filteredProjects.length)}
            className="text-xs font-mono text-[#737373] hover:text-[#C6FF3D] transition-colors underline"
          >
            Or display all {filteredProjects.length} videos at once
          </button>
        </div>
      )}

      {/* Results summary */}
      <div className="mt-12 text-center text-xs font-mono text-[#737373]">
        Showing {visibleProjects.length} of {filteredProjects.length} projects
        {activeCategory !== "all" && ` in ${activeCategory}`}
      </div>

      {/* Video Modal Viewer */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
