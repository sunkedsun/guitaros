import ScrollReveal from "./ScrollReveal";

const Guarantee = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Guarantee
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">
          Yours forever
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          Because Guitar OS is fully digital, all sales are final. But once you
          get it, the roadmap is yours for life.
        </p>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mt-4">
          Think of it as an investment in your guitar journey: no subscriptions,
          no hidden fees, just structured guidance that you can return to
          anytime.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Guarantee;
