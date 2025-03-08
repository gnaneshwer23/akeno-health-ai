
// Import required modules
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

// Define CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
};

// Security utility functions for API layer
const apiSecurity = {
  // Validate API key
  async validateApiKey(apiKey: string): Promise<boolean> {
    // In production, this would check against a database of valid API keys
    // For demo purposes, we'll accept keys with a specific format
    return apiKey && apiKey.startsWith('hc_') && apiKey.length > 20;
  },
  
  // Log API access for audit trail
  async logApiAccess(supabase: any, event: {
    apiKey: string;
    endpoint: string;
    method: string;
    status: 'success' | 'failure';
    details?: any;
  }) {
    try {
      console.log(`API access logged: ${event.endpoint} - ${event.method} - ${event.status}`);
      // In production, this would write to an API logs table
    } catch (error) {
      console.error("Error logging API access:", error);
    }
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get API key from request header
    const apiKey = req.headers.get('x-api-key');
    
    if (!apiKey) {
      await apiSecurity.logApiAccess(supabase, {
        apiKey: 'none',
        endpoint: new URL(req.url).pathname,
        method: req.method,
        status: 'failure',
        details: 'Missing API key'
      });
      
      return new Response(
        JSON.stringify({ error: 'API key is required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Validate API key
    const isValidApiKey = await apiSecurity.validateApiKey(apiKey);
    
    if (!isValidApiKey) {
      await apiSecurity.logApiAccess(supabase, {
        apiKey,
        endpoint: new URL(req.url).pathname,
        method: req.method,
        status: 'failure',
        details: 'Invalid API key'
      });
      
      return new Response(
        JSON.stringify({ error: 'Invalid API key' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Parse request body
    const requestData = await req.json();
    const { patientId, riskType, includeBiomarkers } = requestData;
    
    if (!patientId) {
      return new Response(
        JSON.stringify({ error: 'Patient ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Log valid API access
    await apiSecurity.logApiAccess(supabase, {
      apiKey,
      endpoint: new URL(req.url).pathname,
      method: req.method,
      status: 'success'
    });
    
    // Get patient data for risk assessment
    const { data: patientData, error: patientError } = await supabase
      .from('patients')
      .select('*')
      .eq('id', patientId)
      .maybeSingle();
    
    if (patientError || !patientData) {
      return new Response(
        JSON.stringify({ error: 'Patient not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Get most recent health records
    const { data: ehrData } = await supabase
      .from('electronic_health_records')
      .select('*')
      .eq('patient_id', patientId)
      .order('record_date', { ascending: false })
      .limit(1)
      .maybeSingle();
    
    // Get wearable data if available
    const { data: wearableData } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('recorded_at', { ascending: false })
      .limit(10);
    
    // Get genomic data if requested and available
    let genomicData = null;
    if (includeBiomarkers) {
      const { data: genomics } = await supabase
        .from('genomic_data')
        .select('*')
        .eq('patient_id', patientId)
        .maybeSingle();
      
      genomicData = genomics;
    }
    
    // Generate risk assessment using data
    // In a real implementation, this would use a machine learning model
    const riskScores = generateRiskScores(patientData, ehrData, wearableData, genomicData, riskType);
    
    // Add metadata to response
    const response = {
      patientId,
      riskScores,
      metadata: {
        generatedAt: new Date().toISOString(),
        dataPoints: {
          ehr: ehrData ? 1 : 0,
          wearable: wearableData?.length || 0,
          genomic: genomicData ? 1 : 0
        },
        modelVersion: "2.5.1",
        apiVersion: "1.0.0"
      }
    };
    
    return new Response(
      JSON.stringify(response),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error processing API request:', error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

// Function to generate risk scores
function generateRiskScores(
  patientData: any, 
  ehrData: any, 
  wearableData: any[], 
  genomicData: any,
  riskType?: string
) {
  // In a real implementation, this would use a sophisticated algorithm
  // For demo purposes, we'll generate simulated risk scores
  
  const riskTypes = riskType ? [riskType] : [
    'cardiovascular', 
    'diabetes', 
    'respiratory', 
    'neurological', 
    'cancer'
  ];
  
  const scores: Record<string, any> = {};
  
  riskTypes.forEach(type => {
    // Calculate base risk from patient demographics (age, gender, etc.)
    let baseRisk = Math.random() * 20; // 0-20 scale
    
    // Adjust risk based on EHR data if available
    if (ehrData) {
      // Add 5-15 points based on medical history
      baseRisk += 5 + (Math.random() * 10); 
      
      // Add more risk if certain conditions are present
      if (ehrData.vitals && ehrData.vitals.blood_pressure) {
        const systolic = ehrData.vitals.blood_pressure.systolic || 120;
        if (systolic > 140) baseRisk += 10;
        else if (systolic > 130) baseRisk += 5;
      }
    }
    
    // Factor in wearable data trends if available
    if (wearableData && wearableData.length > 0) {
      // For demo, add or subtract up to 10 points based on wearable data
      baseRisk += (Math.random() * 20) - 10;
    }
    
    // Add genomic risk factors if available
    if (genomicData && genomicData.biomarkers) {
      // Add 0-25 points based on genetic predisposition
      baseRisk += Math.random() * 25;
    }
    
    // Cap risk between 1-100
    const finalRisk = Math.max(1, Math.min(100, Math.round(baseRisk)));
    
    // Create risk profile with score and interpretation
    scores[type] = {
      score: finalRisk,
      interpretation: interpretRiskScore(finalRisk),
      confidence: 0.65 + (Math.random() * 0.3), // 65-95% confidence
      recommendedActions: generateRecommendedActions(type, finalRisk)
    };
  });
  
  return scores;
}

// Function to interpret risk scores
function interpretRiskScore(score: number): string {
  if (score < 20) return "Low Risk";
  if (score < 40) return "Below Average Risk";
  if (score < 60) return "Average Risk";
  if (score < 80) return "Elevated Risk";
  return "High Risk";
}

// Function to generate recommended actions based on risk type and score
function generateRecommendedActions(riskType: string, score: number): string[] {
  const actions: Record<string, string[]> = {
    cardiovascular: [
      "Regular blood pressure monitoring",
      "Cholesterol panel every 6 months",
      "Consider statin therapy",
      "Mediterranean diet recommended",
      "150 minutes of weekly cardiovascular exercise"
    ],
    diabetes: [
      "HbA1c testing every 3 months",
      "Daily blood glucose monitoring",
      "Low glycemic index diet",
      "Weight management program",
      "Consider metformin prophylaxis"
    ],
    respiratory: [
      "Pulmonary function testing",
      "Avoid environmental triggers",
      "Annual flu vaccination",
      "Consider inhaled corticosteroids",
      "Smoking cessation program"
    ],
    neurological: [
      "Cognitive assessment",
      "Sleep quality evaluation",
      "Brain MRI scan",
      "Mediterranean diet with omega-3 supplementation",
      "Regular cognitive exercises"
    ],
    cancer: [
      "More frequent cancer screening",
      "Genetic counseling",
      "Lifestyle modification program",
      "Avoid known carcinogens",
      "Consider prophylactic interventions"
    ]
  };
  
  // Select actions based on risk score
  // Higher risk = more actions recommended
  const numActions = Math.min(Math.ceil(score / 20), 5);
  return actions[riskType].slice(0, numActions);
}
