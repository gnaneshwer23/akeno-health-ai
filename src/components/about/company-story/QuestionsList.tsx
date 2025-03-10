
import React from 'react';
import { motion } from 'framer-motion';
import { QuestionCard } from './QuestionCard';

interface QuestionsListProps {
  questions: string[];
}

export const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  return (
    <motion.div 
      className="space-y-4 max-w-3xl mx-auto mb-16"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5
          }
        }
      }}
    >
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} index={index} />
      ))}
    </motion.div>
  );
};
