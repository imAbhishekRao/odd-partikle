import Image from "next/image";

export default function WorkSvg() {
  return (
    <section className="w-full bg-zinc-100">
      <div className="w-full bg-zinc-100 py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="relative w-full aspect-[4/3] max-h-[600px]">
            <Image
              src="/Project Cover 800x600-01.jpg"
              alt="TARC"
              width={800}
              height={600}
              priority={false}
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
          <p className="mt-6 text-black text-xl md:text-2xl font-normal text-left">
            TARC - Inspired by India
          </p>
        </div>
      </div>
    </section>
  );
}


