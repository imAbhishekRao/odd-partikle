"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function WorkSection() {
  const svgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasScrolled = useRef(false);

  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - sectionRect.top) / window.innerHeight;
        
        // Use same scroll progress for all elements so they move together
        if (scrollProgress > 0 && scrollProgress < 1.5) {
          // SVG parallax - moves at same pace as section
          if (svgRef.current) {
            const parallaxOffset = scrollProgress * 50;
            svgRef.current.style.transform = `translateY(${parallaxOffset}px)`;
          }

          // Text parallax - moves up slower
          if (textRef.current && scrollProgress > 0 && scrollProgress < 1) {
            const textOffset = scrollProgress * -30;
            textRef.current.style.transform = `translateY(${textOffset}px)`;
          }

          // Video parallax - moves down slower
          if (videoRef.current && scrollProgress > 0 && scrollProgress < 1) {
            const videoOffset = scrollProgress * 20;
            videoRef.current.style.transform = `translateY(${videoOffset}px)`;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If section is partially visible (more than 10% but less than 100%)
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > 0.1 &&
            entry.intersectionRatio < 0.95 &&
            !hasScrolled.current
          ) {
            hasScrolled.current = true;
            
            // Smooth scroll animation
            const targetPosition = entry.target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 800; // 0.8 seconds for faster animation
            let startTime: number | null = null;

            const easeInOutCubic = (t: number): number => {
              return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const animateScroll = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);
              const easedProgress = easeInOutCubic(progress);

              window.scrollTo(0, startPosition + distance * easedProgress);

              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              } else {
                // Reset after scroll completes
                setTimeout(() => {
                  hasScrolled.current = false;
                }, 500);
              }
            };

            requestAnimationFrame(animateScroll);
          }
        });
      },
      {
        threshold: [0.1, 0.95],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden pb-0 -mb-9 z-50 bg-zinc-100">
      {/* Grey background container - covers both content and SVG */}
      <div className="absolute inset-0 bg-zinc-100"></div>
      
      <div className="relative z-10">
        <div className="ml-[150px] mr-[150px] pt-24 pb-0 w-[calc(100%-300px)] mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-0 pb-0">
            {/* Left text block with stepped indentation */}
            <div ref={textRef} className="space-y-0.5 text-black text-[42px] leading-[1.25] font-normal transition-transform duration-75 ease-out">
              <div className="pl-12">We</div>
              <div className="pl-4">design</div>
              <div>brands that</div>
              <div className="pl-12">shape</div>
              <div className="pl-20">environments</div>
              <div className="pl-28">and influence</div>
              <div className="pl-36">culture.</div>
            </div>

            {/* Right video */}
            <div ref={videoRef} className="w-full aspect-square max-w-md ml-auto overflow-hidden transition-transform duration-75 ease-out">
              <video
                src="/worksectionvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Work SVG below text and box - with parallax and bottom crop, full width */}
        <div 
          ref={svgRef}
          className="w-full overflow-hidden mb-0 pb-0 mt-0 relative"
          style={{ clipPath: "inset(0 0 25% 0)", marginTop: "-1px" }}
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

