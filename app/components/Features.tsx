type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Composable UI",
    description: "Small, focused components assembled into a clean homepage.",
  },
  {
    title: "TypeScript-first",
    description: "Strong typing for safer, more maintainable code.",
  },
  {
    title: "Tailwind v4",
    description: "Modern utility classes for rapid, consistent styling.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-background p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-foreground/80 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




