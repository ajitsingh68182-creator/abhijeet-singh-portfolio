"use client";

import Image from "next/image";
import { creatorInfo } from "@/data/creatorInfo";
import { Search, Scissors, Sliders, CheckCircle, Monitor, Sparkles } from "lucide-react";

const stepIcons = [Search, Scissors, Sliders, CheckCircle];

export default function CreativeProcess() {
  return (
    <section id="process" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
          05 / THE PROCESS
        </span>
        <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
          EVERY DETAIL <br className="hidden sm:inline" />
          <span className="text-[#C6FF3D]">HAS A PURPOSE.</span>
        </h2>

        <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
          A disciplined four-phase post-production pipeline built for clarity, creative precision, and stress-free delivery.
        </p>
      </div>

      {/* 4-Step Process Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative">
        {creatorInfo.process.map((step, index) => {
          const Icon = stepIcons[index] || Search;

          return (
            <div
              key={step.step}
              className="group relative rounded-3xl p-7 bg-[#111111] border border-[#222222] hover:border-[#C6FF3D]/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Connector line for desktop */}
              {index < 3 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-[2px] bg-[#222222] z-10" />
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#C6FF3D] bg-[#C6FF3D]/10 px-3 py-1 rounded-full border border-[#C6FF3D]/20">
                    STAGE {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center text-[#A3A3A3] group-hover:text-[#C6FF3D] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#F5F3EF] mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A3A3A3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Sub-deliverables */}
              <div className="pt-4 border-t border-[#1C1C1C] space-y-1.5">
                {step.details.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-mono text-[#737373] group-hover:text-[#A3A3A3] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]/60 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Authentic Workstation Showcase */}
      <div className="relative rounded-3xl overflow-hidden border border-[#262626] bg-[#0E0E0E] shadow-2xl">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/images/workstation.jpg"
            alt="Abhijeet Singh Editing Workstation setup featuring Adobe Premiere Pro and studio monitors"
            fill
            className="object-cover object-center filter contrast-[1.05] brightness-[0.92] hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent" />

          {/* Workstation Info Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[#C6FF3D] bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                <Monitor className="w-3.5 h-3.5" />
                AUTHENTIC EDITING SUITE
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                Where the Cut Comes to Life
              </h3>
              <p className="text-xs text-[#A3A3A3] max-w-xl hidden sm:block">
                High-performance Apple Silicon workstation, mechanical color-coded editing deck, dual calibrated studio displays, and Premiere Pro / DaVinci Resolve suites.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-[#A3A3A3] bg-black/70 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
                4K RAW & ProRes Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
