
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { AboutHero } from '@/components/about/AboutHero';
import { VisionMission } from '@/components/about/VisionMission';
import { AboutTeam } from '@/components/about/AboutTeam';
import { CompanyStory } from '@/components/about/CompanyStory';
import { AboutCTA } from '@/components/about/AboutCTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <AboutHero />
        <VisionMission />
        <AboutTeam />
        <CompanyStory />
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
