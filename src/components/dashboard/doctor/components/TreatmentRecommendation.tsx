
import React from 'react';

interface TreatmentRecommendationProps {
  patientName: string;
  condition: string;
  description: string;
  recommendations: string[];
}

const TreatmentRecommendation: React.FC<TreatmentRecommendationProps> = ({
  patientName,
  condition,
  description,
  recommendations,
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-1">{patientName} - {condition}</h4>
      <p className="text-sm text-muted-foreground mb-1">{description}</p>
      <ul className="text-sm list-disc pl-4 space-y-1">
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentRecommendation;
