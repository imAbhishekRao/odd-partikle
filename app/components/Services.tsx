export default function Services() {
  return (
    <section className="relative w-full bg-white py-24 md:py-28 z-50">
      <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
        <p className="text-[42px] leading-[1.25] text-[#b3b3b3]">
          We help you to{" "}
          <span className="text-black font-medium">
            design, build and launch
          </span>{" "}
          your project.
          <br />
          From{" "}
          <span className="text-black font-medium">
            strategy and design to development and delivery,
          </span>
          <br />
          we're here to guide you.
        </p>

        {/* Bullet Points - Full Width */}
        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full">
          <li className="flex items-center">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-[24px] text-black font-medium">Brand Strategy</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-[24px] text-black font-medium">Brand Design</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-[24px] text-black font-medium">Brand Engagement</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-[24px] text-black font-medium">Brand Effectiveness</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

