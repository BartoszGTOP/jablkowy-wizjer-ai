
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md py-4 transition-all duration-300 ${
      scrolled ? 'bg-apple-gray-darker/90 border-b border-white/10 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-medium">AI Automacja</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#uslugi" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">Usługi</a>
              <a href="#korzysci" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">Korzyści</a>
              <a href="#technologie" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">Technologie</a>
              <a href="#kontakt" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">Kontakt</a>
            </div>
          </div>
          <div>
            <Button className="bg-apple-blue hover:bg-apple-highlight transition-all duration-300 rounded-full px-5 py-1.5 h-auto text-sm font-medium">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
