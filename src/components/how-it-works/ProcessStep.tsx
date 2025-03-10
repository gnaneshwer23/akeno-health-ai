
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: {
    icon: React.ReactNode;
    title?: string;
    content: string;
  }[];
  outcome: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  icon,
  features,
  outcome
}) => {
  const getStepColors = (stepNumber: number) => {
    switch (stepNumber % 5) {
      case 1: return {
        bg: "from-indigo-50 to-indigo-100/50",
        accent: "from-indigo-500 to-indigo-600",
        light: "bg-indigo-100",
        border: "border-indigo-200",
        text: "text-indigo-800",
        iconBg: "bg-indigo-500/10 text-indigo-600"
      };
      case 2: return {
        bg: "from-purple-50 to-purple-100/50",
        accent: "from-purple-500 to-purple-600",
        light: "bg-purple-100",
        border: "border-purple-200",
        text: "text-purple-800",
        iconBg: "bg-purple-500/10 text-purple-600"
      };
      case 3: return {
        bg: "from-blue-50 to-blue-100/50",
        accent: "from-blue-500 to-blue-600",
        light: "bg-blue-100",
        border: "border-blue-200",
        text: "text-blue-800",
        iconBg: "bg-blue-500/10 text-blue-600"
      };
      case 4: return {
        bg: "from-teal-50 to-teal-100/50",
        accent: "from-teal-500 to-teal-600",
        light: "bg-teal-100",
        border: "border-teal-200",
        text: "text-teal-800",
        iconBg: "bg-teal-500/10 text-teal-600"
      };
      case 0: return {
        bg: "from-pink-50 to-pink-100/50",
        accent: "from-pink-500 to-pink-600",
        light: "bg-pink-100",
        border: "border-pink-200",
        text: "text-pink-800",
        iconBg: "bg-pink-500/10 text-pink-600"
      };
      default: return {
        bg: "from-cyan-50 to-cyan-100/50",
        accent: "from-cyan-500 to-cyan-600",
        light: "bg-cyan-100",
        border: "border-cyan-200",
        text: "text-cyan-800",
        iconBg: "bg-cyan-500/10 text-cyan-600"
      };
    }
  };

  const colors = getStepColors(stepNumber);
  
  return (
    <motion.div 
      className="mb-24" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <motion.div 
          className="lg:w-1/3 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="sticky top-28">
            <div className="flex items-center gap-4 mb-4">
              <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${colors.accent} text-white text-xl font-bold shadow-lg`}>{stepNumber}</div>
              <h3 className={`text-2xl font-bold ${colors.text}`}>{title}</h3>
            </div>
            <div className="pl-16">
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
              <motion.div 
                className={`h-48 w-48 mx-auto rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center border ${colors.border} shadow-lg`}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="scale-150">
                  {icon}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="space-y-6">
            <motion.div 
              className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 border ${colors.border} shadow-md`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-4 hover:translate-x-1 transition-transform duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full ${colors.iconBg} flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <div>
                      {feature.title && (
                        <h5 className={`text-base font-semibold ${colors.text} mb-1`}>{feature.title}</h5>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {feature.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${colors.accent} flex items-center justify-center text-white shadow-md`}>
                    <Check size={24} />
                  </div>
                </div>
                <div>
                  <h5 className={`text-lg font-semibold ${colors.text} mb-2`}>Outcome:</h5>
                  <p className="text-muted-foreground">
                    {outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
