"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { creatorInfo } from "@/data/creatorInfo";
import { MapPin, Globe, CheckCircle2, Download, Film, Sparkles, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
          01 / ABOUT ME
        </span>
        <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight mb-16">
        BEHIND EVERY <br className="hidden sm:inline" />
        <span className="text-[#C6FF3D]">FRAME</span> IS A STORY.
      </h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Stylized Portrait & Authentic Badges */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-[#262626] bg-[#121212] group shadow-2xl"
          >
            {/* Authentic Stylized Portrait with Neon Backdrop */}
            <div className="relative aspect-[9/16] w-full max-h-[580px] overflow-hidden">
              <Image
                src="/images/stylized-portrait.jpg"
                alt="Abhijeet Singh — Video Editor & Creative Visual Storyteller"
                fill
                className="object-cover object-top filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

              {/* Floating Editorial Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#080808]/85 backdrop-blur-md border border-[#222222] flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-white">
                    {creatorInfo.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#C6FF3D] bg-[#C6FF3D]/10 px-2 py-0.5 rounded-full border border-[#C6FF3D]/30">
                    VERIFIED CREATOR
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                  <MapPin className="w-3.5 h-3.5 text-[#C6FF3D] shrink-0" />
                  <span className="truncate">{creatorInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Corner Cine Borders */}
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C6FF3D]" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C6FF3D]" />
          </motion.div>

          {/* Quick Info Badges Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3.5 rounded-2xl bg-[#121212] border border-[#222222] flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#C6FF3D]" />
              <div>
                <span className="text-[10px] font-mono text-[#737373] uppercase block">Languages</span>
                <span className="text-xs font-semibold text-[#F5F3EF]">
                  {creatorInfo.languages.join(" & ")}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#121212] border border-[#222222] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#C6FF3D]" />
              <div>
                <span className="text-[10px] font-mono text-[#737373] uppercase block">Status</span>
                <span className="text-xs font-semibold text-[#C6FF3D]">
                  Open for Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Philosophy & Journey Timeline */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Main Verified Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-[#F5F3EF] font-normal leading-relaxed">
              {creatorInfo.bio}
            </p>

            <p className="text-base text-[#A3A3A3] leading-relaxed">
              From fast-paced social reels engineered for immediate hook retention to long-form wedding films requiring emotional narrative build, every project is treated as an individual piece of cinema. I take ownership of the entire post-production pipeline: assembly, rhythm, audio balancing, sound foley, and node-based color grading.
            </p>
          </motion.div>

          {/* Availability Pills */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737373] block">
              Work Modes & Availability
            </span>
            <div className="flex flex-wrap gap-2">
              {creatorInfo.availability.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-medium text-[#E5E5E5] flex items-center gap-1.5 hover:border-[#C6FF3D]/50 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Journey (2020 to Present) */}
          <div className="space-y-4 pt-4 border-t border-[#1C1C1C]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737373] block">
              Professional Journey (2020 – Present)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 2022 - Present */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-colors relative">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C6FF3D]/10 text-[#C6FF3D] font-mono text-[11px] font-bold mb-2">
                  2022 — Present
                </span>
                <h4 className="font-display font-bold text-base text-[#F5F3EF] mb-1">
                  Freelance Video Editor
                </h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Direct client collaboration on short-form reels, real estate walkthroughs, influencer branding, and corporate promotional videos.
                </p>
              </div>

              {/* 2020 - 2022 */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-colors relative">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-[#A3A3A3] font-mono text-[11px] font-bold mb-2">
                  2020 — 2022
                </span>
                <h4 className="font-display font-bold text-base text-[#F5F3EF] mb-1">
                  Wedding Video Editor
                </h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  Specialized in full-length wedding films, teaser highlights, Haldi & Sangeet edits, multi-camera audio mixing, and film-style grading.
                </p>
              </div>
            </div>
          </div>

          {/* Resume & Drive Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={creatorInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C6FF3D] text-[#080808] font-bold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#d4ff5e] hover:shadow-[0_0_20px_rgba(198,255,61,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>

            <a
              href={creatorInfo.driveFolders[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#F5F3EF] font-semibold text-xs tracking-wider uppercase hover:border-[#C6FF3D] hover:bg-[#1A1A1A] transition-all"
            >
              <Film className="w-4 h-4 text-[#C6FF3D]" />
              <span>VIEW FULL GOOGLE DRIVE ARCHIVE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
