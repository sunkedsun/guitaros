import ScrollReveal from "./ScrollReveal";

const rows = [
  {
    item: "12+ months of structured daily practice guidance",
    value: "$1,199–$2,399",
  },
  { item: "~180+ hours of aimless practice time saved", value: "Priceless" },
  { item: "Skill progression roadmap (beginner → confident)", value: "$399" },
  { item: "Fretboard fluency & improvisation training", value: "$349" },
  { item: "Timing, rhythm & creative play practice", value: "$299" },
  { item: "Applied music theory for real songs", value: "$249" },
  {
    item: "Confidence & habit-building in just 30 minutes/day",
    value: "Priceless",
  },
];

const ValueSection = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Value justification
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">
          What this is actually worth
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-2xl leading-relaxed">
          Most guitarists spend 30–60 minutes/day guessing what to practice.
          Over 12 months, that's ~180 hours. At $50–$75/hour for private
          lessons, that would cost $9,000+. Guitar OS gives you structured
          guidance, step-by-step, for a fraction of that—plus the freedom to
          practice on your own, see progress daily, and build habits that stick
          for life.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr_auto]">
            <div className="px-6 py-4 font-semibold text-xs tracking-[0.15em] uppercase border-b border-border bg-card">
              What You're Getting
            </div>
            <div className="px-6 py-4 font-semibold text-xs tracking-[0.15em] uppercase border-b border-border text-right bg-card">
              Value
            </div>
            {rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="px-6 py-4 border-b border-border/40 text-[0.9375rem]">
                  {r.item}
                </div>
                <div className="px-6 py-4 border-b border-border/40 text-right font-semibold text-primary text-[0.9375rem]">
                  {r.value}
                </div>
              </div>
            ))}
            <div className="px-6 py-4 font-semibold bg-card">Total value</div>
            <div className="px-6 py-4 text-right font-bold text-primary text-lg bg-card">
              $3,695+
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValueSection;
