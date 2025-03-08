
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Activity, Brain, Image } from 'lucide-react';

interface EndpointInfoProps {
  title: string;
  description: string;
  endpoint: string;
  method: string;
  requestFormat: any;
  responseFormat: any;
}

const EndpointInfo: React.FC<EndpointInfoProps> = ({
  title,
  description,
  endpoint,
  method,
  requestFormat,
  responseFormat
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-mono">{method}</span>
          <span className="font-mono text-sm">{endpoint}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Request Format</h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {JSON.stringify(requestFormat, null, 2)}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Response Format</h4>
            <div className="bg-muted p-3 rounded-md">
              <pre className="text-xs overflow-auto whitespace-pre-wrap">
                {JSON.stringify(responseFormat, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const APIDocumentation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Healthcare API Documentation</CardTitle>
        <CardDescription>
          Integration guides for AI-powered health prediction and analytics APIs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="risk-prediction">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="risk-prediction" className="flex items-center">
              <Calculator size={14} className="mr-2" />
              <span className="hidden md:inline">Risk</span>
            </TabsTrigger>
            <TabsTrigger value="biomarkers" className="flex items-center">
              <Activity size={14} className="mr-2" />
              <span className="hidden md:inline">Biomarkers</span>
            </TabsTrigger>
            <TabsTrigger value="wearable" className="flex items-center">
              <Brain size={14} className="mr-2" />
              <span className="hidden md:inline">Wearable</span>
            </TabsTrigger>
            <TabsTrigger value="imaging" className="flex items-center">
              <Image size={14} className="mr-2" />
              <span className="hidden md:inline">Imaging</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="risk-prediction" className="space-y-6">
            <EndpointInfo
              title="Health Risk Prediction API"
              description="Provides AI-generated risk assessments for patients across multiple health domains."
              endpoint="/health-risk-api"
              method="POST"
              requestFormat={{
                "patientId": "uuid",
                "riskType": "cardiovascular | diabetes | respiratory | neurological | cancer",
                "includeBiomarkers": true
              }}
              responseFormat={{
                "patientId": "uuid",
                "riskScores": {
                  "cardiovascular": {
                    "score": 65,
                    "interpretation": "Elevated Risk",
                    "confidence": 0.89,
                    "recommendedActions": [
                      "Regular blood pressure monitoring",
                      "Cholesterol panel every 6 months"
                    ]
                  }
                },
                "metadata": {
                  "generatedAt": "2023-06-15T14:27:32Z",
                  "dataPoints": {
                    "ehr": 1,
                    "wearable": 7,
                    "genomic": 1
                  },
                  "modelVersion": "2.5.1",
                  "apiVersion": "1.0.0"
                }
              }}
            />
          </TabsContent>
          
          <TabsContent value="biomarkers" className="space-y-6">
            <EndpointInfo
              title="Biomarker Analytics API"
              description="Provides advanced analytics on biomarkers including genomic context and demographic variation."
              endpoint="/biomarker-analytics-api"
              method="POST"
              requestFormat={{
                "biomarkerIds": ["BM001", "BM005"],
                "demographicFilters": {
                  "ageRange": [30, 65],
                  "gender": "all",
                  "ethnicGroup": "all"
                },
                "genomicContextRequired": true,
                "aggregationLevel": "population"
              }}
              responseFormat={{
                "biomarkerInsights": {
                  "BM001": {
                    "name": "C-Reactive Protein",
                    "normalRange": {
                      "min": 0,
                      "max": 3,
                      "unit": "mg/L"
                    },
                    "populationDistribution": {
                      "mean": 1.8,
                      "median": 1.5,
                      "standardDeviation": 1.2
                    },
                    "clinicalSignificance": [
                      "Associated with increased cardiovascular risk",
                      "Indicator of immune system activation"
                    ],
                    "genomicContext": {
                      "associatedGenes": [
                        {
                          "geneSymbol": "CRP",
                          "relationshipType": "expression",
                          "strengthOfEvidence": "strong"
                        }
                      ]
                    }
                  }
                },
                "metadata": {
                  "generatedAt": "2023-06-15T14:30:12Z",
                  "sampleSize": 4856,
                  "confidence": 0.92,
                  "modelVersion": "3.2.1"
                }
              }}
            />
          </TabsContent>
          
          <TabsContent value="wearable" className="space-y-6">
            <EndpointInfo
              title="Wearable Data Stream API"
              description="Provides real-time analytics and anomaly detection for continuous wearable device data."
              endpoint="/wearable-data-api"
              method="POST"
              requestFormat={{
                "patientId": "uuid",
                "deviceType": "smartwatch | cgm | ecg | bloodPressure",
                "dataInterval": {
                  "start": "2023-06-10T00:00:00Z",
                  "end": "2023-06-15T23:59:59Z"
                },
                "anomalyDetectionEnabled": true,
                "alertThreshold": "standard | sensitive | custom"
              }}
              responseFormat={{
                "patientId": "uuid",
                "deviceType": "smartwatch",
                "dataPoints": 684,
                "aggregatedMetrics": {
                  "heartRate": {
                    "avg": 72,
                    "min": 48,
                    "max": 142,
                    "stdDev": 12.3
                  }
                },
                "anomalies": [
                  {
                    "metric": "heartRate",
                    "timestamp": "2023-06-12T03:42:15Z",
                    "value": 142,
                    "confidence": 0.94,
                    "clinicalSignificance": "moderate",
                    "suggestedAction": "Follow up if pattern continues"
                  }
                ]
              }}
            />
          </TabsContent>
          
          <TabsContent value="imaging" className="space-y-6">
            <EndpointInfo
              title="Medical Imaging AI API"
              description="Provides AI-enhanced analysis and anomaly detection for medical imaging data."
              endpoint="/imaging-ai-api"
              method="POST"
              requestFormat={{
                "imageId": "uuid",
                "imageType": "xray | mri | ct | ultrasound",
                "analysisTypes": ["anomalyDetection", "measurementAnalysis", "comparisonWithPrior"],
                "enhancementOptions": {
                  "denoising": true,
                  "contrastEnhancement": false
                }
              }}
              responseFormat={{
                "imageId": "uuid",
                "findings": [
                  {
                    "type": "anomaly",
                    "location": {
                      "coordinates": [120, 85],
                      "description": "Right upper lobe"
                    },
                    "confidence": 0.89,
                    "dimensions": "12mm x 8mm",
                    "classification": {
                      "category": "nodule",
                      "malignancyProbability": 0.32
                    },
                    "recommendedActions": [
                      "Follow-up CT scan in 3 months"
                    ]
                  }
                ],
                "analysisMetadata": {
                  "modelVersion": "4.1.2",
                  "processingTime": "1.2s",
                  "enhancementsApplied": ["denoising"]
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
