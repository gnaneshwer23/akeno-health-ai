
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import BiotechSolutionsHero from '@/components/biotech-solutions/BiotechSolutionsHero';
import SolutionsOverview from '@/components/biotech-solutions/SolutionsOverview';
import DrugDiscovery from '@/components/biotech-solutions/DrugDiscovery';
import SyntheticBiology from '@/components/biotech-solutions/SyntheticBiology';
import ClinicalResearch from '@/components/biotech-solutions/ClinicalResearch';
import BiotechSolutionsCTA from '@/components/biotech-solutions/BiotechSolutionsCTA';

const BiotechSolutions = () => {
  useEffect(() => {
    // Change page title
    document.title = 'Biotech & Pharma Solutions - Akeno Health AI';
    
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
        <BiotechSolutionsHero />
        <SolutionsOverview />
        <DrugDiscovery />
        <SyntheticBiology />
        <ClinicalResearch />
        <BiotechSolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default BiotechSolutions;
