
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

import { RiskItem, BiomarkerItem, RiskAssessmentData } from '../types/riskAssessmentTypes';
import { getInitialRiskItems, getInitialBiomarkers } from '../utils/initialStates';
import { processRiskItems, processBiomarkers, createFallbackRiskItems } from '../utils/riskDataProcessor';
import { riskAssessmentService } from '../services/riskAssessmentService';

export const useRiskAssessment = (): RiskAssessmentData => {
  const [riskItems, setRiskItems] = useState<RiskItem[]>(getInitialRiskItems());
  const [biomarkers, setBiomarkers] = useState<BiomarkerItem[]>(getInitialBiomarkers());
  const [processingResults, setProcessingResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [multiOmicsAnalysis, setMultiOmicsAnalysis] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadRiskAssessment = async () => {
      try {
        // Get patient ID
        const patientId = riskAssessmentService.getPatientId();
        
        // Fetch risk assessment data
        const assessmentData = await riskAssessmentService.fetchRiskAssessment(patientId);
        
        // Process and update risk items
        const updatedRiskItems = processRiskItems(assessmentData, riskItems);
        setRiskItems(updatedRiskItems);
        
        // Set processing results
        setProcessingResults(assessmentData.preprocessingResults);
        
        // Process and update biomarkers if available
        if (assessmentData.biomarkerTrends) {
          const biomarkerList = processBiomarkers(assessmentData);
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
        
      } catch (error: any) {
        console.error("Error loading risk assessment:", error);
        setLoading(false);
        
        // Show error toast
        toast({
          title: "Error analyzing health data",
          description: error.message || "Could not generate risk assessment",
          variant: "destructive",
        });
        
        // Set fallback data
        const fallbackItems = createFallbackRiskItems(riskItems);
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
