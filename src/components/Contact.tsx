"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { creatorInfo } from "@/data/creatorInfo";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Wedding Film",
    budget: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please describe your project (minimum 10 characters)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build properly encoded mailto URL
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — From ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Abhijeet,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project Type: ${formData.projectType}\n` +
        `Estimated Budget: ${formData.budget || "Flexible / Not Specified"}\n\n` +
        `Project Details:\n${formData.message}\n\n` +
        `---\nSent from Abhijeet Singh Portfolio Website`
    );

    const mailtoUrl = `mailto:${creatorInfo.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#C6FF3D] tracking-widest uppercase">
            09 / LET’S CONNECT
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF3D]/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F3EF] leading-tight">
              HAVE A STORY? <br className="hidden sm:inline" />
              <span className="text-[#C6FF3D]">LET’S CREATE IT.</span>
            </h2>
            <p className="text-sm md:text-base text-[#A3A3A3] max-w-xl font-normal leading-relaxed mt-4">
              Have a wedding film, brand video, social media project, or creative idea in mind? Let’s discuss how I can bring it to life.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#2B2B2B] text-xs font-mono text-[#F5F3EF] shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] animate-ping" />
            <span>Accepting New Clients</span>
          </div>
        </div>
      </motion.div>

      {/* Two Column Layout: Direct Contact on Left, Interactive Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact CTAs & Information */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-8 rounded-3xl bg-[#111111] border border-[#222222] space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737373] block">
              Direct Channels
            </span>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#202020] flex items-center justify-center text-[#C6FF3D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Email Address</span>
                  <a
                    href={`mailto:${creatorInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-[#F5F3EF] hover:text-[#C6FF3D] transition-colors truncate block"
                  >
                    {creatorInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(creatorInfo.email, "email")}
                className="p-2 rounded-xl bg-[#222222] hover:bg-[#333333] text-[#A3A3A3] hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#C6FF3D]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#202020] flex items-center justify-center text-[#C6FF3D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${creatorInfo.phone}`}
                    className="text-xs sm:text-sm font-semibold text-[#F5F3EF] hover:text-[#C6FF3D] transition-colors block"
                  >
                    {creatorInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(creatorInfo.phone, "phone")}
                className="p-2 rounded-xl bg-[#222222] hover:bg-[#333333] text-[#A3A3A3] hover:text-white transition-colors"
                title="Copy phone number to clipboard"
                aria-label="Copy phone number to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#C6FF3D]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct WhatsApp Button */}
            <a
              href={creatorInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-display font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp Directly</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick FAQ / Guidance */}
          <div className="p-6 rounded-3xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#C6FF3D]">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold">RESPONSE TIME</span>
            </div>
            <p className="text-[#A3A3A3] font-sans">
              Inquiries are typically answered within 2 to 4 business hours. Files and project links can be shared directly via Google Drive.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Project Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#222222] space-y-6"
            noValidate
          >
            <h3 className="font-display font-bold text-2xl text-[#F5F3EF]">
              Project Details
            </h3>

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-xs font-mono text-[#A3A3A3] uppercase">
                Your Name <span className="text-[#C6FF3D]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma / Creative Studio"
                className={`w-full px-4 py-3 rounded-xl bg-[#161616] border text-sm text-[#F5F3EF] placeholder-[#555555] focus:outline-none transition-colors ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-[#262626] focus:border-[#C6FF3D]"
                }`}
              />
              {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-xs font-mono text-[#A3A3A3] uppercase">
                Email Address <span className="text-[#C6FF3D]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#161616] border text-sm text-[#F5F3EF] placeholder-[#555555] focus:outline-none transition-colors ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-[#262626] focus:border-[#C6FF3D]"
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email}</p>}
            </div>

            {/* Project Type & Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contact-type" className="block text-xs font-mono text-[#A3A3A3] uppercase">
                  Project Type
                </label>
                <select
                  id="contact-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-sm text-[#F5F3EF] focus:outline-none focus:border-[#C6FF3D] transition-colors"
                >
                  <option value="Cinematic Wedding Film">Cinematic Wedding Film</option>
                  <option value="Instagram Reels & Shorts Batch">Instagram Reels & Shorts Batch</option>
                  <option value="Real Estate Video Tour">Real Estate Video Tour</option>
                  <option value="Brand / Corporate Promotional Video">Brand / Corporate Promotional Video</option>
                  <option value="Influencer & Personal Branding">Influencer & Personal Branding</option>
                  <option value="Motion Graphics & Color Grading">Motion Graphics & Color Grading</option>
                  <option value="Other Creative Post-Production">Other Creative Post-Production</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-budget" className="block text-xs font-mono text-[#A3A3A3] uppercase">
                  Estimated Budget (Optional)
                </label>
                <input
                  id="contact-budget"
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g. ₹15,000 / $500 / Project based"
                  className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-sm text-[#F5F3EF] placeholder-[#555555] focus:outline-none focus:border-[#C6FF3D] transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-xs font-mono text-[#A3A3A3] uppercase">
                Project Scope & Footage Details <span className="text-[#C6FF3D]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your footage, deadline, video duration, and desired creative style..."
                className={`w-full px-4 py-3 rounded-xl bg-[#161616] border text-sm text-[#F5F3EF] placeholder-[#555555] focus:outline-none transition-colors ${
                  errors.message ? "border-red-500 focus:border-red-500" : "border-[#262626] focus:border-[#C6FF3D]"
                }`}
              />
              {errors.message && <p className="text-xs text-red-400 font-mono">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#C6FF3D] text-[#080808] font-display font-bold text-sm tracking-wider uppercase hover:bg-[#d4ff5e] hover:shadow-[0_0_25px_rgba(198,255,61,0.4)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <span>SEND INQUIRY VIA EMAIL</span>
              <Send className="w-4 h-4 fill-current" />
            </button>

            {/* Notification / Fallback Guidance */}
            {submitted && (
              <div className="p-4 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-xs text-[#E5E5E5] space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-[#C6FF3D] font-bold">
                  <Check className="w-4 h-4" />
                  <span>Your email client is opening with pre-filled details!</span>
                </div>
                <p className="text-[#A3A3A3]">
                  If your desktop or mobile mail client did not open automatically, please send your email directly to{" "}
                  <a href={`mailto:${creatorInfo.email}`} className="text-[#C6FF3D] underline">
                    {creatorInfo.email}
                  </a>{" "}
                  or message on{" "}
                  <a
                    href={creatorInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6FF3D] underline"
                  >
                    WhatsApp ({creatorInfo.phoneFormatted})
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
