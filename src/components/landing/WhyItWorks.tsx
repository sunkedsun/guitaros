const reasons = [
  {
    title: "30 Minutes a Day",
    desc: "No more endless hours guessing what to practice. Just 30 focused minutes that fit into your schedule.",
  },
  {
    title: "Compounding Skill",
    desc: "Every session builds on the last, giving you faster progress than random practice or single lessons.",
  },
  {
    title: "Weak Spots Get Addressed",
    desc: "Fundamentals build without burnout. Structure makes progress compound.",
  },
  {
    title: "Early Wins",
    desc: "See tangible progress fast to keep motivation high, while building toward long-term mastery.",
  },
];

const WhyItWorks = () => (
  <section className="py-24 md:py-32 bg-surface-dark text-surface-dark-foreground rounded-3xl mx-4 md:mx-8">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase opacity-60 mb-4">The mechanism</p>
      <h2 className="font-display text-3xl md:text-5xl mb-16">Why Guitar OS Works</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="border-t border-surface-dark-foreground/10 pt-6">
            <h3 className="font-display text-xl mb-3">{r.title}</h3>
            <p className="opacity-70 font-body leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItWorks;
