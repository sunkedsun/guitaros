const milestones = [
  { time: "Day 3", result: "Chord transitions start to click. The hesitation shrinks." },
  { time: "Week 1", result: "You play your first full song all the way through." },
  { time: "Week 2", result: "Practice sessions feel purposeful. No more blank-page paralysis." },
  { time: "Month 1", result: "You improvise over a backing track for the first time." },
  { time: "Month 3", result: "You pick up the guitar and know exactly what you're doing." },
  { time: "Month 6", result: "You're the guitarist you always wanted to be. No fluke." },
];

const Timeline = () => (
  <section className="py-24 md:py-32 bg-surface-warm rounded-3xl mx-4 md:mx-8">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">What to expect</p>
      <h2 className="font-display text-3xl md:text-5xl mb-16">Time, Effort & Early Wins</h2>
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="grid gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-start gap-6 pl-0">
              <div className="w-4 h-4 rounded-full bg-primary mt-1.5 shrink-0 relative z-10" />
              <div>
                <span className="text-sm font-bold tracking-wider uppercase text-primary">{m.time}</span>
                <p className="text-foreground/80 mt-1 font-body text-lg">{m.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
