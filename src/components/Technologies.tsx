
import React from "react";

const Technologies = () => {
  const technologies = [
    "Machine Learning", "Deep Learning", "Przetwarzanie języka naturalnego",
    "Rozpoznawanie obrazów", "Analiza predykcyjna", "Uczenie ze wzmocnieniem",
    "Sieci neuronowe", "Robotic Process Automation", "Computer Vision"
  ];

  return (
    <section id="technologie" className="section-padding bg-apple-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-dark mb-4 animate-fade-in">
            Technologie, które wykorzystujemy
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Nasze rozwiązania opierają się na najnowocześniejszych technologiach sztucznej inteligencji i uczenia maszynowego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 animate-slide-up">
            <div className="bg-white rounded-3xl p-8 h-full shadow-sm">
              <h3 className="text-xl font-medium text-apple-gray-dark mb-6">Wykorzystywane technologie</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-apple-blue/10 text-apple-blue rounded-full text-sm"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: "0.3s"}}>
            <div className="bg-gradient-to-br from-apple-blue to-apple-highlight rounded-3xl p-8 h-full text-white shadow-sm">
              <h3 className="text-xl font-medium mb-6">Dlaczego my?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white/80 mt-1">✓</span>
                  <span>Zespół ekspertów z dziedziny AI i automatyzacji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/80 mt-1">✓</span>
                  <span>Ponad 50 zakończonych z sukcesem projektów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/80 mt-1">✓</span>
                  <span>Rozwiązania dostosowane do specyficznych potrzeb Twojego biznesu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/80 mt-1">✓</span>
                  <span>Ciągłe wsparcie techniczne i rozwój wdrożonych systemów</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm animate-slide-up" style={{animationDelay: "0.5s"}}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-apple-blue mb-2">5+</div>
              <div className="text-apple-gray">Lat działalności</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-apple-blue mb-2">50+</div>
              <div className="text-apple-gray">Zrealizowanych projektów</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-apple-blue mb-2">30+</div>
              <div className="text-apple-gray">Zadowolonych klientów</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-apple-blue mb-2">98%</div>
              <div className="text-apple-gray">Poziom satysfakcji</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
