
import React from 'react';
import { Heart, Droplet, Dna } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';

interface RiskItem {
  icon: React.ReactNode;
  name: string;
  risk: string;
  riskColor: string;
  progress: number;
  description: string;
}

const RiskAssessmentCard = () => {
  const riskItems: RiskItem[] = [
    {
      icon: <Heart className="h-4 w-4 text-red-500" />,
      name: "Cardiovascular Disease",
      risk: "Low Risk",
      riskColor: "text-green-600",
      progress: 18,
      description: "Your risk is 62% lower than average for your age group"
    },
    {
      icon: <Droplet className="h-4 w-4 text-blue-500" />,
      name: "Type 2 Diabetes",
      risk: "Low Risk",
      riskColor: "text-green-600",
      progress: 15,
      description: "Your risk is 75% lower than average for your age group"
    },
    {
      icon: <Dna className="h-4 w-4 text-purple-500" />,
      name: "Alzheimer's Disease",
      risk: "Moderate Risk",
      riskColor: "text-yellow-600",
      progress: 42,
      description: "Your genetic profile shows some risk factors, but lifestyle interventions can help"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Risk Assessment</CardTitle>
        <CardDescription>Personalized disease risk based on genetics, biometrics, and lifestyle</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {riskItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
                <span className={`${item.riskColor} font-medium`}>{item.risk}</span>
              </div>
              <Progress value={item.progress} className="h-2" />
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessmentCard;
