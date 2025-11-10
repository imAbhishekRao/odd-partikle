"use client";

import { useEffect, useRef } from "react";

interface IntroProps {
  onBlackDotClick: () => void;
}

export default function Intro({ onBlackDotClick }: IntroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && dotRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Parallax effect - content moves slower than scroll
        const parallaxOffset = scrollY * 0.3; // Slower movement
        contentRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        
        // Dot moves even slower for depth effect
        const dotOffset = scrollY * 0.2;
        dotRef.current.style.transform = `translateY(${dotOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-0 w-full bg-white min-h-screen flex items-center z-40 overflow-hidden">
      <div ref={contentRef} className="py-24 md:py-28 ml-[150px] mr-[150px] w-[calc(100%-300px)] transition-transform duration-75 ease-out">
        <p className="text-[42px] leading-[1.25] text-[#b3b3b3] ">
          <span className="text-black font-medium">Oddpartikle</span>{" "}is an independent design and technology studio with a clear purpose: to craft communication that builds authentic and meaningful connections with people.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex text-[24px] text-black hover:text-black font-medium"
        >
          The black dot ↗
        </a>
      </div>

      {/* top-right black dot - clickable with larger cursor area */}
      <button
        ref={dotRef}
        onClick={onBlackDotClick}
        className="absolute right-[150px] top-[100px] p-4 -m-4 cursor-large transition-transform duration-75 ease-out"
        aria-label="Open animated section"
      >
        <span className="h-3 w-3 rounded-full bg-black hover:opacity-70 transition-opacity block" />
      </button>
    </section>
  );
}


