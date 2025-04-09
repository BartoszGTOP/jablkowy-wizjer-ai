
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white/90 shadow-sm tudi-blur py-4" 
        : "bg-transparent py-6"
    )}>
      <div className="tudi-container">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className={cn(
                "font-display font-bold text-xl transition-colors", 
                scrolled ? "text-foreground" : "text-white"
              )}>
                Tudi Automations
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#services" 
                      className={cn(
                        "px-3 py-2 transition-colors hover:text-primary", 
                        scrolled ? "text-foreground/80" : "text-white/90"
                      )}
                    >
                      Usługi
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#benefits" 
                      className={cn(
                        "px-3 py-2 transition-colors hover:text-primary", 
                        scrolled ? "text-foreground/80" : "text-white/90"
                      )}
                    >
                      Korzyści
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#team" 
                      className={cn(
                        "px-3 py-2 transition-colors hover:text-primary", 
                        scrolled ? "text-foreground/80" : "text-white/90"
                      )}
                    >
                      Zespół
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#contact" 
                      className={cn(
                        "px-3 py-2 transition-colors hover:text-primary", 
                        scrolled ? "text-foreground/80" : "text-white/90"
                      )}
                    >
                      Kontakt
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              className="tudi-button-primary ml-4" 
              onClick={() => {
                document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Darmowy Audyt
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {mobileMenuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a href="#services" className="px-4 py-2 text-foreground/80 hover:text-primary">Usługi</a>
            <a href="#benefits" className="px-4 py-2 text-foreground/80 hover:text-primary">Korzyści</a>
            <a href="#team" className="px-4 py-2 text-foreground/80 hover:text-primary">Zespół</a>
            <a href="#contact" className="px-4 py-2 text-foreground/80 hover:text-primary">Kontakt</a>
            <Button 
              className="tudi-button-primary w-full" 
              onClick={() => {
                document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Darmowy Audyt
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
