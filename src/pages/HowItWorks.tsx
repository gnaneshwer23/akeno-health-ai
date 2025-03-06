
import React from 'react';
import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/how-it-works/HeroSection';
import ProcessStepsSection from '@/components/how-it-works/ProcessStepsSection';
import InfographicSection from '@/components/how-it-works/InfographicSection';
import CallToActionSection from '@/components/how-it-works/CallToActionSection';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ProcessStepsSection />
        <InfographicSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default HowItWorks;
