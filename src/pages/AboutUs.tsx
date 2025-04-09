
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
import { motion } from 'framer-motion';

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
        {/* Hero Section with Enhanced Animation */}
        <AboutHero />
        
        {/* Colorful divider with pulse animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AboutUsDivider />
        </motion.div>
        
        {/* Section 1: Vision & Mission */}
        <section id="vision-mission">
          <VisionMission />
        </section>
        
        {/* Section 2: Our Values with glass effect */}
        <section id="values" className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-blue-50/30 -z-10"
          />
          <CompanyValues />
        </section>
        
        {/* Section 3: Our Story */}
        <section id="story">
          <CompanySectionWrapper>
            <CompanyStory />
          </CompanySectionWrapper>
        </section>
        
        {/* Section 4: Meet the Team */}
        <section id="team">
          <TeamSectionWrapper>
            <AboutTeam />
          </TeamSectionWrapper>
        </section>
        
        {/* Section 5: Partners & Collaborations */}
        <section id="partners" className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-health-light/10 to-white -z-10"
          />
          <PartnersCollaboration />
        </section>
        
        {/* Section 6: Careers & Culture */}
        <section id="careers" className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-indigo-50/30 -z-10"
          />
          <CareersSection />
        </section>
        
        {/* Section 7: Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutCTA />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
