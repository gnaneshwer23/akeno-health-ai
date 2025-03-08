
import React from 'react';
import EndpointInfo from './EndpointInfo';

const ImagingTab: React.FC = () => {
  return (
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
  );
};

export default ImagingTab;
