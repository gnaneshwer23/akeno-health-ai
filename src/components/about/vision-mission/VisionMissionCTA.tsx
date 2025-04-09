
import React from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';

export const VisionMissionCTA = () => {
  const handleLearnMore = () => {
    toast.success("Navigation", {
      description: "Exploring more about our mission and vision."
    });
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CustomButton 
        to="/contact" 
        variant="primary"
        size="lg"
        onClick={handleLearnMore}
        withArrow
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
      >
        Learn more about our approach
      </CustomButton>
      
      <CustomButton
        to="/how-it-works"
        variant="outline"
        size="lg"
        className="border-indigo-300 text-indigo-700 hover:bg-indigo-50"
      >
        Explore our technology
      </CustomButton>
    </motion.div>
  );
};
