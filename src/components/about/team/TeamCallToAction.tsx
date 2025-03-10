
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const TeamCallToAction: React.FC = () => {
  return (
    <motion.div 
      className="mt-16 px-8 py-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100 shadow-md text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <p className="text-health-dark/80 font-medium text-lg mb-8">
        We are backed by renowned medical professionals, AI pioneers, and biotech leaders who guide our mission towards a smarter, more efficient healthcare system.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90 w-full sm:w-auto"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              Join Our Team
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-health-primary/30 hover:border-health-primary/60 bg-white/50 backdrop-blur-sm w-full sm:w-auto"
            asChild
          >
            <Link to="/contact">Become a Partner</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
