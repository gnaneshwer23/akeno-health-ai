
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';

interface CallToActionProps {
  handleButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ handleButtonClick }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start Building Ethical, Explainable AI That Saves Lives
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
            <CustomButton 
              size="lg" 
              variant="ghost" 
              onClick={handleButtonClick}
            >
              Request Collaboration Access
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
