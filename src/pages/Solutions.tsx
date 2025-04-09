
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import StakeholderSolutions from '@/components/solutions/StakeholderSolutions';
import SolutionFeatures from '@/components/solutions/SolutionFeatures';
import EdgeFeatures from '@/components/solutions/EdgeFeatures';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-health-light/50 to-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with purpose statement */}
        <SolutionsHero />
        
        {/* Overview of the Akeno Health ecosystem */}
        <SolutionsOverview />
        
        {/* Visual separator */}
        <motion.div 
          className="py-8 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-health-primary/30 to-transparent"></div>
          </div>
        </motion.div>
        
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
