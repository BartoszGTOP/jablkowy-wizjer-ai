
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Team from "../components/Team";
import Audit from "../components/Audit";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      <Toaster />
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Team />
      <Audit />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
