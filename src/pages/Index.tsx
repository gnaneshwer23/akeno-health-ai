
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MissionStatement } from '@/components/MissionStatement';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { StatisticsSection } from '@/components/StatisticsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { QuantumCTA } from '@/components/quantum/QuantumCTA';

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
        
        <div className="relative">
          <StatisticsSection />
          
          {/* Healthcare-specific decorative elements */}
          <div className="absolute bottom-24 left-10 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5C13 6.10457 13.8954 7 15 7Z" className="text-health-primary" stroke="currentColor" strokeWidth="2"/>
              <path d="M12.6133 9.87717C12.2769 9.33347 11.6922 9 11.0518 9H6.94816C6.30778 9 5.72306 9.33347 5.38673 9.87717L3.10571 13.5186C2.70901 14.1223 2.81889 14.9459 3.36107 15.4321L7.1499 18.8731C7.55497 19.2367 8.1277 19.3926 8.68312 19.2921L9.66183 19.1042C9.88347 19.0596 10.1129 19.0373 10.3435 19.0373H13.6565C13.8871 19.0373 14.1165 19.0596 14.3382 19.1042L15.3169 19.2921C15.8723 19.3926 16.445 19.2367 16.8501 18.8731L20.6389 15.4321C21.1811 14.9459 21.291 14.1223 20.8943 13.5186L18.6133 9.87717C18.2769 9.33347 17.6922 9 17.0518 9H16" className="text-health-secondary" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 11H8V14H5L8 18H10L13 14H10V11Z" className="text-health-accent" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        <div className="relative">
          <FeaturesSection />
          
          {/* Enhanced side accent bars */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-health-primary/50 to-health-secondary/50 rounded-r-lg"></div>
          <div className="absolute right-0 top-1/3 bottom-1/3 w-2 bg-gradient-to-t from-health-primary/50 to-health-secondary/50 rounded-l-lg"></div>
        </div>
        
        <div className="relative bg-gradient-to-br from-health-light/30 to-white">
          <MissionStatement />
          <QuantumCTA />
          
          {/* Enhanced decorative circles */}
          <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border-4 border-dashed border-health-primary/20 -z-10 animate-rotate-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full border-4 border-dashed border-health-secondary/20 -z-10 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
        </div>
        
        <div className="relative">
          <TestimonialsSection />
          <PartnersSection />
          
          {/* Enhanced diamond pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIHN0cm9rZT0iIzZmNzJmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-30 -z-10"></div>
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
