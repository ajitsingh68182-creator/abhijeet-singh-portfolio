"use client";

import { creatorInfo } from "@/data/creatorInfo";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
          07 / EXPERIENCE
        </span>
        <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
          FOUR YEARS OF <br className="hidden sm:inline" />
          <span className="text-[#C6FF3D]">PROVEN CRAFT.</span>
        </h2>

        <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
          From boutique wedding films to modern fast-turnaround social media content for global creators.
        </p>
      </div>

      {/* Visual Timeline Stream */}
      <div className="relative border-l border-[#222222] ml-4 md:ml-32 pl-8 md:pl-16 space-y-16">
        {creatorInfo.timeline.map((item, index) => (
          <div key={item.period} className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-[#111111] border-2 border-[#C6FF3D] flex items-center justify-center shadow-[0_0_15px_rgba(198,255,61,0.3)] group-hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
            </div>

            {/* Date Tag */}
            <div className="md:absolute md:-left-44 md:top-1.5 mb-2 md:mb-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono font-bold text-[#C6FF3D]">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
            </div>

            {/* Timeline Card */}
            <div className="p-8 rounded-3xl bg-[#111111] border border-[#222222] group-hover:border-[#C6FF3D]/50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-display font-bold text-2xl text-[#F5F3EF]">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-[#737373] bg-[#181818] px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>

              <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#1C1C1C]">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D4D4] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C6FF3D] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
