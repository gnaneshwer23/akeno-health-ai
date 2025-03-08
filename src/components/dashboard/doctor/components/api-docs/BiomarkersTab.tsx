
import React from 'react';
import EndpointInfo from './EndpointInfo';

const BiomarkersTab: React.FC = () => {
  return (
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
  );
};

export default BiomarkersTab;
