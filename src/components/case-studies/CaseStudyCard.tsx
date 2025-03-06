
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
  outcome,
}) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-t-health-secondary overflow-hidden bg-white group">
      <CardHeader className="bg-gradient-to-r from-health-light/50 to-transparent">
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-health-dark flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-health-primary/10 text-health-primary">1</span>
            Challenge:
          </h4>
          <p className="text-muted-foreground pl-8">{challenge}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-health-dark flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-health-primary/10 text-health-primary">2</span>
            Solution:
          </h4>
          <p className="text-muted-foreground pl-8">{solution}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-health-dark flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-health-primary/10 text-health-primary">3</span>
            Outcome:
          </h4>
          <p className="text-muted-foreground pl-8">{outcome}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto text-health-secondary group-hover:text-health-primary group-hover:bg-health-light/20 transition-all"
        >
          View Details
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
