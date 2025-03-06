
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

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
    <Card className="h-full shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-health-secondary overflow-hidden bg-white">
      <CardHeader className="bg-gradient-to-r from-health-light/50 to-transparent">
        <CardTitle className="text-xl font-bold text-health-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-2">
        <div>
          <h4 className="font-semibold text-health-dark mb-1">Challenge:</h4>
          <p className="text-muted-foreground">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-health-dark mb-1">Solution:</h4>
          <p className="text-muted-foreground">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-health-dark mb-1">Outcome:</h4>
          <p className="text-muted-foreground">{outcome}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="ghost" size="sm" className="ml-auto text-health-secondary hover:text-health-primary">
          View Details
          <ArrowRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
