import Image from "next/image";

export default function ImageCollage() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
        {/* Images Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-12 md:mb-16">
          {/* Portrait image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/Project Cover 800x600-01.jpg"
                alt="Project 1"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Landscape image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/Project Cover 800x600-02.jpg"
                alt="Project 2"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Portrait image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/Project Cover 800x600-03.jpg"
                alt="Project 3"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Landscape image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/Project Cover 800x600-04.jpg"
                alt="Project 4"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Portrait image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/Project Cover 800x600-05.jpg"
                alt="Project 5"
                width={800}
                height={600}
                priority={false}
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Introductory Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-zinc-600 text-lg md:text-xl max-w-3xl mx-auto">
            By digging deep, asking the right questions, and aligning on what truly matters, we offer a glimpse into our collaborative discovery sessions with the leadership teams at TARC and GD Goenka.
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's Find Your Odd
          </h2>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-zinc-300">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Side - Navigation Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  Home
                </a>
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  Work
                </a>
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  About
                </a>
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  Career
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  Contact
                </a>
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  LinkedIn
                </a>
                <a href="#" className="text-zinc-600 hover:text-black text-sm md:text-base">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Logo */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-zinc-600 text-xs md:text-sm">
              ©Oddpartikle
            </p>
            <p className="text-zinc-600 text-sm md:text-base font-normal">
              oddpartikle
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

