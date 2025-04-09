
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { CustomButton } from '@/components/ui/custom-button';
import { Link } from 'react-router-dom';

export const AboutCTA = () => {
  const handleDemoRequest = () => {
    toast.success("Demo Request Received", {
      description: "Thanks for your interest! We'll be in touch shortly to schedule your personalized demo.",
    });
  };
  
  const handleContactRequest = () => {
    toast.success("Contact Request Received", {
      description: "Thank you for reaching out. Our team will contact you soon.",
    });
  };
  
  return (
    <section className="px-6 pt-4 pb-20 relative overflow-hidden">
      {/* Enhanced background with patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-health-light/20 to-white -z-10"></div>
      
      {/* Decorative blurs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-indigo-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCA0MCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-20 -z-10"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 -z-10"></div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
            <Sparkles size={16} className="text-indigo-600 mr-2" />
            <span className="font-medium text-indigo-800">Join Our Mission</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Transform Healthcare With Us
          </h2>
          
          <p className="text-lg text-health-dark/70 max-w-2xl mx-auto mb-8">
            Whether you're a patient, healthcare provider, or researcher, there are many ways to be a part of our journey toward better healthcare for all.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <CustomButton 
              size="lg" 
              variant="primary"
              withArrow
              className="w-full sm:w-auto bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-secondary hover:to-health-primary transition-all duration-300"
              onClick={handleContactRequest}
            >
              Get in Touch
            </CustomButton>
            
            <CustomButton
              variant="outline" 
              size="lg"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 w-full sm:w-auto"
              onClick={handleDemoRequest}
            >
              Request a Demo
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
