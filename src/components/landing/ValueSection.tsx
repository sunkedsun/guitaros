import ScrollReveal from "./ScrollReveal";

const rows = [
  { item: "6+ months of structured daily practice guidance", value: "$600–$1,200" },
  { item: "~90 hours of aimless practice time saved", value: "Priceless" },
  { item: "Skill progression roadmap (beginner → confident)", value: "$200" },
  { item: "Built-in improvisation & creativity training", value: "$100" },
  { item: "Progress tracking system", value: "$50" },
];

const ValueSection = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Value justification</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">What this is actually worth</h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-2xl leading-relaxed">
          Most guitarists spend 30–60 minutes/day guessing what to practice. Over 6 months, that's ~90 hours. At $60/hour for lessons, that's $5,400. Guitar OS gives you months of structured guidance for a fraction of that cost.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr_auto]">
            <div className="px-6 py-4 font-semibold text-xs tracking-[0.15em] uppercase border-b border-border bg-card">What You're Getting</div>
            <div className="px-6 py-4 font-semibold text-xs tracking-[0.15em] uppercase border-b border-border text-right bg-card">Value</div>
            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="px-6 py-4 border-b border-border/40 text-[0.9375rem]">{r.item}</div>
                <div className="px-6 py-4 border-b border-border/40 text-right font-semibold text-primary text-[0.9375rem]">{r.value}</div>
              </div>
            ))}
            <div className="px-6 py-4 font-semibold bg-card">Total value</div>
            <div className="px-6 py-4 text-right font-bold text-primary text-lg bg-card">$1,000+</div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValueSection;
