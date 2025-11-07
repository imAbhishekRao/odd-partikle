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
    <main className="bg-white text-black font-sans">
      <Intro onBlackDotClick={() => setIsAnimatedSectionOpen(true)} />
      <WorkSection />
      <WorkSvg />
      <ProjectsGrid />
      <Services />
      <ImageCollage />
      
      {/* Footer Copyright */}
      <footer className="w-full bg-white py-6 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-zinc-600 text-xs md:text-sm text-center">
            ©Oddpartikle
          </p>
        </div>
      </footer>

      {/* Animated Section */}
      <AnimatedSection
        isOpen={isAnimatedSectionOpen}
        onClose={() => setIsAnimatedSectionOpen(false)}
      />
    </main>
  );
}
