export default function Header() {
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">SPC Healthcare</div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:opacity-80">Features</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
      </div>
    </header>
  );
}




