"use client";

import Link from "next/link";
import { creatorInfo } from "@/data/creatorInfo";
import {
  Film,
  Smartphone,
  Briefcase,
  Sparkles,
  Palette,
  Volume2,
  Home,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Film,
  Smartphone,
  Briefcase,
  Sparkles,
  Palette,
  Volume2,
  Home,
  UserCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
          04 / WHAT I DO
        </span>
        <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
          FROM RAW FOOTAGE <br className="hidden sm:inline" />
          <span className="text-[#C6FF3D]">TO FINAL CUT.</span>
        </h2>

        <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
          Comprehensive post-production tailored to your platform, your aesthetic, and your audience engagement goals.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {creatorInfo.services.map((service, index) => {
          const Icon = iconMap[service.icon] || Film;

          return (
            <div
              key={service.id}
              className="group relative rounded-3xl p-7 bg-[#111111] border border-[#222222] hover:border-[#C6FF3D]/60 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-center text-[#F5F3EF] group-hover:text-[#080808] group-hover:bg-[#C6FF3D] group-hover:border-[#C6FF3D] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#737373] group-hover:text-[#C6FF3D] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6FF3D] block mb-2">
                  {service.category}
                </span>

                <h3 className="font-display font-bold text-xl text-[#F5F3EF] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-[#A3A3A3] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights list */}
                <ul className="space-y-1.5 mb-6 pt-4 border-t border-[#1C1C1C]">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[11px] font-mono text-[#737373] flex items-center gap-2 group-hover:text-[#A3A3A3] transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C6FF3D]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <Link
                href={`#contact`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1A1A1A] text-xs font-mono font-medium text-[#A3A3A3] group-hover:text-[#C6FF3D] transition-colors"
              >
                <span>INQUIRE SERVICE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
