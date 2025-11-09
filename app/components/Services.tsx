export default function Services() {
  return (
    <section className="relative w-full bg-white py-24 md:py-28">
      <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
        <div className="max-w-4xl">
          <p className="text-[24px] leading-[1.25] md:text-[32px] md:leading-tight text-zinc-400">
            We help you to{" "}
            <span className="text-black font-semibold">
              design, build and launch
            </span>{" "}
            your project.
          </p>
          <p className="text-[24px] leading-[1.25] md:text-[32px] md:leading-tight text-zinc-400 mt-4">
            From{" "}
            <span className="text-black font-semibold">
              strategy and design to development and delivery,
            </span>
          </p>
          <p className="text-[24px] leading-[1.25] md:text-[32px] md:leading-tight text-zinc-400 mt-4">
            we're here to guide you.
          </p>
        </div>

        {/* Bullet Points - Full Width */}
        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full">
          <li className="flex items-start">
            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-lg md:text-xl text-black">
              Brand Strategy
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-lg md:text-xl text-black">
              Brand Design Systems
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-lg md:text-xl text-black">
              Brand Engagement
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
            <span className="text-lg md:text-xl text-black">
              Brand Effectiveness
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

