
import { useState, useEffect } from 'react';
import { Heart, Droplet, Dna } from 'lucide-react';
import { dataProcessingService } from '@/services/dataProcessingService';
import { useToast } from '@/hooks/use-toast';
import { 
  getRiskLabel, 
  getRiskColor, 
  getCardiovascularDescription, 
  getDiabetesDescription, 
  getCognitiveDescription 
} from '../utils/riskAssessmentUtils';

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

export const useRiskAssessment = () => {
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

  return {
    riskItems,
    biomarkers,
    processingResults,
    loading,
    multiOmicsAnalysis
  };
};
