
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MissionStatement } from '@/components/MissionStatement';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { StatisticsSection } from '@/components/StatisticsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';

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
    document.title = 'Transforming Healthcare with AI & Precision Medicine';
    
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
        <Hero />
        
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
        
        <div className="relative">
          <StatisticsSection />
          <MissionStatement />
          
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-health-primary/20 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        <div className="relative bg-gradient-to-b from-white to-health-light/30 py-10">
          <FeaturesSection />
          
          {/* Side accent bar */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-health-primary/50 to-health-secondary/50 rounded-r-lg"></div>
          <div className="absolute right-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-t from-health-primary/50 to-health-secondary/50 rounded-l-lg"></div>
        </div>
        
        <div className="relative bg-gradient-to-br from-health-light/30 to-white">
          <TestimonialsSection />
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border-4 border-dashed border-health-primary/20 -z-10"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full border-4 border-dashed border-health-secondary/20 -z-10"></div>
        </div>
        
        <div className="relative">
          <PartnersSection />
          
          {/* Diamond pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIHN0cm9rZT0iIzZmNzJmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-30 -z-10"></div>
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
