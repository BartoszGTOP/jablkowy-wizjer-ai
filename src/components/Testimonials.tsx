
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Rozwiązania AI Automacji kompletnie zmieniły sposób, w jaki zarządzamy naszymi procesami biznesowymi. Zwiększyliśmy efektywność o ponad 60%.",
    author: "Tomasz Kowalski",
    role: "Dyrektor Operacyjny, TechFirma",
    company: "TechFirma Sp. z o.o."
  },
  {
    quote: "Wdrożenie automatyzacji AI pozwoliło nam zaoszczędzić tysiące godzin pracy miesięcznie. To najlepsza decyzja biznesowa, jaką podjęliśmy w ostatnich latach.",
    author: "Anna Nowak",
    role: "CEO",
    company: "Innowacje Plus"
  },
  {
    quote: "Zespół AI Automacji zaprojektował dla nas rozwiązanie szyte na miarę, które doskonale integruje się z naszymi systemami. Rezultaty przekroczyły nasze oczekiwania.",
    author: "Michał Wiśniewski",
    role: "CTO",
    company: "DataTech Solutions"
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-apple-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-dark mb-4 animate-fade-in">
            Co mówią nasi klienci
          </h2>
          <p className="text-apple-gray max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Poznaj opinie firm, które zaufały naszym rozwiązaniom automatyzacji opartym o sztuczną inteligencję.
          </p>
        </div>

        <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                  <div className="h-full">
                    <div className="glass-card dark:dark-glass-card h-full rounded-3xl p-8 md:p-10 flex flex-col">
                      <div className="text-3xl text-apple-blue mb-6">"</div>
                      <blockquote className="text-lg text-apple-gray-dark mb-8 flex-grow">
                        {testimonial.quote}
                      </blockquote>
                      <div className="mt-auto">
                        <div className="font-medium text-apple-gray-dark">{testimonial.author}</div>
                        <div className="text-sm text-apple-gray mt-1">{testimonial.role}</div>
                        <div className="text-sm text-apple-gray">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 border border-apple-gray-dark/30 bg-white text-apple-gray-dark hover:bg-apple-gray-dark hover:text-white" />
              <CarouselNext className="relative static right-0 translate-y-0 border border-apple-gray-dark/30 bg-white text-apple-gray-dark hover:bg-apple-gray-dark hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
