import { Terminal, Cpu, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Connect", href: "#connect" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Cpu className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-cyber" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-lg font-bold text-gradient-cyber">
              CryptoDev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-body font-semibold text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button variant="cyber" size="sm" className="ml-4">
              <Terminal className="w-4 h-4" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-body font-semibold text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button variant="cyber" className="w-full">
                <Terminal className="w-4 h-4" />
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
