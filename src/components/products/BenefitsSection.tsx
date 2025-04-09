
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Database, LineChart, BadgeCheck } from 'lucide-react';

const BenefitCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => (
  <motion.div
    className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-health-primary/10 to-health-secondary/20 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2 text-health-dark">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Database className="h-6 w-6 text-health-primary" />,
      title: "Comprehensive Data Integration",
      description: "Seamlessly integrate multiple data sources including EHRs, genomics, wearables, and imaging for a complete patient view."
    },
    {
      icon: <Zap className="h-6 w-6 text-health-primary" />,
      title: "AI-Powered Insights",
      description: "Leverage advanced machine learning algorithms to uncover actionable insights and predict health outcomes with greater accuracy."
    },
    {
      icon: <Shield className="h-6 w-6 text-health-primary" />,
      title: "Enterprise-Grade Security",
      description: "Built with HIPAA compliance and advanced encryption to ensure patient data remains secure at all times."
    },
    {
      icon: <LineChart className="h-6 w-6 text-health-primary" />,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes and healthcare needs using sophisticated predictive models trained on diverse clinical datasets."
    },
    {
      icon: <Users className="h-6 w-6 text-health-primary" />,
      title: "Collaborative Platform",
      description: "Enable seamless collaboration between healthcare providers, researchers, and patients for coordinated care delivery."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-health-primary" />,
      title: "Regulatory Compliance",
      description: "All products are developed in alignment with FDA, EMA, and global regulatory requirements for medical software systems."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            Why Choose Akeno Health
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-health-primary to-health-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Our solutions are built with healthcare providers and patients in mind,
            delivering tangible outcomes that transform healthcare delivery.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
