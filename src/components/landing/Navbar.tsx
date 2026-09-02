import { ArrowRight } from "lucide-react";

const CHECKOUT_URL =
  "https://sunkedsun.kit.com/products/guitar-os?promo=E221399ADA&step=checkout";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
    <nav className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-14" aria-label="Main navigation">
      <div className="flex items-center gap-2">
        <span className="text-[0.8125rem] font-medium text-muted-foreground">sunkedsun</span>
        <span className="text-muted-foreground/30 text-xs" aria-hidden="true">|</span>
        <span className="text-[0.9375rem] font-semibold tracking-tight">Guitar OS</span>
      </div>

      <a
        href={CHECKOUT_URL}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-primary/20"
      >
        Get it now
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </nav>
  </header>
);

export default Navbar;
