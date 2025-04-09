
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. Buttons are intentionally non-functional.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-health-primary/10 to-health-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Healthcare?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our products and discover how Akeno Health is revolutionizing precision medicine with cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CustomButton 
              size="lg" 
              variant="primary" 
              onClick={handleButtonClick}
            >
              Schedule a Demo
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="outline" 
              onClick={handleButtonClick}
            >
              Contact Sales
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
