import Image from "next/image";

export default function ProjectsGrid() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-24 z-50">
      <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* First Row - Image 1 */}
          <div className="flex-1 mt-5">
            <div className="relative w-full aspect-square max-h-[400px]">
              <Image
                src="/Home Assets-01.svg"
                alt="GD GOENKA"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">GD GOENKA</span> - Thrive. For Life.
            </p>
          </div>

          {/* First Row - Image 2 */}
          <div className="flex-1" style={{ marginTop: 'calc(20px + 300px)' }}>
            <div className="relative w-full aspect-square max-h-[400px]">
              <Image
                src="/Home Assets-02.svg"
                alt="TARC Kailāsa"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">TARC Kailāsa</span> - Patel Road, New Delhi
            </p>
          </div>

          {/* Second Row - Image 3 */}
          <div className="flex-1 -mt-20 md:-mt-24 lg:-mt-32">
            <div className="relative w-full aspect-square max-h-[400px]">
              <Image
                src="/Home Assets-03.svg"
                alt="Project 4"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 4</span>
            </p>
          </div>

          {/* Second Row - Image 4 */}
          <div className="flex-1" style={{ marginTop: 'calc(40px + 300px)', transform: 'translateY(-80px)' }}>
            <div className="relative w-full aspect-square max-h-[400px]">
              <Image
                src="/Home Assets-04.svg"
                alt="Project 5"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 5</span>
            </p>
          </div>

          {/* Third Row - Image 5 */}
          <div className="flex-1 -mt-24 md:-mt-28 lg:-mt-36">
            <div className="relative w-full aspect-square max-h-[400px]">
              <Image
                src="/Home Assets-05.svg"
                alt="Project 6"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 6</span>
            </p>
          </div>

          {/* Third Row - Image 6 */}
          <div className="flex-1 -mt-32 md:-mt-40 lg:-mt-36">
            <div className="relative w-full aspect-square" style={{ maxHeight: '400px' }}>
              <Image
                src="/Home Assets-06.svg"
                alt="Project 7"
                fill
                priority={false}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 7</span>
            </p>
          </div>
        </div>

        {/* View All Projects Section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-[28px] leading-[1.25] text-[#b3b3b3] mb-12 text-left">
            <span className="text-black font-medium">View All Projects</span>
          </h2>
          <div className="w-full border-t border-black"></div>
        </div>
      </div>
    </section>
  );
}

