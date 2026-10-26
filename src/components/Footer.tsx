"use client";

import Link from "next/link";
import { creatorInfo } from "@/data/creatorInfo";
import { ArrowUp, Mail, Phone, FolderOpen, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#171717] pt-16 pb-12 px-6 md:px-12 text-[#A3A3A3]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Top Tier: Identity & Back To Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#141414]">
          <div className="space-y-1">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F3EF] tracking-tight">
              {creatorInfo.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-widest text-[#C6FF3D]">
              {creatorInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#222222] text-xs font-mono text-[#F5F3EF] hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Quick Links & Archives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          {/* Quick Nav */}
          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-bold block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-[#C6FF3D] transition-colors">01 // About Me</Link></li>
              <li><Link href="#work" className="hover:text-[#C6FF3D] transition-colors">02 // Selected Work</Link></li>
              <li><Link href="#showreel" className="hover:text-[#C6FF3D] transition-colors">03 // Showreel Cut</Link></li>
              <li><Link href="#services" className="hover:text-[#C6FF3D] transition-colors">04 // Core Services</Link></li>
              <li><Link href="#process" className="hover:text-[#C6FF3D] transition-colors">05 // Creative Process</Link></li>
              <li><Link href="#toolkit" className="hover:text-[#C6FF3D] transition-colors">06 // Software Toolkit</Link></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-bold block">
              Contact Channels
            </span>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${creatorInfo.email}`} className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-[#C6FF3D]" />
                  <span>{creatorInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${creatorInfo.phone}`} className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#C6FF3D]" />
                  <span>{creatorInfo.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={creatorInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#00a884] hover:underline">
                  WhatsApp Messaging
                </a>
              </li>
            </ul>
          </div>

          {/* Drive Portfolio Folders */}
          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-bold block">
              Drive Repositories ({creatorInfo.driveFolders.length})
            </span>
            <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-none">
              {creatorInfo.driveFolders.map((folder) => (
                <li key={folder.url}>
                  <a
                    href={folder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5 truncate"
                    title={folder.description}
                  >
                    <FolderOpen className="w-3 h-3 text-[#C6FF3D] shrink-0" />
                    <span className="truncate">{folder.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Availability */}
          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-bold block">
              Base & Delivery
            </span>
            <p className="text-[#737373] leading-relaxed">
              Sector 12, Pratap Vihar, Ghaziabad, India. Available for remote client delivery worldwide.
            </p>
            <span className="inline-block px-2.5 py-1 rounded bg-[#161616] border border-[#222222] text-[#C6FF3D] text-[10px]">
              Freelance • Contract • Full-time
            </span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="pt-8 border-t border-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#555555]">
          <p>
            © {currentYear} {creatorInfo.name}. All creative rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Designed & Built for High-Impact Cinematic Video Editing</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
