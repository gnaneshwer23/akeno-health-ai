
import { RiskItem, BiomarkerItem, AssessmentResponse } from '../types/riskAssessmentTypes';
import { 
  getRiskLabel, 
  getRiskColor, 
  getCardiovascularDescription, 
  getDiabetesDescription, 
  getCognitiveDescription 
} from './riskAssessmentUtils';

export const processRiskItems = (
  assessmentData: AssessmentResponse, 
  currentRiskItems: RiskItem[]
): RiskItem[] => {
  const updatedRiskItems = [...currentRiskItems];
  
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
  
  return updatedRiskItems;
};

export const processBiomarkers = (assessmentData: AssessmentResponse): BiomarkerItem[] => {
  if (!assessmentData.biomarkerTrends) return [];
  
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
  
  return biomarkerList;
};

export const createFallbackRiskItems = (riskItems: RiskItem[]): RiskItem[] => {
  return riskItems.map(item => ({
    ...item,
    risk: "Unknown",
    riskColor: "text-gray-600",
    progress: 0,
    description: "Could not analyze your health data"
  }));
};
