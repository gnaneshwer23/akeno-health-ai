
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SolutionsHero = () => {
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('solutions-overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-health-primary/10 via-white to-health-secondary/10 py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-health-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-health-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-health-primary/20"></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 rounded-full bg-health-secondary/20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-health-primary/15"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium"
          >
            Our Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-health-dark"
          >
            The Akeno Health <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Ecosystem</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-health-dark/80 mb-8 font-light"
          >
            Powering Predictive, Personalised & Connected Healthcare
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Akeno Health offers a fully integrated AI-powered ecosystem combining continuous monitoring, 
            predictive analytics, digital twin simulations, and precision medicine — designed for patients, 
            clinicians, hospitals, researchers, and pharma innovators.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto shadow-lg border border-health-primary/10"
          >
            <p className="text-lg font-medium text-health-dark">
              We transform complex health data into proactive care, ensuring 
              <span className="text-health-primary font-semibold"> early detection, smarter decisions, and seamless collaboration.</span>
            </p>
          </motion.div>
          
          <motion.button
            onClick={scrollToOverview}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center mx-auto text-health-primary hover:text-health-secondary transition-colors"
            aria-label="Scroll to solutions overview"
          >
            <span className="mr-2 text-sm font-medium">Explore Our Solutions</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
