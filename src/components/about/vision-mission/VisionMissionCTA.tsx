
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const VisionMissionCTA = () => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className="text-xl font-medium text-health-dark mb-8">
        We are not just improving healthcare – we are redefining it.
      </p>
      
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 group"
          asChild
        >
          <Link to="/contact" className="flex items-center gap-2">
            Join Us in the AI Healthcare Revolution
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
