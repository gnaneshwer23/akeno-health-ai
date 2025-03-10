
import React from 'react';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Brain, Database, Shield, Zap, HeartPulse, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Why Akeno Health is the <span className="text-indigo-300">Future of Healthcare</span>
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
          </div>
          
          <motion.p 
            className="text-xl text-indigo-100/90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experience the world's first fully AI-powered, self-learning healthcare ecosystem
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">The world's first fully AI-powered</span>, self-learning healthcare ecosystem
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Early disease detection</span> & real-time predictive diagnostics
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">AI-driven precision medicine</span> & Quantum-powered drug discovery
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Seamless doctor-patient-pharma connectivity</span> for optimized care
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">Blockchain-secured, patient-controlled</span> health data with quantum encryption
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-indigo-300 flex-shrink-0 mt-0.5" />
                <p className="text-indigo-100">
                  <span className="font-semibold">AI-automated clinical trials</span> & research acceleration for better treatments
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-12 backdrop-blur-sm"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Experience the Future of AI Healthcare – Get Started Today!
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-5">
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Users size={22} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">For Patients</h4>
                  <p className="text-indigo-200/80 text-sm">Get personalised, AI-powered health monitoring & early detection</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Dna size={22} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">For Doctors & Hospitals</h4>
                  <p className="text-indigo-200/80 text-sm">Enhance decision-making with AI-driven diagnostics & real-time insights</p>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-5">
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <HeartPulse size={22} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">For Pharma & Researchers</h4>
                  <p className="text-indigo-200/80 text-sm">Accelerate drug discovery, clinical trials, and personalised medicine</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Brain size={22} className="text-indigo-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">For Investors & Partners</h4>
                  <p className="text-indigo-200/80 text-sm">Be part of the world's most advanced healthcare AI ecosystem</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <Button 
              variant="primary" 
              size="lg"
              as="Link"
              to="/contact"
              className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 w-full md:w-auto border-0"
              icon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            >
              Contact Us Today
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              as="Link"
              to="/patient-solutions"
              className="border-indigo-300 text-indigo-100 hover:bg-indigo-500/20 w-full md:w-auto"
              icon={<Shield size={16} />}
            >
              Learn About Our Solutions
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
