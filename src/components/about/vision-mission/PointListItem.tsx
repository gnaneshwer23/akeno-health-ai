
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PointListItemProps {
  point: string;
  index: number;
  color: "indigo" | "purple";
}

export const PointListItem = ({ point, index, color }: PointListItemProps) => {
  let bgColor, textColor, hoverBgColor;
  
  if (color === "indigo") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-600";
    hoverBgColor = "group-hover:bg-blue-200";
  } else {
    bgColor = "bg-purple-100";
    textColor = "text-purple-600";
    hoverBgColor = "group-hover:bg-purple-200";
  }
  
  return (
    <motion.li 
      className="flex items-start gap-4 group"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
      whileHover={{ x: 3 }}
    >
      <div className={`min-w-7 h-7 mt-0.5 rounded-full ${bgColor} ${hoverBgColor} p-1.5 flex items-center justify-center transition-colors duration-300`}>
        <Check size={16} className={`${textColor} transition-all duration-300 group-hover:scale-110`} strokeWidth={3} />
      </div>
      <span className="text-lg font-medium text-gray-700 leading-relaxed">{point}</span>
    </motion.li>
  );
};
