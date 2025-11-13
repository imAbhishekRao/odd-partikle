"use client";

import { useEffect, useState, useRef } from "react";

interface IntroProps {
  onBlackDotClick: () => void;
}

export default function Intro({ onBlackDotClick }: IntroProps) {
  const [isRelative, setIsRelative] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // When scroll position passes the section's height, make it relative
      // This allows it to stick until the second section scrolls past
      if (scrollPosition >= sectionHeight) {
        setIsRelative(true);
      } else {
        setIsRelative(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${isRelative ? "relative" : "sticky top-0"} w-full bg-white min-h-screen flex items-center z-40`}
    >
      <div className="py-24 md:py-28 ml-[150px] mr-[150px] w-[calc(100%-300px)]">
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
        onClick={onBlackDotClick}
        className="absolute right-[150px] top-[100px] p-4 -m-4 cursor-large"
        aria-label="Open animated section"
      >
        <span className="h-3 w-3 rounded-full bg-black hover:opacity-70 transition-opacity block" />
      </button>
    </section>
  );
}


