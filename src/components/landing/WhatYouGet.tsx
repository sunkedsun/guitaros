import ScrollReveal from "./ScrollReveal";

const modules = [
  {
    num: "01",
    title: "The Daily Practice Roadmap",
    desc: "A structured 30-minute daily plan covering what to practice, in what order, and for how long. No more blank-page paralysis.",
  },
  {
    num: "02",
    title: "Fundamentals First",
    desc: "Chord transitions, technique, timing, fretboard knowledge—built into the roadmap progressively so you stop skipping the stuff that actually matters.",
  },
  {
    num: "03",
    title: "Skill Progression Path",
    desc: "A clear sequence from beginner to confident intermediate player. You always know what level you're at and what comes next.",
  },
  {
    num: "04",
    title: "Improvisation & Creative Play",
    desc: "Built into the roadmap from early on—so you're not just running drills, you're actually making music.",
  },
  {
    num: "05",
    title: "6 Progressive Levels",
    desc: "Beginner 1–3, Intermediate 1–3, plus an Advanced framework. Each level builds deliberately—no skipped fundamentals.",
  },
  {
    num: "06",
    title: "Rotating Focus Blocks",
    desc: "Stretch & Activation → Scales & Technique → Chords & Harmony → Rhythm → Theory & Ear → Creative Time.",
  },
];

const WhatYouGet = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">What's inside</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-4">One PDF. Everything laid out.</h2>
        <p className="text-muted-foreground text-lg mb-16 leading-relaxed">No fluff, no filler—just the roadmap.</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
        {modules.map((m, i) => (
          <ScrollReveal key={m.num} delay={i * 0.06}>
            <div>
              <span className="text-primary font-semibold text-xs tracking-[0.15em]">{m.num}</span>
              <h3 className="text-xl font-semibold tracking-tight mt-2 mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
