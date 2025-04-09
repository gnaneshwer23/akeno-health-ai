
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
  onClick?: () => void;
  index?: number;
}

const FeatureCard = ({
  icon,
  iconBgClass,
  title,
  description,
  onClick,
  index = 0
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className={`${iconBgClass} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <CustomButton 
          variant="link" 
          className={iconBgClass.replace('bg-', 'text-').replace('/10', '') + ' p-0 hover:' + iconBgClass.replace('bg-', 'text-').replace('/10', '/70')}
          onClick={onClick}
        >
          Explore Solution →
        </CustomButton>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
