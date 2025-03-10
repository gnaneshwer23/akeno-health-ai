
import React from 'react';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ActionButtons } from '@/components/about/cta/ActionButtons';

const CallToActionSection = () => {
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

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-500/20 to-pink-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/10 blur-2xl"></div>
      </div>
      
      {/* Enhanced decorative shapes */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-lg border border-indigo-500/20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full border border-purple-500/20 hidden lg:block"></div>
      
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
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white">Next Steps</h3>
              <p className="text-indigo-100/80">
                Based on what you've learned about our process, choose the path that best fits your needs:
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={18} className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Explore Solutions</h4>
                    <p className="text-indigo-200/80 text-sm">Browse our tailored solutions for patients, doctors, or healthcare institutions</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain size={18} className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Learn About Our Technology</h4>
                    <p className="text-indigo-200/80 text-sm">Discover more about our quantum computing and AI innovations</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={18} className="text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Contact Our Team</h4>
                    <p className="text-indigo-200/80 text-sm">Schedule a consultation to discuss your specific needs</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="border-t md:border-t-0 md:border-l border-indigo-500/20 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Take Action Today</h3>
              
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <ActionButtons />
                </motion.div>
                
                <motion.p 
                  className="text-indigo-200/70 italic text-center text-sm mt-4"
                  variants={itemVariants}
                >
                  "The future of healthcare is here. Join thousands of patients and healthcare providers already benefiting from Akeno Health's innovations."
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Get Started Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button
            className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            as="Link"
            to="/contact"
          >
            <span className="flex items-center gap-2">
              Begin Your Journey With Akeno Health
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
