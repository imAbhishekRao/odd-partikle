"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function WorkSection() {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        const parallaxOffset = scrollProgress * 50; // Adjust the multiplier for parallax intensity
        
        if (scrollProgress > 0 && scrollProgress < 1.5) {
          svgRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden pb-0">
      {/* Grey background container - limited height */}
      <div className="absolute inset-0 bg-zinc-100" style={{ height: 'calc(100% - 50px)' }}></div>
      
      <div className="ml-[150px] mr-[150px] pt-24 pb-0 w-[calc(100%-300px)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-0">
          {/* Left text block with stepped indentation */}
          <div className="space-y-0.5 text-black text-xl md:text-2xl font-normal">
            <div>We</div>
            <div className="pl-6">design</div>
            <div className="pl-12">brands that</div>
            <div className="pl-16">shape</div>
            <div className="pl-20">environments</div>
            <div className="pl-24">and influence</div>
            <div className="pl-28">culture.</div>
          </div>

          {/* Right gray rectangle */}
          <div className="w-full aspect-square bg-zinc-300 max-w-md ml-auto" />
        </div>
      </div>

      {/* Work SVG below text and box - with parallax and bottom crop, full width */}
      <div 
        ref={svgRef}
        className="w-full overflow-hidden mb-0 pb-0 mt-8 relative z-10"
        style={{ clipPath: "inset(0 0 18% 0)" }}
      >
        <Image
          src="/work.svg"
          alt="WORK"
          width={1886}
          height={1000}
          priority={false}
          className="w-full h-auto select-none pointer-events-none"
        />
      </div>

      {/* Bottom "WORK" text - very large, faint, white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0">
        <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
          <div className="text-white text-[400px] md:text-[500px] lg:text-[600px] font-bold leading-none opacity-[0.08] whitespace-nowrap -mb-20">
            WORK
          </div>
        </div>
      </div>
    </section>
  );
}

