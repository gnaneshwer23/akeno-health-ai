
import React, { useState, useEffect } from 'react';
import { Heart, Droplet, Dna, AlertCircle, Check, BarChart2, Brain, Activity, FileText } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataProcessingService } from '@/services/dataProcessingService';
import { useToast } from '@/hooks/use-toast';

interface RiskItem {
  icon: React.ReactNode;
  name: string;
  risk: string;
  riskColor: string;
  progress: number;
  description: string;
}

interface BiomarkerItem {
  name: string;
  value: number | string;
  status: string;
  trend: string;
  impact: string;
}

const RiskAssessmentCard = () => {
  const [riskItems, setRiskItems] = useState<RiskItem[]>([
    {
      icon: <Heart className="h-4 w-4 text-red-500" />,
      name: "Cardiovascular Disease",
      risk: "Loading...",
      riskColor: "text-gray-600",
      progress: 0,
      description: "Analyzing your cardiovascular risk factors"
    },
    {
      icon: <Droplet className="h-4 w-4 text-blue-500" />,
      name: "Type 2 Diabetes",
      risk: "Loading...",
      riskColor: "text-gray-600",
      progress: 0,
      description: "Analyzing your metabolic health indicators"
    },
    {
      icon: <Dna className="h-4 w-4 text-purple-500" />,
      name: "Alzheimer's Disease",
      risk: "Loading...",
      riskColor: "text-gray-600",
      progress: 0,
      description: "Analyzing your genetic profile and risk factors"
    }
  ]);
  
  const [biomarkers, setBiomarkers] = useState<BiomarkerItem[]>([]);
  const [processingResults, setProcessingResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [multiOmicsAnalysis, setMultiOmicsAnalysis] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadRiskAssessment = async () => {
      try {
        // Fetch patient ID (in a real app, this would come from the authenticated user)
        // For demo, we'll use a placeholder patient ID or get it from localStorage
        const patientId = localStorage.getItem('demoPatientId') || 'demo-patient-id';
        
        // Get risk assessment data
        const assessmentData = await dataProcessingService.generateRiskAssessment(patientId);
        
        // Update risk items with real data
        const updatedRiskItems = [...riskItems];
        
        // Cardiovascular risk
        if (assessmentData.riskScores.cardiovascular !== undefined) {
          const cvRisk = assessmentData.riskScores.cardiovascular;
          updatedRiskItems[0] = {
            ...updatedRiskItems[0],
            risk: getRiskLabel(cvRisk),
            riskColor: getRiskColor(cvRisk),
            progress: Math.round(cvRisk * 100),
            description: getCardiovascularDescription(cvRisk)
          };
        }
        
        // Diabetes risk
        if (assessmentData.riskScores.diabetes !== undefined) {
          const diabetesRisk = assessmentData.riskScores.diabetes;
          updatedRiskItems[1] = {
            ...updatedRiskItems[1],
            risk: getRiskLabel(diabetesRisk),
            riskColor: getRiskColor(diabetesRisk),
            progress: Math.round(diabetesRisk * 100),
            description: getDiabetesDescription(diabetesRisk)
          };
        }
        
        // Cognitive risk
        if (assessmentData.riskScores.cognitive !== undefined) {
          const cognitiveRisk = assessmentData.riskScores.cognitive;
          updatedRiskItems[2] = {
            ...updatedRiskItems[2],
            risk: getRiskLabel(cognitiveRisk),
            riskColor: getRiskColor(cognitiveRisk),
            progress: Math.round(cognitiveRisk * 100),
            description: getCognitiveDescription(cognitiveRisk)
          };
        }
        
        setRiskItems(updatedRiskItems);
        setProcessingResults(assessmentData.preprocessingResults);
        
        // Set biomarker data if available
        if (assessmentData.biomarkerTrends) {
          const biomarkerList: BiomarkerItem[] = [];
          
          // Add significant biomarkers first
          assessmentData.biomarkerTrends.significant?.forEach((marker: any) => {
            biomarkerList.push({
              name: marker.biomarker,
              value: marker.value,
              status: "Alert",
              trend: marker.trend,
              impact: marker.riskImpact
            });
          });
          
          // Add monitoring biomarkers next
          assessmentData.biomarkerTrends.monitoring?.forEach((marker: any) => {
            biomarkerList.push({
              name: marker.biomarker,
              value: marker.value,
              status: "Monitor",
              trend: marker.trend,
              impact: marker.riskImpact
            });
          });
          
          // Add normal biomarkers last
          assessmentData.biomarkerTrends.normal?.forEach((marker: any) => {
            biomarkerList.push({
              name: marker.biomarker,
              value: marker.value,
              status: "Normal",
              trend: marker.trend,
              impact: marker.riskImpact
            });
          });
          
          setBiomarkers(biomarkerList);
        }
        
        // Set multi-omics analysis if available
        if (assessmentData.multiOmicsAnalysis) {
          setMultiOmicsAnalysis(assessmentData.multiOmicsAnalysis);
        }
        
        setLoading(false);
        
        // Show success toast
        toast({
          title: "Risk assessment completed",
          description: "Your health data has been analyzed by our AI",
          variant: "default",
        });
        
      } catch (error) {
        console.error("Error loading risk assessment:", error);
        setLoading(false);
        
        // Show error toast
        toast({
          title: "Error analyzing health data",
          description: error.message || "Could not generate risk assessment",
          variant: "destructive",
        });
        
        // Set fallback data
        const fallbackItems = riskItems.map(item => ({
          ...item,
          risk: "Unknown",
          riskColor: "text-gray-600",
          progress: 0,
          description: "Could not analyze your health data"
        }));
        
        setRiskItems(fallbackItems);
      }
    };
    
    loadRiskAssessment();
  }, []);
  
  // Helper functions for risk assessment
  const getRiskLabel = (riskScore: number): string => {
    if (riskScore < 0.2) return "Low Risk";
    if (riskScore < 0.5) return "Moderate Risk";
    return "High Risk";
  };
  
  const getRiskColor = (riskScore: number): string => {
    if (riskScore < 0.2) return "text-green-600";
    if (riskScore < 0.5) return "text-yellow-600";
    return "text-red-600";
  };
  
  const getCardiovascularDescription = (riskScore: number): string => {
    if (riskScore < 0.2) return "Your cardiovascular risk is lower than average for your demographic";
    if (riskScore < 0.5) return "Your risk factors suggest monitoring your heart health";
    return "Your profile indicates several cardiovascular risk factors to address";
  };
  
  const getDiabetesDescription = (riskScore: number): string => {
    if (riskScore < 0.2) return "Your metabolic health indicators are within healthy ranges";
    if (riskScore < 0.5) return "Some indicators suggest monitoring your glucose levels";
    return "Your profile indicates an elevated risk for metabolic disorders";
  };
  
  const getCognitiveDescription = (riskScore: number): string => {
    if (riskScore < 0.2) return "Your genetic and lifestyle factors show lower risk for cognitive decline";
    if (riskScore < 0.5) return "Moderate risk based on genomic analysis and other factors";
    return "Your genetic profile contains markers associated with cognitive health risks";
  };
  
  const getBiomarkerStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'alert': return 'text-red-600';
      case 'monitor': return 'text-yellow-600';
      case 'normal': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch (trend.toLowerCase()) {
      case 'elevated':
        return <Activity className="h-4 w-4 text-red-500" />;
      case 'borderline':
        return <Activity className="h-4 w-4 text-yellow-500" />;
      case 'suboptimal':
        return <Activity className="h-4 w-4 text-yellow-500" />;
      case 'normal':
      case 'stable':
        return <Activity className="h-4 w-4 text-green-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Risk Assessment</CardTitle>
        <CardDescription>Personalized disease risk based on genetics, biometrics, and lifestyle</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="risks">
          <TabsList className="mb-4">
            <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
            <TabsTrigger value="biomarkers">Biomarker Analysis</TabsTrigger>
            <TabsTrigger value="multiomics">Multi-Omics</TabsTrigger>
            <TabsTrigger value="preprocessing">Preprocessing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="risks" className="space-y-4">
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
          </TabsContent>
          
          <TabsContent value="biomarkers">
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing your biomarkers...</p>
              </div>
            ) : biomarkers.length > 0 ? (
              <div className="space-y-4">
                {biomarkers.map((biomarker, index) => (
                  <div key={index} className="border rounded-md p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {getTrendIcon(biomarker.trend)}
                        <span className="font-medium">{biomarker.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${getBiomarkerStatusColor(biomarker.status)} bg-opacity-10`}>
                        {biomarker.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Value:</span> {biomarker.value}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Trend:</span> {biomarker.trend}
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{biomarker.impact}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                <p>No biomarker data available for analysis.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="multiomics">
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing multi-omics data fusion...</p>
              </div>
            ) : multiOmicsAnalysis ? (
              <div className="space-y-4">
                {/* Biological Pathways */}
                {multiOmicsAnalysis.pathways && multiOmicsAnalysis.pathways.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Dna className="h-4 w-4 text-purple-500" />
                      Biological Pathways
                    </h4>
                    <div className="space-y-2">
                      {multiOmicsAnalysis.pathways.map((pathway: any, index: number) => (
                        <div key={index} className="bg-slate-50 p-3 rounded-md">
                          <div className="flex justify-between">
                            <span className="font-medium">{pathway.name}</span>
                            <span className={
                              pathway.significance === 'high' ? 'text-red-600' : 
                              pathway.significance === 'medium' ? 'text-yellow-600' : 
                              'text-green-600'
                            }>
                              {pathway.significance} significance
                            </span>
                          </div>
                          <p className="text-sm mt-1">{pathway.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Recommended Biomarkers */}
                {multiOmicsAnalysis.biomarkers && multiOmicsAnalysis.biomarkers.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                      Recommended Biomarkers to Monitor
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {multiOmicsAnalysis.biomarkers.map((biomarker: any, index: number) => (
                        <div key={index} className="bg-slate-50 p-3 rounded-md">
                          <div className="font-medium">{biomarker.name}</div>
                          <div className="text-xs text-muted-foreground">Category: {biomarker.category}</div>
                          <p className="text-sm mt-1">{biomarker.recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Personalized Insights */}
                {multiOmicsAnalysis.personalizedInsights && multiOmicsAnalysis.personalizedInsights.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-indigo-500" />
                      Personalized Insights
                    </h4>
                    <ul className="space-y-2">
                      {multiOmicsAnalysis.personalizedInsights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                <p>No multi-omics analysis data available.</p>
                <p className="text-xs mt-2">This requires genomic data combined with other health metrics.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="preprocessing">
            {loading ? (
              <div className="py-6 text-center text-muted-foreground">
                <p>Analyzing and preprocessing your health data...</p>
              </div>
            ) : processingResults ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-md bg-slate-50">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-indigo-500" />
                    <span className="font-medium">Features Extracted</span>
                  </div>
                  <span className="text-lg font-semibold text-indigo-600">{processingResults.featureCount}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-md bg-slate-50">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">Anomalies Detected</span>
                  </div>
                  <span className="text-lg font-semibold text-amber-600">{processingResults.anomalyCount}</span>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Key Findings</h4>
                  <ul className="space-y-2">
                    {processingResults.significantFindings.map((finding: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        {finding.includes("No significant") ? (
                          <Check className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                        )}
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {processingResults.topFeatures && processingResults.topFeatures.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Top Health Indicators</h4>
                    <ul className="space-y-2">
                      {processingResults.topFeatures.map((feature: any, index: number) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                          <span className="capitalize">{feature.name.replace(/_/g, ' ')}</span>
                          <span className="text-xs text-muted-foreground">({feature.category})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <AlertCircle className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                <p>Could not retrieve preprocessing results.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-muted-foreground">
        <span>Last updated: {new Date().toLocaleDateString()}</span>
        <span>AI-powered analysis</span>
      </CardFooter>
    </Card>
  );
};

export default RiskAssessmentCard;
