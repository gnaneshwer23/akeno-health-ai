
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Sparkles, Brain, Network, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const CompanyStory = () => {
  const milestones = [
    {
      title: "Inception",
      description: "Conceived by AI experts, medical professionals, and biotech innovators who saw the urgent need for a smarter, AI-driven healthcare system.",
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/20 text-amber-700"
    },
    {
      title: "Technology Development",
      description: "Built the world's first fully AI-powered personalised healthcare ecosystem integrating continuous monitoring, AI-driven diagnostics, and blockchain-secured patient records.",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      color: "bg-indigo-500/20 text-indigo-700"
    },
    {
      title: "Clinical Validation & Partnerships",
      description: "Collaborated with hospitals, pharma companies, and research institutions to ensure real-world applicability and high-impact health outcomes.",
      icon: <Network className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/20 text-purple-700"
    },
    {
      title: "Global Expansion",
      description: "Scaling our platform to deliver world-class AI-powered healthcare solutions across multiple regions and demographics.",
      icon: <Activity className="h-8 w-8 text-emerald-500" />,
      color: "bg-emerald-500/20 text-emerald-700"
    }
  ];

  const questions = [
    "What if healthcare could be predictive rather than reactive?",
    "What if AI could prevent disease before symptoms appear?",
    "What if patients could have full control over their own health data?"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="story">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-health-light/10 to-white -z-10"></div>
      
      {/* AI-inspired pattern in background */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 5 === 0 ? "bg-amber-400/30" : 
              i % 5 === 1 ? "bg-indigo-400/30" : 
              i % 5 === 2 ? "bg-purple-400/30" : 
              i % 5 === 3 ? "bg-emerald-400/30" : 
              "bg-blue-400/30"
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.div 
            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 text-sm font-medium mb-5"
            variants={fadeUpVariants}
            custom={1}
          >
            <Sparkles size={16} className="text-amber-500 mr-2" />
            Our Story
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
            variants={fadeUpVariants}
            custom={2}
          >
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              The Journey from Idea to Global Healthcare Transformation
            </span>
          </motion.h2>
          
          <motion.div 
            className="flex justify-center mb-8"
            variants={fadeUpVariants}
            custom={3}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-health-dark/70 max-w-3xl mx-auto mb-6"
            variants={fadeUpVariants}
            custom={4}
          >
            Akeno Health was founded on a simple yet profound idea:
          </motion.p>
          
          <motion.div 
            className="space-y-4 max-w-3xl mx-auto mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {questions.map((question, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: 0.5 + (index * 0.2),
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <p className="text-lg font-medium text-amber-900">
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-indigo-400 to-emerald-400 rounded-full hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          
          {/* Milestones */}
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center`}>
                <motion.div 
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                >
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold text-health-dark mb-3">{milestone.title}</h3>
                    <p className="text-health-dark/70">{milestone.description}</p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="md:w-12 flex items-center justify-center py-4 md:py-0 z-10 relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <div className={`h-12 w-12 rounded-full ${milestone.color} flex items-center justify-center shadow-lg`}>
                    {milestone.icon}
                  </div>
                </motion.div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 md:order-last' : 'md:pr-16 md:text-right'}`}>
                  {/* Empty div for layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
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
                asChild
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 group"
              >
                <Link to="/contact" className="flex items-center">
                  Join Our Mission
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="ml-2"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-amber-300 text-amber-900 hover:bg-amber-50"
              >
                <Link to="/how-it-works">
                  Learn More About Our Journey
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
