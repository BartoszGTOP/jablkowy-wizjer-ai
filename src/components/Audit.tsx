
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2, Clock, FileSpreadsheet, DollarSign } from "lucide-react";

const Audit = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, this would send the data to a backend
    
    toast({
      title: "Formularz wysłany!",
      description: "Dziękujemy za zgłoszenie. Skontaktujemy się wkrótce, aby umówić termin audytu.",
      variant: "success",
    });
    
    reset();
  };

  return (
    <section id="audit" className="tudi-section bg-muted/50">
      <div className="tudi-container">
        <div className="text-center mb-16">
          <h2 className="mb-4 opacity-0 animate-fade-in">
            Darmowy <span className="tudi-gradient-text">audyt AI</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in stagger-1">
            Przeprowadzimy bezpłatną analizę procesów w Twojej firmie i przedstawimy potencjalne obszary do automatyzacji oraz możliwe oszczędności.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold mb-6">Umów się na darmowy audyt</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      className="w-full border-border/60 rounded-lg"
                      {...register("name", { required: "To pole jest wymagane" })}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                      Firma *
                    </label>
                    <Input
                      id="company"
                      className="w-full border-border/60 rounded-lg"
                      {...register("company", { required: "To pole jest wymagane" })}
                    />
                    {errors.company && <p className="text-destructive text-sm mt-1">{errors.company.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full border-border/60 rounded-lg"
                    {...register("email", { 
                      required: "To pole jest wymagane",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Niepoprawny adres email"
                      }
                    })}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    className="w-full border-border/60 rounded-lg"
                    {...register("phone")}
                  />
                </div>
                
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1">
                    Jaki obszar firmy chcesz zautomatyzować? *
                  </label>
                  <Textarea
                    id="area"
                    rows={4}
                    className="w-full border-border/60 rounded-lg resize-none"
                    {...register("area", { required: "To pole jest wymagane" })}
                  />
                  {errors.area && <p className="text-destructive text-sm mt-1">{errors.area.message}</p>}
                </div>
                
                <Button type="submit" className="tudi-button-primary w-full">
                  Umów darmowy audyt
                </Button>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <h3 className="text-2xl font-bold mb-6">Co oferuje nasz darmowy audyt?</h3>
                <p className="text-foreground/70 mb-8">
                  Nasz bezpłatny audyt AI to dogłębna analiza procesów w Twojej firmie, która pozwala zidentyfikować obszary gdzie automatyzacja może przynieść największe korzyści.
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <div className="flex gap-5 mb-8">
                  <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <FileSpreadsheet className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Analiza procesów</h4>
                    <p className="text-foreground/70">
                      Identyfikacja procesów, które mogą zostać zautomatyzowane przy użyciu AI i najnowszych technologii.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5 mb-8">
                  <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Kalkulacja oszczędności</h4>
                    <p className="text-foreground/70">
                      Szczegółowe wyliczenie potencjalnych oszczędności finansowych i czasowych po wdrożeniu automatyzacji.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Plan wdrożenia</h4>
                    <p className="text-foreground/70">
                      Propozycja harmonogramu wdrożenia rozwiązań automatyzacyjnych, dostosowanego do potrzeb i możliwości Twojej firmy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white opacity-0 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <h4 className="text-xl font-semibold mb-4">W ramach audytu otrzymasz:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-white" />
                    <span>Raport z analizy procesów biznesowych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-white" />
                    <span>Kalkulację potencjalnych oszczędności</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-white" />
                    <span>Propozycję rozwiązań automatyzacyjnych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-white" />
                    <span>Dostosowany do potrzeb firmy plan wdrożenia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-white" />
                    <span>2-godzinną konsultację z naszymi ekspertami</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;
