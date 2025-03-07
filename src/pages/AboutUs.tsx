
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { VisionMission } from '@/components/about/VisionMission';
import { AboutTeam } from '@/components/about/AboutTeam';
import { CompanyStory } from '@/components/about/CompanyStory';
import { AboutCTA } from '@/components/about/AboutCTA';

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
      {/* Background pattern elements */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-health-primary/5 to-health-secondary/5 blur-3xl -z-10"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-health-accent/5 blur-3xl -z-10"></div>
      
      {/* Floating elements */}
      <div className="fixed top-[15%] left-[5%] w-16 h-16 rounded-xl bg-health-primary/10 animate-float -z-10" style={{animationDelay: '0.3s'}}></div>
      <div className="fixed top-[60%] left-[85%] w-12 h-12 rounded-xl bg-health-secondary/10 animate-float -z-10" style={{animationDelay: '1.2s'}}></div>
      <div className="fixed top-[75%] left-[15%] w-14 h-14 rounded-full bg-health-accent/10 animate-float -z-10" style={{animationDelay: '2.5s'}}></div>
      
      <Navbar />
      
      <main className="flex-grow">
        <AboutHero />
        
        {/* Colorful divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 w-1/6 h-2 bg-health-primary rounded-full"></div>
            <div className="absolute left-1/6 w-1/6 h-2 bg-health-secondary rounded-full"></div>
            <div className="absolute left-2/6 w-1/6 h-2 bg-health-accent rounded-full"></div>
            <div className="absolute left-3/6 w-1/6 h-2 bg-purple-400 rounded-full"></div>
            <div className="absolute left-4/6 w-1/6 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute left-5/6 w-1/6 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        <VisionMission />
        
        <div className="relative">
          <CompanyStory />
          
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-health-primary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        <div className="relative bg-gradient-to-b from-white to-health-light/30 py-10">
          <AboutTeam />
          
          {/* Side accent bars */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-health-primary/50 to-health-secondary/50 rounded-r-lg"></div>
          <div className="absolute right-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-t from-health-primary/50 to-health-secondary/50 rounded-l-lg"></div>
        </div>
        
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
