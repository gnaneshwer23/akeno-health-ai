
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/**
 * Preprocesses and cleans patient data before further processing
 * @param data The raw patient data to clean and preprocess
 */
function preprocessData(data: any) {
  console.log("Starting data preprocessing...");
  const preprocessedData = { ...data };
  
  // Step 1: Data cleaning - handle missing values
  preprocessedData.cleanedData = handleMissingValues(data);
  
  // Step 2: Feature extraction - identify biomarkers and health indicators
  preprocessedData.features = extractFeatures(preprocessedData.cleanedData);
  
  // Step 3: Data normalization - standardize units and formats
  preprocessedData.normalizedData = normalizeData(preprocessedData.cleanedData);
  
  // Step 4: Anomaly detection - identify outliers in medical data
  preprocessedData.anomalies = detectAnomalies(preprocessedData.normalizedData);
  
  console.log("Data preprocessing completed");
  return preprocessedData;
}

/**
 * Handle missing or incomplete values in patient data
 */
function handleMissingValues(data: any) {
  console.log("Cleaning data and handling missing values...");
  const cleaned = { ...data };
  
  // Fill in missing vital signs with default values
  if (!cleaned.vitalSigns) cleaned.vitalSigns = {};
  if (!cleaned.vitalSigns.bloodPressure) {
    cleaned.vitalSigns.bloodPressure = { systolic: 120, diastolic: 80 };
    console.log("Added default blood pressure values");
  }
  
  if (!cleaned.vitalSigns.heartRate) {
    cleaned.vitalSigns.heartRate = 70;
    console.log("Added default heart rate value");
  }
  
  // Fill in missing lab results with null to indicate absence rather than 0
  if (!cleaned.labResults) cleaned.labResults = {};
  if (!cleaned.labResults.cholesterol) {
    cleaned.labResults.cholesterol = { total: null, hdl: null, ldl: null };
    console.log("Added null placeholders for missing cholesterol values");
  }
  
  // Ensure patient info exists
  if (!cleaned.patientInfo) cleaned.patientInfo = {};
  if (!cleaned.patientInfo.age && cleaned.patientInfo.dateOfBirth) {
    cleaned.patientInfo.age = calculateAge(cleaned.patientInfo.dateOfBirth);
    console.log("Calculated age from date of birth");
  }
  
  return cleaned;
}

/**
 * Extract relevant features from patient data
 */
function extractFeatures(data: any) {
  console.log("Extracting features from patient data...");
  const features = {
    cardiovascularIndicators: [],
    metabolicIndicators: [],
    geneticMarkers: [],
    lifestyleFactors: []
  };
  
  // Extract cardiovascular indicators
  if (data.vitalSigns?.bloodPressure) {
    const { systolic, diastolic } = data.vitalSigns.bloodPressure;
    
    if (systolic > 140 || diastolic > 90) {
      features.cardiovascularIndicators.push("hypertension_risk");
    } else if (systolic > 120 || diastolic > 80) {
      features.cardiovascularIndicators.push("elevated_bp");
    }
  }
  
  if (data.labResults?.cholesterol) {
    const { total, hdl, ldl } = data.labResults.cholesterol;
    
    if (total > 200) {
      features.cardiovascularIndicators.push("elevated_cholesterol");
    }
    
    if (hdl < 40) {
      features.cardiovascularIndicators.push("low_hdl");
    }
    
    if (ldl > 130) {
      features.cardiovascularIndicators.push("elevated_ldl");
    }
  }
  
  // Extract metabolic indicators
  if (data.labResults?.glucose) {
    const glucoseLevel = data.labResults.glucose.level;
    
    if (glucoseLevel > 125) {
      features.metabolicIndicators.push("diabetes_risk");
    } else if (glucoseLevel > 100) {
      features.metabolicIndicators.push("prediabetes_risk");
    }
  }
  
  if (data.patientInfo?.bmi) {
    if (data.patientInfo.bmi >= 30) {
      features.metabolicIndicators.push("obesity");
    } else if (data.patientInfo.bmi >= 25) {
      features.metabolicIndicators.push("overweight");
    }
  }
  
  // Extract genetic markers
  if (data.genomicData?.riskMarkers) {
    data.genomicData.riskMarkers.forEach((marker: string) => {
      if (marker.includes("APOE4")) {
        features.geneticMarkers.push("alzheimers_risk_factor");
      }
      
      if (marker.includes("BRCA1") || marker.includes("BRCA2")) {
        features.geneticMarkers.push("breast_cancer_risk_factor");
      }
      
      if (marker.includes("MTHFR")) {
        features.geneticMarkers.push("folate_metabolism_variant");
      }
    });
  }
  
  console.log(`Extracted ${Object.values(features).flat().length} features`);
  return features;
}

