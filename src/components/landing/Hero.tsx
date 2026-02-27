import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/GuitarOS Pic.jpg";

const CHECKOUT_URL =
  "https://sunkedsun.kit.com/products/guitar-os?promo=HBI078ABHA";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 bg-white">
    <div className="container max-w-4xl mx-auto px-6">
      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        {/* Preheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0039c8] mb-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif',
          }}
        >
          Structured 30-Minute Daily Mastery
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold leading-[1.05] tracking-tight mb-7"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif',
          }}
        >
          Stop Practicing
          <br />
          Without Direction
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif',
          }}
        >
          Play songs, improvise, and develop{" "}
          <strong>actual guitar skills in just 30 minutes a day</strong>. Even
          if you’ve felt stuck for years.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 bg-[#0039c8] text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#ffc107]/20"
          >
            Get Guitar OS — $149
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm mt-4 italic">
            For ambitious aspiring guitarists who struggle with consistency.
          </p>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl overflow-hidden shadow-2xl shadow-[#0039c8]/10"
      >
        <img
          src={heroMockup}
          alt="Guitar OS"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
