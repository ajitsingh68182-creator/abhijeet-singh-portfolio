"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects, projectCategories, googleDriveFolders, ProjectItem } from "@/data/projectsData";
import {
  ExternalLink,
  FolderOpen,
  Video,
  Search,
  ChevronDown,
  Layers,
  Sparkles,
  X,
  Filter,
} from "lucide-react";
import VideoModal from "./VideoModal";
import PortfolioVideoPlayer from "./PortfolioVideoPlayer";

function ProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: ProjectItem;
  index: number;
  onOpenModal: (p: ProjectItem) => void;
}) {
  const isLandscape = project.aspectRatio === "16/9";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: Math.min((index % 6) * 0.07, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative rounded-3xl overflow-hidden border border-[#222222] bg-[#111111] hover:border-[#C6FF3D]/60 transition-colors duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${
        isLandscape ? "md:col-span-2 lg:col-span-2" : "col-span-1"
      } cv-defer-card`}
    >
      {/* Reusable Viewport-Driven Video Player with Zero-Black-Frame Poster */}
      <PortfolioVideoPlayer
        project={project}
        onOpenModal={onOpenModal}
        autoplayOnScroll={true}
        priority={index < 4}
        objectFit="cover"
      />

      {/* Card Editorial Content */}
      <div className="p-6 bg-[#111111] border-t border-[#1A1A1A] flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6FF3D] bg-[#C6FF3D]/10 px-2 py-0.5 rounded-full border border-[#C6FF3D]/20">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-[#737373]">
              {project.format}
            </span>
          </div>

          <h3
            onClick={() => onOpenModal(project)}
            className="font-display font-bold text-lg text-[#F5F3EF] group-hover:text-[#C6FF3D] transition-colors leading-snug mb-1 cursor-pointer"
          >
            {project.title}
          </h3>

          {project.originalFilename && project.originalFilename !== project.title && (
            <p className="font-mono text-[10px] text-[#555555] truncate mb-3">
              File: {project.originalFilename}
            </p>
          )}

          <p className="text-xs text-[#A3A3A3] line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-[#737373] bg-[#171717] px-2 py-0.5 rounded border border-[#242424]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#C6FF3D] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6FF3D]"
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
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(18);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showFolderDrawer, setShowFolderDrawer] = useState(false);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.categorySlug === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.originalFilename &&
          project.originalFilename.toLowerCase().includes(searchQuery.toLowerCase())) ||
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

  // Active Category Folder Link
  const currentCategoryFolder = useMemo(() => {
    if (activeCategory === "all") return null;
    return googleDriveFolders.find((f) => f.categorySlug === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
              02 / SELECTED WORK ({portfolioProjects.length} VERIFIED VIDEOS ACROSS 14 DRIVE FOLDERS)
            </span>
            <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
            LESS TALK. <br className="hidden sm:inline" />
            <span className="text-[#C6FF3D]">MORE IMPACT.</span>
          </h2>
        </div>

        {/* 14 Folders Directory Action Pill */}
        <div className="flex flex-wrap items-center gap-2">
          {currentCategoryFolder && (
            <a
              href={currentCategoryFolder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/40 text-xs font-mono text-[#C6FF3D] hover:bg-[#C6FF3D] hover:text-[#080808] transition-colors"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Drive: {currentCategoryFolder.name} ({currentCategoryFolder.itemCount || 0})</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          )}

          <button
            type="button"
            onClick={() => setShowFolderDrawer(!showFolderDrawer)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#C6FF3D] hover:border-[#C6FF3D] transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>Explore All 14 Drive Folders</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFolderDrawer ? "rotate-180" : ""}`} />
          </button>
        </div>
      </motion.div>

      {/* Expandable 14 Google Drive Folders Directory */}
      <AnimatePresence>
        {showFolderDrawer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-10 overflow-hidden"
          >
            <div className="p-6 rounded-3xl bg-[#0D0D0D] border border-[#222222] shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-[#C6FF3D]" />
                  <span className="font-mono text-xs font-bold text-[#F5F3EF] uppercase tracking-wider">
                    All 14 Connected Google Drive Folders (Live Source Repositories)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowFolderDrawer(false)}
                  className="p-1 rounded-lg text-[#737373] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {googleDriveFolders.map((folder, idx) => (
                  <a
                    key={folder.id}
                    href={folder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#C6FF3D]/60 hover:bg-[#161616] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-[10px] text-[#C6FF3D] uppercase">
                          {idx + 1}. {folder.category}
                        </span>
                        {folder.itemCount !== undefined && (
                          <span className="font-mono text-[10px] text-[#737373] bg-[#1A1A1A] px-2 py-0.5 rounded-full">
                            {folder.itemCount} files
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-semibold text-xs text-[#F5F3EF] group-hover:text-white truncate">
                        {folder.name}
                      </h4>
                      <p className="text-[11px] text-[#737373] line-clamp-1 mt-1">
                        {folder.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono text-[#737373] group-hover:text-[#C6FF3D]">
                      <span>Open on Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto-Play Notice Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 p-3.5 rounded-2xl bg-[#141414] border border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#A3A3A3]"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
          <span className="text-[#F5F3EF]">
            All {portfolioProjects.length} videos from your 14 Google Drive folders integrated with verified frame previews and smooth viewport auto-loop.
          </span>
        </div>
        <span className="text-[#737373]">Click any card to open full-screen video viewer</span>
      </motion.div>

      {/* Search Input Bar */}
      <div className="mb-8 relative max-w-md">
        <Search className="w-4 h-4 text-[#737373] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search all ${portfolioProjects.length} projects (e.g. Real Estate, Vrindavan, 25 Anniversary, Dolly)...`}
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

      {/* Category Filter Tabs: Real Estate, Motion Graphics, Makeup, Influencer, Fashion, Dress, DJ, Birthday, YouTube, Wedding, Railway, Anniversary */}
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

      {/* Empty Search State */}
      {visibleProjects.length === 0 && (
        <div className="p-16 rounded-3xl bg-[#111111] border border-[#222222] text-center space-y-4 my-8">
          <Filter className="w-8 h-8 text-[#737373] mx-auto" />
          <h3 className="font-display font-bold text-xl text-[#F5F3EF]">
            No videos matched &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-xs text-[#A3A3A3] max-w-sm mx-auto">
            Try searching with broader terms or select a different category filter above.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2.5 rounded-full bg-[#C6FF3D] text-[#080808] font-mono text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Editorial Grid with Viewport-Driven Video Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {visibleProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
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
