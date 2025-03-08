
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
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
    
    if (!apiKey || !apiKey.startsWith('hc_') || apiKey.length < 20) {
      return new Response(
        JSON.stringify({ error: 'Valid API key required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Parse request parameters
    const requestData = await req.json();
    const { 
      biomarkerIds, 
      demographicFilters, 
      genomicContextRequired,
      aggregationLevel
    } = requestData;
    
    if (!biomarkerIds || !Array.isArray(biomarkerIds) || biomarkerIds.length === 0) {
      return new Response(
        JSON.stringify({ error: 'At least one biomarker ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Log API access
    console.log(`Biomarker Analytics API accessed: Analyzing ${biomarkerIds.length} biomarkers`);
    
    // Perform biomarker analysis
    // In a real implementation, this would query complex biomarker data and apply ML models
    const biomarkerAnalysis = generateBiomarkerAnalysis(
      biomarkerIds, 
      demographicFilters, 
      genomicContextRequired,
      aggregationLevel
    );
    
    const response = {
      biomarkerInsights: biomarkerAnalysis,
      metadata: {
        generatedAt: new Date().toISOString(),
        sampleSize: Math.floor(Math.random() * 10000) + 500, // Simulated sample size
        confidence: 0.85 + (Math.random() * 0.1), // 85-95% confidence level
        modelVersion: "3.2.1",
        apiVersion: "1.0.0"
      }
    };
    
    return new Response(
      JSON.stringify(response),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error in biomarker analytics API:', error);
    
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

// Function to generate biomarker analysis
function generateBiomarkerAnalysis(
  biomarkerIds: string[],
  demographicFilters?: any,
  genomicContextRequired?: boolean,
  aggregationLevel: 'individual' | 'population' = 'population'
) {
  // In a real implementation, this would apply sophisticated analytics
  // For demo, we'll generate simulated biomarker insights
  
  const results: any = {};
  
  biomarkerIds.forEach(biomarkerId => {
    // Generate realistic biomarker data
    const biomarkerName = getBiomarkerName(biomarkerId);
    const normalRange = getBiomarkerNormalRange(biomarkerId);
    
    results[biomarkerId] = {
      name: biomarkerName,
      normalRange: normalRange,
      populationDistribution: generateDistributionData(),
      clinicalSignificance: generateClinicalSignificance(biomarkerId),
      correlations: generateCorrelations(biomarkerId),
      temporalTrends: generateTemporalTrends()
    };
    
    // Add genomic context if requested
    if (genomicContextRequired) {
      results[biomarkerId].genomicContext = {
        associatedGenes: generateAssociatedGenes(biomarkerId),
        snpAssociations: generateSNPAssociations(),
        pathwayInfluence: generatePathwayInfluence()
      };
    }
    
    // Add demographic variation if filters provided
    if (demographicFilters) {
      results[biomarkerId].demographicVariation = generateDemographicVariation(demographicFilters);
    }
  });
  
  return results;
}

// Helper functions for generating realistic biomarker data
function getBiomarkerName(id: string): string {
  const biomarkers: Record<string, string> = {
    'BM001': 'C-Reactive Protein',
    'BM002': 'Interleukin-6',
    'BM003': 'Tumor Necrosis Factor Alpha',
    'BM004': 'Apolipoprotein E',
    'BM005': 'Brain-Derived Neurotrophic Factor',
    'BM006': 'Troponin I',
    'BM007': 'NT-proBNP',
    'BM008': 'Hemoglobin A1c',
    'BM009': 'Serum Amyloid A',
    'BM010': 'Cortisol'
  };
  
  return biomarkers[id] || `Biomarker ${id}`;
}

function getBiomarkerNormalRange(id: string): { min: number, max: number, unit: string } {
  const ranges: Record<string, { min: number, max: number, unit: string }> = {
    'BM001': { min: 0, max: 3, unit: 'mg/L' },
    'BM002': { min: 0, max: 5.9, unit: 'pg/mL' },
    'BM003': { min: 0, max: 2.8, unit: 'pg/mL' },
    'BM004': { min: 27, max: 49, unit: 'mg/dL' },
    'BM005': { min: 8, max: 46, unit: 'ng/mL' },
    'BM006': { min: 0, max: 0.04, unit: 'ng/mL' },
    'BM007': { min: 0, max: 125, unit: 'pg/mL' },
    'BM008': { min: 4, max: 5.6, unit: '%' },
    'BM009': { min: 0, max: 6.4, unit: 'mg/L' },
    'BM010': { min: 5, max: 23, unit: 'μg/dL' }
  };
  
  return ranges[id] || { min: 0, max: 100, unit: 'units' };
}

function generateDistributionData() {
  return {
    mean: Math.round((Math.random() * 50) * 10) / 10,
    median: Math.round((Math.random() * 50) * 10) / 10,
    standardDeviation: Math.round((Math.random() * 5) * 10) / 10,
    percentiles: {
      "5th": Math.round((Math.random() * 10) * 10) / 10,
      "25th": Math.round((Math.random() * 20) * 10) / 10,
      "50th": Math.round((Math.random() * 30) * 10) / 10,
      "75th": Math.round((Math.random() * 40) * 10) / 10,
      "95th": Math.round((Math.random() * 50) * 10) / 10
    }
  };
}

function generateClinicalSignificance(biomarkerId: string) {
  const significanceOptions = [
    "Associated with increased cardiovascular risk",
    "Predictive of treatment response",
    "Linked to disease progression velocity",
    "Indicator of immune system activation",
    "Potential early diagnostic marker",
    "Correlated with therapeutic efficacy",
    "Prognostic for long-term outcomes"
  ];
  
  // Select 2-3 significance items
  const numItems = Math.floor(Math.random() * 2) + 2;
  const shuffled = [...significanceOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

function generateCorrelations(biomarkerId: string) {
  const correlationTypes = [
    { type: "positive", strength: 0.65 + (Math.random() * 0.3) },
    { type: "negative", strength: -(0.65 + (Math.random() * 0.3)) },
    { type: "positive", strength: 0.65 + (Math.random() * 0.3) }
  ];
  
  const biomarkers = ["Glucose", "LDL Cholesterol", "Creatinine", "Albumin", "ALT", "AST", "HDL Cholesterol", "Platelet Count"];
  const comorbidities = ["Hypertension", "Type 2 Diabetes", "Chronic Kidney Disease", "Cardiovascular Disease", "Autoimmune Disorders"];
  const treatments = ["Statins", "ACE Inhibitors", "GLP-1 Agonists", "TNF Inhibitors", "IL-6 Antagonists"];
  
  return {
    otherBiomarkers: correlationTypes.map((corr, i) => ({
      biomarker: biomarkers[Math.floor(Math.random() * biomarkers.length)],
      correlationType: corr.type,
      correlationStrength: corr.strength,
      pValue: 0.001 + (Math.random() * 0.03)
    })).slice(0, 2 + Math.floor(Math.random() * 2)),
    
    comorbidities: correlationTypes.map((corr, i) => ({
      condition: comorbidities[Math.floor(Math.random() * comorbidities.length)],
      correlationType: corr.type,
      correlationStrength: corr.strength,
      oddsRatio: 1 + Math.random() * 3
    })).slice(0, 1 + Math.floor(Math.random() * 2)),
    
    treatmentResponses: correlationTypes.map((corr, i) => ({
      treatment: treatments[Math.floor(Math.random() * treatments.length)],
      correlationType: corr.type,
      correlationStrength: corr.strength,
      clinicalSignificance: Math.random() > 0.5 ? "High" : "Moderate"
    })).slice(0, 1 + Math.floor(Math.random() * 2))
  };
}

function generateTemporalTrends() {
  const trend = Math.random() > 0.5 ? "increasing" : "decreasing";
  return {
    overallTrend: trend,
    annualChangeRate: trend === "increasing" ? 
      Math.round((Math.random() * 10) * 10) / 10 : 
      -Math.round((Math.random() * 10) * 10) / 10,
    seasonalVariation: Math.random() > 0.7,
    longitudinalStability: Math.random() > 0.5 ? "stable" : "variable"
  };
}

function generateAssociatedGenes(biomarkerId: string) {
  const genes = [
    "APOE", "IL6", "TNF", "CRP", "BDNF", "MTHFR", "ACE", "COMT", 
    "BRCA1", "BRCA2", "TP53", "TGFB1", "IL10", "VDR", "FTO"
  ];
  
  // Select 2-4 random genes
  const shuffled = [...genes].sort(() => 0.5 - Math.random());
  const selectedGenes = shuffled.slice(0, 2 + Math.floor(Math.random() * 3));
  
  return selectedGenes.map(gene => ({
    geneSymbol: gene,
    relationshipType: Math.random() > 0.5 ? "regulatory" : "expression",
    strengthOfEvidence: ["strong", "moderate", "emerging"][Math.floor(Math.random() * 3)]
  }));
}

function generateSNPAssociations() {
  const snps = [
    "rs429358", "rs7412", "rs1800795", "rs1800629", "rs1205", 
    "rs6265", "rs1801133", "rs4680", "rs17516491", "rs10757274"
  ];
  
  // Select 1-3 random SNPs
  const shuffled = [...snps].sort(() => 0.5 - Math.random());
  const selectedSNPs = shuffled.slice(0, 1 + Math.floor(Math.random() * 3));
  
  return selectedSNPs.map(snp => ({
    snpId: snp,
    chromosome: `chr${1 + Math.floor(Math.random() * 22)}`,
    alleleEffect: Math.random() > 0.5 ? "risk-increasing" : "protective",
    effectSize: 0.1 + (Math.random() * 0.8),
    pValue: 0.00001 + (Math.random() * 0.01)
  }));
}

function generatePathwayInfluence() {
  const pathways = [
    "Inflammatory response", "Lipid metabolism", "Insulin signaling",
    "Oxidative stress", "Apoptosis", "DNA repair", "Immune response",
    "Cell cycle regulation", "Neurotransmitter signaling"
  ];
  
  // Select 1-2 random pathways
  const shuffled = [...pathways].sort(() => 0.5 - Math.random());
  const selectedPathways = shuffled.slice(0, 1 + Math.floor(Math.random() * 2));
  
  return selectedPathways.map(pathway => ({
    pathwayName: pathway,
    directionality: Math.random() > 0.5 ? "upregulation" : "downregulation",
    keyMolecules: ["molecule1", "molecule2", "molecule3"].slice(0, 2 + Math.floor(Math.random() * 2)),
    therapeuticImplications: Math.random() > 0.5 ? 
      ["Potential target for intervention", "Marker for drug response"] : 
      ["Biomarker for pathway activity", "Indicator of pathway dysregulation"]
  }));
}

function generateDemographicVariation(filters: any) {
  return {
    ageRelatedChanges: {
      pattern: Math.random() > 0.5 ? "increases with age" : "decreases with age",
      significantAgeThreshold: 40 + Math.floor(Math.random() * 30),
      rateOfChange: `${Math.round(Math.random() * 10 * 10) / 10}% per decade`
    },
    genderDifferences: {
      observed: Math.random() > 0.3,
      magnitude: Math.random() > 0.5 ? "significant" : "moderate",
      details: "Higher baseline levels observed in " + (Math.random() > 0.5 ? "females" : "males")
    },
    ethnicVariation: {
      observed: Math.random() > 0.4,
      details: "Variation in normal ranges observed across different ethnic groups"
    }
  };
}
