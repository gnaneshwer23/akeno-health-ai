
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
      
      <main className="flex-grow z-10 pt-20">
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
        
        {/* Vision & Mission Section */}
        <section id="vision-mission" className="pt-10">
          <VisionMission />
        </section>
        
        {/* Smooth transition divider */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-gray-50/30"></div>
        
        {/* Our Story Section */}
        <section id="story" className="py-8">
          <CompanySectionWrapper>
            <CompanyStory />
          </CompanySectionWrapper>
        </section>
        
        {/* Visual separator with animation */}
        <motion.div 
          className="w-full h-px max-w-4xl mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
        </motion.div>
        
        {/* Meet the Team Section */}
        <section id="team" className="py-12">
          <TeamSectionWrapper>
            <AboutTeam />
          </TeamSectionWrapper>
        </section>
        
        {/* Smooth gradient transition */}
        <div className="w-full h-16 bg-gradient-to-b from-white to-purple-50/10"></div>
        
        {/* Careers & Culture Section */}
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
