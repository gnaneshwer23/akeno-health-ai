
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import StakeholderSolutions from '@/components/solutions/StakeholderSolutions';
import SolutionFeatures from '@/components/solutions/SolutionFeatures';
import EdgeFeatures from '@/components/solutions/EdgeFeatures';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import { motion } from 'framer-motion';

// Import Quantum Components
import { QuantumApplications } from '@/components/quantum/QuantumApplications';
import { QuantumBenefits } from '@/components/quantum/QuantumBenefits';

const Solutions = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
        
        {/* Quantum Computing Applications */}
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
        
        {/* Quantum Computing Section */}
        <div id="quantum-computing" className="pt-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quantum Computing & AI in Healthcare
          </motion.h2>
          
          <QuantumApplications />
          <QuantumBenefits />
        </div>
        
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
