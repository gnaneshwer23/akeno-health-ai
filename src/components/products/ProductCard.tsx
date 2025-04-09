
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  linkText = "Learn more",
  onClick
}: ProductCardProps) => {
  const { toast } = useToast();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast({
        title: "Product Selected",
        description: `You've selected ${title}. Exploring details now.`,
      });
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all h-full group"
      whileHover={{ y: -8 }}
    >
      <div className="p-6 flex flex-col h-full relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50/80 rounded-bl-full -z-10"></div>
        
        <div className={`${iconBgClass} p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent">{title}</h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        
        <CustomButton 
          variant="link" 
          to={linkTo}
          className="text-health-primary font-medium group p-0 flex items-center mt-2"
          onClick={handleClick}
          rightIcon={<ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />}
        >
          {linkText}
        </CustomButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;
