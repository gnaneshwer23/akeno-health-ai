
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/how-it-works/HeroSection';
import ProcessStepsSection from '@/components/how-it-works/ProcessStepsSection';
import CallToActionSection from '@/components/how-it-works/CallToActionSection';
import { Footer } from '@/components/Footer';
import { AboutUsFloatingElements } from '@/components/about/page/AboutUsFloatingElements';
import { AboutUsDivider } from '@/components/about/page/AboutUsDivider';
import { motion } from 'framer-motion';
import AnimatedJourneyFlow from '@/components/how-it-works/AnimatedJourneyFlow';
import { ExplainerSection } from '@/components/ExplainerSection';
import { toast } from '@/hooks/use-toast';

const HowItWorks = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'How It Works - Akeno Health AI';
  }, []);

  // Handle anchor link smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
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
        
        {/* Core Process Section */}
        <ProcessStepsSection />
        <AboutUsDivider />
        
        {/* Animated Journey Section */}
        <AnimatedJourneyFlow />
        <AboutUsDivider />
        
        {/* Explainer Section */}
        <ExplainerSection className="bg-white" />
        <AboutUsDivider />
        
        {/* Final CTA Section */}
        <CallToActionSection />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
