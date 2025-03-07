
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RecommendationProps {
  title: string;
  description: string;
  color: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ title, description, color }) => {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-${color}-100 text-${color}-600`}>
        <AlertCircle size={16} />
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WellnessPlanCard = () => {
  const nutritionRecommendations = [
    {
      title: "Increase Omega-3 Intake",
      description: "Your blood work indicates slightly low omega-3 levels. Consider adding fatty fish, flaxseeds, or a supplement to your diet.",
      color: "green"
    },
    {
      title: "Reduce Refined Carbohydrates",
      description: "Your glucose variability would benefit from replacing refined carbs with complex carbohydrates and fiber-rich foods.",
      color: "green"
    },
    {
      title: "Optimize Vitamin D",
      description: "Your current level is 28 ng/mL, which is below optimal. Consider 15 minutes of morning sunlight and a daily supplement.",
      color: "green"
    }
  ];

  const fitnessRecommendations = [
    {
      title: "Increase Cardiovascular Exercise",
      description: "Aim for 150 minutes of moderate-intensity aerobic activity weekly for optimal heart health.",
      color: "blue"
    },
    {
      title: "Add Resistance Training",
      description: "Your muscle mass is slightly below optimal. Add 2-3 strength training sessions per week.",
      color: "blue"
    },
    {
      title: "Improve Flexibility",
      description: "Your mobility assessment indicates tight hip flexors and hamstrings. Add daily stretching or yoga.",
      color: "blue"
    }
  ];

  const mentalRecommendations = [
    {
      title: "Stress Management",
      description: "Your cortisol patterns suggest elevated stress. Consider daily meditation or deep breathing exercises.",
      color: "purple"
    },
    {
      title: "Cognitive Training",
      description: "Regular brain games can help maintain cognitive function, especially important with your family history.",
      color: "purple"
    },
    {
      title: "Social Connection",
      description: "Research shows social engagement is critical for mental health. Aim for regular social activities.",
      color: "purple"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Guided Wellness Plan</CardTitle>
        <CardDescription>Personalized recommendations based on your health profile</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="nutrition">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
          </TabsList>
          
          <TabsContent value="nutrition" className="space-y-4">
            {nutritionRecommendations.map((rec, index) => (
              <Recommendation 
                key={index}
                title={rec.title}
                description={rec.description}
                color={rec.color}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="fitness" className="space-y-4">
            {fitnessRecommendations.map((rec, index) => (
              <Recommendation 
                key={index}
                title={rec.title}
                description={rec.description}
                color={rec.color}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="mental" className="space-y-4">
            {mentalRecommendations.map((rec, index) => (
              <Recommendation 
                key={index}
                title={rec.title}
                description={rec.description}
                color={rec.color}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WellnessPlanCard;
