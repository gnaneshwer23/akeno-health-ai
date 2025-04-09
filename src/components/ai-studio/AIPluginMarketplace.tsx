
import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Package, Zap, ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

interface AIPluginMarketplaceProps {
  handleButtonClick: () => void;
}

const pluginCategories = [
  { name: "Visualization Tools", count: 24 },
  { name: "Data Preprocessing", count: 18 },
  { name: "Explainability", count: 15 },
  { name: "Disease Models", count: 31 }
];

const AIPluginMarketplace: React.FC<AIPluginMarketplaceProps> = ({ handleButtonClick }) => {
  return (
    <div className="mt-24 mb-16">
      <motion.div 
        className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-400 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-400 rounded-full"></div>
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5" 
               width="800" height="800" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/20 rounded-xl mr-4">
                <Puzzle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">AI Plugin Marketplace</h3>
            </div>
            
            <p className="text-lg mb-8 text-blue-100">
              Install & extend prebuilt AI modules from trusted research teams and pharma partners. 
              Access specialized algorithms, visualization tools, and industry-specific models.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pluginCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 p-4 rounded-lg flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="flex items-center gap-2">
                    {index % 2 === 0 ? 
                      <Package className="h-4 w-4 text-blue-200" /> : 
                      <Zap className="h-4 w-4 text-blue-200" />
                    }
                    <span className="text-white">{category.name}</span>
                  </div>
                  <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <CustomButton 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20 group"
              onClick={handleButtonClick}
              rightIcon={<ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />}
            >
              Explore Marketplace
            </CustomButton>
          </div>
          
          <div className="md:w-1/3 flex items-center justify-center">
            <motion.div 
              className="relative h-48 w-48"
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 rotate-45 opacity-80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 -rotate-45 opacity-80"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-lg bg-white flex items-center justify-center">
                  <Puzzle className="h-10 w-10 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIPluginMarketplace;
