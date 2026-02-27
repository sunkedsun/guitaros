import ScrollReveal from "./ScrollReveal";

const forList = [
  "Guitarists who feel stuck, inconsistent, or unsure what to practice",
  "Players who want real skill, not just random licks",
  "Busy people who can commit 30 minutes a day",
  "Anyone who wants clarity, structure, and measurable progress",
];

const notForList = [
  "People looking for shortcuts or instant results",
  "Players who hate structure or won't practice consistently",
  "Anyone expecting progress without putting in the work",
];

const WhoIsFor = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Perfect fit</p>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-10">
            Who Guitar OS Is For
          </h2>
          <div className="space-y-4">
            {forList.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-success font-medium mt-0.5 text-lg shrink-0">✓</span>
                <p className="text-foreground/80 text-[1.0625rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-10">
            Who Guitar OS Is <span className="italic">Not</span> For
          </h2>
          <div className="space-y-4">
            {notForList.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-destructive font-medium mt-0.5 text-lg shrink-0">✕</span>
                <p className="text-foreground/80 text-[1.0625rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default WhoIsFor;
