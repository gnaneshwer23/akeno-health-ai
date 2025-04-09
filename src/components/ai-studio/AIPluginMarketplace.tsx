
import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

interface AIPluginMarketplaceProps {
  handleButtonClick: () => void;
}

const AIPluginMarketplace: React.FC<AIPluginMarketplaceProps> = ({ handleButtonClick }) => {
  return (
    <div className="mt-16">
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-400 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="p-3 bg-white/20 rounded-xl mr-4">
            <Puzzle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">AI Plugin Marketplace</h3>
        </div>
        
        <p className="text-lg mb-6 text-blue-100">
          Install & extend prebuilt AI modules from trusted research teams and pharma partners.
        </p>
        
        <CustomButton 
          variant="outline" 
          size="lg"
          className="border-white text-white hover:bg-white/20"
          onClick={handleButtonClick}
        >
          Explore Marketplace
        </CustomButton>
      </motion.div>
    </div>
  );
};

export default AIPluginMarketplace;
