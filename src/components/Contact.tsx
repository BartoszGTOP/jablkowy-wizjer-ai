
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, this would send the data to a backend
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      variant: "success",
    });
    
    reset();
  };

  return (
    <section id="contact" className="tudi-section bg-background">
      <div className="tudi-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 opacity-0 animate-fade-in">
            <span className="tudi-gradient-text">Umów się</span> na konsultację
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Skontaktuj się z nami, aby omówić, jak możemy pomóc Twojej firmie wykorzystać pełny potencjał automatyzacji AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Porozmawiajmy o Twoich potrzebach</h3>
              <p className="text-foreground/70 mb-6">
                Niezależnie od wielkości Twojej firmy czy branży, w której działasz, nasze rozwiązania AI mogą pomóc Ci zoptymalizować procesy i znacząco obniżyć koszty. Umów się na bezpłatną konsultację z naszymi ekspertami.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:kontakt@tudi.pl" className="text-primary hover:underline">kontakt@tudi.pl</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adres</h4>
                    <p className="text-foreground/70">
                      ul. Technologiczna 15<br/>
                      00-001 Warszawa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Godziny pracy</h4>
                    <p className="text-foreground/70">
                      Poniedziałek - Piątek: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold mb-6">Wyślij wiadomość</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-1">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="contactName"
                      className="w-full border-border/60 rounded-lg"
                      {...register("contactName", { required: "To pole jest wymagane" })}
                    />
                    {errors.contactName && <p className="text-destructive text-sm mt-1">{errors.contactName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-1">
                      Email *
                    </label>
                    <Input
                      id="contactEmail"
                      type="email"
                      className="w-full border-border/60 rounded-lg"
                      {...register("contactEmail", { 
                        required: "To pole jest wymagane",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Niepoprawny adres email"
                        }
                      })}
                    />
                    {errors.contactEmail && <p className="text-destructive text-sm mt-1">{errors.contactEmail.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Temat *
                  </label>
                  <Input
                    id="subject"
                    className="w-full border-border/60 rounded-lg"
                    {...register("subject", { required: "To pole jest wymagane" })}
                  />
                  {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Wiadomość *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="w-full border-border/60 rounded-lg resize-none"
                    {...register("message", { required: "To pole jest wymagane" })}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <Button type="submit" className="tudi-button-primary w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
