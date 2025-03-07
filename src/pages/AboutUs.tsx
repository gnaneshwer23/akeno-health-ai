
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
      {/* Enhanced background elements */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCA2MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAwIDAgTCA2MCA2MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-10 -z-10"></div>
      
      {/* Large gradient blobs */}
      <div className="fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-b from-health-primary/10 via-health-secondary/5 to-transparent blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-0 w-2/3 h-screen bg-gradient-to-t from-health-secondary/10 via-health-accent/5 to-transparent blur-3xl -z-10"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-health-accent/10 blur-3xl -z-10"></div>
      
      {/* Animated floating elements */}
      <div className="fixed top-[10%] left-[10%] w-20 h-20 rounded-xl bg-health-primary/10 animate-float -z-10" style={{animationDelay: '0.3s'}}></div>
      <div className="fixed top-[30%] right-[15%] w-24 h-24 rounded-full bg-health-secondary/10 animate-float -z-10" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-[70%] left-[20%] w-16 h-16 rounded-2xl bg-health-accent/10 animate-float -z-10" style={{animationDelay: '2.8s'}}></div>
      <div className="fixed top-[45%] right-[8%] w-12 h-12 rounded-lg bg-purple-400/10 animate-float -z-10" style={{animationDelay: '4.2s'}}></div>
      <div className="fixed top-[85%] right-[25%] w-14 h-14 rounded-full bg-blue-400/10 animate-float -z-10" style={{animationDelay: '3.7s'}}></div>
      
      <Navbar />
      
      <main className="flex-grow z-10">
        <AboutHero />
        
        {/* Enhanced colorful divider with animation */}
        <div className="relative py-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-6 gap-1 h-2">
              <div className="bg-health-primary rounded-full transform hover:scale-105 transition-transform"></div>
              <div className="bg-health-secondary rounded-full transform hover:scale-105 transition-transform" style={{transitionDelay: '0.1s'}}></div>
              <div className="bg-health-accent rounded-full transform hover:scale-105 transition-transform" style={{transitionDelay: '0.2s'}}></div>
              <div className="bg-purple-400 rounded-full transform hover:scale-105 transition-transform" style={{transitionDelay: '0.3s'}}></div>
              <div className="bg-blue-400 rounded-full transform hover:scale-105 transition-transform" style={{transitionDelay: '0.4s'}}></div>
              <div className="bg-green-400 rounded-full transform hover:scale-105 transition-transform" style={{transitionDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
        
        <VisionMission />
        
        <div className="relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-health-primary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-health-secondary/20 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <CompanyStory />
        </div>
        
        <div className="relative bg-gradient-to-b from-white via-health-light/30 to-white py-10">
          {/* Side accent bars with glow effect */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-3 bg-gradient-to-b from-health-primary/60 to-health-secondary/60 rounded-r-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <div className="absolute right-0 top-1/3 bottom-1/3 w-3 bg-gradient-to-t from-health-primary/60 to-health-secondary/60 rounded-l-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-dashed border-health-primary/20 animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-2 border-dashed border-health-secondary/20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
          
          <AboutTeam />
        </div>
        
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
