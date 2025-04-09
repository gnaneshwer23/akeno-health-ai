
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  subtitle: string;
  features: string[];
  useCase: string;
  index: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  icon, 
  color, 
  title, 
  subtitle, 
  features, 
  useCase,
  index 
}) => {
  // Map colors to tailwind classes
  const colorClasses: Record<string, { bg: string, text: string, light: string, gradient: string }> = {
    blue: { 
      bg: 'bg-blue-500', 
      text: 'text-blue-600', 
      light: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-600'
    },
    purple: { 
      bg: 'bg-purple-500', 
      text: 'text-purple-600', 
      light: 'bg-purple-50',
      gradient: 'from-purple-500 to-purple-600'
    },
    teal: { 
      bg: 'bg-teal-500', 
      text: 'text-teal-600', 
      light: 'bg-teal-50',
      gradient: 'from-teal-500 to-teal-600'
    },
    indigo: { 
      bg: 'bg-indigo-500', 
      text: 'text-indigo-600', 
      light: 'bg-indigo-50',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    red: { 
      bg: 'bg-red-500', 
      text: 'text-red-600', 
      light: 'bg-red-50',
      gradient: 'from-red-500 to-red-600'
    },
    green: { 
      bg: 'bg-green-500', 
      text: 'text-green-600', 
      light: 'bg-green-50',
      gradient: 'from-green-500 to-green-600'
    },
  };
  
  const colorClass = colorClasses[color] || colorClasses.blue;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`py-16 ${isEven ? 'bg-white' : 'bg-gray-50'} rounded-2xl mb-8`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
          <div className="md:w-1/3 flex justify-center">
            <motion.div 
              className={`p-6 ${colorClass.light} rounded-2xl inline-block relative overflow-hidden group`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-black/5 transition-opacity duration-500" />
              <div className={`p-8 bg-gradient-to-br ${colorClass.gradient} rounded-xl text-white relative z-10`}>
                {React.cloneElement(icon as React.ReactElement, { size: 56 })}
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className={`text-2xl font-bold mb-3 ${colorClass.text}`}>{title}</h3>
            <p className="text-lg text-gray-700 mb-6 italic">{subtitle}</p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`${colorClass.text} mt-1 mr-3 p-1 rounded-full ${colorClass.light}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className={`p-5 ${colorClass.light} rounded-xl border-l-4 ${colorClass.bg}`}
              whileHover={{ x: 5 }}
            >
              <p className="text-gray-700">
                <span className="font-medium">👨‍🔬 Use Case: </span>
                {useCase}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
