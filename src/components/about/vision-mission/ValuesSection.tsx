
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Heart, Sparkles } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const fadeVariants = {
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

const ValueCard = ({ title, description, icon, index }: ValueCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group"
      variants={fadeVariants}
      custom={index + 1}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-health-dark">{title}</h4>
      </div>
      <p className="text-health-dark/70 mb-4">{description}</p>
      <p className="text-sm text-health-dark/60 italic relative">
        {title === "Innovation" && "Our commitment to cutting-edge AI research and development ensures we stay at the forefront of healthcare technology."}
        {title === "Integrity" && "We prioritize patient privacy and maintain the highest standards of data security in everything we do."}
        {title === "Inclusion" && "Healthcare is a fundamental right, and we strive to make our AI solutions accessible across all communities."}
        <span className="absolute -bottom-1 -right-1">
          {title === "Innovation" && <Sparkles size={14} className="text-indigo-400 opacity-70" />}
        </span>
      </p>
    </motion.div>
  );
};

export const ValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering AI healthcare solutions that reshape the future of medicine",
      icon: <Brain className="h-6 w-6 text-indigo-500" />
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards in data privacy and healthcare",
      icon: <Shield className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Inclusion",
      description: "Making advanced healthcare accessible to everyone, everywhere",
      icon: <Heart className="h-6 w-6 text-rose-500" />
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
          }
        }
      }}
    >
      <motion.h3 
        className="text-2xl font-bold text-center text-health-dark mb-8 relative inline-block"
        variants={fadeVariants}
        custom={0}
      >
        Our Core Values
        <div className="absolute -bottom-2 left-0 right-0 mx-auto w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard 
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};
