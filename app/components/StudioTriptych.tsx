"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function StudioTriptych() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasScrolled = useRef(false);

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
            // Normal speed smooth scroll to bring section fully into view
            entry.target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            
            // Reset after scroll completes
            setTimeout(() => {
              hasScrolled.current = false;
            }, 1000);
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
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Option 1: Single triptych image (full width) */}
      <div className="w-full h-screen relative">
        <Image
          src="/studio-triptych.jpg"
          alt="Studio workspace triptych"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Option 2: Three separate images (uncomment if using three images instead) */}
      {/* <div className="w-full h-full flex">
        <div className="flex-1 w-full h-screen relative">
          <Image
            src="/studio-triptych-left.jpg"
            alt="Workstation with bookshelves"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex-1 w-full h-screen relative">
          <Image
            src="/studio-triptych-middle.jpg"
            alt="Interior corner with plant and credenza"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex-1 w-full h-screen relative">
          <Image
            src="/studio-triptych-right.jpg"
            alt="Collaborative session"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </div> */}
    </section>
  );
}

