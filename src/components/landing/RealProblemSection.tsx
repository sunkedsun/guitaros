import ScrollReveal from "./ScrollReveal";

const RealProblemSection = () => (
  <section className="py-28 md:py-36 bg-surface-warm">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Why most practice fails
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">
          Here's the real problem
        </h2>
        <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4">
          <p>
            It's not your work ethic. It's not your talent. It's not even how
            much time you spend.
          </p>
          <p>
            The problem: you don’t have a <strong>roadmap</strong>. Every
            session starts from zero. You rebuild your practice plan from
            scratch every day—burning mental energy before you even touch the
            guitar.
          </p>
          <p>
            Private lessons could fix this. A good teacher builds a path,
            corrects habits, and tells you exactly what to practice. But at
            $50–$75 an hour, 12 months of weekly lessons costs{" "}
            <strong>$2,600–$4,000</strong>—and most people still don’t practice
            on their own.
          </p>
          <p>Guitar OS solves this differently.</p>
          <p>
            It’s a structured 30-minute daily roadmap. Open it, know what to do,
            do it, improve. Every single day.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RealProblemSection;
