
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { VisionMission } from '@/components/about/VisionMission';
import { AboutTeam } from '@/components/about/AboutTeam';
import { CompanyStory } from '@/components/about/CompanyStory';
import { AboutCTA } from '@/components/about/AboutCTA';
import { AboutUsBackground } from '@/components/about/page/AboutUsBackground';
import { AboutUsFloatingElements } from '@/components/about/page/AboutUsFloatingElements';
import { AboutUsConnectedDots } from '@/components/about/page/AboutUsConnectedDots';
import { AboutUsDivider } from '@/components/about/page/AboutUsDivider';
import { CompanySectionWrapper } from '@/components/about/page/CompanySectionWrapper';
import { TeamSectionWrapper } from '@/components/about/page/TeamSectionWrapper';
import { PartnersCollaboration } from '@/components/about/PartnersCollaboration';
import { CompanyValues } from '@/components/about/CompanyValues';
import { CareersSection } from '@/components/about/CareersSection';

const AboutUs = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Change page title
    document.title = 'About Us - Akeno Health AI';
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background elements */}
      <AboutUsBackground />
      
      {/* Floating elements */}
      <AboutUsFloatingElements />
      
      {/* Connected dots */}
      <AboutUsConnectedDots />
      
      <Navbar />
      
      <main className="flex-grow z-10">
        <AboutHero />
        
        {/* Colorful divider */}
        <AboutUsDivider />
        
        {/* Section 1: Vision & Mission */}
        <VisionMission />
        
        {/* Section 2: Our Story */}
        <CompanySectionWrapper>
          <CompanyStory />
        </CompanySectionWrapper>
        
        {/* Section 3: Meet the Team */}
        <TeamSectionWrapper>
          <AboutTeam />
        </TeamSectionWrapper>
        
        {/* Section 4: Partners & Collaborations */}
        <PartnersCollaboration />
        
        {/* Section 5: Our Values */}
        <CompanyValues />
        
        {/* Section 6: Careers & Culture */}
        <CareersSection />
        
        {/* Section 7: Final CTA */}
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
