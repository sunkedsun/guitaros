import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    title: "30 Minutes a Day",
    desc: "Short, focused sessions remove decision fatigue and make consistency realistic, even on busy days.",
  },
  {
    title: "Progress That Compounds",
    desc: "Each session builds on the last, so skills stack instead of random practice or single lessons.",
  },
  {
    title: "Weak Spots Get Addressed",
    desc: "Rotating focus ensures fundamentals aren’t avoided—gaps close naturally over weeks, not years.",
  },
  {
    title: "Early Wins Built In",
    desc: "Small, visible improvements early on create momentum and keep motivation high long enough for actual progress.",
  },
];

const WhyItWorks = () => (
  <section className="py-28 md:py-36 bg-surface-dark text-surface-dark-foreground">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-50 mb-4">The mechanism</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-16">Why Guitar OS Works</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-10">
        {reasons.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="border-t border-surface-dark-foreground/10 pt-6">
              <h3 className="text-xl font-semibold tracking-tight mb-3">{r.title}</h3>
              <p className="opacity-60 leading-relaxed">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItWorks;
