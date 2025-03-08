
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Activity, Brain, Image, Database, ChevronRight, Code, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

interface EndpointInfoProps {
  title: string;
  description: string;
  endpoint: string;
  method: string;
  requestFormat: any;
  responseFormat: any;
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  authentication?: string;
  usageExample?: string;
  responseTime?: string;
}

const EndpointInfo: React.FC<EndpointInfoProps> = ({
  title,
  description,
  endpoint,
  method,
  requestFormat,
  responseFormat,
  parameters,
  authentication,
  usageExample,
  responseTime
}) => {
  const { toast } = useToast();
  
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied",
      description: "The code snippet has been copied to your clipboard"
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium">{title}</h3>
          {responseTime && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Avg. Response: {responseTime}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-xs font-mono ${
            method === 'GET' ? 'bg-blue-100 text-blue-700' : 
            method === 'POST' ? 'bg-green-100 text-green-700' : 
            method === 'PUT' ? 'bg-amber-100 text-amber-700' : 
            'bg-red-100 text-red-700'
          }`}>{method}</span>
          <span className="font-mono text-sm">{endpoint}</span>
        </div>
        
        {authentication && (
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md">
            <p className="text-xs text-amber-800">
              <strong>Authentication:</strong> {authentication}
            </p>
          </div>
        )}
        
        {parameters && parameters.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Parameters</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-3 py-2 text-left">Parameter</th>
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Required</th>
                    <th className="border px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((param, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                      <td className="border px-3 py-2 font-mono">{param.name}</td>
                      <td className="border px-3 py-2">{param.type}</td>
                      <td className="border px-3 py-2">{param.required ? 'Yes' : 'No'}</td>
                      <td className="border px-3 py-2">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Request Format</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(JSON.stringify(requestFormat, null, 2))}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md relative">
              <pre className="text-xs overflow-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(requestFormat, null, 2)}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Response Format</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(JSON.stringify(responseFormat, null, 2))}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(responseFormat, null, 2)}
              </pre>
            </div>
          </div>
        </div>
        
        {usageExample && (
          <div>
            <h4 className="text-sm font-medium mb-1 flex justify-between items-center">
              <span>Usage Example</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5"
                onClick={() => handleCopyCode(usageExample)}
              >
                <Copy size={12} />
              </Button>
            </h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap font-mono">
                {usageExample}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const APIDocumentation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code size={18} className="text-health-primary" />
          Healthcare API Documentation
        </CardTitle>
        <CardDescription>
          Comprehensive guides for AI-powered health prediction and analytics APIs for clinical applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="risk-prediction">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="risk-prediction" className="flex items-center justify-center">
              <Calculator size={14} className="mr-2" />
              <span className="hidden md:inline">Risk Prediction</span>
            </TabsTrigger>
            <TabsTrigger value="biomarkers" className="flex items-center justify-center">
              <Activity size={14} className="mr-2" />
              <span className="hidden md:inline">Biomarkers</span>
            </TabsTrigger>
            <TabsTrigger value="wearable" className="flex items-center justify-center">
              <Brain size={14} className="mr-2" />
              <span className="hidden md:inline">Wearable Data</span>
            </TabsTrigger>
            <TabsTrigger value="imaging" className="flex items-center justify-center">
              <Image size={14} className="mr-2" />
              <span className="hidden md:inline">Imaging</span>
            </TabsTrigger>
            <TabsTrigger value="clinical" className="flex items-center justify-center">
              <Database size={14} className="mr-2" />
              <span className="hidden md:inline">Clinical Data</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="risk-prediction" className="space-y-6">
            <EndpointInfo
              title="Health Risk Prediction API"
              description="Provides AI-generated risk assessments for patients across multiple health domains with actionable clinical insights."
              endpoint="/api/v1/health-risk"
              method="POST"
              responseTime="0.8s"
              authentication="API key required in header: 'X-API-Key: your_api_key'"
              parameters={[
                {name: "patientId", type: "uuid", required: true, description: "Unique patient identifier"},
                {name: "riskType", type: "string", required: true, description: "Type of risk assessment (cardiovascular, diabetes, respiratory, neurological, cancer)"},
                {name: "includeBiomarkers", type: "boolean", required: false, description: "Include biomarker analysis in risk assessment"}
              ]}
              usageExample={`fetch('/api/v1/health-risk', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key'
  },
  body: JSON.stringify({
    patientId: "550e8400-e29b-41d4-a716-446655440000",
    riskType: "cardiovascular",
    includeBiomarkers: true
  })
})`}
              requestFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "riskType": "cardiovascular | diabetes | respiratory | neurological | cancer",
                "includeBiomarkers": true,
                "demographicContext": true,
                "clinicalRecommendations": true
              }}
              responseFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "riskScores": {
                  "cardiovascular": {
                    "score": 65,
                    "interpretation": "Elevated Risk",
                    "confidence": 0.89,
                    "clinicalInterpretation": "Moderate risk of adverse cardiovascular events in the next 5 years, primarily driven by elevated LDL and family history",
                    "recommendedActions": [
                      {
                        "action": "Regular blood pressure monitoring",
                        "priority": "high",
                        "evidence": "Grade A"
                      },
                      {
                        "action": "Cholesterol panel every 6 months",
                        "priority": "medium",
                        "evidence": "Grade B"
                      },
                      {
                        "action": "Consider statin therapy if lifestyle modifications insufficient",
                        "priority": "medium",
                        "evidence": "Grade B"
                      }
                    ],
                    "keyDrivers": [
                      "LDL cholesterol",
                      "Family history",
                      "Hypertension"
                    ]
                  }
                },
                "biomarkers": {
                  "relevant": [
                    {
                      "name": "LDL Cholesterol",
                      "value": 145,
                      "unit": "mg/dL",
                      "reference": "< 100 mg/dL",
                      "interpretation": "Elevated"
                    },
                    {
                      "name": "HbA1c",
                      "value": 5.8,
                      "unit": "%",
                      "reference": "< 5.7%",
                      "interpretation": "Borderline"
                    }
                  ]
                },
                "metadata": {
                  "generatedAt": "2023-06-15T14:27:32Z",
                  "dataPoints": {
                    "ehr": 1,
                    "wearable": 7,
                    "genomic": 1
                  },
                  "modelVersion": "2.5.1",
                  "apiVersion": "1.0.0",
                  "evidenceLevel": "Grade A"
                }
              }}
            />
          </TabsContent>
          
          <TabsContent value="biomarkers" className="space-y-6">
            <EndpointInfo
              title="Biomarker Analytics API"
              description="Provides advanced clinical analytics on biomarkers including genomic context, demographic variation, and treatment response prediction."
              endpoint="/api/v1/biomarker-analytics"
              method="POST"
              responseTime="1.2s"
              authentication="API key required in header: 'X-API-Key: your_api_key'"
              parameters={[
                {name: "biomarkerIds", type: "array", required: true, description: "Array of biomarker identifiers to analyze"},
                {name: "patientId", type: "uuid", required: true, description: "Patient unique identifier"},
                {name: "demographicFilters", type: "object", required: false, description: "Demographic filters for population comparison"},
                {name: "genomicContextRequired", type: "boolean", required: false, description: "Include genomic context in analysis"}
              ]}
              requestFormat={{
                "biomarkerIds": ["BM001", "BM005"],
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "demographicFilters": {
                  "ageRange": [30, 65],
                  "gender": "all",
                  "ethnicGroup": "all"
                },
                "genomicContextRequired": true,
                "treatmentResponsePrediction": true,
                "aggregationLevel": "population"
              }}
              responseFormat={{
                "biomarkerInsights": {
                  "BM001": {
                    "name": "C-Reactive Protein",
                    "currentValue": {
                      "value": 2.8,
                      "unit": "mg/L",
                      "measuredAt": "2023-05-12T10:15:00Z"
                    },
                    "normalRange": {
                      "min": 0,
                      "max": 3,
                      "unit": "mg/L"
                    },
                    "trend": {
                      "direction": "increasing",
                      "significance": "moderate",
                      "historicalValues": [
                        {"value": 1.2, "date": "2023-02-15T09:30:00Z"},
                        {"value": 1.8, "date": "2023-03-20T14:45:00Z"},
                        {"value": 2.3, "date": "2023-04-18T11:20:00Z"}
                      ]
                    },
                    "populationDistribution": {
                      "mean": 1.8,
                      "median": 1.5,
                      "standardDeviation": 1.2,
                      "percentile": 75
                    },
                    "clinicalSignificance": [
                      "Associated with increased cardiovascular risk",
                      "Indicator of immune system activation",
                      "Predictive of inflammatory processes"
                    ],
                    "genomicContext": {
                      "associatedGenes": [
                        {
                          "geneSymbol": "CRP",
                          "relationshipType": "expression",
                          "strengthOfEvidence": "strong",
                          "variants": [
                            {
                              "rsid": "rs1205",
                              "significance": "pathogenic",
                              "patientStatus": "heterozygous"
                            }
                          ]
                        }
                      ]
                    },
                    "treatmentResponsePrediction": {
                      "antiInflammatoryTherapy": {
                        "predictedResponse": "positive",
                        "confidence": 0.82,
                        "evidenceLevel": "Grade B"
                      }
                    }
                  }
                },
                "metadata": {
                  "generatedAt": "2023-06-15T14:30:12Z",
                  "sampleSize": 4856,
                  "confidence": 0.92,
                  "modelVersion": "3.2.1",
                  "clinicalGuideline": "ACC/AHA Cardiovascular Risk Assessment"
                }
              }}
            />
          </TabsContent>
          
          <TabsContent value="wearable" className="space-y-6">
            <EndpointInfo
              title="Wearable Data Stream API"
              description="Provides real-time analytics and anomaly detection for continuous wearable device data with clinical context and intervention recommendations."
              endpoint="/api/v1/wearable-data"
              method="POST"
              responseTime="0.5s"
              authentication="API key required in header: 'X-API-Key: your_api_key'"
              parameters={[
                {name: "patientId", type: "uuid", required: true, description: "Patient unique identifier"},
                {name: "deviceType", type: "string", required: true, description: "Type of wearable device (smartwatch, cgm, ecg, bloodPressure)"},
                {name: "dataInterval", type: "object", required: true, description: "Time interval for data retrieval"}
              ]}
              requestFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "deviceType": "smartwatch | cgm | ecg | bloodPressure",
                "dataInterval": {
                  "start": "2023-06-10T00:00:00Z",
                  "end": "2023-06-15T23:59:59Z"
                },
                "anomalyDetectionEnabled": true,
                "alertThreshold": "standard | sensitive | custom",
                "clinicalContextRequired": true
              }}
              responseFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "deviceType": "smartwatch",
                "dataPoints": 684,
                "aggregatedMetrics": {
                  "heartRate": {
                    "avg": 72,
                    "min": 48,
                    "max": 142,
                    "stdDev": 12.3,
                    "restingAvg": 65,
                    "targetZoneMinutes": 48
                  },
                  "sleepQuality": {
                    "deepSleepMinutes": 120,
                    "remSleepMinutes": 102,
                    "lightSleepMinutes": 240,
                    "awakeMinutes": 18,
                    "efficiency": 0.89
                  },
                  "activity": {
                    "steps": 8432,
                    "activeMinutes": 68,
                    "caloriesBurned": 2340
                  }
                },
                "anomalies": [
                  {
                    "metric": "heartRate",
                    "timestamp": "2023-06-12T03:42:15Z",
                    "value": 142,
                    "confidence": 0.94,
                    "clinicalSignificance": "moderate",
                    "patientContext": "During sleep period",
                    "suggestedAction": {
                      "urgency": "medium",
                      "action": "Follow up with ECG monitoring if pattern continues",
                      "evidenceGrade": "B"
                    },
                    "differentialConsiderations": [
                      "Sleep apnea",
                      "Cardiac arrhythmia",
                      "Medication side effect"
                    ]
                  }
                ],
                "clinicalContext": {
                  "currentMedications": [
                    {
                      "name": "Metoprolol",
                      "dosage": "25mg",
                      "frequency": "twice daily",
                      "expectedEffect": "Heart rate reduction"
                    }
                  ],
                  "relevantConditions": [
                    "Hypertension",
                    "Anxiety disorder"
                  ]
                }
              }}
            />
          </TabsContent>
          
          <TabsContent value="imaging" className="space-y-6">
            <EndpointInfo
              title="Medical Imaging AI API"
              description="Provides AI-enhanced analysis and anomaly detection for medical imaging data with clinical decision support and comparative analysis."
              endpoint="/api/v1/imaging-ai"
              method="POST"
              responseTime="3.5s"
              authentication="API key required in header: 'X-API-Key: your_api_key'"
              parameters={[
                {name: "imageId", type: "uuid", required: true, description: "Unique identifier for the medical image"},
                {name: "imageType", type: "string", required: true, description: "Type of medical image (xray, mri, ct, ultrasound)"},
                {name: "analysisTypes", type: "array", required: true, description: "Types of analysis to perform"}
              ]}
              requestFormat={{
                "imageId": "550e8400-e29b-41d4-a716-446655440000",
                "imageType": "xray | mri | ct | ultrasound",
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "analysisTypes": ["anomalyDetection", "measurementAnalysis", "comparisonWithPrior"],
                "enhancementOptions": {
                  "denoising": true,
                  "contrastEnhancement": false
                },
                "clinicalContext": {
                  "indication": "Chest pain",
                  "relevantHistory": "Smoker, hypertension"
                }
              }}
              responseFormat={{
                "imageId": "550e8400-e29b-41d4-a716-446655440000",
                "findings": [
                  {
                    "type": "anomaly",
                    "location": {
                      "coordinates": [120, 85],
                      "description": "Right upper lobe",
                      "anatomicalReference": "S3 segment"
                    },
                    "confidence": 0.89,
                    "dimensions": "12mm x 8mm",
                    "volumetric": "0.52cm³",
                    "classification": {
                      "category": "nodule",
                      "malignancyProbability": 0.32,
                      "differentials": [
                        {
                          "diagnosis": "Benign granuloma",
                          "probability": 0.45
                        },
                        {
                          "diagnosis": "Primary lung cancer",
                          "probability": 0.32
                        },
                        {
                          "diagnosis": "Metastatic disease",
                          "probability": 0.15
                        }
                      ]
                    },
                    "clinicalCorrelation": {
                      "relevantRiskFactors": ["smoking history", "age"],
                      "significanceLevel": "moderate"
                    },
                    "recommendedActions": [
                      {
                        "action": "Follow-up CT scan in 3 months",
                        "urgency": "routine",
                        "evidenceGrade": "B",
                        "guidelineReference": "Fleischner Society Guidelines"
                      }
                    ],
                    "comparisonWithPrior": {
                      "priorImageId": "440e8400-e29b-41d4-a716-446655440123",
                      "priorDate": "2022-12-15T10:30:00Z",
                      "growth": "stable",
                      "changeSignificance": "low"
                    }
                  }
                ],
                "analysisMetadata": {
                  "modelVersion": "4.1.2",
                  "processingTime": "3.2s",
                  "enhancementsApplied": ["denoising"],
                  "referencedGuidelines": [
                    "Fleischner Society Guidelines for Management of Pulmonary Nodules",
                    "ACR Imaging Guidelines 2023"
                  ]
                },
                "clinicalSummary": "12mm nodule in right upper lobe, likely benign based on characteristics and stability compared to prior imaging. Recommend routine follow-up per Fleischner guidelines."
              }}
            />
          </TabsContent>

          <TabsContent value="clinical" className="space-y-6">
            <EndpointInfo
              title="Clinical Decision Support API"
              description="Provides evidence-based clinical decision support with treatment recommendations, contraindication alerts, and outcome predictions."
              endpoint="/api/v1/clinical-decision"
              method="POST"
              responseTime="1.0s"
              authentication="API key required in header: 'X-API-Key: your_api_key'"
              parameters={[
                {name: "patientId", type: "uuid", required: true, description: "Unique identifier for the patient"},
                {name: "condition", type: "string", required: true, description: "Primary condition or diagnosis"},
                {name: "includeDifferentials", type: "boolean", required: false, description: "Include differential diagnoses"}
              ]}
              requestFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "condition": "type2diabetes",
                "includeDifferentials": true,
                "includeContraindications": true,
                "considerComorbidities": true,
                "guidelinePreference": "ADA | ESC | NICE | custom",
                "includeCostEffectiveness": true
              }}
              responseFormat={{
                "patientId": "550e8400-e29b-41d4-a716-446655440000",
                "condition": "type2diabetes",
                "patientContext": {
                  "age": 58,
                  "sex": "male",
                  "relevantBiomarkers": [
                    {
                      "name": "HbA1c",
                      "value": 8.2,
                      "unit": "%",
                      "interpretation": "Poor control"
                    },
                    {
                      "name": "eGFR",
                      "value": 65,
                      "unit": "mL/min/1.73m²",
                      "interpretation": "Mild reduction"
                    }
                  ],
                  "comorbidities": [
                    "hypertension",
                    "obesity",
                    "dyslipidemia"
                  ],
                  "currentMedications": [
                    "metformin",
                    "lisinopril",
                    "atorvastatin"
                  ]
                },
                "treatmentRecommendations": [
                  {
                    "category": "medication",
                    "name": "SGLT2 inhibitor",
                    "examples": ["empagliflozin", "dapagliflozin"],
                    "rationale": "Proven cardiovascular and renal benefits in addition to glycemic control",
                    "evidenceGrade": "A",
                    "guidelineReference": "ADA 2023 Standards of Care",
                    "expectedOutcome": "HbA1c reduction of 0.5-0.7%, potential CV risk reduction",
                    "contraindications": [],
                    "costEffectiveness": "High",
                    "interactions": [
                      {
                        "medication": "lisinopril",
                        "severity": "monitor",
                        "description": "May enhance hypotensive effect. Monitor blood pressure."
                      }
                    ]
                  },
                  {
                    "category": "lifestyle",
                    "name": "Structured exercise program",
                    "description": "150 minutes per week of moderate-intensity aerobic activity",
                    "evidenceGrade": "B",
                    "expectedOutcome": "HbA1c reduction of 0.3-0.6%, improved insulin sensitivity",
                    "adherenceConsiderations": "Start with 10-minute sessions and gradually increase"
                  }
                ],
                "differentials": [
                  {
                    "condition": "LADA (Latent Autoimmune Diabetes in Adults)",
                    "probability": 0.15,
                    "keyIndicators": ["rapid progression", "lean body type", "suboptimal response to oral agents"],
                    "suggestedTests": ["GAD antibodies", "c-peptide levels"]
                  }
                ],
                "metadata": {
                  "generatedAt": "2023-06-15T10:15:32Z",
                  "modelVersion": "5.0.1",
                  "guidelinesUsed": ["ADA 2023", "EASD 2022"],
                  "evidenceDatabase": "Updated June 2023"
                }
              }}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default APIDocumentation;
