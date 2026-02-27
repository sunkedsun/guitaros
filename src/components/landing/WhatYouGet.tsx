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
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">What's inside</p>
      <h2 className="font-display text-3xl md:text-5xl mb-4">One PDF. Everything laid out.</h2>
      <p className="text-muted-foreground text-lg mb-16">No fluff, no filler—just the roadmap.</p>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {modules.map((m) => (
          <div key={m.num}>
            <span className="text-primary font-bold text-sm tracking-wider">{m.num}</span>
            <h3 className="font-display text-xl mt-2 mb-3">{m.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
