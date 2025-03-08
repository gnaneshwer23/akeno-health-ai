
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';

interface DiagnosticInsightCardProps {
  patientName: string;
  condition: string;
  priority: 'High Priority' | 'Medium Priority' | 'Low Priority';
  analysis: string;
  insights: string[];
}

const DiagnosticInsightCard: React.FC<DiagnosticInsightCardProps> = ({
  patientName,
  condition,
  priority,
  analysis,
  insights,
}) => {
  const getBadgeColor = () => {
    switch (priority) {
      case 'High Priority':
        return 'bg-red-500';
      case 'Medium Priority':
        return 'bg-amber-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <Card>
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">{patientName} - {condition}</CardTitle>
          <Badge className={getBadgeColor()}>{priority}</Badge>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-sm text-muted-foreground mb-2">{analysis}</p>
        <ul className="text-sm list-disc pl-4 space-y-1">
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0 pb-3">
        <Button variant="default" size="sm">View Complete Analysis</Button>
      </CardFooter>
    </Card>
  );
};

export default DiagnosticInsightCard;
