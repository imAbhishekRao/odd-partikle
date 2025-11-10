import Image from "next/image";

export default function ProjectsGrid() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-24 z-50">
      <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Row - Image 1 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-02.jpg"
                alt="GD GOENKA"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">GD GOENKA</span> - Thrive. For Life.
            </p>
          </div>

          {/* First Row - Image 2 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-03.jpg"
                alt="TARC Kailāsa"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">TARC Kailāsa</span> - Patel Road, New Delhi
            </p>
          </div>

          {/* Second Row - Image 3 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-04.jpg"
                alt="Project 4"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 4</span>
            </p>
          </div>

          {/* Second Row - Image 4 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-05.jpg"
                alt="Project 5"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 5</span>
            </p>
          </div>

          {/* Third Row - Image 5 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-06.jpg"
                alt="Project 6"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 6</span>
            </p>
          </div>

          {/* Third Row - Image 6 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-07.jpg"
                alt="Project 7"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 7</span>
            </p>
          </div>

          {/* Fourth Row - Image 7 */}
          <div className="flex-1">
            <div className="relative w-full aspect-square max-h-[600px]">
              <Image
                src="/Project Cover 800x600-08.jpg"
                alt="Project 8"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <p className="mt-6 text-[42px] leading-[1.25] text-[#b3b3b3] text-left">
              <span className="text-black font-medium">Project 8</span>
            </p>
          </div>
        </div>

        {/* View All Projects Section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-[42px] leading-[1.25] text-[#b3b3b3] mb-12 text-left">
            <span className="text-black font-medium">View All Projects</span>
          </h2>
          <div className="w-full border-t border-black"></div>
        </div>
      </div>
    </section>
  );
}

