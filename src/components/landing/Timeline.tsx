import ScrollReveal from "./ScrollReveal";

const milestones = [
  { time: "Day 3", result: "Chord transitions start to click. The hesitation shrinks." },
  { time: "Week 1", result: "You play your first full song all the way through." },
  { time: "Week 2", result: "Practice sessions feel purposeful. No more blank-page paralysis." },
  { time: "Month 1", result: "You improvise over a backing track for the first time." },
  { time: "Month 3", result: "You pick up the guitar and know exactly what you're doing." },
  { time: "Month 6", result: "You're the guitarist you always wanted to be. No fluke." },
];

const Timeline = () => (
  <section className="py-28 md:py-36 bg-surface-warm">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">What to expect</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-16">Time, Effort & Early Wins</h2>
      </ScrollReveal>
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="grid gap-10">
          {milestones.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-6 pl-0">
                <div className="w-[15px] h-[15px] rounded-full bg-primary mt-1.5 shrink-0 relative z-10" />
                <div>
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">{m.time}</span>
                  <p className="text-foreground/80 mt-1.5 text-lg leading-relaxed">{m.result}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
