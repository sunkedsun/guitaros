const rows = [
  { item: "6+ months of structured daily practice guidance", value: "$600–$1,200" },
  { item: "~90 hours of aimless practice time saved", value: "Priceless" },
  { item: "Skill progression roadmap (beginner → confident)", value: "$200" },
  { item: "Built-in improvisation & creativity training", value: "$100" },
  { item: "Progress tracking system", value: "$50" },
];

const ValueSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Value justification</p>
      <h2 className="font-display text-3xl md:text-5xl mb-6">What this is actually worth</h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        Most guitarists spend 30–60 minutes/day guessing what to practice. Over 6 months, that's ~90 hours. At $60/hour for lessons, that's $5,400. Guitar OS gives you months of structured guidance for a fraction of that cost.
      </p>
      <div className="border border-border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1fr_auto] bg-card">
          <div className="px-6 py-4 font-bold text-sm tracking-wider uppercase border-b border-border">What You're Getting</div>
          <div className="px-6 py-4 font-bold text-sm tracking-wider uppercase border-b border-border text-right">Value</div>
          {rows.map((r, i) => (
            <div key={i} className="contents">
              <div className="px-6 py-4 border-b border-border/50 font-body">{r.item}</div>
              <div className="px-6 py-4 border-b border-border/50 text-right font-bold text-primary">{r.value}</div>
            </div>
          ))}
          <div className="px-6 py-4 font-bold">Total value</div>
          <div className="px-6 py-4 text-right font-bold text-primary text-lg">$1,000+</div>
        </div>
      </div>
    </div>
  </section>
);

export default ValueSection;
