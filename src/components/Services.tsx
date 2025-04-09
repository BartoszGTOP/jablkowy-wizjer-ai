
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChartBig, 
  Cog, 
  MessageSquare, 
  Repeat2, 
  UserCog,
  TrendingUp,
  FileText,
  Shield,
  Database,
  Zap
} from "lucide-react";

const services = [
  {
    title: "Analiza Danych",
    description: "Zaawansowana analiza dużych zbiorów danych z wykorzystaniem algorytmów uczenia maszynowego.",
    icon: <BarChartBig className="w-10 h-10 text-primary" />
  },
  {
    title: "Automatyzacja Procesów",
    description: "Transformacja ręcznych zadań w zautomatyzowane procesy zwiększające efektywność operacyjną.",
    icon: <Cog className="w-10 h-10 text-primary" />
  },
  {
    title: "Chatboty AI",
    description: "Inteligentni asystenci konwersacyjni wspierający obsługę klienta przez całą dobę.",
    icon: <MessageSquare className="w-10 h-10 text-primary" />
  },
  {
    title: "Integracja Systemów",
    description: "Bezproblemowa integracja rozwiązań AI z istniejącymi systemami biznesowymi.",
    icon: <Repeat2 className="w-10 h-10 text-primary" />
  },
  {
    title: "Personalizacja",
    description: "Tworzenie spersonalizowanych doświadczeń dla klientów w oparciu o dane i preferencje.",
    icon: <UserCog className="w-10 h-10 text-primary" />
  },
  {
    title: "Optymalizacja Kosztów",
    description: "Identyfikacja obszarów pozwalających na znaczące oszczędności poprzez automatyzację.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />
  }
];

const Services = () => {
  return (
    <section id="services" className="tudi-section bg-background">
      <div className="tudi-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 opacity-0 animate-fade-in">
            Nasze <span className="tudi-gradient-text">usługi</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Oferujemy kompleksowe rozwiązania automatyzacji procesów biznesowych wykorzystując najnowsze osiągnięcia w dziedzinie sztucznej inteligencji.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="tudi-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-8 flex flex-col items-start">
                <div className="mb-6 p-3 rounded-2xl bg-primary/10">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="flex flex-col md:flex-row p-8 md:p-0 tudi-card overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Kompleksowe rozwiązania dopasowane do Twoich potrzeb</h3>
              <p className="text-foreground/70 mb-6">
                Każde wdrożenie poprzedzamy szczegółową analizą procesów biznesowych, aby dostarczyć rozwiązanie idealnie dopasowane do potrzeb Twojej firmy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-green-100">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Bezpieczne rozwiązania zgodne z regulacjami</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-blue-100">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <span>Integracja z istniejącymi systemami</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-purple-100">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Szczegółowa dokumentacja i szkolenia</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-amber-100">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <span>Ciągłe usprawnienia i rozwój systemu</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[auto] mt-8 md:mt-0">
              <img 
                src="/service-illustration.svg" 
                alt="Kompleksowe rozwiązania AI" 
                className="w-full h-full object-cover rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
