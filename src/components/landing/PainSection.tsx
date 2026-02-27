import ScrollReveal from "./ScrollReveal";

const pains = [
  "You sit down to practice and spend 20 minutes just figuring out what to work on.",
  "You’ve been playing for months (or years), but still hesitate on basic chord changes.",
  "You bounce between YouTube videos and routines without sticking to one long enough to improve.",
  "You feel overwhelmed by all the scales, chords, and techniques you’re “supposed” to learn.",
  "You practice when you can, but with limited time, it never feels like actual progress.",
  "You can’t improvise, can’t jam with friends, and can’t play a full song clean.",
];

const PainSection = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Sound familiar?</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-4">
          "I practice every day.<br />Why am I still stuck?"
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-2xl leading-relaxed">
          You’re putting in the time. But without a clear roadmap, your practice never compounds.
        </p>
      </ScrollReveal>
      <div className="grid gap-3">
        {pains.map((pain, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/40">
              <span className="text-accent font-semibold mt-0.5 shrink-0">✕</span>
              <p className="text-foreground/80">{pain}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;