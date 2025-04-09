
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';

// Import components
import BiotechSolutionsHero from '@/components/biotech-solutions/BiotechSolutionsHero';
import SolutionsOverview from '@/components/biotech-solutions/SolutionsOverview';
import DrugDiscovery from '@/components/biotech-solutions/DrugDiscovery';
import SyntheticBiology from '@/components/biotech-solutions/SyntheticBiology';
import ClinicalResearch from '@/components/biotech-solutions/ClinicalResearch';
import ResponsivePharmaServiceFlow from '@/components/biotech-solutions/ResponsivePharmaServiceFlow';
import BiotechSolutionsCTA from '@/components/biotech-solutions/BiotechSolutionsCTA';

const BiotechSolutions = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <MainLayout>
      <main className="flex-grow">
        {/* Hero Section */}
        <BiotechSolutionsHero />
        
        {/* Biotech Solutions Overview */}
        <SolutionsOverview />
        
        {/* How Akeno's Platform Powers Biotech & Pharma Research */}
        <section className="py-16 px-6 bg-gradient-to-br from-health-primary/5 to-health-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                How Our Platform Powers Biotech & Pharma Research
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Akeno's AI platform seamlessly connects data sources with advanced analytics to deliver powerful research solutions.
              </p>
            </div>
            
            <ResponsivePharmaServiceFlow />
          </div>
        </section>
        
        {/* Drug Discovery & Clinical Trials */}
        <DrugDiscovery />
        
        {/* Synthetic Biology & Immune Therapy */}
        <SyntheticBiology />
        
        {/* Data-Driven Clinical Research */}
        <ClinicalResearch />
        
        {/* Call to Action */}
        <BiotechSolutionsCTA />
      </main>
    </MainLayout>
  );
};

export default BiotechSolutions;
