"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Sparkles, ChevronRight } from "lucide-react";
import Camera3D from "./Camera3D";
import { creatorInfo } from "@/data/creatorInfo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C6FF3D]/5 blur-[160px] pointer-events-none -z-10" />

      {/* Top Experience & Identity Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#A3A3A3]">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
          <span className="tracking-wider uppercase text-[11px]">
            {creatorInfo.tagline}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#2B2B2B] text-xs font-mono text-[#C6FF3D]">
          <Sparkles className="w-3 h-3" />
          <span className="tracking-wider text-[11px] font-semibold">
            {creatorInfo.experienceYears} OF EDITING EXPERIENCE
          </span>
        </div>
      </motion.div>

      {/* Main Hero Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] text-[#F5F3EF]"
          >
            EVERY <span className="text-[#C6FF3D] italic font-light">FRAME</span>
            <br />
            TELLS A <span className="underline decoration-[#C6FF3D]/40 decoration-wavy underline-offset-8">STORY</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#A3A3A3] max-w-xl font-normal leading-relaxed"
          >
            I transform raw footage into cinematic experiences, compelling brand stories, and scroll-stopping social content.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#C6FF3D] text-[#080808] font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#d4ff5e] hover:shadow-[0_0_30px_rgba(198,255,61,0.45)] hover:scale-[1.02] active:scale-95"
            >
              <span>EXPLORE MY WORK</span>
              <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#141414] border border-[#2B2B2B] text-[#F5F3EF] font-display font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#C6FF3D] hover:bg-[#1A1A1A] active:scale-95"
            >
              <span>LET’S WORK TOGETHER</span>
              <ChevronRight className="w-4 h-4 text-[#C6FF3D]" />
            </Link>
          </motion.div>

          {/* 4 Core Software Toolkit Badges in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-2 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[11px] text-[#737373] uppercase tracking-wider block mr-1">
              Primary Toolkit:
            </span>
            {creatorInfo.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#121212] border border-[#242424] hover:border-[#C6FF3D]/60 hover:bg-[#181818] transition-all group shadow-md"
                title={tool.name}
              >
                <div className="w-5 h-5 rounded-md overflow-hidden relative shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-[#E5E5E5] group-hover:text-white transition-colors">
                  {tool.name.replace("Adobe ", "")}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Quick Stats / Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 flex items-center gap-8 border-t border-[#1C1C1C] text-xs font-mono text-[#737373]"
          >
            <div>
              <span className="block text-[#F5F3EF] font-bold text-lg font-display">2020 – 2026+</span>
              <span>Editing Journey</span>
            </div>
            <div className="w-[1px] h-8 bg-[#222222]" />
            <div>
              <span className="block text-[#F5F3EF] font-bold text-lg font-display">4K & HDR</span>
              <span>Cinema & Social Formats</span>
            </div>
            <div className="w-[1px] h-8 bg-[#222222]" />
            <div>
              <span className="block text-[#C6FF3D] font-bold text-lg font-display">Fast Turnaround</span>
              <span>Available for Hire</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Authentic Profile Image 3_20261024_194042_0000 + 3D Camera Object */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px]"
          >
            {/* Film Camera Viewfinder Graphic Outer Box */}
            <div className="relative rounded-3xl overflow-hidden border border-[#262626] bg-[#111111] shadow-2xl group">
              {/* Creator Photo Holding Gimbal Stabilizer (3_20261024_194042_0000) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <Image
                  src="/images/creator-stabilizer.jpg"
                  alt="Abhijeet Singh holding camera gimbal stabilizer on location (3_20261024_194042_0000)"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30 pointer-events-none" />

                {/* Viewfinder Overlay HUD */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  {/* Top HUD */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-red-500 font-bold bg-black/75 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      REC • 4K 24P
                    </span>
                    <span className="text-[#C6FF3D] bg-black/75 px-2.5 py-0.5 rounded backdrop-blur-sm border border-white/5">
                      LOG // PRORES
                    </span>
                  </div>

                  {/* Center Reticle */}
                  <div className="self-center w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#C6FF3D] rounded-full" />
                  </div>

                  {/* Bottom HUD */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A3A3A3] bg-black/75 p-2.5 rounded-xl backdrop-blur-sm border border-white/5">
                    <div>
                      <span className="text-white font-bold block text-xs">{creatorInfo.name}</span>
                      <span className="text-[#737373]">Creator on Location</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#C6FF3D]">SHUTTER 1/48</span>
                      <span className="block text-[#737373]">ISO 800</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Interactive 3D Lens Object overlaying corner */}
            <div className="absolute -bottom-10 -right-6 md:-bottom-12 md:-right-10 w-44 h-44 md:w-52 md:h-52 z-20 pointer-events-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
              <Camera3D />
            </div>

            {/* Decorative film corner borders */}
            <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#C6FF3D]" />
            <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#C6FF3D]" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="pt-10 flex items-center justify-between text-xs font-mono text-[#737373]"
      >
        <Link
          href="#about"
          className="inline-flex items-center gap-2 hover:text-[#C6FF3D] transition-colors group"
        >
          <div className="w-5 h-8 rounded-full border border-[#333333] flex items-start justify-center p-1 group-hover:border-[#C6FF3D] transition-colors">
            <span className="w-1 h-2 rounded-full bg-[#C6FF3D] animate-bounce" />
          </div>
          <span className="tracking-widest uppercase text-[11px]">
            SCROLL TO EXPLORE
          </span>
        </Link>

        <span className="hidden sm:inline-block tracking-wider uppercase text-[10px]">
          BASED IN INDIA • WORKING GLOBALLY
        </span>
      </motion.div>
    </section>
  );
}
