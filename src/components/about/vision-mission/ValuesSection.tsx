
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Globe, Scale, Sparkles } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
  longDescription: string;
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

const ValueCard = ({ title, description, icon, emoji, longDescription, index }: ValueCardProps) => {
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
        <h4 className="text-xl font-semibold text-health-dark">
          {title} <span className="ml-2 text-2xl">{emoji}</span>
        </h4>
      </div>
      <p className="text-health-dark/70 mb-4">{description}</p>
      <div className="h-px w-full bg-gradient-to-r from-health-primary/20 via-health-secondary/20 to-transparent my-4"></div>
      <p className="text-sm text-health-dark/60 italic">{longDescription}</p>
    </motion.div>
  );
};

export const ValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      emoji: "💡",
      description: "Pioneering AI healthcare solutions that reshape the future of medicine",
      icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
      longDescription: "Our commitment to cutting-edge AI research and development ensures we stay at the forefront of healthcare technology."
    },
    {
      title: "Trust",
      emoji: "🤝",
      description: "Upholding the highest ethical standards in data privacy and healthcare",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      longDescription: "We prioritize patient privacy and maintain the highest standards of data security in everything we do."
    },
    {
      title: "Impact",
      emoji: "🌍",
      description: "Making advanced healthcare accessible to everyone, everywhere",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      longDescription: "Healthcare solutions should work for everyone, everywhere. We design our technology to reach underserved communities globally."
    },
    {
      title: "Equity",
      emoji: "⚖️",
      description: "Healthcare is a right. Our tech is designed to include the overlooked and underserved.",
      icon: <Scale className="h-6 w-6 text-green-500" />,
      longDescription: "We actively work to eliminate biases in healthcare AI and ensure our solutions promote health equity across all populations."
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
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <ValueCard 
            key={index}
            title={value.title}
            emoji={value.emoji}
            description={value.description}
            icon={value.icon}
            longDescription={value.longDescription}
            index={index}
          />
        ))}
      </div>
      
      <motion.div 
        className="flex justify-center mt-10"
        variants={fadeVariants}
        custom={5}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
          <Sparkles size={16} className="text-purple-500" />
          <span className="text-sm font-medium text-purple-700">Guided by our values in everything we do</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
