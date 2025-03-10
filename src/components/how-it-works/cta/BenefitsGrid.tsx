
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Shield } from 'lucide-react';

const benefitsData = [
  {
    icon: <Users size={18} className="text-indigo-300" />,
    title: "Explore Solutions",
    description: "Browse our tailored solutions for patients, doctors, or healthcare institutions"
  },
  {
    icon: <Brain size={18} className="text-indigo-300" />,
    title: "Learn About Our Technology",
    description: "Discover more about our quantum computing and AI innovations"
  },
  {
    icon: <Shield size={18} className="text-indigo-300" />,
    title: "Contact Our Team",
    description: "Schedule a consultation to discuss your specific needs"
  }
];

const BenefitsGrid = () => {
  return (
    <div className="space-y-4">
      {benefitsData.map((benefit, index) => (
        <motion.div 
          key={index}
          className="flex items-start gap-4"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ x: 5 }}
        >
          <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
            {benefit.icon}
          </div>
          <div>
            <h4 className="font-semibold text-white">{benefit.title}</h4>
            <p className="text-indigo-200/80 text-sm">{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsGrid;
