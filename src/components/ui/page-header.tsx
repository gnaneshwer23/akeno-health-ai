
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  bgClass?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  bgClass = "bg-gradient-to-r from-health-primary/10 to-health-secondary/10"
}) => {
  return (
    <div className={`py-12 ${bgClass}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-health-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
