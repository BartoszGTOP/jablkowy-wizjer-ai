
import React from "react";
import {
  CheckCircle2,
  DollarSign,
  Clock,
  LineChart,
  ShieldCheck,
  Users
} from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="tudi-section bg-primary/5">
      <div className="tudi-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 opacity-0 animate-fade-in">
            <span className="tudi-gradient-text">Korzyści</span> z automatyzacji AI
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Poznaj kluczowe korzyści, jakie przynosi inteligentna automatyzacja procesów biznesowych i dlaczego warto zainwestować w AI już teraz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              <div className="flex gap-6 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Redukcja kosztów operacyjnych</h3>
                  <p className="text-foreground/70">
                    Zmniejsz wydatki operacyjne nawet o 40% dzięki automatyzacji powtarzalnych zadań i optymalizacji procesów.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Oszczędność czasu</h3>
                  <p className="text-foreground/70">
                    Automatyzacja procesów skraca czas realizacji zadań o 60-80%, umożliwiając skupienie się na strategicznych inicjatywach.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <LineChart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wzrost produktywności</h3>
                  <p className="text-foreground/70">
                    Zespoły, które wykorzystują nasze rozwiązania AI, notują średnio 35% wzrost wydajności operacyjnej.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 opacity-0 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eliminacja błędów</h3>
                  <p className="text-foreground/70">
                    Minimalizacja ryzyka poprzez wyeliminowanie błędów ludzkich w krytycznych procesach biznesowych.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 opacity-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
                <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lepsze doświadczenia klientów</h3>
                  <p className="text-foreground/70">
                    Szybsza i spersonalizowana obsługa klienta generująca 28% wzrost satysfakcji i lojalności.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl p-8 bg-white border border-border">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="text-center mb-8">
                <div className="text-primary text-5xl font-bold mb-2">3x ROI</div>
                <p className="text-foreground/70">Średni zwrot z inwestycji w pierwszym roku</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Redukcja kosztów operacyjnych</span>
                    <span className="font-semibold text-primary">40%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{width: "40%", transition: "width 1.5s ease-out"}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Oszczędność czasu</span>
                    <span className="font-semibold text-primary">70%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{width: "70%", transition: "width 1.5s ease-out"}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Wzrost produktywności</span>
                    <span className="font-semibold text-primary">35%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{width: "35%", transition: "width 1.5s ease-out"}}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-muted/50 rounded-xl">
                <h4 className="font-semibold mb-4">Przykład oszczędności dla średniej firmy:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>300 godzin miesięcznie zaoszczędzonych na zadaniach administracyjnych</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>25.000 zł miesięcznych oszczędności na kosztach operacyjnych</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>28% wzrost satysfakcji klientów dzięki szybszej obsłudze</span>
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
