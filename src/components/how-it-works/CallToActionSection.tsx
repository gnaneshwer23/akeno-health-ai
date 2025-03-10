
import React from 'react';
import { motion } from 'framer-motion';
import BenefitsGrid from './cta/BenefitsGrid';
import CTAButtons from './cta/CTAButtons';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-500/20 to-pink-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/10 blur-2xl"></div>
      </div>
      
      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Ready to Transform Your Healthcare Journey?
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
          </div>
          
          <motion.p 
            className="text-xl text-indigo-100/90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Now that you understand how Akeno works, take the next step with our innovative healthcare ecosystem
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-12 backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white">Next Steps</h3>
              <BenefitsGrid />
            </motion.div>
            
            <motion.div 
              className="border-t md:border-t-0 md:border-l border-indigo-500/20 pt-6 md:pt-0 md:pl-12 flex flex-col justify-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Take Action Today</h3>
              <CTAButtons />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Final Call to Action Button */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button
            className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              Begin Your Journey With Akeno Health
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
