
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

export const CareersFooter: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-12">
        <CustomButton
          size="lg"
          variant="outline"
          to="/contact"
          className="group"
        >
          <span>Get Involved as a Collaborator</span>
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </CustomButton>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-10 text-health-dark/50 text-sm"
      >
        <p>Explore Careers → Coming Soon</p>
      </motion.div>
    </>
  );
};
