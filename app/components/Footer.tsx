import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm flex flex-col md:flex-row items-start justify-between gap-3">
        <div className="text-foreground/70">© {new Date().getFullYear()} SPC Healthcare</div>
        <div className="flex items-center gap-4 text-foreground/70">
          <a href="#privacy" className="hover:opacity-80">Privacy</a>
          <a href="#terms" className="hover:opacity-80">Terms</a>
        </div>
        <div className="flex items-start">
          <Image
            src="/Oddpartikle_logo.svg"
            alt="Oddpartikle Logo"
            width={246}
            height={41}
            className="h-5 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}




