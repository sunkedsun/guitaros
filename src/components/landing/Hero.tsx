import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/GuitarOS Pic.jpg";

const CHECKOUT_URL =
  "https://sunkedsun.kit.com/products/guitar-os?promo=HBI078ABHA";

const Hero = () => (
  <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28 bg-background">
    <div className="container max-w-4xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
        >
          Structured 30-Minute Daily Mastery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold leading-[1.05] tracking-tight mb-7"
        >
          Stop Practicing
          <br />
          Without Direction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground"
        >
          Play songs, improvise, and develop{" "}
          <strong className="text-foreground">actual guitar skills in just 30 minutes a day</strong>. Even
          if you've felt stuck for years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Get Guitar OS — $149
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <p className="text-sm text-muted-foreground mt-4 italic">
            For ambitious aspiring guitarists who struggle with consistency.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
      >
        <img
          src={heroMockup}
          alt="Guitar OS practice roadmap preview showing structured daily practice plan"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
