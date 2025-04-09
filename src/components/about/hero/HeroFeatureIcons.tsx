
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, Globe, Shield, Cpu } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const HeroFeatureIcons = () => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-8 mb-12"
      initial="hidden"
      animate="visible"
      custom={4}
      variants={fadeUpVariants}
    >
      <FeatureIcon 
        Icon={Clock} 
        color="from-amber-400 to-orange-500"
        label="Est. 2021"
      />
      
      <FeatureIcon 
        Icon={Sparkles} 
        color="from-indigo-500 to-purple-600"
        label="AI-Driven Innovation"
      />
      
      <FeatureIcon 
        Icon={Globe} 
        color="from-sky-400 to-blue-600"
        label="Global Impact"
      />
      
      <FeatureIcon 
        Icon={Shield} 
        color="from-emerald-400 to-teal-600"
        label="Precision Medicine"
      />
      
      <FeatureIcon 
        Icon={Cpu} 
        color="from-fuchsia-500 to-pink-600"
        label="Quantum Computing"
      />
    </motion.div>
  );
};

interface FeatureIconProps {
  Icon: React.ElementType;
  color: string;
  label: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, color, label }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg`}>
        <Icon size={28} className="text-white" />
      </div>
      <p className="text-health-dark/80 font-medium">{label}</p>
    </motion.div>
  );
};
