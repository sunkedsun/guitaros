const pains = [
  "You sit down to practice and spend 20 minutes just figuring out what to practice",
  "You've been playing for months (or years) but still hesitate on basic chord changes",
  "You hop between YouTube videos, never following anything long enough to actually improve",
  "You start a new routine every few weeks, then drop it after a few days",
  "You feel like you're practicing, but you're not actually getting better",
  "You can't improvise, can't jam with friends, can't play a full song clean",
];

const PainSection = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Sound familiar?</p>
      <h2 className="font-display text-3xl md:text-5xl mb-4">
        "I practice every day.<br />Why am I still stuck?"
      </h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        You're putting in time—but you still hesitate on certain chords, avoid weak spots, and aren't sure if you're actually improving.
      </p>
      <div className="grid gap-4">
        {pains.map((pain, i) => (
          <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/60">
            <span className="text-primary font-bold mt-0.5">✕</span>
            <p className="text-foreground/80 font-body">{pain}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
