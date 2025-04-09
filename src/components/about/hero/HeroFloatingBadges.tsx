
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Activity, Heart, Database } from 'lucide-react';

export const HeroFloatingBadges = () => {
  // Configure the badges with their positions and animations
  const badges = [
    { 
      icon: <Brain size={18} />, 
      text: "AI-Powered", 
      color: "from-blue-500/20 to-indigo-500/20",
      textColor: "text-blue-600",
      delay: 0,
      position: { top: "20%", left: "8%" },
    },
    { 
      icon: <Shield size={18} />, 
      text: "Secure", 
      color: "from-emerald-500/20 to-teal-500/20",
      textColor: "text-emerald-600",
      delay: 0.5,
      position: { top: "15%", right: "12%" },
    },
    { 
      icon: <Zap size={18} />, 
      text: "Real-time", 
      color: "from-amber-500/20 to-orange-500/20",
      textColor: "text-amber-600",
      delay: 1,
      position: { bottom: "28%", left: "12%" },
    },
    { 
      icon: <Activity size={18} />, 
      text: "Accurate", 
      color: "from-rose-500/20 to-pink-500/20",
      textColor: "text-rose-600",
      delay: 1.5,
      position: { bottom: "20%", right: "10%" },
    },
    { 
      icon: <Heart size={18} />, 
      text: "Patient-First", 
      color: "from-purple-500/20 to-violet-500/20",
      textColor: "text-purple-600",
      delay: 2,
      position: { top: "40%", right: "8%" },
    },
    { 
      icon: <Database size={18} />, 
      text: "Data-Driven", 
      color: "from-cyan-500/20 to-sky-500/20",
      textColor: "text-cyan-600",
      delay: 2.5,
      position: { bottom: "40%", left: "8%" },
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className={`absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} backdrop-blur-sm border border-white/20 shadow-sm ${badge.textColor}`}
          style={badge.position as React.CSSProperties}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: badge.delay, duration: 0.8 }}
        >
          {badge.icon}
          <span className="text-xs font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
};
