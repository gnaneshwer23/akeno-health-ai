
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Code, Network } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

interface AIStudioHeroProps {
  handleButtonClick: () => void;
}

const AIStudioHero: React.FC<AIStudioHeroProps> = ({ handleButtonClick }) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-5 rounded-full relative">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-500/10"
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.7, 0.2, 0.7] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                <Brain size={54} className="text-blue-600" />
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 gap-2">
                <Sparkles size={16} className="text-purple-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next-Generation AI Technology
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Studio – The Brain Behind Predictive Precision Medicine
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering researchers, data scientists, and clinicians to explore, build, and deploy 
              explainable healthcare AI with confidence and control.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <CustomButton 
                size="lg" 
                variant="primary" 
                onClick={handleButtonClick}
                className="min-w-[180px] bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/20 group"
                icon={<Code className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />}
              >
                Launch AI Studio
              </CustomButton>
              <CustomButton 
                size="lg" 
                variant="outline" 
                onClick={handleButtonClick}
                className="min-w-[180px] border-blue-300 text-blue-700 hover:bg-blue-50"
                icon={<Network className="mr-2 h-4 w-4" />}
              >
                Explore Sample Models
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <svg className="absolute top-0 right-0 text-blue-500/5" width="400" height="400" viewBox="0 0 100 100">
          <defs>
            <pattern id="polka-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle fill="currentColor" cx="2.5" cy="2.5" r="0.8" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
        </svg>
        
        <motion.div 
          className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-indigo-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default AIStudioHero;
