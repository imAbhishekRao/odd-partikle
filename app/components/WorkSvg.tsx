import Image from "next/image";

export default function WorkSvg() {
  return (
    <section className="relative w-full bg-white z-50 mt-28">
      <div className="w-full bg-white py-0">
        <div className="ml-[75px] mr-[75px] w-[calc(100%-150px)]">
          <div className="relative w-full h-[700px]">
            <Image
              src="/Project Cover 800x600-01.jpg"
              alt="TARC"
              width={800}
              height={600}
              priority={false}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <p className="mt-6 text-[28px] leading-[1.25] text-[#b3b3b3] text-left">
            <span className="text-black font-medium">TARC</span> - Inspired by India
          </p>
        </div>
      </div>
    </section>
  );
}


