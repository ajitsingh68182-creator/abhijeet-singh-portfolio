# Abhijeet Singh — Premium 3D Cinematic Portfolio Website

A cinematic, editorial portfolio website engineered for **Abhijeet Singh — Video Editor & Creative Visual Storyteller**. Designed with high-end filmmaking aesthetics, deep black background `#080808`, electric lime `#C6FF3D` highlights, interactive 3D WebGL camera optics, and structured integration with his actual Google Drive video portfolio.

---

## 📽️ Project Highlights & Features

- **Authentic Personal Imagery**:
  - `creator-stabilizer.jpg`: Hero creator visual on location holding camera gimbal stabilizer with cinematic camera HUD.
  - `workstation.jpg`: Creative process section visual showcasing Apple Silicon editing suite with Adobe Premiere Pro and dual displays.
  - `stylized-portrait.jpg`: Editorial portrait in Section 01 (About) with artistic neon mural.
- **Genuine Google Drive Video Integration**:
  - Extracted real subfolders and files from both supplied Google Drive folders:
    - **Drive Folder 1 (Full Videos)**: Anniversary documentaries, Wedding ceremonies (Haldi, Jaggo, Ring Ceremony, Vivek & Dolly highlight), Railway 4K documentaries, and YouTube commercial features.
    - **Drive Folder 2 (Reels)**: Real Estate tours (Rightland, 2 BHK, 3 BHK), Influencer campaigns (Luxe, Sunaar), Fashion teasers, 28 Makeup reels, and Motion Graphics renders.
  - **Cinematic Video Modal**: Native `<dialog>` modal with responsive 16:9 / 9:16 aspect ratios, light-dismiss backdrop, escape key support, embedded Google Drive video player, and direct "Watch on Drive" fallback links.
- **Interactive 3D Camera Optics**:
  - Custom Three.js interactive cine lens assembly featuring anodized titanium barrel, knurled focus rings, electric lime index band, aperture iris blades, and multi-coated glass optical element reacting to mouse parallax.
- **Performance & Modern Standards**:
  - Next.js 15 App Router + React 19 + TypeScript.
  - Compliant with **Modern Web Guidance** (`light-dismiss-a-dialog`, `@starting-style` transitions, `transition-behavior: allow-discrete`).
  - Pre-optimized web images reduced from 66MB raw PNGs to sub-megabyte crisp JPEGs.
  - Reduced-motion accessibility checks (`prefers-reduced-motion: reduce`).

---

## 🎬 12 Cohesive Sections

1. **Section 01 — Cinematic Intro Loader**: Minimal "AS" monogram logo, progress sweep, 24 FPS timecode counter, and transition to hero.
2. **Section 02 — Hero Experience**: Bold headline *"EVERY FRAME TELLS A STORY"*, authentic creator visual with stabilizer, interactive 3D cine lens, and *"4+ Years of Editing Experience"* badge.
3. **Section 03 — About the Creator**: Concise verified background from resume, location, languages, availability tags, journey timeline, and resume PDF download.
4. **Section 04 — Selected Work (Project Gallery)**: Categorized video cards (Wedding Films, Social Media Reels, Real Estate, Influencer, Fashion, Motion Graphics), filter buttons, aspect ratio tags, and video modal viewer.
5. **Section 05 — Showreel Experience**: Wide cinema player showcasing *"Highlight — Vivek & Dolly"* with Google Drive preview and timecode overlays.
6. **Section 06 — Services**: 8 interactive service cards (Wedding Films, Reels & Shorts, Brand & Promo, Motion Graphics, Color Grading, Sound Design, Real Estate, Influencer Branding).
7. **Section 07 — Creative Process**: 4-stage pipeline (Discover, Edit, Refine, Deliver) supported by authentic editing workstation photography.
8. **Section 08 — Software Toolkit**: Visual layout of Premiere Pro, After Effects, DaVinci Resolve, Photoshop, and core craft tags without fabricated percentage bars.
9. **Section 09 — Experience Timeline**: 2020–2022 Wedding Video Editor & 2022–Present Freelance Video Editor with verified responsibilities from resume.
10. **Section 10 — Why Work With Me**: Editorial points focusing on storytelling, pacing, reliability, and attention to detail.
11. **Section 11 — Contact & Inquiry**: Functional validation form with encoded mailto fallback, direct WhatsApp chat CTA (+91-9628464471), and copy-to-clipboard email.
12. **Section 12 — Footer**: Dynamic copyright year, quick navigation, drive archive links, and smooth back-to-top control.

---

## 🛠️ How to Edit Portfolio Data

All project and creator data is cleanly decoupled into dedicated TypeScript data files:

- **Edit Projects & Drive Links**: `src/data/projectsData.ts`
  - Add new videos, change categories, update Drive IDs, or modify descriptions.
- **Edit Contact Info, Services & Bio**: `src/data/creatorInfo.ts`
  - Update email, phone, bio, services, process steps, or timeline.

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Start production server
npm run start -p 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
