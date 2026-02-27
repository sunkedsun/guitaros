import ScrollReveal from "./ScrollReveal";

const IntroduceSection = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-3xl mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Introducing</p>
        <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight mb-7">Guitar OS</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          A step-by-step, 30-minute daily roadmap for ambitious aspiring guitarists who struggle with consistency and direction.
        </p>
        <p className="text-foreground/80 max-w-2xl leading-relaxed text-[1.0625rem]">
          Every module is designed to remove guesswork, build technique, and accelerate your skill—so you can finally enjoy progress without wasting months on random practice.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default IntroduceSection;
