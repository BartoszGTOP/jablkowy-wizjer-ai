
import React from "react";

const Benefits = () => {
  return (
    <section id="korzysci" className="section-padding bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate-fade-in">
            Dlaczego automatyzacja AI?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Poznaj kluczowe korzyści, jakie przynosi inteligentna automatyzacja procesów biznesowych.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/20 rounded-full flex items-center justify-center text-apple-blue">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Zwiększona efektywność</h3>
                  <p className="text-gray-400">Automatyzacja rutynowych zadań pozwala zaoszczędzić czas i zasoby, umożliwiając skupienie się na strategicznych inicjatywach.</p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{animationDelay: "0.3s"}}>
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/20 rounded-full flex items-center justify-center text-apple-blue">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Redukcja kosztów</h3>
                  <p className="text-gray-400">Zoptymalizowane procesy biznesowe przekładają się na znaczące oszczędności operacyjne i lepsze wykorzystanie zasobów.</p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{animationDelay: "0.4s"}}>
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/20 rounded-full flex items-center justify-center text-apple-blue">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Wyższa jakość</h3>
                  <p className="text-gray-400">Eliminacja błędów ludzkich prowadzi do bardziej spójnych i niezawodnych wyników w całej organizacji.</p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-slide-up" style={{animationDelay: "0.5s"}}>
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/20 rounded-full flex items-center justify-center text-apple-blue">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Lepsze doświadczenia klientów</h3>
                  <p className="text-gray-400">Szybsza i bardziej spersonalizowana obsługa tworzy lojalnych klientów i pozytywne opinie o marce.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-[500px] w-full rounded-3xl bg-gradient-to-br from-black/70 to-apple-gray-dark shadow-lg overflow-hidden animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-apple-blue text-5xl font-bold mb-4">+70%</div>
                  <div className="text-white text-xl font-light mb-8">Średni wzrost efektywności po wdrożeniu naszych rozwiązań</div>
                  
                  <div className="space-y-6 mt-12">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Redukcja czasu procesów</span>
                        <span className="text-apple-blue">85%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue rounded-full" style={{width: "85%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Redukcja kosztów</span>
                        <span className="text-apple-blue">65%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue rounded-full" style={{width: "65%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Zwiększenie satysfakcji klientów</span>
                        <span className="text-apple-blue">78%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue rounded-full" style={{width: "78%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