/**
 * Normalize data units and formats
 */
function normalizeData(data: any) {
  console.log("Normalizing data units and formats...");
  const normalized = { ...data };
  
  // Convert temperature to Celsius if in Fahrenheit
  if (normalized.vitalSigns?.temperature > 40) {
    normalized.vitalSigns.temperature = (normalized.vitalSigns.temperature - 32) * 5/9;
    console.log("Converted temperature from Fahrenheit to Celsius");
  }
  
  // Normalize units for cholesterol (mg/dL to mmol/L if needed)
  if (normalized.labResults?.cholesterol?.total > 50) {
    // If values are in mg/dL (US standard), convert to mmol/L (international standard)
    normalized.labResults.cholesterol.total_mmol = normalized.labResults.cholesterol.total / 38.67;
    normalized.labResults.cholesterol.hdl_mmol = normalized.labResults.cholesterol.hdl / 38.67;
    normalized.labResults.cholesterol.ldl_mmol = normalized.labResults.cholesterol.ldl / 38.67;
    console.log("Added mmol/L values for cholesterol measurements");
  }
  
  // Normalize blood glucose measurements (mg/dL to mmol/L if needed)
  if (normalized.labResults?.glucose?.level > 25) {
    normalized.labResults.glucose.level_mmol = normalized.labResults.glucose.level / 18;
    console.log("Added mmol/L value for glucose measurement");
  }
  
  // Standardize date formats
  if (normalized.patientInfo?.dateOfBirth && typeof normalized.patientInfo.dateOfBirth === 'string') {
    normalized.patientInfo.dateOfBirth = new Date(normalized.patientInfo.dateOfBirth).toISOString();
    console.log("Standardized date of birth format");
  }
  
  return normalized;
}

/**
 * Detect anomalies or outliers in patient data
 */
function detectAnomalies(data: any) {
  console.log("Detecting anomalies in patient data...");
  const anomalies = [];
  
  // Check for abnormal vital signs
  if (data.vitalSigns?.heartRate < 40 || data.vitalSigns?.heartRate > 120) {
    anomalies.push({
      type: "vital_sign",
      parameter: "heart_rate",
      value: data.vitalSigns.heartRate,
      message: "Heart rate is outside normal range (40-120 bpm)"
    });
  }
  
  if (data.vitalSigns?.bloodPressure?.systolic > 180 || data.vitalSigns?.bloodPressure?.diastolic > 120) {
    anomalies.push({
      type: "vital_sign",
      parameter: "blood_pressure",
      value: `${data.vitalSigns.bloodPressure.systolic}/${data.vitalSigns.bloodPressure.diastolic}`,
      message: "Blood pressure is critically high"
    });
  }
  
  if (data.vitalSigns?.oxygenSaturation < 90) {
    anomalies.push({
      type: "vital_sign",
      parameter: "oxygen_saturation",
      value: data.vitalSigns.oxygenSaturation,
      message: "Oxygen saturation is below the normal threshold (90%)"
    });
  }
  
  // Check for abnormal lab results
  if (data.labResults?.glucose?.level > 300) {
    anomalies.push({
      type: "lab_result",
      parameter: "glucose",
      value: data.labResults.glucose.level,
      message: "Blood glucose level is dangerously high"
    });
  }
  
  if (data.labResults?.cholesterol?.total > 300) {
    anomalies.push({
      type: "lab_result",
      parameter: "cholesterol",
      value: data.labResults.cholesterol.total,
      message: "Total cholesterol is extremely elevated"
    });
  }
  
  console.log(`Detected ${anomalies.length} anomalies in patient data`);
  return anomalies;
}

/**
 * Analyzes medical imaging data to detect anomalies
 * @param imageData The medical image data to analyze
 */
