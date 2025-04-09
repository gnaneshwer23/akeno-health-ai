
import React from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisionMissionCTA = () => {
  const handleLearnMore = () => {
    toast.info("Navigation", {
      description: "Exploring more about our mission and vision."
    });
  };

  return (
    <motion.div 
      className="flex justify-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link 
        to="/contact" 
        onClick={handleLearnMore}
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
      >
        Learn more about our approach
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};
