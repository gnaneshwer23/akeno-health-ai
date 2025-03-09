
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';

interface CTACardProps {
  icon: React.ReactNode;
  bgGradient: string;
  shadowColor: string;
  borderColor: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  buttonColor: string;
}

export const CTACard = ({
  icon,
  bgGradient,
  shadowColor,
  borderColor,
  title,
  description,
  link,
  linkText,
  buttonColor
}: CTACardProps) => {
  return (
    <Card 
      className={`border-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${shadowColor} ${borderColor}`}
    >
      <CardContent className="p-0 overflow-hidden">
        <div className={`${bgGradient} p-6 rounded-t-lg relative overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white/10 rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-2 relative z-10">
            <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        
        <div className="p-6 rounded-b-lg">
          <p className="text-health-dark/70 mb-6 min-h-[80px]">
            {description}
          </p>
          
          <Button 
            variant="link" 
            className={`${buttonColor} font-medium p-0 h-auto flex items-center gap-1 hover:gap-2 transition-all group`}
            as="Link" 
            to={link}
          >
            <span className="group-hover:underline">{linkText}</span> 
            <ArrowRight size={16} className="group-hover:animate-pulse" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
