
import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Brain, Lock, FlaskConical, Shield } from 'lucide-react';

const EdgeFeatures = () => {
  const features = [
    {
      icon: <Dna size={24} />,
      title: "Digital Twin Personalisation",
      description: "Fully interactive + AI-adaptive + treatment simulation"
    },
    {
      icon: <Brain size={24} />,
      title: "AI Explainability",
      description: "Visual, causal, and audit-level transparent AI"
    },
    {
      icon: <Shield size={24} />,
      title: "Federated Learning",
      description: "No raw data sharing, ever"
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Quantum AI",
      description: "For rare diseases and complex molecule modelling"
    },
    {
      icon: <Lock size={24} />,
      title: "Blockchain SSI",
      description: "Patients are data owners with smart consent"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-health-primary/5 to-health-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
          >
            The Akeno Edge: What Sets Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our unique combination of cutting-edge technologies and patient-centered approach
            creates a healthcare ecosystem unlike any other.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-8 shadow-xl border border-health-primary/10"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:border-r border-health-primary/10 pr-8">
              <h3 className="text-2xl font-bold text-health-dark mb-6">
                Beyond Standard <span className="text-health-primary">Healthcare Solutions</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                While others offer isolated tools, Akeno Health delivers a fully integrated ecosystem
                that combines the latest in AI, quantum computing, and blockchain technologies.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
            </div>
            
            <div className="col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-health-primary/5 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-lg bg-health-primary/10 flex items-center justify-center text-health-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-health-dark mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EdgeFeatures;
