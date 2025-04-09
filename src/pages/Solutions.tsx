
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import StakeholderSolutions from '@/components/solutions/StakeholderSolutions';
import SolutionFeatures from '@/components/solutions/SolutionFeatures';
import EdgeFeatures from '@/components/solutions/EdgeFeatures';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-health-light/50 to-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with purpose statement */}
        <SolutionsHero />
        
        {/* Overview of the Akeno Health ecosystem */}
        <SolutionsOverview />
        
        {/* Solutions for different stakeholders */}
        <StakeholderSolutions />
        
        {/* Key solution features */}
        <SolutionFeatures />
        
        {/* What sets Akeno apart */}
        <EdgeFeatures />
        
        {/* Call to action */}
        <SolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
