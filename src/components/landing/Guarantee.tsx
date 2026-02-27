import ScrollReveal from "./ScrollReveal";

const Guarantee = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Guarantee</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-6">Yours forever</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          All sales are final. Because this is a digital product, refunds aren't offered—but you keep the roadmap forever, use it at your own pace, and start seeing results immediately.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Guarantee;
