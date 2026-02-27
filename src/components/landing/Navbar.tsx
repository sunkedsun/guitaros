import { ArrowRight } from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
    <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
      <span className="font-display text-xl">Guitar OS</span>
      <a
        href="#pricing"
        className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Get it now
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </header>
);

export default Navbar;
