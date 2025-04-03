
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-dark mb-4">
              Gotowy na transformację?
            </h2>
            <p className="text-apple-gray mb-8">
              Skontaktuj się z nami, aby omówić, jak możemy pomóc Twojej firmie wykorzystać pełny potencjał automatyzacji AI.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-apple-gray-dark mb-1">
                    Imię i nazwisko
                  </label>
                  <Input
                    id="name"
                    placeholder="Jan Kowalski"
                    className="w-full border-apple-gray/20 rounded-lg focus:ring-apple-blue focus:border-apple-blue"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-apple-gray-dark mb-1">
                    Firma
                  </label>
                  <Input
                    id="company"
                    placeholder="Nazwa firmy"
                    className="w-full border-apple-gray/20 rounded-lg focus:ring-apple-blue focus:border-apple-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-gray-dark mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jan.kowalski@firma.pl"
                  className="w-full border-apple-gray/20 rounded-lg focus:ring-apple-blue focus:border-apple-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-gray-dark mb-1">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  placeholder="Jak możemy pomóc Twojej firmie?"
                  rows={5}
                  className="w-full border-apple-gray/20 rounded-lg focus:ring-apple-blue focus:border-apple-blue resize-none"
                />
              </div>
              
              <Button className="w-full bg-apple-blue hover:bg-blue-600 transition-colors rounded-full py-6 h-auto text-base font-medium">
                Wyślij wiadomość
              </Button>
            </form>
          </div>
          
          <div className="flex items-center">
            <div className="bg-apple-gray-light rounded-3xl p-8 w-full h-auto">
              <h3 className="text-xl font-medium text-apple-gray-dark mb-6">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-apple-gray mb-1">Email</div>
                  <div className="text-apple-gray-dark">kontakt@ai-automacja.pl</div>
                </div>
                
                <div>
                  <div className="text-sm text-apple-gray mb-1">Telefon</div>
                  <div className="text-apple-gray-dark">+48 123 456 789</div>
                </div>
                
                <div>
                  <div className="text-sm text-apple-gray mb-1">Adres</div>
                  <div className="text-apple-gray-dark">
                    ul. Technologiczna 15<br />
                    00-001 Warszawa
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-apple-gray mb-1">Godziny pracy</div>
                  <div className="text-apple-gray-dark">
                    Poniedziałek - Piątek: 9:00 - 17:00
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="text-sm text-apple-gray mb-3">Śledź nas</div>
                <div className="flex space-x-4">
                  <a href="#" className="text-apple-gray-dark hover:text-apple-blue transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-apple-gray-dark hover:text-apple-blue transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-apple-gray-dark hover:text-apple-blue transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
