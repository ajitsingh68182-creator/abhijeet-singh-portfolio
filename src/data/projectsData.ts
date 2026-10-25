export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  format: "16:9 Landscape" | "9:16 Vertical Reel";
  thumbnail: string;
  videoSrc: string;
  driveId: string;
  driveViewUrl: string;
  drivePreviewEmbedUrl: string;
  description: string;
  featured?: boolean;
  aspectRatio: "16/9" | "9/16";
  tags: string[];
}

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "wedding", label: "Wedding & Anniversary" },
  { id: "real-estate", label: "Real Estate" },
  { id: "makeup", label: "Makeup & Beauty" },
  { id: "reels", label: "Social Media Reels" },
  { id: "influencer", label: "Influencer & Brand" },
  { id: "fashion", label: "Fashion & Apparel" },
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "documentary", label: "Documentary & Travel" },
] as const;

export const portfolioProjects: ProjectItem[] = [
  {
    "id": "proj-anniversary-1Pabau1a",
    "title": "25 Anniversary Richa & Rajendra Full Video",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1Pabau1aRd5TGVF3G4OwYB-RoBMP_R8k_",
    "driveViewUrl": "https://drive.google.com/file/d/1Pabau1aRd5TGVF3G4OwYB-RoBMP_R8k_/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Pabau1aRd5TGVF3G4OwYB-RoBMP_R8k_/preview",
    "description": "25th Anniversary celebration documentary (25 Anniversary Richa & Rajendra Full Video) with multi-camera synchronisation and speeches.",
    "featured": true,
    "tags": [
      "Anniversary",
      "Celebration",
      "Color Grade"
    ],
    "thumbnail": "/thumbnails/proj-anniversary-1Pabau1a.jpg"
  },
  {
    "id": "proj-anniversary-1BCJVcR3",
    "title": "25 Anniversery Reel 02",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1BCJVcR3XokruwJk9JXXM1Mkaeah6Z24f",
    "driveViewUrl": "https://drive.google.com/file/d/1BCJVcR3XokruwJk9JXXM1Mkaeah6Z24f/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1BCJVcR3XokruwJk9JXXM1Mkaeah6Z24f/preview",
    "description": "25th Anniversary celebration documentary (25 Anniversery Reel 02) with multi-camera synchronisation and speeches.",
    "featured": false,
    "tags": [
      "Anniversary",
      "Celebration",
      "Color Grade"
    ],
    "thumbnail": "/thumbnails/proj-anniversary-1BCJVcR3.jpg"
  },
  {
    "id": "proj-anniversary-15FjS2OU",
    "title": "Highlight 25 Anniversery",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "15FjS2OUZdKKG35jNXtAFxRGVJOk5-Cvc",
    "driveViewUrl": "https://drive.google.com/file/d/15FjS2OUZdKKG35jNXtAFxRGVJOk5-Cvc/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/15FjS2OUZdKKG35jNXtAFxRGVJOk5-Cvc/preview",
    "description": "25th Anniversary celebration documentary (Highlight 25 Anniversery) with multi-camera synchronisation and speeches.",
    "featured": false,
    "tags": [
      "Anniversary",
      "Celebration",
      "Color Grade"
    ],
    "thumbnail": "/thumbnails/proj-anniversary-15FjS2OU.jpg"
  },
  {
    "id": "proj-anniversary-1Y-W5LqV",
    "title": "Reel 25 Anniversey",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1Y-W5LqV2MxhkPaOuWQJ6EzYMj91FiRgT",
    "driveViewUrl": "https://drive.google.com/file/d/1Y-W5LqV2MxhkPaOuWQJ6EzYMj91FiRgT/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Y-W5LqV2MxhkPaOuWQJ6EzYMj91FiRgT/preview",
    "description": "25th Anniversary celebration documentary (Reel 25 Anniversey) with multi-camera synchronisation and speeches.",
    "featured": false,
    "tags": [
      "Anniversary",
      "Celebration",
      "Color Grade"
    ],
    "thumbnail": "/thumbnails/proj-anniversary-1Y-W5LqV.jpg"
  },
  {
    "id": "proj-railway-video-1KW6t2rX",
    "title": "3rd line and 4th line between Barharwa and Bhagalpur",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1KW6t2rXObLSMzfNpY8I1C0ylVjHVP907",
    "driveViewUrl": "https://drive.google.com/file/d/1KW6t2rXObLSMzfNpY8I1C0ylVjHVP907/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1KW6t2rXObLSMzfNpY8I1C0ylVjHVP907/preview",
    "description": "4K documentary sequence (3rd line and 4th line between Barharwa and Bhagalpur) capturing expansive landscapes, natural foley, and pacing.",
    "featured": true,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1KW6t2rX.jpg"
  },
  {
    "id": "proj-railway-video-1J8kBF6u",
    "title": "Andal & Sainthia",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1J8kBF6ueBBmVZ8vPjK_DnNBfjM9rSlGX",
    "driveViewUrl": "https://drive.google.com/file/d/1J8kBF6ueBBmVZ8vPjK_DnNBfjM9rSlGX/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1J8kBF6ueBBmVZ8vPjK_DnNBfjM9rSlGX/preview",
    "description": "4K documentary sequence (Andal & Sainthia) capturing expansive landscapes, natural foley, and pacing.",
    "featured": false,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1J8kBF6u.jpg"
  },
  {
    "id": "proj-railway-video-1xFFFs_a",
    "title": "JAISALMER & BARMER 149 Km 1080p.",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1xFFFs_aTDo3nzgUO5D2it5Xr8Qgb-qMU",
    "driveViewUrl": "https://drive.google.com/file/d/1xFFFs_aTDo3nzgUO5D2it5Xr8Qgb-qMU/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1xFFFs_aTDo3nzgUO5D2it5Xr8Qgb-qMU/preview",
    "description": "4K documentary sequence (JAISALMER & BARMER 149 Km 1080p.) capturing expansive landscapes, natural foley, and pacing.",
    "featured": false,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1xFFFs_a.jpg"
  },
  {
    "id": "proj-railway-video-1M4ab6Ts",
    "title": "JAISALMER & BARMER 149 Km 480p..",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1M4ab6TsZGZ6878VowXRbSYWGLxj-ybag",
    "driveViewUrl": "https://drive.google.com/file/d/1M4ab6TsZGZ6878VowXRbSYWGLxj-ybag/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1M4ab6TsZGZ6878VowXRbSYWGLxj-ybag/preview",
    "description": "4K documentary sequence (JAISALMER & BARMER 149 Km 480p..) capturing expansive landscapes, natural foley, and pacing.",
    "featured": false,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1M4ab6Ts.jpg"
  },
  {
    "id": "proj-railway-video-1Ya0Ks7v",
    "title": "JAISALMER & BARMER 149 Km 4k",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1Ya0Ks7vuHYaQhPx95B_pl6YIe8VYr60W",
    "driveViewUrl": "https://drive.google.com/file/d/1Ya0Ks7vuHYaQhPx95B_pl6YIe8VYr60W/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Ya0Ks7vuHYaQhPx95B_pl6YIe8VYr60W/preview",
    "description": "4K documentary sequence (JAISALMER & BARMER 149 Km 4k) capturing expansive landscapes, natural foley, and pacing.",
    "featured": false,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1Ya0Ks7v.jpg"
  },
  {
    "id": "proj-railway-video-1BQJXQe_",
    "title": "Laheriasarai to Saharsa Last",
    "category": "Documentary & Travel",
    "categorySlug": "documentary",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1BQJXQe_4NJOihTsTxdDQcIg0GL6ccRLQ",
    "driveViewUrl": "https://drive.google.com/file/d/1BQJXQe_4NJOihTsTxdDQcIg0GL6ccRLQ/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1BQJXQe_4NJOihTsTxdDQcIg0GL6ccRLQ/preview",
    "description": "4K documentary sequence (Laheriasarai to Saharsa Last) capturing expansive landscapes, natural foley, and pacing.",
    "featured": false,
    "tags": [
      "Documentary",
      "4K Landscape",
      "Travel"
    ],
    "thumbnail": "/thumbnails/proj-railway-video-1BQJXQe_.jpg"
  },
  {
    "id": "proj-wedding-1cc9-UAE",
    "title": "Gharoli Bride Side",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1cc9-UAEQq_kQLdFoSEkAfLkGsaiOPYuL",
    "driveViewUrl": "https://drive.google.com/file/d/1cc9-UAEQq_kQLdFoSEkAfLkGsaiOPYuL/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1cc9-UAEQq_kQLdFoSEkAfLkGsaiOPYuL/preview",
    "description": "Cinematic wedding film sequence (Gharoli Bride Side) highlighting authentic emotional storytelling and color grading.",
    "featured": true,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1cc9-UAE.jpg"
  },
  {
    "id": "proj-wedding-1Sd_Y8JS",
    "title": "Groom Side Gharoli",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1Sd_Y8JSXswMa2y3A37C3P00n1Uw3AaE3",
    "driveViewUrl": "https://drive.google.com/file/d/1Sd_Y8JSXswMa2y3A37C3P00n1Uw3AaE3/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Sd_Y8JSXswMa2y3A37C3P00n1Uw3AaE3/preview",
    "description": "Cinematic wedding film sequence (Groom Side Gharoli) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1Sd_Y8JS.jpg"
  },
  {
    "id": "proj-wedding-1WcWvWOe",
    "title": "Haldi",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1WcWvWOeRrKAFnginjjApf9IH7yZgASZ0",
    "driveViewUrl": "https://drive.google.com/file/d/1WcWvWOeRrKAFnginjjApf9IH7yZgASZ0/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1WcWvWOeRrKAFnginjjApf9IH7yZgASZ0/preview",
    "description": "Cinematic wedding film sequence (Haldi) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1WcWvWOe.jpg"
  },
  {
    "id": "proj-wedding-1ykXxLYI",
    "title": "Highlight Vivek & Dolly",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1ykXxLYIsC-KQ57VFbwVLI70NW7FHZBmT",
    "driveViewUrl": "https://drive.google.com/file/d/1ykXxLYIsC-KQ57VFbwVLI70NW7FHZBmT/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1ykXxLYIsC-KQ57VFbwVLI70NW7FHZBmT/preview",
    "description": "Cinematic wedding film sequence (Highlight Vivek & Dolly) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1ykXxLYI.jpg"
  },
  {
    "id": "proj-wedding-1bHQ6OwB",
    "title": "Jaggo",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1bHQ6OwBm_2OPqDUQZ2CUbggSnT4z0UKv",
    "driveViewUrl": "https://drive.google.com/file/d/1bHQ6OwBm_2OPqDUQZ2CUbggSnT4z0UKv/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1bHQ6OwBm_2OPqDUQZ2CUbggSnT4z0UKv/preview",
    "description": "Cinematic wedding film sequence (Jaggo) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1bHQ6OwB.jpg"
  },
  {
    "id": "proj-wedding-1ukzp3XY",
    "title": "Ring Ceremony",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1ukzp3XYnkUXU__I020XS45HZCuEl897w",
    "driveViewUrl": "https://drive.google.com/file/d/1ukzp3XYnkUXU__I020XS45HZCuEl897w/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1ukzp3XYnkUXU__I020XS45HZCuEl897w/preview",
    "description": "Cinematic wedding film sequence (Ring Ceremony) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1ukzp3XY.jpg"
  },
  {
    "id": "proj-wedding-1NX9xNdX",
    "title": "Ring Ceremony",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1NX9xNdX9E2g44RdfgPankyW7mPHYDXYt",
    "driveViewUrl": "https://drive.google.com/file/d/1NX9xNdX9E2g44RdfgPankyW7mPHYDXYt/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1NX9xNdX9E2g44RdfgPankyW7mPHYDXYt/preview",
    "description": "Cinematic wedding film sequence (Ring Ceremony) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1NX9xNdX.jpg"
  },
  {
    "id": "proj-wedding-1XqslJN_",
    "title": "Teaser Vivek & Dolly",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1XqslJN_nZBBBiOmiN02vrE5ZxwMp7tfH",
    "driveViewUrl": "https://drive.google.com/file/d/1XqslJN_nZBBBiOmiN02vrE5ZxwMp7tfH/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1XqslJN_nZBBBiOmiN02vrE5ZxwMp7tfH/preview",
    "description": "Cinematic wedding film sequence (Teaser Vivek & Dolly) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1XqslJN_.jpg"
  },
  {
    "id": "proj-wedding-1Y14zhRV",
    "title": "Wedding",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1Y14zhRVT2Dd56172cUWOeI5uEqdSOGil",
    "driveViewUrl": "https://drive.google.com/file/d/1Y14zhRVT2Dd56172cUWOeI5uEqdSOGil/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Y14zhRVT2Dd56172cUWOeI5uEqdSOGil/preview",
    "description": "Cinematic wedding film sequence (Wedding) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1Y14zhRV.jpg"
  },
  {
    "id": "proj-wedding-1HRo75bK",
    "title": "Wedding Film New",
    "category": "Wedding & Anniversary",
    "categorySlug": "wedding",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1HRo75bKHwqXl9KElV1Ax13e_7Qhx74vG",
    "driveViewUrl": "https://drive.google.com/file/d/1HRo75bKHwqXl9KElV1Ax13e_7Qhx74vG/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1HRo75bKHwqXl9KElV1Ax13e_7Qhx74vG/preview",
    "description": "Cinematic wedding film sequence (Wedding Film New) highlighting authentic emotional storytelling and color grading.",
    "featured": false,
    "tags": [
      "Wedding Film",
      "Cinematic Cut",
      "Audio Mix"
    ],
    "thumbnail": "/thumbnails/proj-wedding-1HRo75bK.jpg"
  },
  {
    "id": "proj-youtube-video-1khtGCDS",
    "title": "Video Final A&T Homz",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1khtGCDSQEIDNovJetu9hlQdRuYaBnlbj",
    "driveViewUrl": "https://drive.google.com/file/d/1khtGCDSQEIDNovJetu9hlQdRuYaBnlbj/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1khtGCDSQEIDNovJetu9hlQdRuYaBnlbj/preview",
    "description": "Corporate feature video (Video Final A&T Homz) cut for YouTube delivery with branded graphics and pacing.",
    "featured": true,
    "tags": [
      "Commercial",
      "YouTube Feature",
      "Corporate"
    ],
    "thumbnail": "/thumbnails/proj-youtube-video-1khtGCDS.jpg"
  },
  {
    "id": "proj-youtube-video-1nMJSUni",
    "title": "Video_3",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "16:9 Landscape",
    "aspectRatio": "16/9",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1nMJSUnitBLOrR5UxB8iSAfnry7nPfxYA",
    "driveViewUrl": "https://drive.google.com/file/d/1nMJSUnitBLOrR5UxB8iSAfnry7nPfxYA/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1nMJSUnitBLOrR5UxB8iSAfnry7nPfxYA/preview",
    "description": "Corporate feature video (Video_3) cut for YouTube delivery with branded graphics and pacing.",
    "featured": false,
    "tags": [
      "Commercial",
      "YouTube Feature",
      "Corporate"
    ],
    "thumbnail": "/thumbnails/proj-youtube-video-1nMJSUni.jpg"
  },
  {
    "id": "proj-birthday-1ML3L07n",
    "title": "Birthday final",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1ML3L07nPq636TmfwTnWhozBkNrcsJ_uN",
    "driveViewUrl": "https://drive.google.com/file/d/1ML3L07nPq636TmfwTnWhozBkNrcsJ_uN/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1ML3L07nPq636TmfwTnWhozBkNrcsJ_uN/preview",
    "description": "Vibrant celebration reel (Birthday final) edited with dynamic beat drops and energetic transitions.",
    "featured": true,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-birthday-1ML3L07n.jpg"
  },
  {
    "id": "proj-birthday-1krh5e_e",
    "title": "Birthday Vihanya new",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1krh5e_efZFL2JAFE7S-wrTpCCl4GXPZV",
    "driveViewUrl": "https://drive.google.com/file/d/1krh5e_efZFL2JAFE7S-wrTpCCl4GXPZV/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1krh5e_efZFL2JAFE7S-wrTpCCl4GXPZV/preview",
    "description": "Vibrant celebration reel (Birthday Vihanya new) edited with dynamic beat drops and energetic transitions.",
    "featured": false,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-birthday-1krh5e_e.jpg"
  },
  {
    "id": "proj-birthday-1vrmmq1t",
    "title": "Reel Birthday Highlight",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1vrmmq1t3XCUS1SL9wpKyAhII6c3RuAFQ",
    "driveViewUrl": "https://drive.google.com/file/d/1vrmmq1t3XCUS1SL9wpKyAhII6c3RuAFQ/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1vrmmq1t3XCUS1SL9wpKyAhII6c3RuAFQ/preview",
    "description": "Vibrant celebration reel (Reel Birthday Highlight) edited with dynamic beat drops and energetic transitions.",
    "featured": false,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-birthday-1vrmmq1t.jpg"
  },
  {
    "id": "proj-dj-1YcWE7xC",
    "title": "GSN Reel",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1YcWE7xCpAb6Byz0FA4MXcQ00ckwjj5A3",
    "driveViewUrl": "https://drive.google.com/file/d/1YcWE7xCpAb6Byz0FA4MXcQ00ckwjj5A3/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1YcWE7xCpAb6Byz0FA4MXcQ00ckwjj5A3/preview",
    "description": "Vibrant celebration reel (GSN Reel) edited with dynamic beat drops and energetic transitions.",
    "featured": true,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-dj-1YcWE7xC.jpg"
  },
  {
    "id": "proj-dj-103sZz-V",
    "title": "Reel  Elina Chauhann",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "103sZz-V-U3w6kY9gPLrC4oJ8r5BIAfFK",
    "driveViewUrl": "https://drive.google.com/file/d/103sZz-V-U3w6kY9gPLrC4oJ8r5BIAfFK/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/103sZz-V-U3w6kY9gPLrC4oJ8r5BIAfFK/preview",
    "description": "Vibrant celebration reel (Reel  Elina Chauhann) edited with dynamic beat drops and energetic transitions.",
    "featured": false,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-dj-103sZz-V.jpg"
  },
  {
    "id": "proj-dj-1OADI179",
    "title": "Reel Dj",
    "category": "Social Media Reels",
    "categorySlug": "reels",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/anniversary-reel.mp4",
    "driveId": "1OADI179s62BHxEK-Y2em3vQc-0PpsY7n",
    "driveViewUrl": "https://drive.google.com/file/d/1OADI179s62BHxEK-Y2em3vQc-0PpsY7n/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1OADI179s62BHxEK-Y2em3vQc-0PpsY7n/preview",
    "description": "Vibrant celebration reel (Reel Dj) edited with dynamic beat drops and energetic transitions.",
    "featured": false,
    "tags": [
      "Event Highlight",
      "Social Reel",
      "Music Sync"
    ],
    "thumbnail": "/thumbnails/proj-dj-1OADI179.jpg"
  },
  {
    "id": "proj-dress-reel-1BH_Ny4J",
    "title": "Reel 02 Dress",
    "category": "Fashion & Apparel",
    "categorySlug": "fashion",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1BH_Ny4J8fJPqB3yO3vXvsTbrbvxruXhD",
    "driveViewUrl": "https://drive.google.com/file/d/1BH_Ny4J8fJPqB3yO3vXvsTbrbvxruXhD/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1BH_Ny4J8fJPqB3yO3vXvsTbrbvxruXhD/preview",
    "description": "Editorial fashion showcase (Reel 02 Dress) emphasizing fabric motion and speed ramping.",
    "featured": true,
    "tags": [
      "Fashion",
      "Apparel",
      "Editorial Look"
    ],
    "thumbnail": "/thumbnails/proj-dress-reel-1BH_Ny4J.jpg"
  },
  {
    "id": "proj-dress-reel-1HKz7cIe",
    "title": "Reel Red Dress Mam.",
    "category": "Fashion & Apparel",
    "categorySlug": "fashion",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1HKz7cIeDxGwMK9ovBhbmuIAHLNItK828",
    "driveViewUrl": "https://drive.google.com/file/d/1HKz7cIeDxGwMK9ovBhbmuIAHLNItK828/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1HKz7cIeDxGwMK9ovBhbmuIAHLNItK828/preview",
    "description": "Editorial fashion showcase (Reel Red Dress Mam.) emphasizing fabric motion and speed ramping.",
    "featured": false,
    "tags": [
      "Fashion",
      "Apparel",
      "Editorial Look"
    ],
    "thumbnail": "/thumbnails/proj-dress-reel-1HKz7cIe.jpg"
  },
  {
    "id": "proj-dress-reel-1h0nA683",
    "title": "Reel-1",
    "category": "Fashion & Apparel",
    "categorySlug": "fashion",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1h0nA683TMmcp9QdeWaLyQAp4iWGXQzJq",
    "driveViewUrl": "https://drive.google.com/file/d/1h0nA683TMmcp9QdeWaLyQAp4iWGXQzJq/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1h0nA683TMmcp9QdeWaLyQAp4iWGXQzJq/preview",
    "description": "Editorial fashion showcase (Reel-1) emphasizing fabric motion and speed ramping.",
    "featured": false,
    "tags": [
      "Fashion",
      "Apparel",
      "Editorial Look"
    ],
    "thumbnail": "/thumbnails/proj-dress-reel-1h0nA683.jpg"
  },
  {
    "id": "proj-fashion-116RRMzh",
    "title": "Teaser_2",
    "category": "Fashion & Apparel",
    "categorySlug": "fashion",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "116RRMzh4QbH9DkoU5lowitGPALLxJRf-",
    "driveViewUrl": "https://drive.google.com/file/d/116RRMzh4QbH9DkoU5lowitGPALLxJRf-/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/116RRMzh4QbH9DkoU5lowitGPALLxJRf-/preview",
    "description": "Editorial fashion showcase (Teaser_2) emphasizing fabric motion and speed ramping.",
    "featured": true,
    "tags": [
      "Fashion",
      "Apparel",
      "Editorial Look"
    ],
    "thumbnail": "/thumbnails/proj-fashion-116RRMzh.jpg"
  },
  {
    "id": "proj-influencer-reel-1qBj-IAY",
    "title": "Luxe Reel",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/influencer-luxe.mp4",
    "driveId": "1qBj-IAYjSjvKqnr-uDlnAKmZgCZSKHK7",
    "driveViewUrl": "https://drive.google.com/file/d/1qBj-IAYjSjvKqnr-uDlnAKmZgCZSKHK7/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1qBj-IAYjSjvKqnr-uDlnAKmZgCZSKHK7/preview",
    "description": "High-retention influencer campaign reel (Luxe Reel) with modern transitions and color polish.",
    "featured": true,
    "tags": [
      "Personal Brand",
      "Influencer",
      "Hook Pacing"
    ],
    "thumbnail": "/thumbnails/proj-influencer-reel-1qBj-IAY.jpg"
  },
  {
    "id": "proj-influencer-reel-1SpVrIdl",
    "title": "Reel  Sunaar",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/influencer-luxe.mp4",
    "driveId": "1SpVrIdlMNmaPcgxy3pzmn-sSSNqbjlH2",
    "driveViewUrl": "https://drive.google.com/file/d/1SpVrIdlMNmaPcgxy3pzmn-sSSNqbjlH2/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1SpVrIdlMNmaPcgxy3pzmn-sSSNqbjlH2/preview",
    "description": "High-retention influencer campaign reel (Reel  Sunaar) with modern transitions and color polish.",
    "featured": false,
    "tags": [
      "Personal Brand",
      "Influencer",
      "Hook Pacing"
    ],
    "thumbnail": "/thumbnails/proj-influencer-reel-1SpVrIdl.jpg"
  },
  {
    "id": "proj-influencer-reel-1Nz4TdVZ",
    "title": "Influencer Reel 01",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/influencer-luxe.mp4",
    "driveId": "1Nz4TdVZSOLi3ZumbXcAZqeLFqWXWFmaB",
    "driveViewUrl": "https://drive.google.com/file/d/1Nz4TdVZSOLi3ZumbXcAZqeLFqWXWFmaB/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Nz4TdVZSOLi3ZumbXcAZqeLFqWXWFmaB/preview",
    "description": "High-retention influencer campaign reel (Reel 01) with modern transitions and color polish.",
    "featured": false,
    "tags": [
      "Personal Brand",
      "Influencer",
      "Hook Pacing"
    ],
    "thumbnail": "/thumbnails/proj-influencer-reel-1Nz4TdVZ.jpg"
  },
  {
    "id": "proj-influencer-reel-1JzcqZeA",
    "title": "Reel 123",
    "category": "Influencer & Brand",
    "categorySlug": "influencer",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/influencer-luxe.mp4",
    "driveId": "1JzcqZeAxhYSLj6gfXmmd3nrA5JnQuRlC",
    "driveViewUrl": "https://drive.google.com/file/d/1JzcqZeAxhYSLj6gfXmmd3nrA5JnQuRlC/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1JzcqZeAxhYSLj6gfXmmd3nrA5JnQuRlC/preview",
    "description": "High-retention influencer campaign reel (Reel 123) with modern transitions and color polish.",
    "featured": false,
    "tags": [
      "Personal Brand",
      "Influencer",
      "Hook Pacing"
    ],
    "thumbnail": "/thumbnails/proj-influencer-reel-1JzcqZeA.jpg"
  },
  {
    "id": "proj-makeup-reel-1r1ob6Ib",
    "title": "Makeup Reel  01",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1r1ob6Ib6JM-Zhdm0Qr9H_8TKy7zWc_Nb",
    "driveViewUrl": "https://drive.google.com/file/d/1r1ob6Ib6JM-Zhdm0Qr9H_8TKy7zWc_Nb/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1r1ob6Ib6JM-Zhdm0Qr9H_8TKy7zWc_Nb/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  01) with natural skin-tone science and beat cuts.",
    "featured": true,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1r1ob6Ib.jpg"
  },
  {
    "id": "proj-makeup-reel-1HSMLKhz",
    "title": "Makeup Reel  02",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1HSMLKhzUa7wSTp6flZX85mp8JOVM2iDf",
    "driveViewUrl": "https://drive.google.com/file/d/1HSMLKhzUa7wSTp6flZX85mp8JOVM2iDf/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1HSMLKhzUa7wSTp6flZX85mp8JOVM2iDf/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  02) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1HSMLKhz.jpg"
  },
  {
    "id": "proj-makeup-reel-1V6VI59x",
    "title": "Makeup Reel  03",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1V6VI59xswLat9RAW1aP84W0aGLPHU1Ww",
    "driveViewUrl": "https://drive.google.com/file/d/1V6VI59xswLat9RAW1aP84W0aGLPHU1Ww/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1V6VI59xswLat9RAW1aP84W0aGLPHU1Ww/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  03) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1V6VI59x.jpg"
  },
  {
    "id": "proj-makeup-reel-15WZiMCV",
    "title": "Makeup Reel  04",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "15WZiMCVHghQT9nJG4RFTHYXOzOVM7wjl",
    "driveViewUrl": "https://drive.google.com/file/d/15WZiMCVHghQT9nJG4RFTHYXOzOVM7wjl/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/15WZiMCVHghQT9nJG4RFTHYXOzOVM7wjl/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  04) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-15WZiMCV.jpg"
  },
  {
    "id": "proj-makeup-reel-1xj48cIH",
    "title": "Makeup Reel  05",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1xj48cIHMAQ7D5HZnprV6u-XU9snqHq-b",
    "driveViewUrl": "https://drive.google.com/file/d/1xj48cIHMAQ7D5HZnprV6u-XU9snqHq-b/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1xj48cIHMAQ7D5HZnprV6u-XU9snqHq-b/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  05) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1xj48cIH.jpg"
  },
  {
    "id": "proj-makeup-reel-1EbZgWzn",
    "title": "Makeup Reel  06",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1EbZgWznR6jh_K9I2Sd_U8ggigx9RWrKf",
    "driveViewUrl": "https://drive.google.com/file/d/1EbZgWznR6jh_K9I2Sd_U8ggigx9RWrKf/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1EbZgWznR6jh_K9I2Sd_U8ggigx9RWrKf/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  06) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1EbZgWzn.jpg"
  },
  {
    "id": "proj-makeup-reel-1EXSFwsK",
    "title": "Makeup Reel  07",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1EXSFwsKNdTMC0refZwIB9lGbWcp-0yj6",
    "driveViewUrl": "https://drive.google.com/file/d/1EXSFwsKNdTMC0refZwIB9lGbWcp-0yj6/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1EXSFwsKNdTMC0refZwIB9lGbWcp-0yj6/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  07) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1EXSFwsK.jpg"
  },
  {
    "id": "proj-makeup-reel-1Hr74Z6g",
    "title": "Makeup Reel  08",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1Hr74Z6g5Uufgp4BVarJDRk9K4VxsVJP5",
    "driveViewUrl": "https://drive.google.com/file/d/1Hr74Z6g5Uufgp4BVarJDRk9K4VxsVJP5/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Hr74Z6g5Uufgp4BVarJDRk9K4VxsVJP5/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  08) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1Hr74Z6g.jpg"
  },
  {
    "id": "proj-makeup-reel-10frznF-",
    "title": "Makeup Reel  09",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "10frznF-aIXSi3vlYBTxCNn7F9fmdKRmq",
    "driveViewUrl": "https://drive.google.com/file/d/10frznF-aIXSi3vlYBTxCNn7F9fmdKRmq/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/10frznF-aIXSi3vlYBTxCNn7F9fmdKRmq/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  09) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-10frznF-.jpg"
  },
  {
    "id": "proj-makeup-reel-1tH_2kjn",
    "title": "Makeup Reel  10",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1tH_2kjnz2e59Ht747N_5hDtppi2bNsgm",
    "driveViewUrl": "https://drive.google.com/file/d/1tH_2kjnz2e59Ht747N_5hDtppi2bNsgm/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1tH_2kjnz2e59Ht747N_5hDtppi2bNsgm/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  10) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1tH_2kjn.jpg"
  },
  {
    "id": "proj-makeup-reel-1MyI8w4w",
    "title": "Makeup Reel  11",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1MyI8w4wMU9071AfhW0Hx2o0NzIoMNJhB",
    "driveViewUrl": "https://drive.google.com/file/d/1MyI8w4wMU9071AfhW0Hx2o0NzIoMNJhB/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1MyI8w4wMU9071AfhW0Hx2o0NzIoMNJhB/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  11) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1MyI8w4w.jpg"
  },
  {
    "id": "proj-makeup-reel-1G2SB08F",
    "title": "Makeup Reel  12",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1G2SB08Fp-fTMB-wzMcICAAQmqsPVzW6O",
    "driveViewUrl": "https://drive.google.com/file/d/1G2SB08Fp-fTMB-wzMcICAAQmqsPVzW6O/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1G2SB08Fp-fTMB-wzMcICAAQmqsPVzW6O/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  12) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1G2SB08F.jpg"
  },
  {
    "id": "proj-makeup-reel-1lIkV8Mo",
    "title": "Makeup Reel  13",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1lIkV8MoEPtC5KZaWGJphQKWAYWJfImtb",
    "driveViewUrl": "https://drive.google.com/file/d/1lIkV8MoEPtC5KZaWGJphQKWAYWJfImtb/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1lIkV8MoEPtC5KZaWGJphQKWAYWJfImtb/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  13) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1lIkV8Mo.jpg"
  },
  {
    "id": "proj-makeup-reel-1Nw8Br15",
    "title": "Makeup Reel  14",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1Nw8Br15CfMx6Cb7dkCZvvr3cuMSDVmhg",
    "driveViewUrl": "https://drive.google.com/file/d/1Nw8Br15CfMx6Cb7dkCZvvr3cuMSDVmhg/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Nw8Br15CfMx6Cb7dkCZvvr3cuMSDVmhg/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  14) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1Nw8Br15.jpg"
  },
  {
    "id": "proj-makeup-reel-1hwWWKkf",
    "title": "Makeup Reel  15",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1hwWWKkf1GEBvQYllR4wzvqP9bwvltT6B",
    "driveViewUrl": "https://drive.google.com/file/d/1hwWWKkf1GEBvQYllR4wzvqP9bwvltT6B/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1hwWWKkf1GEBvQYllR4wzvqP9bwvltT6B/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  15) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1hwWWKkf.jpg"
  },
  {
    "id": "proj-makeup-reel-1R-UDKJJ",
    "title": "Makeup Reel  16",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1R-UDKJJhvbCyUibT7_vTW11FSKpJtOG2",
    "driveViewUrl": "https://drive.google.com/file/d/1R-UDKJJhvbCyUibT7_vTW11FSKpJtOG2/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1R-UDKJJhvbCyUibT7_vTW11FSKpJtOG2/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  16) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1R-UDKJJ.jpg"
  },
  {
    "id": "proj-makeup-reel-1H5VFA4G",
    "title": "Makeup Reel  17",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1H5VFA4GrFjDOi-JR3kUqgwP-w8PBgUuI",
    "driveViewUrl": "https://drive.google.com/file/d/1H5VFA4GrFjDOi-JR3kUqgwP-w8PBgUuI/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1H5VFA4GrFjDOi-JR3kUqgwP-w8PBgUuI/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  17) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1H5VFA4G.jpg"
  },
  {
    "id": "proj-makeup-reel-1Q4lpeF0",
    "title": "Makeup Reel  18",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1Q4lpeF0CyaEfMmN9DVC2e0Om4XQBbFyg",
    "driveViewUrl": "https://drive.google.com/file/d/1Q4lpeF0CyaEfMmN9DVC2e0Om4XQBbFyg/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Q4lpeF0CyaEfMmN9DVC2e0Om4XQBbFyg/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  18) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1Q4lpeF0.jpg"
  },
  {
    "id": "proj-makeup-reel-17XWJ6xs",
    "title": "Makeup Reel  19",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "17XWJ6xswQCAaZDotkL7OvMsKl-r4XqhT",
    "driveViewUrl": "https://drive.google.com/file/d/17XWJ6xswQCAaZDotkL7OvMsKl-r4XqhT/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/17XWJ6xswQCAaZDotkL7OvMsKl-r4XqhT/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  19) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-17XWJ6xs.jpg"
  },
  {
    "id": "proj-makeup-reel-1vYAEGzz",
    "title": "Makeup Reel  20",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1vYAEGzzRy-vKHundR5TjoefvZXEgEVTd",
    "driveViewUrl": "https://drive.google.com/file/d/1vYAEGzzRy-vKHundR5TjoefvZXEgEVTd/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1vYAEGzzRy-vKHundR5TjoefvZXEgEVTd/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  20) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1vYAEGzz.jpg"
  },
  {
    "id": "proj-makeup-reel-1QM7_BJC",
    "title": "Makeup Reel  21",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1QM7_BJCc7TIGMy7Wv0PtXWH8pC-E9XC8",
    "driveViewUrl": "https://drive.google.com/file/d/1QM7_BJCc7TIGMy7Wv0PtXWH8pC-E9XC8/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1QM7_BJCc7TIGMy7Wv0PtXWH8pC-E9XC8/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  21) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1QM7_BJC.jpg"
  },
  {
    "id": "proj-makeup-reel-1sJGjxnE",
    "title": "Makeup Reel  22",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1sJGjxnEnCnFk5pI9ksdY-O1LZSLW6GoY",
    "driveViewUrl": "https://drive.google.com/file/d/1sJGjxnEnCnFk5pI9ksdY-O1LZSLW6GoY/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1sJGjxnEnCnFk5pI9ksdY-O1LZSLW6GoY/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  22) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1sJGjxnE.jpg"
  },
  {
    "id": "proj-makeup-reel-11mqJF_-",
    "title": "Makeup Reel  23",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "11mqJF_-XZCLi5aMkdEnS5IbNzIdt9f9U",
    "driveViewUrl": "https://drive.google.com/file/d/11mqJF_-XZCLi5aMkdEnS5IbNzIdt9f9U/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/11mqJF_-XZCLi5aMkdEnS5IbNzIdt9f9U/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  23) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-11mqJF_-.jpg"
  },
  {
    "id": "proj-makeup-reel-1KE_Batc",
    "title": "Makeup Reel  24",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1KE_BatclY_Jwlzf4qiH4VZSlkkZ0Bzxu",
    "driveViewUrl": "https://drive.google.com/file/d/1KE_BatclY_Jwlzf4qiH4VZSlkkZ0Bzxu/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1KE_BatclY_Jwlzf4qiH4VZSlkkZ0Bzxu/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  24) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1KE_Batc.jpg"
  },
  {
    "id": "proj-makeup-reel-14-fbnSp",
    "title": "Makeup Reel  25",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "14-fbnSpr2FmZC7tjg-40DJstmjh1jriB",
    "driveViewUrl": "https://drive.google.com/file/d/14-fbnSpr2FmZC7tjg-40DJstmjh1jriB/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/14-fbnSpr2FmZC7tjg-40DJstmjh1jriB/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  25) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-14-fbnSp.jpg"
  },
  {
    "id": "proj-makeup-reel-1DsTH14-",
    "title": "Makeup Reel  26",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1DsTH14-hzOftrbTDD9bQ8LpCYm749I-R",
    "driveViewUrl": "https://drive.google.com/file/d/1DsTH14-hzOftrbTDD9bQ8LpCYm749I-R/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1DsTH14-hzOftrbTDD9bQ8LpCYm749I-R/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  26) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1DsTH14-.jpg"
  },
  {
    "id": "proj-makeup-reel-1uj0HJgt",
    "title": "Makeup Reel  27",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1uj0HJgtX-Y8-_hHvByXsaBIHS7VaQ8-D",
    "driveViewUrl": "https://drive.google.com/file/d/1uj0HJgtX-Y8-_hHvByXsaBIHS7VaQ8-D/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1uj0HJgtX-Y8-_hHvByXsaBIHS7VaQ8-D/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  27) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1uj0HJgt.jpg"
  },
  {
    "id": "proj-makeup-reel-1pCPqsgU",
    "title": "Makeup Reel  28",
    "category": "Makeup & Beauty",
    "categorySlug": "makeup",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/fashion-teaser.mp4",
    "driveId": "1pCPqsgUCvoHqkSvPPrQxMlcf53Sv-R7h",
    "driveViewUrl": "https://drive.google.com/file/d/1pCPqsgUCvoHqkSvPPrQxMlcf53Sv-R7h/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1pCPqsgUCvoHqkSvPPrQxMlcf53Sv-R7h/preview",
    "description": "Bridal and glam makeup showcase reel (Makeup Reel  28) with natural skin-tone science and beat cuts.",
    "featured": false,
    "tags": [
      "Makeup Artist",
      "Bridal Glam",
      "Transformation"
    ],
    "thumbnail": "/thumbnails/proj-makeup-reel-1pCPqsgU.jpg"
  },
  {
    "id": "proj-motion-ghraphic-1xFeFm3a",
    "title": "video_51ec6d0746a5",
    "category": "Motion Graphics",
    "categorySlug": "motion-graphics",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/motion-graphics.mp4",
    "driveId": "1xFeFm3alritOsbLXLJlTlRsdc1m2VJ4u",
    "driveViewUrl": "https://drive.google.com/file/d/1xFeFm3alritOsbLXLJlTlRsdc1m2VJ4u/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1xFeFm3alritOsbLXLJlTlRsdc1m2VJ4u/preview",
    "description": "Dynamic motion graphic sequence (video_51ec6d0746a5) featuring physics easing and composite styling.",
    "featured": true,
    "tags": [
      "After Effects",
      "Kinetic Typography",
      "VFX"
    ],
    "thumbnail": "/thumbnails/proj-motion-ghraphic-1xFeFm3a.jpg"
  },
  {
    "id": "proj-motion-ghraphic-1_lnpWF6",
    "title": "video_86b231363c5a",
    "category": "Motion Graphics",
    "categorySlug": "motion-graphics",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/motion-graphics-2.mp4",
    "driveId": "1_lnpWF6C4kQqBUIs8FHfSKo_GDQiQpND",
    "driveViewUrl": "https://drive.google.com/file/d/1_lnpWF6C4kQqBUIs8FHfSKo_GDQiQpND/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1_lnpWF6C4kQqBUIs8FHfSKo_GDQiQpND/preview",
    "description": "Dynamic motion graphic sequence (video_86b231363c5a) featuring physics easing and composite styling.",
    "featured": false,
    "tags": [
      "After Effects",
      "Kinetic Typography",
      "VFX"
    ],
    "thumbnail": "/thumbnails/proj-motion-ghraphic-1_lnpWF6.jpg"
  },
  {
    "id": "proj-motion-ghraphic-1Aklrpvy",
    "title": "video_d3336654b9bb",
    "category": "Motion Graphics",
    "categorySlug": "motion-graphics",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/motion-graphics-3.mp4",
    "driveId": "1Aklrpvyaw7i58fgFw141WYQ6RlMoj35S",
    "driveViewUrl": "https://drive.google.com/file/d/1Aklrpvyaw7i58fgFw141WYQ6RlMoj35S/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1Aklrpvyaw7i58fgFw141WYQ6RlMoj35S/preview",
    "description": "Dynamic motion graphic sequence (video_d3336654b9bb) featuring physics easing and composite styling.",
    "featured": false,
    "tags": [
      "After Effects",
      "Kinetic Typography",
      "VFX"
    ],
    "thumbnail": "/thumbnails/proj-motion-ghraphic-1Aklrpvy.jpg"
  },
  {
    "id": "proj-real-estate-reel-1r2JwMuF",
    "title": "Real Estate Reel 01",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1r2JwMuFkJTD6vJQy9rkGDwveIPy6NYyb",
    "driveViewUrl": "https://drive.google.com/file/d/1r2JwMuFkJTD6vJQy9rkGDwveIPy6NYyb/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1r2JwMuFkJTD6vJQy9rkGDwveIPy6NYyb/preview",
    "description": "High-retention real estate walkthrough reel (01) with architectural pacing and motion.",
    "featured": true,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1r2JwMuF.jpg"
  },
  {
    "id": "proj-real-estate-reel-1ke7szzw",
    "title": "Real Estate Reel 02",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1ke7szzwd8LR-_bBbWbp_fUydVzt30ohn",
    "driveViewUrl": "https://drive.google.com/file/d/1ke7szzwd8LR-_bBbWbp_fUydVzt30ohn/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1ke7szzwd8LR-_bBbWbp_fUydVzt30ohn/preview",
    "description": "High-retention real estate walkthrough reel (02) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1ke7szzw.jpg"
  },
  {
    "id": "proj-real-estate-reel-137hYbfJ",
    "title": "Real Estate Reel 03",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "137hYbfJzlceVbV1EW1OPiqAo2MiboAfI",
    "driveViewUrl": "https://drive.google.com/file/d/137hYbfJzlceVbV1EW1OPiqAo2MiboAfI/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/137hYbfJzlceVbV1EW1OPiqAo2MiboAfI/preview",
    "description": "High-retention real estate walkthrough reel (03) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-137hYbfJ.jpg"
  },
  {
    "id": "proj-real-estate-reel-12jWSvHj",
    "title": "2 bhak  Reel",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "12jWSvHjS31hd4UqPGxOQPwSmegYgoI8h",
    "driveViewUrl": "https://drive.google.com/file/d/12jWSvHjS31hd4UqPGxOQPwSmegYgoI8h/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/12jWSvHjS31hd4UqPGxOQPwSmegYgoI8h/preview",
    "description": "High-retention real estate walkthrough reel (2 bhak  Reel) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-12jWSvHj.jpg"
  },
  {
    "id": "proj-real-estate-reel-1CbP0Rda",
    "title": "3 bhak new 1",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1CbP0Rda4ctCsQ9GaCBX6VIv4q8WRBtzH",
    "driveViewUrl": "https://drive.google.com/file/d/1CbP0Rda4ctCsQ9GaCBX6VIv4q8WRBtzH/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1CbP0Rda4ctCsQ9GaCBX6VIv4q8WRBtzH/preview",
    "description": "High-retention real estate walkthrough reel (3 bhak new 1) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1CbP0Rda.jpg"
  },
  {
    "id": "proj-real-estate-reel-1y2Wceuj",
    "title": "Real Estate Reel 01",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1y2WceujVDRe_-N-oFJE77ujQsndikjgs",
    "driveViewUrl": "https://drive.google.com/file/d/1y2WceujVDRe_-N-oFJE77ujQsndikjgs/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1y2WceujVDRe_-N-oFJE77ujQsndikjgs/preview",
    "description": "High-retention real estate walkthrough reel (Reel 01) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1y2Wceuj.jpg"
  },
  {
    "id": "proj-real-estate-reel-1XS_wn0w",
    "title": "Real Estate Reel 02",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1XS_wn0wpABlJQnifKiiLC4JnCeSUDokp",
    "driveViewUrl": "https://drive.google.com/file/d/1XS_wn0wpABlJQnifKiiLC4JnCeSUDokp/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1XS_wn0wpABlJQnifKiiLC4JnCeSUDokp/preview",
    "description": "High-retention real estate walkthrough reel (Reel 02) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1XS_wn0w.jpg"
  },
  {
    "id": "proj-real-estate-reel-1VW4Q4Co",
    "title": "Real Estate Reel 03",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1VW4Q4CoUCTwkHKX1t8lhxtLYvsrAgMPn",
    "driveViewUrl": "https://drive.google.com/file/d/1VW4Q4CoUCTwkHKX1t8lhxtLYvsrAgMPn/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1VW4Q4CoUCTwkHKX1t8lhxtLYvsrAgMPn/preview",
    "description": "High-retention real estate walkthrough reel (Reel 03) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1VW4Q4Co.jpg"
  },
  {
    "id": "proj-real-estate-reel-18Uq-ts5",
    "title": "Reel new 01",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "18Uq-ts5z7hDnEaZ-PR__F29BVvJXmekZ",
    "driveViewUrl": "https://drive.google.com/file/d/18Uq-ts5z7hDnEaZ-PR__F29BVvJXmekZ/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/18Uq-ts5z7hDnEaZ-PR__F29BVvJXmekZ/preview",
    "description": "High-retention real estate walkthrough reel (Reel new 01) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-18Uq-ts5.jpg"
  },
  {
    "id": "proj-real-estate-reel-1ccBhI9h",
    "title": "Rightland event Reel",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1ccBhI9hJO6KQGSzO6Br4PsYrcQvNhW2_",
    "driveViewUrl": "https://drive.google.com/file/d/1ccBhI9hJO6KQGSzO6Br4PsYrcQvNhW2_/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1ccBhI9hJO6KQGSzO6Br4PsYrcQvNhW2_/preview",
    "description": "High-retention real estate walkthrough reel (Rightland event Reel) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1ccBhI9h.jpg"
  },
  {
    "id": "proj-real-estate-reel-1QDcYXHe",
    "title": "Rightland new Reel",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "format": "9:16 Vertical Reel",
    "aspectRatio": "9/16",
    "videoSrc": "/videos/real-estate.mp4",
    "driveId": "1QDcYXHeQAwO03_NslA45Jzzsz4o4xv6g",
    "driveViewUrl": "https://drive.google.com/file/d/1QDcYXHeQAwO03_NslA45Jzzsz4o4xv6g/view?usp=sharing",
    "drivePreviewEmbedUrl": "https://drive.google.com/file/d/1QDcYXHeQAwO03_NslA45Jzzsz4o4xv6g/preview",
    "description": "High-retention real estate walkthrough reel (Rightland new Reel) with architectural pacing and motion.",
    "featured": false,
    "tags": [
      "Real Estate",
      "Property Tour",
      "Speedramp"
    ],
    "thumbnail": "/thumbnails/proj-real-estate-reel-1QDcYXHe.jpg"
  }
];
