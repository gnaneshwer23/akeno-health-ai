
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MissionStatement } from '@/components/MissionStatement';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { ExplainerSection } from '@/components/ExplainerSection';
import { Footer } from '@/components/Footer';
import { StatisticsSection } from '@/components/StatisticsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { CertificationsSection } from '@/components/CertificationsSection';

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
    document.title = 'Akeno Health AI - Precision Healthcare';
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <StatisticsSection />
        <MissionStatement />
        <FeaturesSection />
        <ExplainerSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
        <CertificationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