function analyzeImagingData(imageData: any) {
  console.log("Analyzing medical imaging data...");
  
  // This would typically be a complex ML model for image analysis
  // Here we're simulating the analysis with a simple mock implementation
  
  const results = {
    detectedAnomalies: [],
    confidenceScore: 0.94,
    processingTime: 1.2, // seconds
    regions: []
  };
  
  // Simulate finding anomalies based on image type and body part
  if (imageData.image_type === 'mri' || imageData.image_type === 'ct_scan') {
    // For brain imaging
    if (imageData.body_part?.toLowerCase().includes('brain')) {
      if (Math.random() > 0.7) {
        results.detectedAnomalies.push({
          type: 'structural',
          description: 'Potential small vessel ischemic changes',
          severity: 'mild',
          location: 'frontal lobe',
          confidence: 0.82
        });
      }
    }
    
    // For chest imaging
    if (imageData.body_part?.toLowerCase().includes('chest') || 
        imageData.body_part?.toLowerCase().includes('lung')) {
      if (Math.random() > 0.6) {
        results.detectedAnomalies.push({
          type: 'nodular',
          description: 'Small nodular opacity',
          severity: 'indeterminate',
          location: 'right lower lobe',
          confidence: 0.76,
          recommendations: 'Follow-up imaging in 6 months recommended'
        });
      }
    }
    
    // For abdominal imaging
    if (imageData.body_part?.toLowerCase().includes('abdomen')) {
      if (Math.random() > 0.8) {
        results.detectedAnomalies.push({
          type: 'cystic',
          description: 'Small hepatic cyst',
          severity: 'benign',
          location: 'right hepatic lobe',
          confidence: 0.92
        });
      }
    }
  }
  
  // For x-rays
  if (imageData.image_type === 'xray') {
    if (imageData.body_part?.toLowerCase().includes('chest')) {
      if (Math.random() > 0.75) {
        results.detectedAnomalies.push({
          type: 'pulmonary',
          description: 'Mild pulmonary infiltrates',
          severity: 'moderate',
          location: 'bilateral lower lobes',
          confidence: 0.85
        });
      }
    }
  }
  
  // Add imaging regions for visualization (mock data)
  if (results.detectedAnomalies.length > 0) {
    results.regions = results.detectedAnomalies.map(anomaly => ({
      id: `region-${Math.floor(Math.random() * 1000)}`,
      type: anomaly.type,
      coordinates: {
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10,
        width: Math.floor(Math.random() * 30) + 5,
        height: Math.floor(Math.random() * 30) + 5
      },
      confidence: anomaly.confidence
    }));
  }
  
  return results;
}

/**
 * Performs multi-omics data fusion and analysis
 * @param patientData Combined patient data including genomics
 */
function performMultiOmicsAnalysis(patientData: any) {
  console.log("Performing multi-omics data fusion and analysis...");
  
  const analysis = {
    pathways: [],
    biomarkers: [],
    personalizedInsights: []
  };
  
  // Analyze genetic markers in combination with other health data
  if (patientData.genomicData?.riskMarkers) {
    // Check for cardiovascular genetic risk markers combined with traditional risk factors
    const hasCardiovascularGeneticRisk = patientData.genomicData.riskMarkers.some(
      (marker: string) => marker.includes("APOE4") || marker.includes("LPA")
    );
    
    const hasCardiovascularTraditionalRisk = (patientData.vitalSigns?.bloodPressure?.systolic > 140) || 
                                           (patientData.labResults?.cholesterol?.ldl > 130);
    
    if (hasCardiovascularGeneticRisk && hasCardiovascularTraditionalRisk) {
      analysis.pathways.push({
        name: "Atherosclerosis pathway",
        significance: "high",
        explanation: "Combined genetic and traditional risk factors suggest increased cardiovascular risk"
      });
      
      analysis.biomarkers.push({
        name: "Lipoprotein(a)",
        category: "lipid",
        recommendation: "Consider advanced lipid testing"
      });
      
      analysis.personalizedInsights.push(
        "Your genetic profile combined with current cholesterol levels indicates elevated cardiovascular risk"
      );
    }
    
    // Check for metabolic risk markers
    const hasMetabolicGeneticRisk = patientData.genomicData.riskMarkers.some(
      (marker: string) => marker.includes("TCF7L2") || marker.includes("MTNR1B")
    );
    
    const hasMetabolicTraditionalRisk = (patientData.patientInfo?.bmi > 25) || 
                                      (patientData.labResults?.glucose?.level > 100);
    
    if (hasMetabolicGeneticRisk && hasMetabolicTraditionalRisk) {
      analysis.pathways.push({
        name: "Glucose metabolism pathway",
        significance: "medium",
        explanation: "Genetic variants affecting glucose metabolism combined with elevated glucose levels"
      });
      
      analysis.biomarkers.push({
        name: "HbA1c",
        category: "glycemic",
        recommendation: "Monitor glycemic control regularly"
      });
      
      analysis.personalizedInsights.push(
        "Consider more frequent blood glucose monitoring based on your genetic predisposition to metabolic disorders"
      );
    }
  }
  
  // Analyze time-series wearable data for patterns
  if (patientData.wearable && patientData.wearable.length > 0) {
    // Look for sleep-cardiovascular interactions
    const hasSleepDisruption = patientData.wearable.some(
      (data: any) => data.sleep_data && data.sleep_data.total_duration_minutes < 360
    );
    
    const hasCardiovascularIrregularity = patientData.wearable.some(
      (data: any) => data.heart_rate > 85 || 
                   (data.blood_pressure && data.blood_pressure.systolic > 135)
    );
    
    if (hasSleepDisruption && hasCardiovascularIrregularity) {
      analysis.pathways.push({
        name: "Sleep-cardiovascular interaction",
        significance: "medium",
        explanation: "Sleep disruption patterns correlating with cardiovascular irregularities"
      });
      
      analysis.personalizedInsights.push(
        "Your wearable data shows a potential relationship between sleep quality and cardiovascular metrics"
      );
    }
  }
  
  return analysis;
}

