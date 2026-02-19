"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AnimatedSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnimatedSection({ isOpen, onClose }: AnimatedSectionProps) {
  const router = useRouter();
  const [showCircle, setShowCircle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [scale, setScale] = useState(1);

  const handleLinkClick = (path: string) => {
    onClose();
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

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
    <div className="fixed inset-0 z-[102] overflow-hidden">
      {/* Content Section - appears immediately */}
      {showContent && (
        <div className="relative z-30 w-full h-full flex items-center justify-center bg-black">
          {/* Close button - centered on the black dot center point */}
          <button
            onClick={onClose}
            className="fixed z-[103] hover:opacity-70 transition-opacity"
            style={{ 
              right: '120px', 
              top: '106px',
            }}
            aria-label="Close animated section"
          >
            <Image 
              src="/Close_dots.svg" 
              alt="Close" 
              width={43} 
              height={43}
              className="block"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </button>
          <div className="relative w-full max-w-4xl px-[75px] py-0">
            {/* Main Text */}
            <p className="text-[28px] leading-[1.4] md:text-[40px] md:leading-tight text-[#1a1a1a]">
              It started with a{" "}
              <button
                onClick={() => handleLinkClick("/#thought")}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                thought
              </button>{" "}
              — what if we did things differently? One idea led to another, and our{" "}
              <button
                onClick={() => handleLinkClick("/#work")}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                work
              </button>{" "}
              began to take shape. Along the way, we asked deeper questions{" "}
              <button
                onClick={() => handleLinkClick("/about")}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                about
              </button>{" "}
              why we create — questions that led to meaningful{" "}
              <button
                onClick={() => handleLinkClick("/#contact")}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                contact
              </button>{" "}
              with those who shared the vision, and a sense of purpose in a{" "}
              <button
                onClick={() => handleLinkClick("/#career")}
                className="text-white font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                career
              </button>{" "}
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

