export default function WorkSection() {
  return (
    <section className="relative w-full bg-zinc-100 min-h-screen flex items-center overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left text block with stepped indentation */}
        <div className="space-y-0.5 text-black text-xl md:text-2xl font-normal">
          <div>We</div>
          <div className="pl-6">design</div>
          <div className="pl-12">brands that</div>
          <div className="pl-16">shape</div>
          <div className="pl-20">environments</div>
          <div className="pl-24">and influence</div>
          <div className="pl-28">culture.</div>
        </div>

        {/* Right gray rectangle */}
        <div className="w-full aspect-square bg-zinc-300 max-w-md ml-auto" />
      </div>

      {/* Bottom "WORK" text - very large, faint, white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-white text-[400px] md:text-[500px] lg:text-[600px] font-bold leading-none opacity-[0.08] whitespace-nowrap -mb-20">
            WORK
          </div>
        </div>
      </div>
    </section>
  );
}

