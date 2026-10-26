"use client";

import { motion } from "framer-motion";
import { creatorInfo } from "@/data/creatorInfo";
import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
            08 / WHY CHOOSE ME
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
            CREATIVE THINKING. <br className="hidden sm:inline" />
            <span className="text-[#C6FF3D]">PRECISE EXECUTION.</span>
          </h2>

          <p className="text-sm md:text-base text-[#A3A3A3] max-w-md font-normal leading-relaxed">
            High technical standards, proactive communication, and an artistic eye committed to making your footage stand out.
          </p>
        </div>
      </motion.div>

      {/* Editorial Numbered Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {creatorInfo.whyChooseMe.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.55,
              delay: (index % 3) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group p-8 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#C6FF3D]/60 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="font-display text-4xl font-black text-[#262626] group-hover:text-[#C6FF3D] transition-colors block mb-4">
                {item.number}
              </span>

              <h3 className="font-display font-bold text-xl text-[#F5F3EF] mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono text-[#737373]">
              <span>Verified Standard</span>
              <span className="text-[#C6FF3D]">• Guaranteed</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Callout Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65 }}
        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#141414] to-[#111111] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C6FF3D]">
            <Zap className="w-4 h-4" />
            <span>AVAILABLE FOR IMMEDIATE BOOKING</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-[#F5F3EF]">
            Ready to bring your footage to life?
          </h3>
          <p className="text-xs text-[#A3A3A3]">
            Open for freelance projects, retainer contracts, and remote collaborations.
          </p>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#C6FF3D] text-[#080808] font-display font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(198,255,61,0.3)] hover:bg-[#d4ff5e] transition-colors shrink-0"
        >
          <span>LET&apos;S WORK TOGETHER</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
