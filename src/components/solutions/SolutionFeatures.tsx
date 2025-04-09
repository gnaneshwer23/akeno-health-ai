
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Brain, 
  Dna, 
  FlaskConical, 
  Lock, 
  Globe,
  Check
} from 'lucide-react';

const SolutionFeatures = () => {
  const solutions = [
    {
      icon: <HeartPulse size={32} className="text-indigo-500" />,
      title: "Continuous Health Monitoring & AI-Powered Early Detection",
      description: "Real-Time Biometrics Meet Intelligent Insights",
      features: [
        "Wearables & IoT Integration",
        "Edge AI for Vital Signs",
        "AI-Based Risk Detection",
        "Digital Biomarkers"
      ],
      benefit: "Diseases are predicted before symptoms arise. Care becomes preventive, not reactive."
    },
    {
      icon: <Brain size={32} className="text-purple-500" />,
      title: "AI-Driven Clinical Decision Support",
      description: "Empowering Clinicians with Actionable Intelligence",
      features: [
        "AI-Powered Diagnosis Assistant",
        "Real-Time Clinical Guidance",
        "Medication Safety Engine",
        "Explainable AI"
      ],
      benefit: "Doctors save time, reduce errors, and deliver evidence-based care with confidence."
    },
    {
      icon: <Dna size={32} className="text-cyan-500" />,
      title: "Precision Medicine & Personalised Treatment",
      description: "From Genome to Prescription – Tailored for You",
      features: [
        "Genomics Integration",
        "Microbiome & Lifestyle Matching",
        "Digital Twin Technology",
        "AI-Driven Dosage Adjustments"
      ],
      benefit: "Every treatment is uniquely designed for the patient, improving outcomes and reducing side effects."
    },
    {
      icon: <FlaskConical size={32} className="text-green-500" />,
      title: "AI-Powered Clinical Trials & Drug Discovery",
      description: "Accelerating Research & Expanding Access",
      features: [
        "Patient-Trial Matching",
        "Quantum-Powered Drug Discovery",
        "Synthetic Data for Validation",
        "Decentralised Research Collaboration"
      ],
      benefit: "R&D becomes faster, inclusive, and globally scalable — bringing treatments to market quicker."
    },
    {
      icon: <Lock size={32} className="text-pink-500" />,
      title: "Blockchain-Based Secure Data Exchange",
      description: "Putting Patients in Control, Building Trust Across the Ecosystem",
      features: [
        "Universal Health Records (UHRs)",
        "Self-Sovereign Identity (SSI)",
        "GDPR & HIPAA-Ready"
      ],
      benefit: "Security and trust are built in. Data fuels innovation without compromising privacy."
    },
    {
      icon: <Globe size={32} className="text-orange-500" />,
      title: "Seamless Connectivity Across Healthcare",
      description: "Healthcare That Talks to Itself",
      features: [
        "Auto-Synced Prescriptions & Pharmacy Delivery",
        "AI Assistant for Patients",
        "Real-Time Hospital Dashboard",
        "Pharma Research Portal"
      ],
      benefit: "Everyone in the healthcare chain works in sync, unlocking efficiency and personalised experiences."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-health-dark mb-6"
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our integrated ecosystem provides end-to-end solutions that transform healthcare
            from reactive to proactive, from generalized to personalized.
          </motion.p>
        </div>
        
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className={`bg-white rounded-xl p-8 shadow-md border border-health-primary/10 ${
                index % 2 === 0 ? '' : 'bg-health-light/5'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-health-primary/20 to-health-secondary/20">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-health-dark">{solution.title}</h3>
                      <p className="text-muted-foreground italic">{solution.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-6">
                    {solution.features.map((feature, fIndex) => (
                      <motion.li 
                        key={fIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * fIndex }}
                        className="flex items-start gap-3"
                      >
                        <div className="min-w-6 mt-0.5 rounded-full bg-health-primary/10 p-1 flex items-center justify-center">
                          <Check size={14} className="text-health-primary" />
                        </div>
                        <span className="text-health-dark">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-health-primary/10 to-health-secondary/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-health-dark mb-4">Key Benefit</h4>
                  <p className="text-lg text-health-primary">{solution.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;
