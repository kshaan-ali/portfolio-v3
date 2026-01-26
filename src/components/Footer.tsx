import { Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-gradient-cyber">CryptoDev</span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved. Built on the blockchain.
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a href="#skills" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#experience" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#connect" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Connect
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
