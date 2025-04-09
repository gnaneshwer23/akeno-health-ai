
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Globe, Scale } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
  delay: number;
  longDescription: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, emoji, delay, longDescription }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-health-primary/10 to-health-secondary/10 flex items-center justify-center text-health-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <span className="text-2xl mr-2">{emoji}</span>
          <h3 className="text-xl font-semibold text-health-dark inline-block">{title}</h3>
        </div>
      </div>
      <p className="text-health-dark/70 mb-4">{description}</p>
      <p className="text-sm text-health-dark/60 italic">{longDescription}</p>
    </motion.div>
  );
};

export const CompanyValues = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries — from AI explainability to quantum-driven predictions.',
      icon: <Lightbulb size={24} className="text-health-primary" />,
      emoji: '💡',
      longDescription: 'Our commitment to cutting-edge AI research and development ensures we stay at the forefront of healthcare technology.'
    },
    {
      title: 'Trust',
      description: 'Data belongs to patients. We build with privacy, ethics, and transparency first.',
      icon: <Handshake size={24} className="text-health-primary" />,
      emoji: '🤝',
      longDescription: 'We prioritize patient privacy and maintain the highest standards of data security in everything we do.'
    },
    {
      title: 'Impact',
      description: 'Our success is measured by lives improved — from rural clinics to global trials.',
      icon: <Globe size={24} className="text-health-primary" />,
      emoji: '🌍',
      longDescription: 'Healthcare solutions should work for everyone, everywhere. We design our technology to reach underserved communities globally.'
    },
    {
      title: 'Equity',
      description: 'Healthcare is a right. Our tech is designed to include the overlooked and underserved.',
      icon: <Scale size={24} className="text-health-primary" />,
      emoji: '⚖️',
      longDescription: 'We actively work to eliminate biases in healthcare AI and ensure our solutions promote health equity across all populations.'
    }
  ];

  return (
    <section className="py-16 px-6 relative bg-gradient-to-b from-white via-health-light/20 to-white" id="values">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDAgMEgwdjEwMGgxMDBWMHpNMjAgMjBoNjB2NjBIMjBWMjB6IiBmaWxsPSIjZWY1NjliIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-dark">
            Our Values
          </h2>
          <p className="text-lg text-health-dark/70 max-w-3xl mx-auto">
            The core principles that guide our mission and innovation every day.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              emoji={value.emoji}
              delay={0.2 * index}
              longDescription={value.longDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
