import Image from "next/image";

export default function ImageCollage() {
  return (
    <section className="relative w-full pt-0 pb-0 z-50 -mt-[1px] bg-white">
      <div className="ml-[75px] mr-[75px] w-[calc(100%-150px)]">
        {/* Images Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-12 md:mb-16">
          {/* Landscape image */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/Home Assets-07.jpg"
                alt="Home Asset 1"
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
                src="/Home Assets-08.jpg"
                alt="Home Asset 2"
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
                src="/Home Assets-09 (1).jpg"
                alt="Home Asset 3"
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
                src="/Home Assets-10.jpg"
                alt="Home Asset 4"
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
                src="/Home Assets-11.jpg"
                alt="Home Asset 5"
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
          <p className="text-[18px] leading-[1.6] text-black max-w-4xl mx-auto">
            A sneak peek into our collaborative discovery sessions with our clients' leadership teams.
          </p>
        </div>

        {/* Grey section starts from Let's Find Your Odd */}
        <div className="bg-[#e1e2dc] -mx-[75px] px-[75px] pt-16 md:pt-20 pb-8 md:pb-10">
          {/* Main Heading */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-[42px] leading-[1.25] text-[#b3b3b3]">
              <span className="text-black font-medium">Let's Find Your Odd</span>
            </h2>
          </div>

          {/* Footer Section */}
          <footer className="pt-4 border-t border-black">
            <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
            {/* Left Side - Navigation Links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-32">
              <div className="flex flex-col gap-2">
                <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                  Home
                </a>
                <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                  Work
                </a>
                <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                  About
                </a>
                <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
                  Career
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-black hover:opacity-70 text-sm md:text-base">
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
            {/* Right Side - Logo - same right margin as site content */}
            <div className="flex justify-end">
              <Image
                src="/Oddpartikle_logo.svg"
                alt="Oddpartikle Logo"
                width={246}
                height={41}
                className="h-8 w-auto"
              />
            </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="mt-24 md:mt-32 pb-4 md:pb-6">
              <p className="text-black text-sm md:text-base font-normal">
                ©Oddpartikle
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

