
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const HeroDiscoverButton = () => {
  return (
    <motion.div 
      className="hidden md:flex justify-center"
      initial="hidden"
      animate="visible"
      custom={5}
      variants={fadeUpVariants}
    >
      <a href="#vision-mission" className="flex flex-col items-center text-health-primary/70 hover:text-health-primary transition-colors">
        <span className="text-sm mb-2">Discover More</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-indigo-500" />
        </motion.div>
      </a>
    </motion.div>
  );
};
