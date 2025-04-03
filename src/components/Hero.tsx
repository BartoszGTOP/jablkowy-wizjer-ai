
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6">
          Automatyzacja <span className="apple-gradient-text">przyszłości</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-apple-gray">
          Transformujemy biznes poprzez inteligentną automatyzację procesów
          wykorzystując najnowocześniejsze technologie sztucznej inteligencji.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-apple-blue hover:bg-apple-highlight transition-colors duration-300 rounded-full px-8 py-6 h-auto text-base font-medium">
            Rozpocznij transformację
          </Button>
          <Button variant="outline" className="border-apple-gray rounded-full px-8 py-6 h-auto text-base font-medium text-apple-gray-dark">
            Dowiedz się więcej
          </Button>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center animate-subtle-float">
            <div className="w-3/4 h-3/4 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-apple-blue text-6xl md:text-8xl font-bold opacity-20">AI</div>
                <div className="text-apple-gray-dark text-xl md:text-2xl font-light mt-4">Inteligentne rozwiązania</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
