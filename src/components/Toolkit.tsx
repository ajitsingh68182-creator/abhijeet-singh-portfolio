"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { creatorInfo } from "@/data/creatorInfo";
import { Sparkles, Check } from "lucide-react";

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>

      {/* Software Suites Grid with Real High-Res App Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {creatorInfo.tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
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

            <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center gap-2 text-[11px] font-mono text-[#C6FF3D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Production Tool</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Technical Capabilities List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-3xl bg-[#111111] border border-[#222222]"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-[#A3A3A3] block mb-6">
          COMPREHENSIVE TECHNICAL PROFICIENCIES (FROM RESUME)
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {creatorInfo.coreSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2.5 text-xs font-mono text-[#F5F3EF] p-2.5 rounded-xl bg-[#161616] border border-[#242424]"
            >
              <div className="w-4 h-4 rounded-full bg-[#C6FF3D]/10 flex items-center justify-center text-[#C6FF3D] shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="truncate">{skill}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
