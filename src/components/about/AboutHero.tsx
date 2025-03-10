
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Clock, Globe, Shield, Cpu } from 'lucide-react';

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

export const AboutHero = () => {
  return (
    <section className="relative mb-16 px-6 pt-28 pb-16 overflow-hidden">
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 bg-health-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-health-primary/10 rounded-full blur-xl -z-10"
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/20 to-health-secondary/20 text-health-primary font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heart size={16} className="text-rose-500" />
            <span>About Akeno Health AI</span>
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-health-dark mb-6 tracking-tight"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUpVariants}
          >
            <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-accent bg-clip-text text-transparent">
              Pioneering AI-Driven
            </span> Personalised Medicine for All
          </motion.h1>
          
          <motion.div 
            className="flex justify-center mb-8"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUpVariants}
          >
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-health-dark/70 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUpVariants}
          >
            Our Mission to Revolutionise Healthcare through artificial intelligence, 
            real-time health monitoring, and advanced medical analytics.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUpVariants}
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all">
                <Clock size={28} className="text-white" />
              </div>
              <p className="text-health-dark/80 font-medium">Est. 2021</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-3 shadow-lg">
                <Sparkles size={28} className="text-white" />
              </div>
              <p className="text-health-dark/80 font-medium">AI-Driven Innovation</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-3 shadow-lg">
                <Globe size={28} className="text-white" />
              </div>
              <p className="text-health-dark/80 font-medium">Global Impact</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-3 shadow-lg">
                <Shield size={28} className="text-white" />
              </div>
              <p className="text-health-dark/80 font-medium">Precision Medicine</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-3 shadow-lg">
                <Cpu size={28} className="text-white" />
              </div>
              <p className="text-health-dark/80 font-medium">Quantum Computing</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex justify-center"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUpVariants}
          >
            <a href="#vision" className="flex flex-col items-center text-health-primary/70 hover:text-health-primary transition-colors">
              <span className="text-sm mb-2">Discover More</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={20} className="text-indigo-500" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(12).fill(0).map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute rounded-full ${
              i % 6 === 0 ? "bg-purple-400/30" : 
              i % 6 === 1 ? "bg-indigo-400/30" : 
              i % 6 === 2 ? "bg-blue-400/30" : 
              i % 6 === 3 ? "bg-emerald-400/30" : 
              i % 6 === 4 ? "bg-amber-400/30" :
              "bg-pink-400/30"
            }`}
            style={{
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: Math.random() * 5 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          ></motion.div>
        ))}
      </div>
      
      {/* Connected dots network */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <g key={i}>
            <motion.circle
              cx={`${15 + i * 15}%`}
              cy={`${20 + (i % 3) * 25}%`}
              r="2"
              fill={i % 2 === 0 ? "#6366f1" : "#8b5cf6"}
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
            {i < 5 && (
              <motion.line
                x1={`${15 + i * 15}%`}
                y1={`${20 + (i % 3) * 25}%`}
                x2={`${15 + (i+1) * 15}%`}
                y2={`${20 + ((i+1) % 3) * 25}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            )}
          </g>
        ))}
      </svg>
    </section>
  );
};
