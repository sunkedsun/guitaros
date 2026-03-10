import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CHECKOUT_URL =
  "https://sunkedsun.kit.com/products/guitar-os?promo=HBI078ABHA&step=checkout";

const PricingSection = () => (
  <section
    id="pricing"
    className="py-24 md:py-32 bg-surface-dark text-surface-dark-foreground"
  >
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-50 mb-4">
          Limited-time offer
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">
          Your roadmap to mastery starts today
        </h2>
        <p className="opacity-60 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          Get $3,695+ worth of structured guidance for just{" "}
          <strong>$79</strong>. Follow a proven 30-minute daily roadmap and
          finally achieve progress on guitar—without wasting months guessing
          what to practice.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-2xl p-8 md:p-12 inline-block text-center">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase opacity-50 mb-3">
            Early-Bird Price
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-2xl opacity-40 line-through">$129</span>
            <span className="text-5xl md:text-6xl font-bold tracking-tight">
              $79
            </span>
          </div>
          <p className="text-sm opacity-50 mb-8">
            Only 30 spots at this price — act fast!
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
          >
            Get Guitar OS Now
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <p className="text-xs opacity-40 mt-6">
            One purchase. Lifetime access. All sales are final.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
