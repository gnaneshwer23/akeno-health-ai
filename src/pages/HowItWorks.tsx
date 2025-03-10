
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/how-it-works/HeroSection';
import ProcessStepsSection from '@/components/how-it-works/ProcessStepsSection';
import InfographicSection from '@/components/how-it-works/InfographicSection';
import CallToActionSection from '@/components/how-it-works/CallToActionSection';
import { Footer } from '@/components/Footer';
import { AboutUsFloatingElements } from '@/components/about/page/AboutUsFloatingElements';
import { AboutUsDivider } from '@/components/about/page/AboutUsDivider';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      <AboutUsFloatingElements />
      
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutUsDivider />
        <ProcessStepsSection />
        <AboutUsDivider />
        <InfographicSection />
        <AboutUsDivider />
        <CallToActionSection />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
