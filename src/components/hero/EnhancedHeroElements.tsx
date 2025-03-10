
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Atom, HeartPulse, Dna, Activity, Cpu } from 'lucide-react';

const EnhancedHeroElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons with Glow Effects */}
      <div className="absolute w-full h-full">
        {[
          { Icon: Brain, color: "health-primary", top: "15%", left: "10%" },
          { Icon: Atom, color: "health-secondary", top: "25%", right: "15%" },
          { Icon: HeartPulse, color: "health-accent", bottom: "20%", left: "15%" },
          { Icon: Dna, color: "health-primary", top: "30%", left: "85%" },
          { Icon: Activity, color: "health-secondary", bottom: "30%", right: "10%" },
          { Icon: Cpu, color: "health-accent", top: "70%", left: "20%" },
        ].map(({ Icon, color, ...position }, index) => (
          <motion.div
            key={index}
            className={`absolute text-${color}`}
            style={position as any}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <div className={`relative p-4 bg-${color}/10 rounded-xl backdrop-blur-sm`}>
              <Icon size={24} />
              <div className={`absolute inset-0 bg-${color}/20 blur-xl -z-10 rounded-xl`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connected Lines Animation */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
        <motion.path
          d="M0 0 L100 100"
          stroke="url(#gradient-line)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--health-primary)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="var(--health-secondary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--health-accent)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particle Effect Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-health-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { EnhancedHeroElements };
