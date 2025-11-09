"use client";

import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnimatedSection({ isOpen, onClose }: AnimatedSectionProps) {
  const [showCircle, setShowCircle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowCircle(true);
      // After circle animation completes, show content
      setTimeout(() => {
        setShowContent(true);
      }, 800);
    } else {
      setShowCircle(false);
      setShowContent(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Animated Black Circle - starts from top right where the dot is */}
      <div
        className={`absolute rounded-full bg-black transition-all duration-700 ease-out ${
          showCircle
            ? "w-[200vw] h-[200vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "w-3 h-3 top-[100px] right-[150px]"
        }`}
      />

      {/* Content Section */}
      {showContent && (
        <div className="relative z-10 w-full h-full flex items-center justify-center bg-zinc-50">
          <div className="relative w-full max-w-4xl px-6 py-24">
            {/* Three dots icon in top right */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity z-20"
            >
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <span className="w-1 h-1 rounded-full bg-black"></span>
            </button>

            {/* Main Text */}
            <p className="text-[28px] leading-[1.4] md:text-[40px] md:leading-tight text-zinc-400">
              It started with a{" "}
              <a
                href="#thought"
                onClick={onClose}
                className="text-black font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                thought
              </a>{" "}
              — what if we did things differently? One idea led to another, and our{" "}
              <a
                href="#work"
                onClick={onClose}
                className="text-black font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                work
              </a>{" "}
              began to take shape. Along the way, we asked deeper questions{" "}
              <a
                href="#about"
                onClick={onClose}
                className="text-black font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                about
              </a>{" "}
              why we create — questions that led to meaningful{" "}
              <a
                href="#contact"
                onClick={onClose}
                className="text-black font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                contact
              </a>{" "}
              with those who shared the vision, and a sense of purpose in a{" "}
              <a
                href="#career"
                onClick={onClose}
                className="text-black font-semibold underline hover:opacity-70 transition-opacity cursor-pointer"
              >
                career
              </a>{" "}
              that is always more than just a job.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

