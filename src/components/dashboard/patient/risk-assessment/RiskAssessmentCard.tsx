
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import RiskAssessmentTabs from './components/RiskAssessmentTabs';
import { useRiskAssessment } from './hooks/useRiskAssessment';

const RiskAssessmentCard = () => {
  const {
    riskItems,
    biomarkers,
    processingResults,
    loading,
    multiOmicsAnalysis
  } = useRiskAssessment();

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Risk Assessment</CardTitle>
        <CardDescription>Personalized disease risk based on genetics, biometrics, and lifestyle</CardDescription>
      </CardHeader>
      <CardContent>
        <RiskAssessmentTabs
          loading={loading}
          riskItems={riskItems}
          biomarkers={biomarkers}
          multiOmicsAnalysis={multiOmicsAnalysis}
          processingResults={processingResults}
        />
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-muted-foreground">
        <span>Last updated: {new Date().toLocaleDateString()}</span>
        <span>AI-powered analysis</span>
      </CardFooter>
    </Card>
  );
};

export default RiskAssessmentCard;
