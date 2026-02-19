"use client";

import { useState } from "react";
import Image from "next/image";
import StudioTriptych from "../components/StudioTriptych";
import FounderSection from "../components/FounderSection";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
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

      {/* Animated Section */}
      <AnimatedSection
        isOpen={isAnimatedSectionOpen}
        onClose={() => setIsAnimatedSectionOpen(false)}
      />
      {/* Hero Section - FIND YOUR ODD */}
      <section className="w-full bg-white min-h-screen flex items-center">
        <div className="w-full py-24 md:py-28 px-[150px]">
          <h1 className="text-[72px] md:text-[96px] font-medium uppercase tracking-tight mb-8 leading-[1.1]">
            FIND YOUR ODD
          </h1>
          <p className="text-[42px] leading-[1.25] text-black w-full">
            Oddpartikle is an independent design and technology studio with a clear purpose: to craft communication that builds authentic, meaningful connections.
          </p>
        </div>
      </section>

      {/* Studio Triptych Section with Auto-Scroll */}
      <StudioTriptych />

      {/* Our Founder Section */}
      <FounderSection />

      {/* About Oddpartikle Section */}
      <section className="w-full bg-white py-24 md:py-28 px-[150px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-[42px] md:text-[48px] font-medium uppercase tracking-tight leading-[1.1]">
              About Oddpartikle
            </h2>
          </div>
          
          {/* Right side - Content paragraphs */}
          <div className="flex flex-col gap-6">
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-black">
              Our philosophy is rooted in minimalism, stripping away the unnecessary to highlight what truly matters. This approach allows us to craft bold, innovative, and timeless solutions that are both visually striking and strategically effective.
            </p>
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-black">
              Whether it's designing a brand identity, producing a motion piece, or building a full digital experience, we approach every project with the same focus: clarity, creativity, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Bottom Image Section */}
      <section className="relative w-full bg-white flex items-center py-24 md:py-28 px-[150px]">
        <div className="w-full relative" style={{ aspectRatio: '16/9', minHeight: '600px' }}>
          <Image
            src="/aboutusbottom.png"
            alt="About Us"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </section>

      {/* Our Services Section */}
      <OurServicesSection />

      {/* Let's Find Your Odd Section */}
      <section className="w-full bg-white py-24 md:py-28 px-[150px]">
        <div className="w-full flex flex-col items-center">
          {/* Top Line */}
          <div className="w-full h-px bg-gray-600 mb-12 md:mb-16" />
          
          {/* Centered Text */}
          <h2 className="text-[32px] md:text-[42px] font-medium text-black text-center">
            Let's Find Your Odd
          </h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-white pt-16 md:pt-20 pb-8 md:pb-12 px-[150px] border-t border-black">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
          {/* Left Side - Navigation Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-black hover:opacity-70 text-sm md:text-base">
                Home
              </a>
              <a href="/work" className="text-black hover:opacity-70 text-sm md:text-base">
                Work
              </a>
              <a href="/about" className="text-black hover:opacity-70 text-sm md:text-base">
                About
              </a>
              <a href="/career" className="text-black hover:opacity-70 text-sm md:text-base">
                Career
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/contact" className="text-black hover:opacity-70 text-sm md:text-base">
                Contact
              </a>
              <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                LinkedIn
              </a>
              <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                Instagram
              </a>
            </div>
          </div>
          {/* Right Side - Logo */}
          <Image
            src="/Oddpartikle_logo.svg"
            alt="Oddpartikle Logo"
            width={246}
            height={41}
            className="h-8 w-auto"
          />
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-24 md:mt-32 pb-4 md:pb-6">
          <p className="text-black text-sm md:text-base font-normal">
            ©Oddpartikle
          </p>
        </div>
      </footer>
    </main>
  );
}

function OurServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      description: "Brand is no longer a static entity. For us, brands are living and breathing organisms. And it should always interact and empathise with people. Oddpartikle was founded on a simple belief — that people connect with people, not perfection. And it's our oddness that makes those connections real.",
      items: [
        "Brand Naming",
        "Core Belief, Vision & Values",
        "Brand Strategy and Positioning",
        "Go-To-Market",
        "Brand Architecture",
        "Brand Audit",
      ],
    },
    {
      id: "brand-design",
      title: "Brand Design",
      description: "Design is how belief takes shape. It's where thought meets feeling — and where your brand begins to breathe. We craft visual systems that carry your story with timeless simplicity, building recognition, emotion, and trust across every touchpoint.",
      items: [
        "Brand Identity Design",
        "Brand Guidelines Document",
        "Packaging Design",
        "Type Design",
        "Illustration",
      ],
    },
    {
      id: "communication",
      title: "Communication",
      description: "Communication is where brands find their voice. We don't just create campaigns; we create conversations — ideas that move people because they feel something true. From storytelling to strategy, every message is crafted to connect, inspire, and stay remembered.",
      items: [
        "Comms Strategy and Planning",
        "Product Launch Campaigns",
        "Employee Communication",
        "Digital Strategy & Campaigns",
        "Activation and Ambient",
      ],
    },
    {
      id: "digital",
      title: "Digital",
      description: "In the digital world, connection happens in seconds — or not at all. We build experiences that are intuitive, intelligent, and human, ensuring your brand doesn't just show up online but shows up meaningfully. Every click, every scroll, every interaction — crafted with intent.",
      items: [
        "Website and Application Experience",
        "Social Media Marketing",
        "Search Engine Optimization",
        "Platform Management",
        "Influencer Marketing",
      ],
    },
    {
      id: "films",
      title: "Films",
      description: "We believe stories have the power to change how people see the world. Through films, we turn brand truths into emotion — blending craft, storytelling, and technology to create moments that move hearts, spark thought, and leave a quiet, lasting impression.",
      items: [
        "Script and Storyboarding",
        "Commercial Product Films",
        "Brand and Corporate Films",
        "3d Content Creation",
        "Motion Design",
        "AI Video creation",
      ],
    },
  ];

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-24 md:py-28 px-[150px]">
      {/* Header */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start mb-16 md:mb-20">
        {/* Left side - Title */}
        <div>
          <h2 className="text-[24px] md:text-[28px] font-medium text-black">
            Our Services
          </h2>
        </div>
        
        {/* Right side - Description */}
        <div>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-black">
            We specialize in solving complex design challenges, working seamlessly across platforms to deliver consistent and compelling brand experiences.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="w-full flex flex-col gap-0">
        {services.map((service, index) => (
          <div key={service.id} className="w-full">
            {/* Service Item */}
            <div className="w-full flex items-center justify-between py-6 md:py-8">
              {/* Service Title */}
              <h3 
                className={`text-[42px] md:text-[48px] font-medium transition-colors ${
                  expandedService === service.id ? 'text-[#B89F6F]' : 'text-black'
                }`}
              >
                {service.title}
              </h3>
              
              {/* Expand Button */}
              <button
                onClick={() => toggleService(service.id)}
                className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-all cursor-large ${
                  expandedService === service.id ? 'bg-[#B89F6F]' : 'bg-black'
                }`}
                aria-label={`${expandedService === service.id ? 'Collapse' : 'Expand'} ${service.title}`}
              >
                <span className="text-white text-xl md:text-2xl font-light">
                  {expandedService === service.id ? '−' : '+'}
                </span>
              </button>
            </div>
            
            {/* Horizontal Separator */}
            <div className="w-full h-px bg-gray-400" />
            
            {/* Expanded Content */}
            {expandedService === service.id && (
              <div className="py-6 md:py-8 space-y-6">
                {/* Description */}
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-black">
                  {service.description}
                </p>
                
                {/* List Items */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-[16px] md:text-[18px] leading-[1.6] text-black"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

