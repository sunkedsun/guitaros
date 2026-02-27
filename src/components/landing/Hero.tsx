import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container max-w-5xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 animate-fade-up">
          Structured 30-Minute Daily Mastery
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Stop Practicing<br />Without Direction
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up font-body" style={{ animationDelay: "0.2s" }}>
          Play songs, improvise, and build actual guitar skill in just 30 minutes a day—even if you've felt stuck for years.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get Guitar OS — $149
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">For ambitious aspiring guitarists who struggle with consistency.</p>
        </div>
      </div>
      <div className="animate-fade-up rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5" style={{ animationDelay: "0.4s" }}>
        <img src={heroMockup} alt="Guitar OS practice roadmap displayed on tablet" className="w-full" />
      </div>
    </div>
  </section>
);

export default Hero;
