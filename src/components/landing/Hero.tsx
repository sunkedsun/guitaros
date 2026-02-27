import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const CHECKOUT_URL = "https://sunkedsun.kit.com/products/guitar-os?promo=HBI078ABHA";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
    <div className="container max-w-4xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6"
        >
          Structured 30-Minute Daily Mastery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.05] tracking-tight mb-7"
        >
          Stop Practicing<br />Without Direction
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Play songs, improvise, and build actual guitar skill in just 30 minutes a day—even if you've felt stuck for years.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Get Guitar OS — $149
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">For ambitious aspiring guitarists who struggle with consistency.</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5"
      >
        <img src={heroMockup} alt="Guitar OS practice roadmap displayed on tablet" className="w-full" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
