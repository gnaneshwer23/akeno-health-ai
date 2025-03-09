
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
    className="flex flex-col items-center gap-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-20 h-20 rounded-md bg-white border border-${color}/20 flex items-center justify-center p-4 shadow-sm`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-center max-w-[160px] text-[#1A1F2C]">{title}</span>
  </motion.div>
);

export default DataSource;
