
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Hero } from '@/components/Hero';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { StakeholdersSection } from '@/components/home/StakeholdersSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { TechDifferentiatorsSection } from '@/components/home/TechDifferentiatorsSection';
import { TestimonialsPartnersSection } from '@/components/home/TestimonialsPartnersSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { MissionStatement } from '@/components/mission/MissionStatement';
import ResponsiveServiceFlow from '@/components/home/ResponsiveServiceFlow';
import CoreProducts from '@/components/products/CoreProducts';
import ProductsRealWorldEvidence from '@/components/products/ProductsRealWorldEvidence';
import EnhancedAIFlowDiagram from '@/components/home/EnhancedAIFlowDiagram';

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      {/* Enhanced divider with animated accent */}
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
      
      {/* Aligned Features Section */}
      <FeaturesSection />
      
      {/* Product Overview Section */}
      <div id="products">
        <CoreProducts />
      </div>
      
      {/* Featured Real World Evidence Section */}
      <ProductsRealWorldEvidence />
      
      {/* NEW: Enhanced AI Flow Diagram - Bridging Data, Intelligence, and Care */}
      <EnhancedAIFlowDiagram />
      
      {/* Service Flow Diagram - shows how data flows through the Akeno system */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-health-dark">How Your Health Data Transforms into Care</h3>
            <p className="text-muted-foreground mt-2">Secure, intelligent processing from data collection to personalized insights</p>
          </div>
          <ResponsiveServiceFlow />
        </div>
      </div>
      
      {/* Mission Statement with services aligned to backend capabilities */}
      <MissionStatement />
      
      {/* How It Works section - simplified explanation of the platform */}
      <HowItWorksSection />
      
      {/* Use Cases Section - real examples of platform capabilities */}
      <UseCasesSection />
      
      {/* Stakeholders Section */}
      <StakeholdersSection />
      
      {/* Technical Differentiators that align with backend capabilities */}
      <TechDifferentiatorsSection />
      
      {/* Social proof */}
      <TestimonialsPartnersSection />
      
      {/* Final call to action */}
      <FinalCTASection />
    </MainLayout>
  );
};

export default Home;
