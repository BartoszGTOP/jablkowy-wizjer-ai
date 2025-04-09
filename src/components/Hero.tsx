
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -top-64 -left-64 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="tudi-container relative pt-32 pb-24 md:pt-48 md:pb-40 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm"
        >
          Tech Up, Drive Innovation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-5xl mx-auto"
        >
          Automatyzacja AI, która 
          <span className="tudi-gradient-text"> oszczędza twoje pieniądze</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Transformujemy biznes poprzez inteligentną automatyzację procesów,
          wykorzystując najnowocześniejsze technologie sztucznej inteligencji.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button 
            className="tudi-button-primary text-base"
            onClick={() => {
              document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Darmowy Audyt AI
          </Button>
          
          <Button 
            variant="outline" 
            className="tudi-button-secondary text-base"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Umów Konsultację
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 relative w-full max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src="/dashboard-preview.png" 
              alt="AI Automation Platform" 
              className="w-full" 
            />
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6 w-[90%] max-w-3xl">
            <div className="hidden md:block p-3 bg-green-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Średnia redukcja kosztów operacyjnych</p>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold tudi-gradient-text">37%</span>
                <span className="text-foreground/70">w pierwszym roku współpracy</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-foreground/50">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
