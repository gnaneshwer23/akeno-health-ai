
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const StoryFooter: React.FC = () => {
  const { toast } = useToast();
  
  const handleJoinMission = () => {
    toast({
      title: "Welcome to Our Mission",
      description: "Thank you for joining our mission to revolutionize healthcare with AI. Our team will be in touch shortly.",
    });
  };

  return (
    <motion.div 
      className="text-center mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className="text-xl font-bold text-health-dark mb-8">
        The future of healthcare is here – and Akeno Health is leading the way.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="default"
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 group w-full"
            onClick={handleJoinMission}
          >
            <div className="flex items-center">
              Join Our Mission
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="ml-2"
              >
                <ArrowRight size={16} />
              </motion.div>
            </div>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-amber-300 text-amber-900 hover:bg-amber-50 w-full"
          >
            <Link to="/how-it-works">
              Learn More About Our Journey
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
