
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Shield, Database, Users, Link } from 'lucide-react';

const SolutionsOverview = () => {
  const solutions = [
    {
      number: 1,
      title: "Continuous Health Monitoring & AI-Powered Early Detection",
      subtitle: "Real-Time Biometrics Meet Intelligent Insights",
      icon: <Activity size={24} />,
      color: "indigo",
      details: [
        "Wearables & IoT Integration",
        "Edge AI for Vital Signs",
        "AI-Based Risk Detection",
        "Digital Biomarkers"
      ]
    },
    {
      number: 2,
      title: "AI-Driven Clinical Decision Support",
      subtitle: "Empowering Clinicians with Actionable Intelligence",
      icon: <Brain size={24} />,
      color: "purple",
      details: [
        "AI-Powered Diagnosis Assistant",
        "Real-Time Clinical Guidance",
        "Medication Safety Engine",
        "Explainable AI"
      ]
    },
    {
      number: 3,
      title: "Precision Medicine & Personalised Treatment",
      subtitle: "From Genome to Prescription – Tailored for You",
      icon: <Shield size={24} />,
      color: "cyan",
      details: [
        "Genomics Integration",
        "Microbiome & Lifestyle Matching",
        "Digital Twin Technology",
        "AI-Driven Dosage Adjustments"
      ]
    },
    {
      number: 4,
      title: "AI-Powered Clinical Trials & Drug Discovery",
      subtitle: "Accelerating Research & Expanding Access",
      icon: <Database size={24} />,
      color: "green",
      details: [
        "Patient-Trial Matching",
        "Quantum-Powered Drug Discovery",
        "Synthetic Data for Validation",
        "Decentralised Research Collaboration"
      ]
    },
    {
      number: 5,
      title: "Blockchain-Based Secure Data Exchange",
      subtitle: "Putting Patients in Control, Building Trust",
      icon: <Shield size={24} />,
      color: "pink",
      details: [
        "Universal Health Records (UHRs)",
        "Self-Sovereign Identity (SSI)",
        "GDPR & HIPAA-Ready"
      ]
    },
    {
      number: 6,
      title: "Seamless Connectivity Across Healthcare",
      subtitle: "Healthcare That Talks to Itself",
      icon: <Link size={24} />,
      color: "orange",
      details: [
        "Auto-Synced Prescriptions & Pharmacy",
        "AI Assistant for Patients",
        "Real-Time Hospital Dashboard",
        "Pharma Research Portal"
      ]
    }
  ];

  return (
    <section id="solutions-overview" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
          >
            Our Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            The Akeno Health platform integrates cutting-edge AI and quantum computing technologies
            with best-in-class security to deliver a comprehensive suite of healthcare solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-health-primary/10 group hover:border-health-primary/30"
            >
              <div className="flex items-center mb-4">
                <div className={`h-12 w-12 rounded-lg bg-${solution.color}-100 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-${solution.color}-600`}>{solution.icon}</span>
                </div>
                <span className="text-2xl font-bold text-health-primary/70">{solution.number}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-health-dark mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{solution.subtitle}</p>
              
              <ul className="space-y-2 mt-4">
                {solution.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="mr-2 text-health-primary">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <p className="text-xs text-health-primary font-medium flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>For patients, clinicians, hospitals & researchers</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
