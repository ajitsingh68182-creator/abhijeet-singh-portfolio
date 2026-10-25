import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Showreel from "@/components/Showreel";
import Services from "@/components/Services";
import CreativeProcess from "@/components/CreativeProcess";
import Toolkit from "@/components/Toolkit";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F5F3EF] relative selection:bg-[#C6FF3D] selection:text-[#080808]">
      {/* Intro Loader */}
      <CinematicLoader />

      {/* Progress & Custom Cursor */}
      <ScrollProgress />
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <FeaturedProjects />
      <Showreel />
      <Services />
      <CreativeProcess />
      <Toolkit />
      <ExperienceTimeline />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </main>
  );
}
