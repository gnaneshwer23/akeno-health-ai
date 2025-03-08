
// Helper functions for risk assessment
export const getRiskLabel = (riskScore: number): string => {
  if (riskScore < 0.2) return "Low Risk";
  if (riskScore < 0.5) return "Moderate Risk";
  return "High Risk";
};

export const getRiskColor = (riskScore: number): string => {
  if (riskScore < 0.2) return "text-green-600";
  if (riskScore < 0.5) return "text-yellow-600";
  return "text-red-600";
};

export const getCardiovascularDescription = (riskScore: number): string => {
  if (riskScore < 0.2) return "Your cardiovascular risk is lower than average for your demographic";
  if (riskScore < 0.5) return "Your risk factors suggest monitoring your heart health";
  return "Your profile indicates several cardiovascular risk factors to address";
};

export const getDiabetesDescription = (riskScore: number): string => {
  if (riskScore < 0.2) return "Your metabolic health indicators are within healthy ranges";
  if (riskScore < 0.5) return "Some indicators suggest monitoring your glucose levels";
  return "Your profile indicates an elevated risk for metabolic disorders";
};

export const getCognitiveDescription = (riskScore: number): string => {
  if (riskScore < 0.2) return "Your genetic and lifestyle factors show lower risk for cognitive decline";
  if (riskScore < 0.5) return "Moderate risk based on genomic analysis and other factors";
  return "Your genetic profile contains markers associated with cognitive health risks";
};