/**
 * Generates personalized treatment recommendations based on patient data
 * @param patientData The patient data to use for generating recommendations
 * @param riskScores Previously calculated risk scores
 */
function generateTreatmentRecommendations(patientData: any, riskScores: any) {
  console.log("Generating personalized treatment recommendations...");
  
  const recommendations = {
    medications: [],
    lifestyle: [],
    monitoring: [],
    screenings: [],
    specialistReferrals: []
  };
  
  // Cardiovascular recommendations
  if (riskScores.cardiovascular > 0.3) {
    if (riskScores.cardiovascular > 0.6) {
      recommendations.medications.push({
        category: "antihypertensive",
        suggestion: "Consider ACE inhibitor or ARB if lifestyle modifications insufficient",
        evidence: "Based on elevated blood pressure and risk profile"
      });
    }
    
    recommendations.lifestyle.push({
      category: "diet",
      suggestion: "DASH diet with reduced sodium intake",
      details: "Aim for <2000mg sodium daily, increase potassium-rich foods"
    });
    
    recommendations.lifestyle.push({
      category: "exercise",
      suggestion: "Moderate aerobic exercise 150 minutes weekly",
      details: "Spread across at least 3 days, include resistance training twice weekly"
    });
    
    recommendations.monitoring.push({
      tool: "Blood Pressure Monitor",
      frequency: "Weekly",
      targets: "Aim for <130/80 mmHg"
    });
    
    if (patientData.genomicData?.riskMarkers?.includes("LPA variant")) {
      recommendations.screenings.push({
        test: "Advanced Lipid Panel",
        frequency: "Annually",
        rationale: "Genetic predisposition to cardiovascular disease"
      });
    }
  }
  
  // Metabolic/diabetes recommendations
  if (riskScores.diabetes > 0.3) {
    recommendations.lifestyle.push({
      category: "diet",
      suggestion: "Low glycemic index diet with controlled carbohydrate intake",
      details: "Emphasize complex carbohydrates, limit added sugars"
    });
    
    if (riskScores.diabetes > 0.5) {
      recommendations.medications.push({
        category: "antidiabetic",
        suggestion: "Consider metformin if prediabetic with additional risk factors",
        evidence: "Shown to reduce progression to type 2 diabetes in high-risk individuals"
      });
    }
    
    recommendations.monitoring.push({
      tool: "Glucose Monitor",
      frequency: "Monthly fasting glucose, quarterly HbA1c",
      targets: "Fasting glucose <100 mg/dL, HbA1c <5.7%"
    });
    
    if (patientData.patientInfo?.bmi > 30) {
      recommendations.specialistReferrals.push({
        specialty: "Endocrinology",
        timeframe: "Within 3 months",
        purpose: "Comprehensive metabolic evaluation and management"
      });
    }
  }
  
  // Cognitive health recommendations
  if (riskScores.cognitive > 0.3) {
    recommendations.lifestyle.push({
      category: "cognitive",
      suggestion: "Cognitive engagement activities and brain training",
      details: "Regular mental challenges, learning new skills, social engagement"
    });
    
    recommendations.lifestyle.push({
      category: "diet",
      suggestion: "Mediterranean diet with emphasis on omega-3 fatty acids",
      details: "Increase fatty fish consumption (2-3 times weekly)"
    });
    
    if (patientData.genomicData?.riskMarkers?.includes("APOE4")) {
      recommendations.screenings.push({
        test: "Comprehensive Neurological Assessment",
        frequency: "Every 2 years",
        rationale: "Genetic predisposition to neurodegenerative conditions"
      });
    }
  }
  
  return recommendations;
}

/**
 * Processes patient data and returns insights
 * @param data The patient data to process
 */
