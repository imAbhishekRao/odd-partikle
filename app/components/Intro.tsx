"use client";

interface IntroProps {
  onBlackDotClick: () => void;
}

export default function Intro({ onBlackDotClick }: IntroProps) {
  return (
    <section className="relative w-full bg-white min-h-screen flex items-center">
      <div className="py-24 md:py-28 ml-[200px] mr-[200px] w-full">
        <p className="text-[28px] leading-[1.25] md:text-[40px] md:leading-tight text-zinc-400 max-w-4xl">
          <span className="text-black font-semibold">Oddpartikle</span>{" "}
          is an independent design and technology studio with a clear purpose: to
          craft communication that builds authentic and meaningful connections with
          people.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex text-sm text-zinc-500 hover:text-black font-medium"
        >
          The black dot ↗
        </a>
      </div>

      {/* top-right black dot - clickable with larger cursor area */}
      <button
        onClick={onBlackDotClick}
        className="absolute right-[200px] top-[100px] p-4 -m-4 cursor-large"
        aria-label="Open animated section"
      >
        <span className="h-3 w-3 rounded-full bg-black hover:opacity-70 transition-opacity block" />
      </button>
    </section>
  );
}


