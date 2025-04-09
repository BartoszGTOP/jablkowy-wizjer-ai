
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Linkedin,
  Twitter,
  CheckCircle2
} from "lucide-react";

const teamMembers = [
  {
    name: "Aleksandra Nowak",
    role: "CEO & Założycielka",
    bio: "Ekspertka w dziedzinie sztucznej inteligencji z 12-letnim doświadczeniem w transformacji cyfrowej.",
    image: "/team-member-1.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Tomasz Kowalski",
    role: "CTO",
    bio: "Architekt rozwiązań AI z doświadczeniem w projektach dla firm z listy Fortune 500.",
    image: "/team-member-2.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marta Wiśniewska",
    role: "Head of AI Research",
    bio: "Doktor nauk technicznych specjalizująca się w uczeniu maszynowym i przetwarzaniu języka naturalnego.",
    image: "/team-member-3.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Paweł Jankowski",
    role: "Head of Client Success",
    bio: "Ekspert transformacji biznesowej z ponad 10-letnim doświadczeniem we wdrażaniu rozwiązań AI.",
    image: "/team-member-4.jpg",
    linkedin: "#",
    twitter: "#"
  }
];

const Team = () => {
  return (
    <section id="team" className="tudi-section bg-background">
      <div className="tudi-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 opacity-0 animate-fade-in">
            Nasz <span className="tudi-gradient-text">doświadczony zespół</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Za sukcesem Tudi Automations stoi zespół ekspertów z wieloletnim doświadczeniem w zakresie sztucznej inteligencji i automatyzacji biznesowej.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="tudi-card opacity-0 animate-fade-in overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-60 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <a 
                    href={member.linkedin} 
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    aria-label={`LinkedIn - ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Twitter - ${member.name}`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16">
              <h3 className="text-3xl text-white font-bold mb-6">50+ ekspertów gotowych do transformacji Twojego biznesu</h3>
              <p className="text-white/90 mb-6">
                Nasz zespół to wybitni specjaliści z dziedzin sztucznej inteligencji, uczenia maszynowego, analizy danych, inżynierii oprogramowania i transformacji biznesowej.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span>Ponad 150 wdrożeń AI dla firm z różnych branż</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span>15+ lat doświadczenia w automatyzacji procesów</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span>Autorzy 30+ publikacji naukowych z zakresu AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span>Certyfikowani eksperci rozwiązań cloud i AI</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="/team-photo.jpg" 
                alt="Zespół Tudi Automations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
