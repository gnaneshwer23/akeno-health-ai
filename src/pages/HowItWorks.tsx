
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
import AnimatedJourneyFlow from '@/components/how-it-works/AnimatedJourneyFlow';

const HowItWorks = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent default on all button clicks in the component
  useEffect(() => {
    const handleButtonClicks = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.tagName === 'BUTTON' || 
          target.closest('button') || 
          target.tagName === 'A' ||
          target.closest('a')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('click', handleButtonClicks, true);
    
    return () => {
      document.removeEventListener('click', handleButtonClicks, true);
    };
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
        <AnimatedJourneyFlow />
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
