"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AnimatedSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnimatedSection({ isOpen, onClose }: AnimatedSectionProps) {
  const [showCircle, setShowCircle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Calculate scale needed to cover entire viewport
    const calculateScale = () => {
      const maxDimension = Math.max(window.innerWidth, window.innerHeight);
      // Scale factor to ensure square covers entire viewport (3px * scale should be > maxDimension)
      return Math.ceil(maxDimension / 3) * 2;
    };
    
    setScale(calculateScale());
    
    if (isOpen) {
      // Show content immediately
      setShowContent(true);
      // Start square animation
      setShowCircle(true);
    } else {
      setShowCircle(false);
      setShowContent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Add white circle cursor style when section is open
      const cursorSVG = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8" fill="white"/></svg>');
      const cursorURL = `url('data:image/svg+xml;utf8,${cursorSVG}') 10 10, auto`;
      
      const originalCursor = document.body.style.cursor;
      document.body.style.cursor = cursorURL;
      
      const style = document.createElement("style");
      style.id = "white-cursor-style";
      style.textContent = `
        * {
          cursor: ${cursorURL} !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = originalCursor;
        const existingStyle = document.getElementById("white-cursor-style");
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Content Section - appears immediately */}
      {showContent && (
        <div className="relative z-30 w-full h-full flex items-center justify-center bg-black">
          {/* Close button - same position as open button */}
          <button
            onClick={onClose}
            className="fixed right-[150px] top-[100px] p-4 -m-4 z-40 hover:opacity-70 transition-opacity"
            aria-label="Close animated section"
          >
            <Image 
              src="/Close_dots.svg" 
              alt="Close" 
              width={43} 
              height={43}
              className="block"
            />
          </button>
          <div className="relative w-full max-w-4xl px-6 py-0">
            {/* Main Text */}
            <p className="text-[28px] leading-[1.4] md:text-[40px] md:leading-tight text-zinc-400">
              It started with a{" "}
              <a
                href="#thought"
                onClick={onClose}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                thought
              </a>{" "}
              — what if we did things differently? One idea led to another, and our{" "}
              <a
                href="#work"
                onClick={onClose}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                work
              </a>{" "}
              began to take shape. Along the way, we asked deeper questions{" "}
              <a
                href="#about"
                onClick={onClose}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                about
              </a>{" "}
              why we create — questions that led to meaningful{" "}
              <a
                href="#contact"
                onClick={onClose}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                contact
              </a>{" "}
              with those who shared the vision, and a sense of purpose in a{" "}
              <a
                href="#career"
                onClick={onClose}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                career
              </a>{" "}
              that is always more than just a job.
            </p>
          </div>
        </div>
      )}

      {/* Animated Black Square - expands from click position to fill page */}
      <div
        className="absolute bg-black transition-all duration-1200 ease-out w-3 h-3 z-20"
        style={{
          right: "150px",
          top: "100px",
          transform: showCircle ? `scale(${scale})` : "scale(1)",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}

