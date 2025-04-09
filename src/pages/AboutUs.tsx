
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
        
        {/* Section 1: Vision & Mission with improved spacing */}
        <section id="vision-mission" className="pt-10">
          <VisionMission />
        </section>
        
        {/* Smooth transition divider */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-gray-50/30"></div>
        
        {/* Section 2: Our Values with enhanced glass effect */}
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
        
        {/* Animated connector between sections */}
        <div className="relative h-16 overflow-hidden">
          <motion.div 
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
        </div>
        
        {/* Section 3: Our Story with improved spacing */}
        <section id="story" className="py-8">
          <CompanySectionWrapper>
            <CompanyStory />
          </CompanySectionWrapper>
        </section>
        
        {/* Visual separator with dots pattern */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzY0NzVmZiIgZmlsbC1vcGFjaXR5PSIwLjUiLz48L3N2Zz4=')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70"></div>
        </div>
        
        {/* Section 4: Meet the Team with enhanced wrapper */}
        <section id="team" className="pb-8">
          <TeamSectionWrapper>
            <AboutTeam />
          </TeamSectionWrapper>
        </section>
        
        {/* Smooth gradient transition */}
        <div className="w-full h-16 bg-gradient-to-b from-white to-purple-50/10"></div>
        
        {/* Section 5: Careers & Culture */}
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
        
        {/* Smooth transition to CTA */}
        <div className="w-full h-24 bg-gradient-to-b from-purple-50/10 to-transparent"></div>
        
        {/* Final CTA with enhanced animation */}
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
