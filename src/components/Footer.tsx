
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-apple-gray-darker text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-medium mb-4">AI Automacja</div>
            <p className="text-gray-400 max-w-md">
              Transformujemy biznes poprzez inteligentną automatyzację procesów
              wykorzystując najnowocześniejsze technologie sztucznej inteligencji.
            </p>
          </div>
          
          <div>
            <div className="text-lg font-medium mb-4">Szybkie linki</div>
            <ul className="space-y-2">
              <li><a href="#uslugi" className="text-gray-400 hover:text-white transition-colors">Usługi</a></li>
              <li><a href="#korzysci" className="text-gray-400 hover:text-white transition-colors">Korzyści</a></li>
              <li><a href="#technologie" className="text-gray-400 hover:text-white transition-colors">Technologie</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <div className="text-lg font-medium mb-4">Kontakt</div>
            <ul className="space-y-2 text-gray-400">
              <li>kontakt@ai-automacja.pl</li>
              <li>+48 123 456 789</li>
              <li>ul. Technologiczna 15, Warszawa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI Automacja. Wszelkie prawa zastrzeżone.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
