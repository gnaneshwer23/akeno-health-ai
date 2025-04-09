
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { StakeholdersSection } from '@/components/home/StakeholdersSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { TechDifferentiatorsSection } from '@/components/home/TechDifferentiatorsSection';
import { TestimonialsPartnersSection } from '@/components/home/TestimonialsPartnersSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';
import AIFlowDiagram from '@/components/home/AIFlowDiagram';

const Index = () => {
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
    document.title = 'Akeno Health – The Future of AI-Driven Healthcare';
    
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
      <div className="fixed top-[20%] left-[10%] w-16 h-16 rounded-xl bg-health-primary/10 animate-float -z-10" style={{animationDelay: '0.5s'}}></div>
      <div className="fixed top-[65%] left-[80%] w-12 h-12 rounded-xl bg-health-secondary/10 animate-float -z-10" style={{animationDelay: '1.5s'}}></div>
      <div className="fixed top-[80%] left-[20%] w-14 h-14 rounded-full bg-health-accent/10 animate-float -z-10" style={{animationDelay: '2s'}}></div>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with new content */}
        <Hero />
        
        {/* Enhanced colorful divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 overflow-hidden flex items-center">
            <div className="w-full h-2 flex">
              <div className="w-1/6 h-full bg-gradient-to-r from-health-primary to-health-primary rounded-full transform scale-x-90"></div>
              <div className="w-1/6 h-full bg-gradient-to-r from-health-primary to-health-secondary rounded-full transform scale-x-90"></div>
              <div className="w-1/6 h-full bg-gradient-to-r from-health-secondary to-health-accent rounded-full transform scale-x-90"></div>
              <div className="w-1/6 h-full bg-gradient-to-r from-health-accent to-purple-400 rounded-full transform scale-x-90"></div>
              <div className="w-1/6 h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transform scale-x-90"></div>
              <div className="w-1/6 h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full transform scale-x-90"></div>
            </div>
          </div>
        </div>
        
        {/* Section 2: How It Works */}
        <HowItWorksSection />
        
        {/* AI Flow Diagram - Bridging Data, Intelligence, and Care */}
        <div className="py-12 px-6">
          <AIFlowDiagram />
        </div>
        
        {/* Section 3: Stakeholders */}
        <StakeholdersSection />
        
        {/* Section 4: Use Cases */}
        <UseCasesSection />
        
        {/* Section 5: Tech Differentiators */}
        <TechDifferentiatorsSection />
        
        {/* Section 6: Testimonials & Partners */}
        <TestimonialsPartnersSection />
        
        {/* Section 7: Final CTA */}
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
