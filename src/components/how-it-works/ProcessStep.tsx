
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: {
    icon: React.ReactNode;
    title?: string;
    content: string;
  }[];
  outcome: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  icon,
  features,
  outcome
}) => {
  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="lg:w-1/3 flex-shrink-0">
          <div className="sticky top-28">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary text-white text-xl font-medium">{stepNumber}</div>
              <h3 className="text-2xl font-medium text-health-dark">{title}</h3>
            </div>
            <div className="pl-16">
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
              <div className="h-40 w-40 mx-auto rounded-xl bg-gradient-to-br from-health-primary/20 to-health-secondary/20 flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="space-y-6">
            <div className="bg-health-light/30 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-health-primary/10 flex items-center justify-center text-health-primary">
                      {feature.icon}
                    </div>
                    <div>
                      {feature.title && (
                        <h5 className="text-base font-medium text-health-dark mb-1">{feature.title}</h5>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {feature.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-health-primary/10 shadow-sm">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-health-primary flex items-center justify-center text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-medium text-health-dark mb-2">Outcome:</h5>
                  <p className="text-sm text-muted-foreground">
                    {outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
