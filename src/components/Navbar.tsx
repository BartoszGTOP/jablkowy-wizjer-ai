
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/30 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-black text-xl font-medium">AI Automacja</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#uslugi" className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium">Usługi</a>
              <a href="#korzysci" className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium">Korzyści</a>
              <a href="#technologie" className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium">Technologie</a>
              <a href="#kontakt" className="text-gray-500 hover:text-black transition-colors duration-300 text-sm font-medium">Kontakt</a>
            </div>
          </div>
          <div>
            <Button className="bg-black hover:bg-neutral-800 transition-colors duration-300 rounded-full px-5 py-1.5 h-auto text-sm font-medium">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
