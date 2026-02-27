import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import DreamOutcome from "@/components/landing/DreamOutcome";
import IntroduceSection from "@/components/landing/IntroduceSection";
import WhyItWorks from "@/components/landing/WhyItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import WhoIsFor from "@/components/landing/WhoIsFor";
import Timeline from "@/components/landing/Timeline";
import ValueSection from "@/components/landing/ValueSection";
import PricingSection from "@/components/landing/PricingSection";
import Guarantee from "@/components/landing/Guarantee";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <PainSection />
    <DreamOutcome />
    <IntroduceSection />
    <WhyItWorks />
    <WhatYouGet />
    <WhoIsFor />
    <Timeline />
    <ValueSection />
    <PricingSection />
    <Guarantee />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
