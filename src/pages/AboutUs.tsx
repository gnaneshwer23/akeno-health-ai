
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
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';

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
      
      <main className="flex-grow z-10 pt-16">
        {/* Hero Section with Enhanced Animation */}
        <AboutHero />
        
        {/* Colorful divider with pulse animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="py-2"
        >
          <AboutUsDivider />
        </motion.div>
        
        {/* Vision & Mission Section - Improved spacing */}
        <section id="vision-mission" className="py-8 md:py-12">
          <VisionMission />
        </section>
        
        {/* Our Story Section with enhanced timeline */}
        <section id="story" className="py-8 md:py-12 bg-gradient-to-b from-transparent to-gray-50/20">
          <CompanySectionWrapper>
            <CompanyStory />
          </CompanySectionWrapper>
        </section>
        
        {/* Visual separator with animation */}
        <motion.div 
          className="w-full h-px max-w-4xl mx-auto my-4"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
        </motion.div>
        
        {/* Meet the Team Section with proper spacing */}
        <section id="team" className="py-8 md:py-12">
          <TeamSectionWrapper>
            <AboutTeam />
          </TeamSectionWrapper>
        </section>
        
        {/* Single CTA section with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <AboutCTA />
        </motion.div>
      </main>
      
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AboutUs;
