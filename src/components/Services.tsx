
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Analiza danych",
    description: "Zaawansowana analiza danych biznesowych z wykorzystaniem algorytmów uczenia maszynowego.",
    icon: "📊"
  },
  {
    title: "Automatyzacja procesów",
    description: "Transformacja ręcznych zadań w zautomatyzowane procesy zwiększające efektywność.",
    icon: "⚙️"
  },
  {
    title: "Chatboty AI",
    description: "Inteligentne asystenty konwersacyjne wspierające obsługę klienta 24/7.",
    icon: "💬"
  },
  {
    title: "Integracja systemów",
    description: "Bezproblemowa integracja rozwiązań AI z istniejącymi systemami biznesowymi.",
    icon: "🔄"
  },
  {
    title: "Personalizacja",
    description: "Tworzenie spersonalizowanych doświadczeń dla klientów w oparciu o dane i preferencje.",
    icon: "👤"
  },
  {
    title: "Optymalizacja",
    description: "Ciągłe doskonalenie procesów i systemów w oparciu o analizę wyników.",
    icon: "📈"
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding bg-apple-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-dark mb-4">
            Nasze usługi
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto">
            Oferujemy kompleksowe rozwiązania automatyzacji procesów biznesowych wykorzystując najnowsze osiągnięcia w dziedzinie sztucznej inteligencji.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-apple-gray-dark mb-2">{service.title}</h3>
                <p className="text-apple-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
