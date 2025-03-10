
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PointListItemProps {
  point: string;
  index: number;
  color: "indigo" | "purple";
}

export const PointListItem = ({ point, index, color }: PointListItemProps) => {
  return (
    <motion.li 
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
    >
      <div className="min-w-6 mt-1">
        <Check size={20} className={`text-${color}-600`} />
      </div>
      <span className="text-lg text-gray-700">{point}</span>
    </motion.li>
  );
};
