"use client";

import { useState } from "react";
import Intro from "./components/Intro";
import WorkSection from "./components/WorkSection";
import WorkSvg from "./components/WorkSvg";
import ProjectsGrid from "./components/ProjectsGrid";
import Services from "./components/Services";
import ImageCollage from "./components/ImageCollage";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  const [isAnimatedSectionOpen, setIsAnimatedSectionOpen] = useState(false);

  return (
    <main className="bg-white text-black font-sans relative">
      {/* Fixed Black Dot */}
      <button
        onClick={() => setIsAnimatedSectionOpen(true)}
        className="fixed right-[150px] top-[100px] p-4 -m-4 cursor-large z-[100]"
        aria-label="Open animated section"
      >
        <span className="h-3 w-3 rounded-full bg-black hover:opacity-70 transition-opacity block" />
      </button>

      <Intro onBlackDotClick={() => setIsAnimatedSectionOpen(true)} />
      <WorkSection />
      <WorkSvg />
      <ProjectsGrid />
      <Services />
      <ImageCollage />
      

      {/* Animated Section */}
      <AnimatedSection
        isOpen={isAnimatedSectionOpen}
        onClose={() => setIsAnimatedSectionOpen(false)}
      />
    </main>
  );
}
