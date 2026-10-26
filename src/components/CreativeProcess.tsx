"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { creatorInfo } from "@/data/creatorInfo";
import { Search, Scissors, Sliders, CheckCircle, Monitor, Sparkles } from "lucide-react";

const stepIcons = [Search, Scissors, Sliders, CheckCircle];

export default function CreativeProcess() {
  return (
    <section id="process" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>

      {/* 4-Step Process Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative">
        {creatorInfo.process.map((step, index) => {
          const Icon = stepIcons[index] || Search;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Authentic Workstation Visual Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden border border-[#222222] bg-[#0E0E0E] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C6FF3D] mb-3">
            <Monitor className="w-4 h-4" />
            <span>AUTHENTIC EDIT SUITE & TIMELINE ENVIRONMENT</span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[#F5F3EF] mb-4">
            Calibrated Monitors, Precision Scopes & Color Precision.
          </h3>
          <p className="text-xs md:text-sm text-[#A3A3A3] leading-relaxed">
            Every cut is perfected in Premiere Pro and DaVinci Resolve on high-resolution calibrated displays with lossless ProRes and high-bitrate rendering workflows.
          </p>
        </div>

        {/* Real Workstation Photo */}
        <div className="relative w-full md:w-80 h-48 md:h-52 rounded-2xl overflow-hidden border border-[#2B2B2B] shrink-0 group">
          <Image
            src="/images/workstation.jpg"
            alt="Abhijeet Singh Editing Workstation — Adobe Premiere Pro in Action"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-[#C6FF3D] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Actual Workstation Photo</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
