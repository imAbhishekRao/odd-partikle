export default function Intro() {
  return (
    <section className="relative w-full bg-white min-h-screen flex items-end">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28 w-full">
        <p className="text-[28px] leading-[1.25] md:text-[40px] md:leading-tight text-zinc-400 max-w-4xl">
          <span className="text-black font-semibold">Oddpartikle</span>{" "}
          is an independent design and technology studio with a clear purpose: to
          craft communication that builds authentic and meaningful connections with
          people.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex text-sm text-zinc-500 hover:text-black"
        >
          The black dot ↗
        </a>
      </div>

      {/* top-right black dot */}
      <div className="pointer-events-none absolute right-6 top-8 h-3 w-3 rounded-full bg-black" />
    </section>
  );
}


