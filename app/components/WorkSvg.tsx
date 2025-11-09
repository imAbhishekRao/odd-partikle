import Image from "next/image";

export default function WorkSvg() {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-white py-12 md:py-16 lg:py-24">
        <div className="ml-[150px] mr-[150px] w-[calc(100%-300px)]">
          <div className="relative w-full h-[800px]">
            <Image
              src="/Project Cover 800x600-01.jpg"
              alt="TARC"
              width={800}
              height={600}
              priority={false}
              className="w-full h-full object-cover shadow-lg"
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


