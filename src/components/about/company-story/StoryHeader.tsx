
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

interface StoryHeaderProps {
  questions: string[];
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({ questions }) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <motion.div 
        className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 text-sm font-medium mb-5"
        variants={fadeUpVariants}
        custom={1}
      >
        <Sparkles size={16} className="text-amber-500 mr-2" />
        Our Story
      </motion.div>
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
        variants={fadeUpVariants}
        custom={2}
      >
        <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          The Journey from Idea to Global Healthcare Transformation
        </span>
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-8"
        variants={fadeUpVariants}
        custom={3}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
      </motion.div>
      
      <motion.p 
        className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-6"
        variants={fadeUpVariants}
        custom={4}
      >
        Akeno Health was founded on a simple yet profound idea:
      </motion.p>
    </motion.div>
  );
};
