
import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: string;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            delay: 0.5 + (index * 0.2),
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <p className="text-lg font-medium text-amber-900">
        {question}
      </p>
    </motion.div>
  );
};
