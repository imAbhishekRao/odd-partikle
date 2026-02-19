import Image from "next/image";

export default function ProjectsGrid() {
  return (
    <section className="relative w-full bg-white py-0 z-50">
      <div className="ml-[75px] mr-[75px] w-[calc(100%-150px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {/* First Row - Image 1 - 0 bottom margin/padding */}
          <div className="flex-1 mt-5 mb-0 pb-0">
            <div className="relative w-full">
              <Image
                src="/Home Assets-01.svg"
                alt="GD GOENKA"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">GD GOENKA</span> - Thrive. For Life.
            </p>
          </div>

          {/* First Row - Image 2 - 0 bottom margin/padding */}
          <div className="flex-1 mt-5 mb-0 pb-0">
            <div className="relative w-full">
              <Image
                src="/Home Assets-02.svg"
                alt="TARC Kailāsa"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">TARC Kailāsa</span> - Patel Road, New Delhi
            </p>
          </div>

          {/* Second Row - Image 3 - 0 top margin/padding */}
          <div className="flex-1 -mt-8">
            <div className="relative w-full">
              <Image
                src="/Home Assets-03.svg"
                alt="Project 4"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 4</span>
            </p>
          </div>

          {/* Second Row - Image 4 - 0 top margin/padding */}
          <div className="flex-1 -mt-8">
            <div className="relative w-full">
              <Image
                src="/Home Assets-04.svg"
                alt="Project 5"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 5</span>
            </p>
          </div>

          {/* Third Row - copy of Project 4 & 5 row */}
          <div className="flex-1 -mt-8">
            <div className="relative w-full">
              <Image
                src="/Home Assets-03.svg"
                alt="Project 6"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 6</span>
            </p>
          </div>

          <div className="flex-1 -mt-8">
            <div className="relative w-full">
              <Image
                src="/Home Assets-04.svg"
                alt="Project 7"
                width={870}
                height={695}
                priority={false}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 7</span>
            </p>
          </div>

        </div>

        {/* View All Projects Section */}
        <div className="mt-16 md:mt-20 text-center">
          <h2 className="text-[28px] leading-[1.25] text-[#b3b3b3] mb-12">
            <span className="text-black font-medium">View All Projects</span>
          </h2>
          <div className="w-full border-t border-black"></div>
        </div>
      </div>
    </section>
  );
}

