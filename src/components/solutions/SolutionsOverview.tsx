
import React from 'react';
import { motion } from 'framer-motion';

const SolutionsOverview = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Our Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Akeno Health platform integrates cutting-edge AI and quantum computing technologies
            with best-in-class security to deliver a comprehensive suite of healthcare solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              number: 1,
              title: "Continuous Health Monitoring & AI-Powered Early Detection",
              subtitle: "Real-Time Biometrics Meet Intelligent Insights",
              color: "indigo"
            },
            {
              number: 2,
              title: "AI-Driven Clinical Decision Support",
              subtitle: "Empowering Clinicians with Actionable Intelligence",
              color: "purple"
            },
            {
              number: 3,
              title: "Precision Medicine & Personalised Treatment",
              subtitle: "From Genome to Prescription – Tailored for You",
              color: "cyan"
            },
            {
              number: 4,
              title: "AI-Powered Clinical Trials & Drug Discovery",
              subtitle: "Accelerating Research & Expanding Access",
              color: "green"
            },
            {
              number: 5,
              title: "Blockchain-Based Secure Data Exchange",
              subtitle: "Putting Patients in Control, Building Trust",
              color: "pink"
            },
            {
              number: 6,
              title: "Seamless Connectivity Across Healthcare",
              subtitle: "Healthcare That Talks to Itself",
              color: "orange"
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-health-primary/10"
            >
              <div className={`h-12 w-12 rounded-lg bg-${solution.color}-100 flex items-center justify-center mb-4`}>
                <span className={`text-${solution.color}-600 text-xl font-semibold`}>{solution.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-health-dark mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm">{solution.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
