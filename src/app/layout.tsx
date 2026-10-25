import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhijeetsingh.portfolio"),
  title: "Abhijeet Singh | Video Editor & Creative Visual Storyteller",
  description:
    "Explore the cinematic wedding films, social media edits, brand videos, motion graphics, and creative video editing work of Abhijeet Singh.",
  keywords: [
    "Abhijeet Singh",
    "Video Editor",
    "Cinematic Wedding Films",
    "Instagram Reels",
    "YouTube Shorts",
    "Social Media Editor",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Motion Graphics",
    "Color Grading",
    "Freelance Video Editor India",
  ],
  authors: [{ name: "Abhijeet Singh" }],
  creator: "Abhijeet Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijeetsingh.portfolio",
    title: "Abhijeet Singh | Video Editor & Creative Visual Storyteller",
    description:
      "Explore the cinematic wedding films, social media edits, brand videos, motion graphics, and creative video editing work of Abhijeet Singh.",
    siteName: "Abhijeet Singh Portfolio",
    images: [
      {
        url: "/images/creator-stabilizer.jpg",
        width: 1125,
        height: 2000,
        alt: "Abhijeet Singh — Video Editor & Creative Visual Storyteller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Singh | Video Editor & Creative Visual Storyteller",
    description:
      "Explore the cinematic wedding films, social media edits, brand videos, motion graphics, and creative video editing work of Abhijeet Singh.",
    images: ["/images/creator-stabilizer.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#080808] text-[#F5F3EF] antialiased selection:bg-[#C6FF3D] selection:text-[#080808] relative min-h-screen`}
      >
        <div className="fixed inset-0 pointer-events-none z-50 film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
