
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

interface AIStudioHeroProps {
  handleButtonClick: () => void;
}

const AIStudioHero: React.FC<AIStudioHeroProps> = ({ handleButtonClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500/10 p-4 rounded-full">
                <Brain size={48} className="text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Studio – The Brain Behind Predictive Precision Medicine
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Empowering researchers, data scientists, and clinicians to explore, build, and deploy 
              explainable healthcare AI with confidence and control.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <CustomButton 
                size="lg" 
                variant="primary" 
                onClick={handleButtonClick}
              >
                Launch AI Studio
              </CustomButton>
              <CustomButton 
                size="lg" 
                variant="outline" 
                onClick={handleButtonClick}
              >
                Explore Sample Models
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <svg className="absolute top-0 right-0 text-blue-500/5" width="400" height="400" viewBox="0 0 100 100">
          <defs>
            <pattern id="polka-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle fill="currentColor" cx="2.5" cy="2.5" r="0.8" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
        </svg>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default AIStudioHero;
