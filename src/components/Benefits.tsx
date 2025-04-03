
import React from "react";

const Benefits = () => {
  return (
    <section id="korzysci" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-dark mb-4">
            Dlaczego automatyzacja AI?
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto">
            Poznaj kluczowe korzyści, jakie przynosi inteligentna automatyzacja procesów biznesowych.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/10 rounded-full flex items-center justify-center text-apple-blue">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-medium text-apple-gray-dark mb-2">Zwiększona efektywność</h3>
                  <p className="text-apple-gray">Automatyzacja rutynowych zadań pozwala zaoszczędzić czas i zasoby, umożliwiając skupienie się na strategicznych inicjatywach.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/10 rounded-full flex items-center justify-center text-apple-blue">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-medium text-apple-gray-dark mb-2">Redukcja kosztów</h3>
                  <p className="text-apple-gray">Zoptymalizowane procesy biznesowe przekładają się na znaczące oszczędności operacyjne i lepsze wykorzystanie zasobów.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/10 rounded-full flex items-center justify-center text-apple-blue">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-medium text-apple-gray-dark mb-2">Wyższa jakość</h3>
                  <p className="text-apple-gray">Eliminacja błędów ludzkich prowadzi do bardziej spójnych i niezawodnych wyników w całej organizacji.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-apple-blue/10 rounded-full flex items-center justify-center text-apple-blue">
                  04
                </div>
                <div>
                  <h3 className="text-xl font-medium text-apple-gray-dark mb-2">Lepsze doświadczenia klientów</h3>
                  <p className="text-apple-gray">Szybsza i bardziej spersonalizowana obsługa tworzy lojalnych klientów i pozytywne opinie o marce.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-[500px] w-full rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-apple-blue text-5xl font-bold mb-4">+70%</div>
                  <div className="text-apple-gray-dark text-xl font-light mb-8">Średni wzrost efektywności po wdrożeniu naszych rozwiązań</div>
                  
                  <div className="space-y-6 mt-12">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-apple-gray-dark">Redukcja czasu procesów</span>
                        <span className="text-apple-blue">85%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue rounded-full" style={{width: "85%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-apple-gray-dark">Redukcja kosztów</span>
                        <span className="text-apple-blue">65%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-apple-blue rounded-full" style={{width: "65%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-apple-gray-dark">Zwiększenie satysfakcji klientów</span>
                        <span className="text-apple-blue">78%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
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
