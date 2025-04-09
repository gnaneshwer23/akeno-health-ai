
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';

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
    document.title = 'AI Studio - Akeno Health AI';
  }, []);
  
  const handleButtonClick = () => {
    toast({
      title: "AI Studio Feature",
      description: "This feature will be available in the full release. Stay tuned!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <AIStudioHero handleButtonClick={handleButtonClick} />
        
        {/* Purpose Section */}
        <PurposeSection />
        
        {/* Feature Sections */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10" />
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                Key Sections & Features
              </h2>
              <p className="text-gray-600 text-lg">
                Explore the powerful tools and capabilities that make AI Studio 
                the leading platform for healthcare AI development.
              </p>
            </motion.div>
            
            {/* Feature Components */}
            <FeatureList />
            
            {/* AI Plugin Marketplace */}
            <AIPluginMarketplace handleButtonClick={handleButtonClick} />
          </div>
        </section>
        
        {/* Call to Action */}
        <CallToAction handleButtonClick={handleButtonClick} />
      </motion.main>
      
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default AIStudio;
