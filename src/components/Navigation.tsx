import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about", number: "01" },
    { label: "Portfolio", href: "#portfolio", number: "02" },
    { label: "Prices", href: "#pricing", number: "03" },
    { label: "Blog", href: "#blog", number: "04" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Pitch Deck Creators
            </div>
            <span className="ml-2 text-sm text-muted-foreground">Based in Switzerland</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center text-sm hover:text-primary transition-colors"
              >
                <span className="text-foreground group-hover:text-primary">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.number}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.number}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" className="justify-start">
                  Login
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;