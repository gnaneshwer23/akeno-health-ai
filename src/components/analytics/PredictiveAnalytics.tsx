
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, TrendingUp, CheckCircle2, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { analyticsService } from '@/services/analyticsService';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PredictiveAnalyticsProps {
  patientId: string;
}

export const PredictiveAnalytics = ({ patientId }: PredictiveAnalyticsProps) => {
  const [predictionType, setPredictionType] = useState<'readmission' | 'progression' | 'treatment'>('progression');
  const [loading, setLoading] = useState<boolean>(false);
  const [predictionData, setPredictionData] = useState<any>(null);
  const { toast } = useToast();

  const generatePrediction = async () => {
    try {
      setLoading(true);
      const data = await analyticsService.getPredictiveAnalytics(patientId, predictionType);
      setPredictionData(data);
      toast({
        title: "Prediction generated",
        description: "AI analysis completed successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error generating prediction",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Convert risk scores to chartable format
  const prepareChartData = () => {
    if (!predictionData || !predictionData.riskScores) return [];
    
    return Object.entries(predictionData.riskScores).map(([key, value]: [string, any]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      score: value.score,
      interpretation: value.interpretation,
      confidence: Math.round(value.confidence * 100),
    }));
  };

  const chartData = prepareChartData();
  
  const getInterpretationColor = (interpretation: string) => {
    switch (interpretation) {
      case 'Low Risk': return 'text-green-600';
      case 'Below Average Risk': return 'text-blue-600';
      case 'Average Risk': return 'text-yellow-600';
      case 'Elevated Risk': return 'text-orange-600';
      case 'High Risk': return 'text-red-600';
      default: return 'text-slate-600';
    }
  };
  
  const chartConfig = {
    disease: { color: '#ef4444' },
    diabetes: { color: '#f59e0b' },
    cardiovascular: { color: '#3b82f6' },
    respiratory: { color: '#10b981' },
    neurological: { color: '#8b5cf6' },
    cancer: { color: '#ec4899' },
    score: { color: '#6366f1' },
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-health-primary" />
          AI Predictive Analytics
        </CardTitle>
        <CardDescription>
          Utilize machine learning to predict health outcomes and risks
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="progression" onValueChange={(value) => setPredictionType(value as any)}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="progression">
              <Activity className="h-4 w-4 mr-2" />
              Disease Progression
            </TabsTrigger>
            <TabsTrigger value="readmission">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Readmission Risk
            </TabsTrigger>
            <TabsTrigger value="treatment">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Treatment Outcomes
            </TabsTrigger>
          </TabsList>
          
          <div className="space-y-4">
            <Button 
              onClick={generatePrediction} 
              disabled={loading} 
              className="w-full"
            >
              {loading ? "Analyzing Data..." : `Generate ${predictionType.charAt(0).toUpperCase() + predictionType.slice(1)} Prediction`}
            </Button>
            
            {predictionData && (
              <div className="space-y-6">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Prediction Summary</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {predictionType === 'progression' && "AI-predicted disease progression based on current health metrics and historical data."}
                    {predictionType === 'readmission' && "Calculated probability of patient readmission within 30, 60, and 90 days."}
                    {predictionType === 'treatment' && "Expected outcomes for current treatment plan based on similar patient profiles."}
                  </p>

                  <ChartContainer className="h-80" config={chartConfig}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                      <ChartTooltip content={(props) => (
                        <ChartTooltipContent 
                          {...props} 
                          formatter={(value, name, props) => (
                            <div className="p-2">
                              <p className="font-medium">{props.payload.name}</p>
                              <p className="text-sm">Risk Score: {props.payload.score}</p>
                              <p className={`text-sm ${getInterpretationColor(props.payload.interpretation)}`}>
                                {props.payload.interpretation}
                              </p>
                            </div>
                          )}
                        />
                      )} />
                      <Bar dataKey="score" name="Risk Score" fill="var(--color-score)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                  
                  {predictionData.riskScores && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(predictionData.riskScores).map(([key, value]: [string, any]) => (
                        <div key={key} className="border rounded-md p-3">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInterpretationColor(value.interpretation)} bg-opacity-10`}>
                              {value.score}/100
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{value.interpretation}</p>
                          
                          {value.recommendedActions && value.recommendedActions.length > 0 && (
                            <div>
                              <h5 className="text-xs font-medium mb-1">Recommended Actions:</h5>
                              <ul className="text-xs space-y-1 text-muted-foreground">
                                {value.recommendedActions.map((action: string, index: number) => (
                                  <li key={index} className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-health-primary rounded-full"></span>
                                    {action}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Tabs>
      </CardContent>
      
      <CardFooter className="bg-slate-50 px-6 py-3">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <span>Powered by AI-driven predictive analytics</span>
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
