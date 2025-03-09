
import React from 'react';
import { motion } from 'framer-motion';

interface DataSourceProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const DataSource = ({ title, icon, color, delay = 0 }: DataSourceProps) => (
  <motion.div 
    className="flex items-center gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-14 h-14 rounded-md bg-white border border-[#8571DD]/20 flex items-center justify-center shadow-sm`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default DataSource;
