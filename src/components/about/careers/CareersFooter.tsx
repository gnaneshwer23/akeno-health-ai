
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';

export const CareersFooter: React.FC = () => {
  const { toast } = useToast();
  
  const handleNotify = () => {
    toast({
      title: "You're on our radar!",
      description: "We'll notify you when new positions open up.",
    });
  };

  return (
    <div className="mt-16">
      <motion.div 
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h3 className="font-semibold text-2xl mb-4 text-health-dark">Join Our Team</h3>
          <p className="text-health-dark/70 text-lg max-w-2xl mx-auto mb-8">
            Be part of our mission to transform healthcare with AI. We're always looking for talented individuals who share our passion for innovation and making a difference.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <CustomButton 
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleNotify}
              icon={<Mail size={18} />}
              withArrow
            >
              Get Job Alerts
            </CustomButton>
            
            <CustomButton
              variant="outline"
              size="lg"
              to="/contact"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 w-full"
              icon={<ArrowRight size={16} />}
            >
              Contact Recruiting Team
            </CustomButton>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-6 text-health-dark/60 text-sm"
      >
        <Link to="/careers" className="hover:text-indigo-600 transition-colors underline">
          Full Careers Page Coming Soon
        </Link>
      </motion.div>
    </div>
  );
};
