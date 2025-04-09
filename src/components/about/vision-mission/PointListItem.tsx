
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PointListItemProps {
  point: string;
  index: number;
  color: "indigo" | "purple";
}

export const PointListItem = ({ point, index, color }: PointListItemProps) => {
  const bgColor = color === "indigo" ? "bg-indigo-100" : "bg-purple-100";
  const textColor = color === "indigo" ? "text-indigo-600" : "text-purple-600";
  
  return (
    <motion.li 
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
      whileHover={{ x: 3 }}
    >
      <div className={`min-w-7 h-7 mt-0.5 rounded-full ${bgColor} p-1.5 flex items-center justify-center`}>
        <Check size={16} className={textColor} strokeWidth={3} />
      </div>
      <span className="text-lg font-medium text-gray-700">{point}</span>
    </motion.li>
  );
};
