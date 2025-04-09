
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PointListItemProps {
  point: string;
  index: number;
  color: "indigo" | "purple";
}

export const PointListItem = ({ point, index, color }: PointListItemProps) => {
  let bgColor, textColor, hoverBgColor, iconBgColor;
  
  if (color === "indigo") {
    bgColor = "bg-blue-50";
    textColor = "text-blue-600";
    hoverBgColor = "group-hover:bg-blue-100";
    iconBgColor = "bg-blue-100";
  } else {
    bgColor = "bg-purple-50";
    textColor = "text-purple-600";
    hoverBgColor = "group-hover:bg-purple-100";
    iconBgColor = "bg-purple-100";
  }
  
  return (
    <motion.li 
      className="flex items-start gap-4 group mb-4 last:mb-0"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
      whileHover={{ x: 3 }}
    >
      <div className={`flex-shrink-0 min-w-8 h-8 mt-0.5 rounded-full ${iconBgColor} p-1.5 flex items-center justify-center transition-colors duration-300 ${hoverBgColor}`}>
        <Check size={18} className={`${textColor} transition-all duration-300 group-hover:scale-110`} strokeWidth={2.5} />
      </div>
      <div>
        <span className="text-lg text-gray-700 leading-relaxed font-medium">{point}</span>
      </div>
    </motion.li>
  );
};
