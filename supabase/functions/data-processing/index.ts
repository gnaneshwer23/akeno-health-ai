
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/**
 * Processes patient data and returns insights
 * @param data The patient data to process
 */
function processPatientData(data: any) {
  // Here we would have complex processing logic
  // This is a simplified placeholder
  const riskScores = {
    cardiovascular: calculateRiskScore(data.vitalSigns?.bloodPressure, data.labResults?.cholesterol),
    diabetes: calculateDiabetesRisk(data.labResults?.glucose, data.patientInfo?.bmi),
    cognitive: calculateCognitiveRisk(data.genomicData, data.patientInfo?.age),
  };
  
  const recommendations = generateRecommendations(riskScores, data);
  
  return {
    riskScores,
    recommendations,
    processingTimestamp: new Date().toISOString(),
  };
}

/**
 * Calculate risk score based on vitals and lab results
 */
function calculateRiskScore(bloodPressure: any, cholesterol: any): number {
  // Simplified risk calculation - in a real app this would use medical algorithms
  let risk = 0;
  
  if (bloodPressure) {
    const systolic = bloodPressure.systolic || 120;
    const diastolic = bloodPressure.diastolic || 80;
    
    if (systolic > 140 || diastolic > 90) {
      risk += 0.3; // 30% increased risk for high blood pressure
    }
  }
  
  if (cholesterol && cholesterol.total > 200) {
    risk += 0.2; // 20% increased risk for high cholesterol
  }
  
  return Math.min(1, Math.max(0, risk)); // Clamp between 0 and 1
}

/**
 * Calculate diabetes risk based on glucose levels and BMI
 */
function calculateDiabetesRisk(glucose: any, bmi: number): number {
  let risk = 0;
  
  if (glucose && glucose.level > 100) {
    risk += 0.25; // Elevated glucose increases risk
  }
  
  if (bmi && bmi > 25) {
    risk += 0.15; // Higher BMI increases risk
    if (bmi > 30) {
      risk += 0.2; // Obesity significantly increases risk
    }
  }
  
  return Math.min(1, Math.max(0, risk)); // Clamp between 0 and 1
}

/**
 * Calculate cognitive risk based on genomic data and age
 */
function calculateCognitiveRisk(genomicData: any, age: number): number {
  let risk = 0;
  
  if (age > 65) {
    risk += 0.2; // Age is a risk factor for cognitive decline
  }
  
  // Genomic risk factors (simplified example)
  if (genomicData && genomicData.riskMarkers) {
    if (genomicData.riskMarkers.includes('APOE4')) {
      risk += 0.3; // APOE4 allele increases risk for certain neurodegenerative conditions
    }
  }
  
  return Math.min(1, Math.max(0, risk)); // Clamp between 0 and 1
}

/**
 * Generate health recommendations based on risk scores
 */
function generateRecommendations(riskScores: any, data: any): any[] {
  const recommendations = [];
  
  // Cardiovascular recommendations
  if (riskScores.cardiovascular > 0.3) {
    recommendations.push({
      category: 'cardiovascular',
      priority: 'high',
      title: 'Monitor Blood Pressure',
      description: 'Regular blood pressure monitoring recommended',
      action: 'Schedule appointment with cardiologist'
    });
  }
  
  // Diabetes recommendations
  if (riskScores.diabetes > 0.4) {
    recommendations.push({
      category: 'metabolic',
      priority: 'medium',
      title: 'Blood Sugar Management',
      description: 'Your glucose levels indicate need for careful monitoring',
      action: 'Dietary consultation recommended'
    });
  }
  
  // Age-appropriate recommendations
  const age = data.patientInfo?.age || 0;
  if (age > 50) {
    recommendations.push({
      category: 'preventive',
      priority: 'medium',
      title: 'Preventive Screening',
      description: 'Age-appropriate health screenings recommended',
      action: 'Schedule annual physical examination'
    });
  }
  
  return recommendations;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Get authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized request. Missing Authorization header.' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Parse the request body
    const requestData = await req.json();
    console.log("Processing patient data:", JSON.stringify(requestData).substring(0, 200) + "...");
    
    // Process the data
    const results = processPatientData(requestData);
    console.log("Generated results:", JSON.stringify(results).substring(0, 200) + "...");
    
    // Return the processed data
    return new Response(
      JSON.stringify(results),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error("Error processing patient data:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
