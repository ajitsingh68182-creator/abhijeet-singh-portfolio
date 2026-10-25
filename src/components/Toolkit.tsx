"use client";

import Image from "next/image";
import { creatorInfo } from "@/data/creatorInfo";
import { Sparkles, Check } from "lucide-react";

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
          06 / THE TOOLKIT
        </span>
        <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
          TOOLS MEET <br className="hidden sm:inline" />
          <span className="text-[#C6FF3D]">CREATIVITY.</span>
        </h2>

        <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
          Industry-standard NLE and visual post-production suites utilized to assemble, composite, grade, and deliver premium client work.
        </p>
      </div>

      {/* Software Suites Grid with Real High-Res App Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {creatorInfo.tools.map((tool) => (
          <div
            key={tool.name}
            className="group p-7 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#C6FF3D]/60 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                {/* Official High-Resolution Software Icon PNG */}
                <div className="w-16 h-16 rounded-2xl p-1.5 bg-[#0A0A0A] border border-[#262626] flex items-center justify-center group-hover:border-[#C6FF3D] group-hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    width={56}
                    height={56}
                    className="object-contain rounded-xl"
                  />
                </div>
                <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider bg-[#181818] px-2.5 py-1 rounded-full border border-white/5">
                  {tool.category}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#F5F3EF] mb-2 group-hover:text-white transition-colors">
                {tool.name}
              </h3>

              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex items-center gap-2 text-xs font-mono text-[#C6FF3D]">
              <Check className="w-3.5 h-3.5" />
              <span>Active Daily Suite</span>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Core Skills & Craft Tags */}
      <div className="p-8 rounded-3xl bg-[#0E0E0E] border border-[#222222]">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-4 h-4 text-[#C6FF3D]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F5F3EF]">
            Core Disciplines & Technical Craft
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {creatorInfo.coreSkills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2.5 rounded-2xl bg-[#141414] border border-[#262626] text-xs sm:text-sm font-medium text-[#E5E5E5] hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
