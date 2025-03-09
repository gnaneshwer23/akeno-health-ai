
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
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-18 h-18 rounded-md border border-${color}/30 bg-${color}/10 flex items-center justify-center mb-3 p-4`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-center max-w-[120px]">{title}</span>
  </motion.div>
);

export default DataSource;
