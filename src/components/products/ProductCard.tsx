
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
  linkTo?: string;
  linkText?: string;
  onClick?: () => void;
}

const ProductCard = ({
  icon,
  iconBgClass,
  title,
  description,
  linkTo,
  linkText = "Learn more →",
  onClick
}: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className={`${iconBgClass} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        <CustomButton 
          variant="link" 
          to={linkTo}
          className={linkTo ? "" : ""}
          onClick={onClick}
        >
          {linkText}
        </CustomButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;
