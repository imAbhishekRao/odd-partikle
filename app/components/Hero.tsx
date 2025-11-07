export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-black/[.02] dark:to-white/[.03]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:text-left grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Better care with modern tooling
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Build healthcare experiences faster with a clean, component-driven Next.js setup.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-start justify-center">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="h-56 w-56 md:h-72 md:w-72 rounded-2xl border border-black/10 dark:border-white/10 bg-background shadow-sm" />
        </div>
      </div>
    </section>
  );
}


