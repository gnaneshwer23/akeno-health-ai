
import React from 'react';
import EndpointInfo from './EndpointInfo';

const RiskPredictionTab: React.FC = () => {
  return (
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
  );
};

export default RiskPredictionTab;
