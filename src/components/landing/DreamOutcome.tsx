const outcomes = [
  { time: "1 week", result: "Play your first full song" },
  { time: "3 days", result: "Nail a tricky chord transition" },
  { time: "1 month", result: "Improvise confidently over any backing track" },
  { time: "3 months", result: "Build complete fretboard fluency and solid technique" },
  { time: "6 months", result: "Become the guitarist you always wanted to be" },
];

const DreamOutcome = () => (
  <section className="py-24 md:py-32 bg-surface-warm rounded-3xl mx-4 md:mx-8">
    <div className="container max-w-4xl mx-auto px-6">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">The transformation</p>
      <h2 className="font-display text-3xl md:text-5xl mb-12">
        Imagine what it would feel like to…
      </h2>
      <div className="grid gap-6">
        {outcomes.map((o, i) => (
          <div key={i} className="flex items-baseline gap-6">
            <span className="text-primary font-bold text-sm tracking-wider uppercase whitespace-nowrap min-w-[100px]">{o.time}</span>
            <p className="text-lg md:text-xl font-display">{o.result}</p>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground mt-12 text-lg max-w-2xl">
        Feel confident and proud every time you pick up your guitar. Guitar OS gives you the structure, clarity, and daily wins that turn frustration into mastery.
      </p>
    </div>
  </section>
);

export default DreamOutcome;
