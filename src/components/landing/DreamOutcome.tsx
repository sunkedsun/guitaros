import ScrollReveal from "./ScrollReveal";

const outcomes = [
  {
    time: "3 days",
    result: "Stop freezing on one frustrating chord transition",
  },
  {
    time: "1 week",
    result: "Play a full song start to finish without stopping",
  },
  {
    time: "1 month",
    result: "Improvise comfortably over any backing tracks",
  },
  {
    time: "3 months",
    result: "Build solid fretboard awareness and reliable core technique",
  },
  {
    time: "6 months",
    result: "Understand how chords, scales, and songs actually connect (Music Theory)",
  },
  {
    time: "1 year",
    result: "Feel confident calling yourself a guitarist and not a beginner",
  },
];

const DreamOutcome = () => (
  <section className="py-28 md:py-36 bg-surface-warm">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          The transformation
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-14">
          Imagine what it would feel like to…
        </h2>
      </ScrollReveal>
      <div className="grid gap-8">
        {outcomes.map((o, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="flex items-baseline gap-6">
              <span className="text-primary font-semibold text-xs tracking-[0.15em] uppercase whitespace-nowrap min-w-[100px]">
                {o.time}
              </span>
              <p className="text-xl md:text-2xl font-medium tracking-tight">
                {o.result}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3}>
        <p className="text-muted-foreground mt-16 text-lg max-w-2xl leading-relaxed">
          Feel calm, confident, and clear every time you pick up
          your guitar. Guitar OS gives you the structure, direction, and daily
          wins that turn scattered practice into mastery.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default DreamOutcome;
