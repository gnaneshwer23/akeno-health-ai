
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  challenge, 
  solution, 
  outcome 
}) => {
  return (
    <Card className="h-full shadow-sm border-none overflow-hidden bg-white">
      <CardHeader className="pb-3 bg-gradient-to-r from-health-light/30 to-transparent">
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <CheckCircle className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-health-dark mb-1">Challenge:</p>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <CheckCircle className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-health-dark mb-1">Solution:</p>
              <p className="text-muted-foreground">{solution}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <CheckCircle className="h-5 w-5 text-health-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-health-dark mb-1">Outcome:</p>
              <p className="text-muted-foreground">{outcome}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
