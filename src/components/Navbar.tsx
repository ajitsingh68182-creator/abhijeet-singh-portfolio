"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { creatorInfo } from "@/data/creatorInfo";
import { Menu, X, ArrowUpRight, Film, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1A1A1A] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Monogram Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D]"
          aria-label="Abhijeet Singh Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center font-display font-bold text-lg text-[#F5F3EF] group-hover:border-[#C6FF3D] transition-colors relative overflow-hidden">
            <span className="tracking-tighter">
              A<span className="text-[#C6FF3D]">S</span>
            </span>
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-ping opacity-75" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F5F3EF] leading-tight group-hover:text-white transition-colors">
              {creatorInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#737373] uppercase">
              Video Editor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#121212]/80 border border-[#222222] px-4 py-1.5 rounded-full backdrop-blur-sm"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-[#A3A3A3] hover:text-[#F5F3EF] hover:bg-[#1C1C1C] px-3.5 py-1.5 rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6FF3D]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={creatorInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#A3A3A3] hover:text-[#C6FF3D] transition-colors px-2 py-1"
            title="Download Abhijeet Singh Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF3D] text-[#080808] font-semibold text-xs tracking-wide transition-all duration-200 hover:bg-[#d4ff5e] hover:shadow-[0_0_20px_rgba(198,255,61,0.35)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] focus-visible:ring-[#C6FF3D]"
          >
            <span>LET’S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center text-[#F5F3EF] hover:border-[#C6FF3D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#C6FF3D]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-[#080808]/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between px-8 py-10 border-t border-[#1C1C1C] animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-5">
            <span className="font-mono text-[10px] tracking-widest text-[#737373] uppercase">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-display text-2xl font-bold text-[#F5F3EF] hover:text-[#C6FF3D] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#737373] group-hover:text-[#C6FF3D] transition-colors">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-8 border-t border-[#1F1F1F]">
            <a
              href={creatorInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#2A2A2A] text-sm font-medium text-[#F5F3EF] hover:border-[#C6FF3D]"
            >
              <Download className="w-4 h-4 text-[#C6FF3D]" />
              <span>Download Resume PDF</span>
            </a>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#C6FF3D] text-[#080808] font-bold text-sm tracking-wide shadow-lg"
            >
              <span>LET’S WORK TOGETHER</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
