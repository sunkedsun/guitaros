import { ArrowRight, Check } from "lucide-react";

const checks = [
  "Play songs faster",
  "Nail chords & transitions",
  "Improvise with confidence",
  "Master technique, timing, and theory",
  "Finally feel proud of your progress",
];

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-surface-warm rounded-3xl mx-4 md:mx-8 mb-8">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-display text-3xl md:text-5xl mb-6">Your Transformation Starts Now</h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
        Stop wasting time guessing what to practice. Guitar OS gives you a clear path, early wins, and the tools to become a confident, skilled guitarist. All it takes is 30 minutes a day.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {checks.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium">
            <Check className="w-4 h-4 text-primary" />
            {c}
          </span>
        ))}
      </div>
      <a
        href="#pricing"
        className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity"
      >
        Get Guitar OS — Early-Bird $149
        <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-sm text-muted-foreground mt-4">Only 20 spots at this price</p>
    </div>
  </section>
);

export default FinalCTA;
