import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CHECKOUT_URL = "https://sunkedsun.kit.com/products/guitar-os?promo=HBI078ABHA";

const checks = [
  "Play songs faster",
  "Nail chords & transitions",
  "Improvise with confidence",
  "Master technique, timing, and theory",
  "Finally feel proud of your progress",
];

const FinalCTA = () => (
  <section className="py-28 md:py-36 bg-surface-warm">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">
          Your Transformation Starts Now
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Stop wasting time guessing what to practice. Guitar OS gives you a
          clear path, early wins, and the tools to become a confident, skilled
          guitarist. All it takes is 30 minutes a day.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {checks.map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-background border border-border/60 rounded-full px-4 py-2 text-sm font-medium"
            >
              <Check className="w-4 h-4 text-primary" />
              {c}
            </span>
          ))}
        </div>
        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Get Guitar OS — Early-Bird $149
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          Only 20 spots at this price — lifetime access, no subscriptions.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
