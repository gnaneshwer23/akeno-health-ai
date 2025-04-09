
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

// Import refactored components
import AIStudioHero from '@/components/ai-studio/AIStudioHero';
import PurposeSection from '@/components/ai-studio/PurposeSection';
import FeatureList from '@/components/ai-studio/FeatureList';
import AIPluginMarketplace from '@/components/ai-studio/AIPluginMarketplace';
import CallToAction from '@/components/ai-studio/CallToAction';

const AIStudio = () => {
  const { toast } = useToast();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <AIStudioHero handleButtonClick={handleButtonClick} />
        
        {/* Purpose Section */}
        <PurposeSection />
        
        {/* Feature Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Key Sections & Features
              </h2>
            </div>
            
            {/* Feature Components */}
            <FeatureList />
            
            {/* AI Plugin Marketplace */}
            <AIPluginMarketplace handleButtonClick={handleButtonClick} />
          </div>
        </section>
        
        {/* Call to Action */}
        <CallToAction handleButtonClick={handleButtonClick} />
      </main>
      
      <Footer />
    </div>
  );
};

export default AIStudio;
