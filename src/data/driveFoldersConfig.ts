export interface DriveFolderConfig {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  url: string;
  description: string;
  itemCount?: number;
  isGeneral?: boolean;
}

export const googleDriveFolders: DriveFolderConfig[] = [
  // 12 Category-Specific Folders
  {
    id: "1CYiY7zjUvtlzgT8L180JqagZJXuiVAdH",
    name: "Real Estate Reels",
    category: "Real Estate",
    categorySlug: "real-estate",
    url: "https://drive.google.com/drive/folders/1CYiY7zjUvtlzgT8L180JqagZJXuiVAdH?usp=drive_link",
    description: "Property tours, 2BHK/3BHK walkthroughs, luxury apartments, and commercial real estate reels.",
    itemCount: 16,
  },
  {
    id: "1nnsIXiO-sUBD2tqoxKzz4gbZgapBzRpJ",
    name: "Motion Graphics",
    category: "Motion Graphics",
    categorySlug: "motion-graphics",
    url: "https://drive.google.com/drive/folders/1nnsIXiO-sUBD2tqoxKzz4gbZgapBzRpJ?usp=drive_link",
    description: "After Effects animations, kinetic typography, dynamic intro sequences, and visual effects.",
    itemCount: 3,
  },
  {
    id: "1N1dKvG8ZNE9PKg34zGraACkiX96rLvN_",
    name: "Makeup Reels",
    category: "Makeup",
    categorySlug: "makeup",
    url: "https://drive.google.com/drive/folders/1N1dKvG8ZNE9PKg34zGraACkiX96rLvN_?usp=drive_link",
    description: "Bridal makeup transformations, beauty looks, speed edits, and high-energy social reels.",
    itemCount: 28,
  },
  {
    id: "1PdSOM291Fh9hVNh1StMWb0LXWyEBkb-p",
    name: "Influencer Reels",
    category: "Influencer",
    categorySlug: "influencer",
    url: "https://drive.google.com/drive/folders/1PdSOM291Fh9hVNh1StMWb0LXWyEBkb-p?usp=drive_link",
    description: "Personal branding, lifestyle storytelling, retention-focused edits, and creator content.",
    itemCount: 4,
  },
  {
    id: "1Z6QKTU7ULOiIQu9ZUN901wBfopURyO82",
    name: "Fashion Reels",
    category: "Fashion",
    categorySlug: "fashion",
    url: "https://drive.google.com/drive/folders/1Z6QKTU7ULOiIQu9ZUN901wBfopURyO82?usp=drive_link",
    description: "Fashion teasers, apparel showcases, modeling shoots, and editorial lookbooks.",
    itemCount: 1,
  },
  {
    id: "1LKEnh3XCD6kfoeeixHQBLLrqPSz04fhq",
    name: "Dress Reels",
    category: "Dress",
    categorySlug: "dress",
    url: "https://drive.google.com/drive/folders/1LKEnh3XCD6kfoeeixHQBLLrqPSz04fhq?usp=drive_link",
    description: "Ethnic wear, bridal dresses, boutique fashion displays, and styling reel edits.",
    itemCount: 3,
  },
  {
    id: "1OGAntpwf77GtVjHRbnCFiG7PN2x5Q2Hi",
    name: "DJ Reels",
    category: "DJ",
    categorySlug: "dj",
    url: "https://drive.google.com/drive/folders/1OGAntpwf77GtVjHRbnCFiG7PN2x5Q2Hi?usp=drive_link",
    description: "Live DJ events, nightclub performances, festival energy, and heavy bass beat-syncs.",
    itemCount: 3,
  },
  {
    id: "1SBT1poor35Rm60fw6Hv3sM7oGqfHXfVn",
    name: "Birthday Reels",
    category: "Birthday",
    categorySlug: "birthday",
    url: "https://drive.google.com/drive/folders/1SBT1poor35Rm60fw6Hv3sM7oGqfHXfVn?usp=drive_link",
    description: "Birthday parties, family milestone celebrations, and personalized event highlight reels.",
    itemCount: 3,
  },
  {
    id: "1KKOHo_tpqcAsf5hg7-klX2hbl3kwG2x-",
    name: "YouTube Videos",
    category: "YouTube",
    categorySlug: "youtube",
    url: "https://drive.google.com/drive/folders/1KKOHo_tpqcAsf5hg7-klX2hbl3kwG2x-?usp=drive_link",
    description: "16:9 widescreen long-form YouTube edits, podcasts, and narrative storytelling.",
    itemCount: 2,
  },
  {
    id: "1aSP4OHXT9icpXseVwMWH_XgvwxYh-o_9",
    name: "Wedding Videos",
    category: "Wedding",
    categorySlug: "wedding",
    url: "https://drive.google.com/drive/folders/1aSP4OHXT9icpXseVwMWH_XgvwxYh-o_9?usp=drive_link",
    description: "Cinematic wedding films, Haldi, Mehendi, Sangeet, and Ring Ceremony highlights.",
    itemCount: 11,
  },
  {
    id: "1m1XnOD-L9A5NJuy3wSWWEalYviknlihc",
    name: "Railway Videos",
    category: "Railway",
    categorySlug: "railway",
    url: "https://drive.google.com/drive/folders/1m1XnOD-L9A5NJuy3wSWWEalYviknlihc?usp=drive_link",
    description: "Cinematic 4K/1080p Indian Railways infrastructure documentaries and route journeys.",
    itemCount: 6,
  },
  {
    id: "1tVeKBD57e6ZWrp80jYh8pmf1dDLdsfWI",
    name: "Anniversary Videos",
    category: "Anniversary",
    categorySlug: "anniversary",
    url: "https://drive.google.com/drive/folders/1tVeKBD57e6ZWrp80jYh8pmf1dDLdsfWI?usp=drive_link",
    description: "25th Anniversary celebrations, couple documentaries, and emotional speech synchronizations.",
    itemCount: 4,
  },
  // 2 General Portfolio Archives
  {
    id: "1tHRI2a1mw0DwtTngDfxXSjX-O_s1FbRk",
    name: "General Video Folder 1",
    category: "General Archive 1",
    categorySlug: "general-1",
    url: "https://drive.google.com/drive/folders/1tHRI2a1mw0DwtTngDfxXSjX-O_s1FbRk?usp=drive_link",
    description: "Long-form full video master archive (Wedding, Railway, Anniversary, YouTube).",
    isGeneral: true,
  },
  {
    id: "1c7lvq_tY9-iA5wwjL2s_qu5BRPgu-6Rn",
    name: "General Video Folder 2",
    category: "General Archive 2",
    categorySlug: "general-2",
    url: "https://drive.google.com/drive/folders/1c7lvq_tY9-iA5wwjL2s_qu5BRPgu-6Rn?usp=drive_link",
    description: "Short-form vertical reels archive (Real Estate, Makeup, Fashion, DJ, Influencer).",
    isGeneral: true,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "real-estate", label: "Real Estate" },
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "makeup", label: "Makeup" },
  { id: "influencer", label: "Influencer" },
  { id: "fashion", label: "Fashion" },
  { id: "dress", label: "Dress" },
  { id: "dj", label: "DJ" },
  { id: "birthday", label: "Birthday" },
  { id: "youtube", label: "YouTube" },
  { id: "wedding", label: "Wedding" },
  { id: "railway", label: "Railway" },
  { id: "anniversary", label: "Anniversary" },
] as const;
