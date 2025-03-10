
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const LeadershipTeam: React.FC = () => {
  return (
    <motion.div 
      className="mb-16 bg-white rounded-2xl shadow-lg border border-purple-100 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-center text-health-dark mb-8 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Sparkles size={24} className="text-purple-500" />
        Leadership Team
        <Sparkles size={24} className="text-purple-500" />
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Dr. Gnaneshwer Reddy",
            title: "Founder & CEO",
            description: "Visionary in AI-powered healthcare innovation",
            color: "purple"
          },
          {
            name: "Dr. Sarah Johnson",
            title: "Chief Medical Officer",
            description: "Leading AI-driven clinical transformation",
            color: "indigo"
          },
          {
            name: "Dr. Marcus Wei",
            title: "Chief Technology Officer",
            description: "Expert in AI, blockchain, and quantum computing for healthcare",
            color: "blue"
          },
          {
            name: "Michael Torres",
            title: "Chief Operating Officer",
            description: "Scaling operations and global healthcare partnerships",
            color: "emerald"
          }
        ].map((leader, index) => (
          <motion.div 
            key={index}
            className={`p-4 rounded-xl bg-gradient-to-br from-white to-${leader.color}-50 border border-${leader.color}-100 shadow-sm hover:shadow-md transition-all`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="text-center">
              <h4 className="font-semibold text-health-dark mb-1">{leader.name}</h4>
              <div className={`px-3 py-1 rounded-full bg-${leader.color}-100 text-${leader.color}-700 text-xs font-medium mb-2 inline-block`}>{leader.title}</div>
              <p className="text-health-dark/70 text-sm">{leader.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
