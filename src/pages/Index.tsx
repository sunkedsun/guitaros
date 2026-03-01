import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import RealProblemSection from "@/components/landing/RealProblemSection";
import IntroduceSection from "@/components/landing/IntroduceSection";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhyItWorks from "@/components/landing/WhyItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import DreamOutcome from "@/components/landing/DreamOutcome";
import ValueSection from "@/components/landing/ValueSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <PainSection />
    <RealProblemSection />
    <IntroduceSection />
    <WhoIsFor />
    <WhyItWorks />
    <WhatYouGet />
    <DreamOutcome />
    <ValueSection />
    <PricingSection />
    <Footer />
  </main>
);

export default Index;
