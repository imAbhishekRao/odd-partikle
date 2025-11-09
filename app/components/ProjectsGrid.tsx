import Image from "next/image";

export default function ProjectsGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              GD GOENKA - Thrive. For Life.
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              TARC Kailāsa - Patel Road, New Delhi
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              Project 4
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              Project 5
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              Project 6
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              Project 7
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
            <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
              Project 8
            </p>
          </div>
        </div>

        {/* View All Projects Section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-12 text-left">
            View All Projects
          </h2>
          <div className="w-full border-t border-black"></div>
        </div>
      </div>
    </section>
  );
}

