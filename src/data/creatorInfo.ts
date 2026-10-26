export interface CreatorInfo {
  name: string;
  shortName: string;
  tagline: string;
  title: string;
  experienceYears: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  resumeUrl: string;
  languages: string[];
  availability: string[];
  driveFolders: {
    label: string;
    description: string;
    url: string;
  }[];
  services: {
    id: string;
    title: string;
    category: string;
    description: string;
    icon: string;
    highlights: string[];
  }[];
  timeline: {
    period: string;
    role: string;
    type: string;
    description: string;
    highlights: string[];
  }[];
  tools: {
    name: string;
    category: "Primary NLE" | "VFX & Motion" | "Graphic Design" | "Color Grading";
    icon: string;
    description: string;
  }[];
  coreSkills: string[];
  whyChooseMe: {
    number: string;
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    duration: string;
    description: string;
    details: string[];
  }[];
}

export const creatorInfo: CreatorInfo = {
  name: "Abhijeet Singh",
  shortName: "AS",
  title: "Video Editor & Creative Visual Storyteller",
  tagline: "INDEPENDENT VIDEO EDITOR & VISUAL STORYTELLER",
  experienceYears: "4+ YEARS",
  bio: "I’m Abhijeet Singh, a video editor with over four years of experience creating cinematic wedding films, engaging social media content, and compelling visual stories for brands and creators. My work combines storytelling, precise editing, thoughtful sound design, and cinematic color grading to turn raw footage into polished visual experiences.",
  location: "Sector 12, Pratap Vihar, Ghaziabad, India",
  email: "abhijeetpratap205@gmail.com",
  phone: "+919628464471",
  phoneFormatted: "+91-9628464471",
  whatsappUrl: "https://wa.me/919628464471?text=Hi%20Abhijeet,%20I%20saw%20your%20video%20editing%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  resumeUrl: "/Abhijeet_Singh_Resume.pdf",
  languages: ["Hindi", "English"],
  availability: [
    "Freelance Projects",
    "Remote Work",
    "Full-Time Roles",
    "Part-Time Engagements",
    "Contract-Based Editing",
  ],
  driveFolders: [
    {
      label: "Real Estate Reels",
      description: "Property tours, 2BHK/3BHK walkthroughs, luxury apartments, and commercial real estate reels.",
      url: "https://drive.google.com/drive/folders/1CYiY7zjUvtlzgT8L180JqagZJXuiVAdH?usp=drive_link",
    },
    {
      label: "Motion Graphics",
      description: "After Effects animations, kinetic typography, dynamic intro sequences, and visual effects.",
      url: "https://drive.google.com/drive/folders/1nnsIXiO-sUBD2tqoxKzz4gbZgapBzRpJ?usp=drive_link",
    },
    {
      label: "Makeup Reels",
      description: "Bridal makeup transformations, beauty looks, speed edits, and high-energy social reels.",
      url: "https://drive.google.com/drive/folders/1N1dKvG8ZNE9PKg34zGraACkiX96rLvN_?usp=drive_link",
    },
    {
      label: "Influencer Reels",
      description: "Personal branding, lifestyle storytelling, retention-focused edits, and creator content.",
      url: "https://drive.google.com/drive/folders/1PdSOM291Fh9hVNh1StMWb0LXWyEBkb-p?usp=drive_link",
    },
    {
      label: "Fashion Reels",
      description: "Fashion teasers, apparel showcases, modeling shoots, and editorial lookbooks.",
      url: "https://drive.google.com/drive/folders/1Z6QKTU7ULOiIQu9ZUN901wBfopURyO82?usp=drive_link",
    },
    {
      label: "Dress Reels",
      description: "Ethnic wear, bridal dresses, boutique fashion displays, and styling reel edits.",
      url: "https://drive.google.com/drive/folders/1LKEnh3XCD6kfoeeixHQBLLrqPSz04fhq?usp=drive_link",
    },
    {
      label: "DJ Reels",
      description: "Live DJ events, nightclub performances, festival energy, and heavy bass beat-syncs.",
      url: "https://drive.google.com/drive/folders/1OGAntpwf77GtVjHRbnCFiG7PN2x5Q2Hi?usp=drive_link",
    },
    {
      label: "Birthday Reels",
      description: "Birthday parties, family milestone celebrations, and personalized event highlight reels.",
      url: "https://drive.google.com/drive/folders/1SBT1poor35Rm60fw6Hv3sM7oGqfHXfVn?usp=drive_link",
    },
    {
      label: "YouTube Videos",
      description: "16:9 widescreen long-form YouTube edits, podcasts, and narrative storytelling.",
      url: "https://drive.google.com/drive/folders/1KKOHo_tpqcAsf5hg7-klX2hbl3kwG2x-?usp=drive_link",
    },
    {
      label: "Wedding Videos",
      description: "Cinematic wedding films, Haldi, Mehendi, Sangeet, and Ring Ceremony highlights.",
      url: "https://drive.google.com/drive/folders/1aSP4OHXT9icpXseVwMWH_XgvwxYh-o_9?usp=drive_link",
    },
    {
      label: "Railway Videos",
      description: "Cinematic 4K/1080p Indian Railways infrastructure documentaries and route journeys.",
      url: "https://drive.google.com/drive/folders/1m1XnOD-L9A5NJuy3wSWWEalYviknlihc?usp=drive_link",
    },
    {
      label: "Anniversary Videos",
      description: "25th Anniversary celebrations, couple documentaries, and emotional speech synchronizations.",
      url: "https://drive.google.com/drive/folders/1tVeKBD57e6ZWrp80jYh8pmf1dDLdsfWI?usp=drive_link",
    },
    {
      label: "General Archive 1 (Full Videos)",
      description: "Full Wedding Films, Anniversaries, Railway Documentaries & Long-form YouTube Content",
      url: "https://drive.google.com/drive/folders/1tHRI2a1mw0DwtTngDfxXSjX-O_s1FbRk?usp=drive_link",
    },
    {
      label: "General Archive 2 (Short Reels)",
      description: "Social Media Reels, Real Estate Showcases, Fashion, Makeup, Birthday & Motion Graphics",
      url: "https://drive.google.com/drive/folders/1c7lvq_tY9-iA5wwjL2s_qu5BRPgu-6Rn?usp=drive_link",
    },
  ],
  services: [
    {
      id: "wedding-films",
      title: "Cinematic Wedding Films",
      category: "Long-form & Highlights",
      description: "Full wedding features, emotional teaser trailers, pre-wedding films, Haldi, Mehendi, Sangeet, and reception highlights cut to emotional music cues.",
      icon: "Film",
      highlights: ["Multi-camera synchronization", "Emotional audio mixing", "Film-style color grading"],
    },
    {
      id: "reels-shorts",
      title: "Reels & Short-Form Content",
      category: "Social Media Growth",
      description: "Fast-paced, high-retention Instagram Reels, YouTube Shorts, and TikTok cuts designed to capture attention in the first 3 seconds.",
      icon: "Smartphone",
      highlights: ["Hook-first pacing", "Dynamic captions & kinetic text", "Sound-effects emphasis"],
    },
    {
      id: "brand-promo",
      title: "Brand & Promotional Videos",
      category: "Commercial & Business",
      description: "Elevated promotional films for corporate brands, real estate developments, restaurants, fitness centers, and startups.",
      icon: "Briefcase",
      highlights: ["Clean brand narrative", "Modern typography overlays", "Platform-specific deliverables"],
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics & VFX",
      category: "Visual Enhancement",
      description: "Dynamic logo animation, kinetic title cards, infographic motion elements, lower thirds, and seamless seamless transition effects.",
      icon: "Sparkles",
      highlights: ["Custom After Effects rigs", "Smooth easing & physics", "Visual pop for key moments"],
    },
    {
      id: "color-grading",
      title: "Cinematic Color Grading",
      category: "Look & Atmosphere",
      description: "Professional color correction and creative look application in DaVinci Resolve and Premiere Pro to achieve that high-budget cinematic feel.",
      icon: "Palette",
      highlights: ["Log/RAW normalization", "Skin-tone precision", "Atmospheric stylized LUTs"],
    },
    {
      id: "sound-design",
      title: "Sound Design & Music Sync",
      category: "Audio Immersion",
      description: "Meticulous SFX layering (whooshes, risers, impacts, foley), dialogue leveling, noise suppression, and beat-matched audio rhythm.",
      icon: "Volume2",
      highlights: ["Beat-synchronized cuts", "Spatial foley layering", "Pristine vocal clarity"],
    },
    {
      id: "real-estate",
      title: "Real Estate & Architecture",
      category: "Property Tours",
      description: "Sleek walkthrough videos, speed-ramped transitions, floor plan callouts, and ambient styling that highlight luxury properties.",
      icon: "Home",
      highlights: ["Speed ramp flow", "Stabilized footage polish", "Property highlight callouts"],
    },
    {
      id: "influencer-branding",
      title: "Personal Branding & Creators",
      category: "Influencer Content",
      description: "Tailored visual identity for YouTubers, fitness athletes, fashion stylists, and educators looking to scale their personal authority.",
      icon: "UserCheck",
      highlights: ["Signature editing style", "Fast revision cycles", "Batch workflow handling"],
    },
  ],
  timeline: [
    {
      period: "2022 — Present",
      role: "Freelance Video Editor",
      type: "Self-Employed / Remote",
      description: "Managing independent client projects worldwide across social media, corporate marketing, personal branding, and real estate.",
      highlights: [
        "Crafting short-form reels for corporate brands, influencers, fitness coaches, restaurants, and real estate firms",
        "Executing end-to-end post-production: motion graphics, dynamic typography, sound design, and color grading",
        "Direct client communication, structured feedback loops, and rapid turnaround delivery without compromising aesthetic quality",
      ],
    },
    {
      period: "2020 — 2022",
      role: "Wedding Video Editor",
      type: "Studio Post-Production",
      description: "Specialized in high-emotion, cinematic wedding cinematography and event documentary editing.",
      highlights: [
        "Edited wedding highlight teasers, full-length wedding documentaries, and pre-wedding films",
        "Cut Haldi, Mehendi, Sangeet, and reception celebrations with multi-camera multi-track audio alignment",
        "Mastered story-based narrative flow, emotional music synchronization, and cinematic film-look color grades",
      ],
    },
  ],
  tools: [
    {
      name: "Adobe Premiere Pro",
      category: "Primary NLE",
      icon: "/icons/premiere-pro.png",
      description: "Core non-linear editing system for assembly, multi-camera cutting, pacing, audio mastering, and client delivery.",
    },
    {
      name: "Adobe After Effects",
      category: "VFX & Motion",
      icon: "/icons/after-effects.png",
      description: "Dynamic motion graphics, kinetic typography, 3D camera tracking, visual effects, and logo animation.",
    },
    {
      name: "DaVinci Resolve",
      category: "Color Grading",
      icon: "/icons/davinci-resolve.png",
      description: "Advanced node-based color correction, RAW workflow, gamut management, and film emulation.",
    },
    {
      name: "Adobe Photoshop",
      category: "Graphic Design",
      icon: "/icons/photoshop.png",
      description: "High-impact thumbnail generation, asset cleanup, texture preparation, and storyboarding.",
    },
  ],
  coreSkills: [
    "Cinematic Storytelling",
    "Dynamic Pacing",
    "Motion Graphics",
    "Cinematic Color Grading",
    "Sound Design & SFX",
    "Multi-Camera Sync",
    "Social Media Optimization",
    "Wedding Teasers & Films",
    "YouTube Shorts & Reels",
    "Client Communication",
  ],
  whyChooseMe: [
    {
      number: "01",
      title: "4+ Years of Real-World Editing",
      description: "Proven experience across both long-form wedding films and high-impact short-form social campaigns.",
    },
    {
      number: "02",
      title: "Cinematic Storytelling",
      description: "Footage is never just spliced together; every cut, transition, and pause is paced to evoke the intended emotion.",
    },
    {
      number: "03",
      title: "Clear, Reliable Communication",
      description: "Professional updates, organized project files, and clear milestones so you are never left guessing.",
    },
    {
      number: "04",
      title: "Punctual Delivery & Fast Turnaround",
      description: "Strict respect for deadlines, understanding that modern content schedules and event dates cannot wait.",
    },
    {
      number: "05",
      title: "Obsession with Detail",
      description: "From sound design micro-risers to pixel-perfect color harmony, every detail receives meticulous attention.",
    },
    {
      number: "06",
      title: "Growth & Retention Mindset",
      description: "Deep understanding of retention algorithms, hook psychology, and visual pacing for Instagram and YouTube.",
    },
  ],
  process: [
    {
      step: "01",
      title: "DISCOVER",
      duration: "Stage 01",
      description: "Understand the project's vision, target audience, brand tone, and narrative goal before touching the timeline.",
      details: ["Review raw footage & brief", "Identify story arcs & hooks", "Align on pacing, music & references"],
    },
    {
      step: "02",
      title: "EDIT",
      duration: "Stage 02",
      description: "Shape the footage with deliberate pacing, selecting the strongest takes and building rhythm that sustains attention.",
      details: ["A-Roll assembly & narrative structure", "B-Roll integration & match cuts", "Pacing & kinetic momentum tuning"],
    },
    {
      step: "03",
      title: "REFINE",
      duration: "Stage 03",
      description: "Elevate raw cuts into cinematic art through dedicated color grading, custom sound design, and motion accents.",
      details: ["DaVinci / Lumetri color grading", "Layered SFX, foley & music ducking", "Kinetic titles & motion graphics"],
    },
    {
      step: "04",
      title: "DELIVER",
      duration: "Stage 04",
      description: "Deliver platform-optimized masters (4K / 1080p, 16:9 / 9:16) with all metadata ready for seamless publishing.",
      details: ["Platform-tailored compression (Web/Social)", "Client review & revision pass", "Archive & master file handover"],
    },
  ],
};
