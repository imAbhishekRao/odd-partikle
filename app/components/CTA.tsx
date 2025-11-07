export default function CTA() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center rounded-2xl border border-black/10 dark:border-white/10 bg-background shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to build your homepage?
        </h2>
        <p className="mt-3 text-foreground/80">
          Start customizing these components to fit your brand and content.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06]"
          >
            See Features
          </a>
        </div>
      </div>
    </section>
  );
}


