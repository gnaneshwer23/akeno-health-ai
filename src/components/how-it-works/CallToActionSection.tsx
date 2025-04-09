
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
              Why It <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Works</span>
            </h2>
            
            <div className="flex justify-start mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Akeno Health combines cutting-edge AI technology with medical expertise to create a healthcare platform that truly works for patients, providers, and researchers alike.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Predicts & prevents diseases early",
                "Builds trust with explainable AI",
                "Delivers ultra-personalised treatment",
                "Enables researchers & pharma to innovate",
                "Ensures ethical, privacy-preserving data usage"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-indigo-100 to-purple-50 p-8 md:p-10 rounded-xl shadow-lg border border-indigo-200/50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-health-dark mb-6 text-center">
              Join the Intelligent Health Movement Today
            </h3>
            
            <div className="grid md:grid-cols-1 gap-4 mb-6">
              <motion.div 
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <h4 className="font-semibold text-lg mb-2 text-health-dark">For Patients</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience personalized healthcare with early disease detection, tailored treatment plans, and continuous monitoring.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-health-primary/30 text-health-primary hover:bg-health-primary/5"
                >
                  Try Akeno for Patients
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <h4 className="font-semibold text-lg mb-2 text-health-dark">For Healthcare Providers</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Enhance clinical decision-making, optimize resources, and deliver better outcomes for your patients.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-health-primary/30 text-health-primary hover:bg-health-primary/5"
                >
                  Request Provider Demo
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-indigo-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <h4 className="font-semibold text-lg mb-2 text-health-dark">For Researchers</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Access our Digital Twin platform to accelerate research, design better trials, and drive innovation.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-health-primary/30 text-health-primary hover:bg-health-primary/5"
                >
                  Explore Research Solutions
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90 text-white shadow-md"
              >
                Book a Personalized Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
