
import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataProcessingService } from '@/services/dataProcessingService';
import { useToast } from '@/hooks/use-toast';

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
  const [recommendations, setRecommendations] = useState({
    nutrition: [
      {
        title: "Loading nutrition recommendations...",
        description: "Please wait while we analyze your health data",
        color: "gray"
      }
    ],
    fitness: [
      {
        title: "Loading fitness recommendations...",
        description: "Please wait while we analyze your health data",
        color: "gray"
      }
    ],
    mental: [
      {
        title: "Loading mental health recommendations...",
        description: "Please wait while we analyze your health data",
        color: "gray"
      }
    ]
  });
  
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        // Fetch patient ID (in a real app, this would come from the authenticated user)
        const patientId = localStorage.getItem('demoPatientId') || 'demo-patient-id';
        
        // Get health insights with recommendations
        const assessmentData = await dataProcessingService.generateRiskAssessment(patientId);
        
        // Map the recommendations to our wellness plan categories
        const processedRecommendations = processRecommendations(assessmentData.recommendations || []);
        setRecommendations(processedRecommendations);
        setLoading(false);
        
      } catch (error) {
        console.error("Error loading wellness recommendations:", error);
        setLoading(false);
        
        // Set fallback recommendations
        setRecommendations({
          nutrition: [
            {
              title: "Balanced Diet",
              description: "Focus on a diet rich in vegetables, fruits, lean proteins, and whole grains.",
              color: "green"
            },
            {
              title: "Hydration",
              description: "Maintain adequate hydration by drinking at least 8 glasses of water daily.",
              color: "green"
            }
          ],
          fitness: [
            {
              title: "Regular Exercise",
              description: "Aim for at least 150 minutes of moderate-intensity activity weekly.",
              color: "blue"
            },
            {
              title: "Strength Training",
              description: "Include resistance training 2-3 times per week to maintain muscle mass.",
              color: "blue"
            }
          ],
          mental: [
            {
              title: "Stress Management",
              description: "Practice mindfulness, meditation, or deep breathing for 10 minutes daily.",
              color: "purple"
            },
            {
              title: "Quality Sleep",
              description: "Prioritize 7-9 hours of quality sleep each night for mental well-being.",
              color: "purple"
            }
          ]
        });
        
        toast({
          title: "Using default recommendations",
          description: "Could not retrieve personalized wellness plan",
          variant: "destructive",
        });
      }
    };
    
    loadRecommendations();
  }, []);
  
  // Process and categorize recommendations
  const processRecommendations = (recommendationsData: any[]) => {
    const processedRecs = {
      nutrition: [],
      fitness: [],
      mental: []
    };
    
    // If no recommendations, provide default ones
    if (!recommendationsData || recommendationsData.length === 0) {
      return {
        nutrition: [
          {
            title: "Balanced Diet",
            description: "Focus on a diet rich in vegetables, fruits, lean proteins, and whole grains.",
            color: "green"
          },
          {
            title: "Adequate Hydration",
            description: "Maintain proper hydration by drinking at least 8 glasses of water daily.",
            color: "green"
          }
        ],
        fitness: [
          {
            title: "Regular Physical Activity",
            description: "Aim for at least 150 minutes of moderate activity each week.",
            color: "blue"
          },
          {
            title: "Strength Training",
            description: "Add resistance training 2-3 times weekly for muscle maintenance.",
            color: "blue"
          }
        ],
        mental: [
          {
            title: "Stress Management",
            description: "Practice mindfulness or meditation for 10 minutes daily.",
            color: "purple"
          },
          {
            title: "Quality Sleep",
            description: "Prioritize 7-9 hours of quality sleep for mental well-being.",
            color: "purple"
          }
        ]
      };
    }
    
    // Map API recommendations to wellness categories
    recommendationsData.forEach(rec => {
      const recommendation = {
        title: rec.title,
        description: rec.description,
        color: getCategoryColor(rec.category)
      };
      
      // Categorize based on recommendation category
      if (rec.category === 'metabolic' || rec.category === 'nutritional') {
        processedRecs.nutrition.push(recommendation);
      } else if (rec.category === 'cardiovascular' || rec.category === 'fitness') {
        processedRecs.fitness.push(recommendation);
      } else if (rec.category === 'preventive' || rec.category === 'cognitive') {
        processedRecs.mental.push(recommendation);
      } else {
        // Default to nutrition if category doesn't match
        processedRecs.nutrition.push(recommendation);
      }
    });
    
    // Add default recommendations if any category is empty
    if (processedRecs.nutrition.length === 0) {
      processedRecs.nutrition.push({
        title: "Balanced Nutrition",
        description: "Focus on whole foods, adequate protein, and plenty of vegetables.",
        color: "green"
      });
    }
    
    if (processedRecs.fitness.length === 0) {
      processedRecs.fitness.push({
        title: "Regular Exercise",
        description: "Aim for a combination of cardiovascular and strength training exercises.",
        color: "blue"
      });
    }
    
    if (processedRecs.mental.length === 0) {
      processedRecs.mental.push({
        title: "Mental Wellness",
        description: "Practice regular stress management techniques and ensure adequate sleep.",
        color: "purple"
      });
    }
    
    return processedRecs;
  };
  
  // Get color based on recommendation category
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'cardiovascular':
        return 'red';
      case 'metabolic':
        return 'green';
      case 'preventive':
        return 'blue';
      case 'cognitive':
        return 'purple';
      default:
        return 'green';
    }
  };

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
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing your data to generate nutrition recommendations...</p>
              </div>
            ) : (
              recommendations.nutrition.map((rec, index) => (
                <Recommendation 
                  key={index}
                  title={rec.title}
                  description={rec.description}
                  color={rec.color}
                />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="fitness" className="space-y-4">
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing your data to generate fitness recommendations...</p>
              </div>
            ) : (
              recommendations.fitness.map((rec, index) => (
                <Recommendation 
                  key={index}
                  title={rec.title}
                  description={rec.description}
                  color={rec.color}
                />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="mental" className="space-y-4">
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing your data to generate mental health recommendations...</p>
              </div>
            ) : (
              recommendations.mental.map((rec, index) => (
                <Recommendation 
                  key={index}
                  title={rec.title}
                  description={rec.description}
                  color={rec.color}
                />
              ))
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WellnessPlanCard;
