
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Star } from 'lucide-react';

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

export const HeroHeader = () => {
  return (
    <>
      {/* Enhanced badge with animation and sparkles */}
      <motion.div 
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-health-primary/20 via-health-secondary/20 to-health-accent/20 text-health-primary font-medium backdrop-blur-sm border border-health-primary/20"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heart size={16} className="text-rose-500" />
        <span>About Akeno Health AI</span>
        <Sparkles size={16} className="text-amber-500 ml-1" />
      </motion.div>
      
      {/* Main heading with enhanced gradient and animation */}
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6 tracking-tight"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUpVariants}
      >
        <motion.span 
          className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent inline-block"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% auto" }}
        >
          Pioneering AI-Driven
        </motion.span>{" "}
        <span className="relative inline-block">
          Personalised Medicine for All
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-health-primary to-health-accent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </span>
      </motion.h1>
      
      {/* Animated divider */}
      <motion.div 
        className="flex justify-center mb-8"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUpVariants}
      >
        <motion.div 
          className="h-1.5 w-40 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
          animate={{ 
            boxShadow: ["0 0 0 rgba(139, 92, 246, 0)", "0 0 8px rgba(139, 92, 246, 0.5)", "0 0 0 rgba(139, 92, 246, 0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Enhanced description with better typography */}
      <motion.p 
        className="text-xl md:text-2xl font-light text-health-dark/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeUpVariants}
      >
        Our Mission to <span className="font-medium">Revolutionise Healthcare</span> through artificial intelligence, 
        real-time health monitoring, and advanced medical analytics.
      </motion.p>

      {/* Awards or recognition badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-health-primary/10">
          <Award size={14} className="text-amber-500" />
          <span className="text-xs font-medium">Pioneering Research</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-health-primary/10">
          <Star size={14} className="text-health-primary" />
          <span className="text-xs font-medium">Award-Winning Technology</span>
        </div>
      </motion.div>
    </>
  );
};
