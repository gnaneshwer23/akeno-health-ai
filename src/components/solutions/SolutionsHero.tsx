
import React from 'react';
import { motion } from 'framer-motion';

const SolutionsHero = () => {
  return (
    <section className="bg-gradient-to-br from-health-primary/10 via-white to-health-secondary/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
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
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
