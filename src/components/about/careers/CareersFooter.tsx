
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export const CareersFooter: React.FC = () => {
  const { toast } = useToast();
  
  const handleNotify = () => {
    toast({
      title: "You're on our radar!",
      description: "We'll notify you when new positions open up.",
    });
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 mb-8 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold text-xl mb-4 text-center">Be the First to Know About Opportunities</h3>
        <p className="text-health-dark/70 text-center mb-6">
          Join our talent community to stay updated on future positions and company news
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 flex-grow"
            onClick={handleNotify}
          >
            <Mail size={16} className="mr-2" />
            Get Job Alerts
          </Button>
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 flex-grow"
            asChild
          >
            <Link to="/contact">
              Contact Recruiting Team
            </Link>
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-4 text-health-dark/60 text-sm"
      >
        <p>Full Careers Page Coming Soon</p>
      </motion.div>
    </div>
  );
};
