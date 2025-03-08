
import React from 'react';
import EndpointInfo from './EndpointInfo';

const ClinicalDecisionTab: React.FC = () => {
  return (
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
  );
};

export default ClinicalDecisionTab;
