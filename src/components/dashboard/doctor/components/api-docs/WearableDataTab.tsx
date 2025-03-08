
import React from 'react';
import EndpointInfo from './EndpointInfo';

const WearableDataTab: React.FC = () => {
  return (
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
  );
};

export default WearableDataTab;
