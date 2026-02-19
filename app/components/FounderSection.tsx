"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="w-full px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 items-start">
          {/* Left Column - Founder Info */}
          <div className="md:col-span-1">
            <h2 className="text-[32px] md:text-[42px] font-medium mb-8 text-black">
              Our Founder
            </h2>
            
            {/* Profile Picture */}
            <div className="relative w-full aspect-square mb-6">
              <Image
                src="/founder-profile.jpg"
                alt="Bhartendu Sharma"
                fill
                className="object-cover rounded-none"
                priority={false}
              />
            </div>
            
            {/* Founder Name and Title */}
            <div className="space-y-1">
              <p className="text-[18px] md:text-[20px] font-medium text-black">
                Bhartendu Sharma
              </p>
              <p className="text-[16px] md:text-[18px] text-black">
                Founder, Oddpartikle
              </p>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="md:col-span-3 space-y-8">
            <p className="text-[42px] leading-[1.25] text-black font-bold">
              Brand is no longer a static entity. For us, brands are living and breathing organisms. And it should always interact and empathise with people.
            </p>
            
            <p className="text-[42px] leading-[1.25] text-black font-bold">
              Oddpartikle was founded on a simple belief — that people connect with people, not perfection. And it's our oddness that makes those connections real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


