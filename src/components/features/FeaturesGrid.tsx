
import React from 'react';
import { FeatureGridItem } from './FeatureGridItem';
import { features, detailedFeatures } from './featuresData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Quick features overview */}
      <div className="bg-gradient-to-r from-health-primary/5 to-health-secondary/5 rounded-3xl p-8 border border-health-primary/10 shadow-lg backdrop-blur-sm">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Key Platform Features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureGridItem 
              key={index} 
              icon={feature.icon} 
              text={feature.text} 
            />
          ))}
        </div>
      </div>
      
      {/* Detailed features aligned with backend capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {detailedFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-health-primary/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-health-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-health-dark mb-2">{feature.title}</h4>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="hidden">
                  <span className="text-xs text-health-primary/70">{feature.backendCapability}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA section */}
      <div className="flex justify-center">
        <Button 
          asChild
          className="bg-health-primary hover:bg-health-secondary text-white group"
        >
          <Link to="/patient-solutions" className="flex items-center">
            Explore Patient Solutions 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
