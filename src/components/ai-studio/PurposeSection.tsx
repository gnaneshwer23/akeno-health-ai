
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Database, Users } from 'lucide-react';

const PurposeSection: React.FC = () => {
  const purposePoints = [
    { 
      icon: <Target className="h-5 w-5 text-blue-500" />, 
      text: "Precision Medicine Focus" 
    },
    { 
      icon: <Shield className="h-5 w-5 text-blue-500" />, 
      text: "Security & Compliance" 
    },
    { 
      icon: <Database className="h-5 w-5 text-blue-500" />, 
      text: "Integrated Data Environment" 
    },
    { 
      icon: <Users className="h-5 w-5 text-blue-500" />, 
      text: "Collaborative Model Building" 
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50/70 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent inline-block">
              Our Purpose
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
            
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              To provide a fully integrated, secure, and collaborative AI environment for model development,
              validation, explainability, and real-world deployment — all within Akeno's trusted ecosystem.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {purposePoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">{point.icon}</div>
                  <span className="text-gray-700 font-medium">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