function processPatientData(data: any) {
  // Extract the request type for specialized processing
  const requestType = data.requestType || 'comprehensive-analysis';
  console.log(`Processing request type: ${requestType}`);
  
  // Preprocess the data first
  const preprocessedData = preprocessData(data);
  
  // Calculate risk scores using preprocessed data
  const riskScores = {
    cardiovascular: calculateRiskScore(
      preprocessedData.normalizedData.vitalSigns?.bloodPressure, 
      preprocessedData.normalizedData.labResults?.cholesterol
    ),
    diabetes: calculateDiabetesRisk(
      preprocessedData.normalizedData.labResults?.glucose, 
      preprocessedData.normalizedData.patientInfo?.bmi
    ),
    cognitive: calculateCognitiveRisk(
      preprocessedData.normalizedData.genomicData, 
      preprocessedData.normalizedData.patientInfo?.age
    ),
  };
  
  let results = {
    riskScores,
    recommendations: generateRecommendations(riskScores, preprocessedData.normalizedData),
    preprocessingResults: {
      featureCount: Object.values(preprocessedData.features).flat().length,
      anomalyCount: preprocessedData.anomalies.length,
      significantFindings: preprocessedData.anomalies.length > 0 ? 
        preprocessedData.anomalies.map(a => a.message) : ["No significant anomalies detected"],
      topFeatures: getTopFeatures(preprocessedData.features)
    },
    processingTimestamp: new Date().toISOString(),
  };
  
  // Handle specialized processing based on request type
  if (requestType === 'imaging-analysis' && data.imageData) {
    results.imagingAnalysis = analyzeImagingData(data.imageData);
  }
  
  if (requestType === 'treatment-recommendations') {
    results.treatmentPlan = generateTreatmentRecommendations(
      preprocessedData.normalizedData, 
      riskScores
    );
  }
  
  if (data.includeMultiOmicsAnalysis) {
    results.multiOmicsAnalysis = performMultiOmicsAnalysis(preprocessedData.normalizedData);
  }
  
  if (data.includeBiomarkerAnalysis) {
    // Add biomarker trend analysis
    results.biomarkerTrends = {
      significant: [],
      monitoring: [],
      normal: []
    };
    
    // Analyze cholesterol trends if available
    if (preprocessedData.normalizedData.labResults?.cholesterol) {
      const cholesterol = preprocessedData.normalizedData.labResults.cholesterol;
      
      if (cholesterol.total > 200 || cholesterol.ldl > 130) {
        results.biomarkerTrends.significant.push({
          biomarker: "LDL Cholesterol",
          value: cholesterol.ldl,
          trend: "elevated",
          riskImpact: "Increased cardiovascular risk",
          recommendation: "Dietary modification and consider statin therapy if lifestyle changes insufficient"
        });
      } else {
        results.biomarkerTrends.normal.push({
          biomarker: "LDL Cholesterol",
          value: cholesterol.ldl,
          trend: "stable",
          riskImpact: "Maintained cardiovascular health"
        });
      }
      
      if (cholesterol.hdl < 40) {
        results.biomarkerTrends.monitoring.push({
          biomarker: "HDL Cholesterol",
          value: cholesterol.hdl,
          trend: "suboptimal",
          riskImpact: "Reduced cardioprotective effect",
          recommendation: "Increase aerobic exercise and omega-3 fatty acid intake"
        });
      }
    }
    
    // Analyze glucose trends if available
    if (preprocessedData.normalizedData.labResults?.glucose) {
      const glucose = preprocessedData.normalizedData.labResults.glucose;
      
      if (glucose.level > 100) {
        results.biomarkerTrends.monitoring.push({
          biomarker: "Fasting Glucose",
          value: glucose.level,
          trend: glucose.level > 125 ? "elevated" : "borderline",
          riskImpact: "Increased diabetes risk",
          recommendation: "Reduce simple carbohydrate intake and monitor regularly"
        });
      } else {
        results.biomarkerTrends.normal.push({
          biomarker: "Fasting Glucose",
          value: glucose.level,
          trend: "normal",
          riskImpact: "Maintained metabolic health"
        });
      }
    }
  }
  
  return results;
}

/**
 * Get the most important features extracted during preprocessing
 */
function getTopFeatures(features: any) {
  const allFeatures = Object.entries(features).map(([category, items]) => {
    return (items as string[]).map(item => ({
      category,
      name: item
    }));
  }).flat();
  
  // Return top 5 features or all if less than 5
  return allFeatures.slice(0, 5);
}

/**
 * Calculate age from date of birth
 */
function calculateAge(dateOfBirth: string) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
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
    
    // Process the data with our enhanced AI/ML processing pipeline
    const results = processPatientData(requestData);
    console.log("Generated results with AI analysis:", JSON.stringify(results).substring(0, 200) + "...");
    
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
