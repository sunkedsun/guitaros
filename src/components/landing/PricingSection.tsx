import { ArrowRight } from "lucide-react";

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 bg-surface-dark text-surface-dark-foreground rounded-3xl mx-4 md:mx-8">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <p className="text-sm font-medium tracking-widest uppercase opacity-60 mb-4">Limited-time offer</p>
      <h2 className="font-display text-3xl md:text-5xl mb-6">Your roadmap to mastery starts today</h2>
      <p className="opacity-70 text-lg mb-12 max-w-xl mx-auto">
        Guitar OS gives you months of structured guidance for a fraction of the cost of private lessons.
      </p>

      <div className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-2xl p-8 md:p-12 inline-block text-center">
        <p className="text-sm font-medium tracking-wider uppercase opacity-50 mb-2">Early-Bird Price</p>
        <div className="flex items-baseline justify-center gap-3 mb-2">
          <span className="text-2xl opacity-40 line-through">$179</span>
          <span className="font-display text-5xl md:text-6xl">$149</span>
        </div>
        <p className="text-sm opacity-50 mb-8">Only 20 spots available at this price</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity"
        >
          Get Guitar OS Now
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-xs opacity-40 mt-6">One purchase. Lifetime access. No subscriptions.</p>
      </div>
    </div>
  </section>
);

export default PricingSection;
