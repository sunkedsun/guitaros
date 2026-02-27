const Footer = () => (
  <footer className="py-12 text-center border-t border-border/30">
    <div className="container max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-sm text-muted-foreground">sunkedsun</span>
        <span className="text-muted-foreground/30 text-xs">|</span>
        <span className="text-sm font-semibold">Guitar OS</span>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} sunkedsun. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
