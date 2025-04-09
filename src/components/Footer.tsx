
import React from "react";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="tudi-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="font-display font-bold text-xl text-white">
                Tudi Automations
              </span>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Transformujemy biznes poprzez inteligentną automatyzację procesów,
              wykorzystując najnowocześniejsze technologie sztucznej inteligencji.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Usługi</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Analiza Danych</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Automatyzacja Procesów</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Chatboty AI</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Integracja Systemów</a></li>
              <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Personalizacja</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Firma</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#team" className="text-white/70 hover:text-primary transition-colors">Zespół</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Kontakt</a></li>
              <li><a href="/kariera" className="text-white/70 hover:text-primary transition-colors">Kariera</a></li>
              <li><a href="/blog" className="text-white/70 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-3">
              <li className="text-white/70">kontakt@tudi.pl</li>
              <li className="text-white/70">+48 123 456 789</li>
              <li className="text-white/70">
                ul. Technologiczna 15<br/>
                00-001 Warszawa
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tudi Automations. Wszelkie prawa zastrzeżone.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-primary transition-colors">Warunki korzystania</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
