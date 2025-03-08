
import { supabase } from "@/integrations/supabase/client";

/**
 * Service for preprocessing health data before storage or analysis
 */
export const dataPreprocessingService = {
  /**
   * Clean and normalize patient data before storing in the database
   * @param patientData Raw patient data
   * @returns Cleaned and normalized patient data
   */
  cleanPatientData(patientData: any) {
    console.log("Cleaning patient data...");
    
    // Deep clone the data to avoid modifying the original
    const cleanedData = JSON.parse(JSON.stringify(patientData));
    
    // Remove any undefined or null fields
    Object.keys(cleanedData).forEach(key => {
      if (cleanedData[key] === undefined || cleanedData[key] === null) {
        delete cleanedData[key];
      }
    });
    
    // Ensure date fields are properly formatted as ISO strings
    if (cleanedData.date_of_birth && !(cleanedData.date_of_birth instanceof Date)) {
      try {
        cleanedData.date_of_birth = new Date(cleanedData.date_of_birth).toISOString();
      } catch (error) {
        console.error("Invalid date format for date_of_birth", error);
      }
    }
    
    return cleanedData;
  },
  
  /**
   * Normalize vital sign data to standard formats
   * @param vitalsData Raw vitals data
   * @returns Normalized vitals data
   */
  normalizeVitals(vitalsData: any) {
    const normalized = { ...vitalsData };
    
    // Convert temperature to Celsius if in Fahrenheit
    if (normalized.temperature && normalized.temperature > 40) {
      normalized.temperature = (normalized.temperature - 32) * 5/9;
    }
    
    // Ensure blood pressure has both systolic and diastolic values
    if (normalized.blood_pressure) {
      if (!normalized.blood_pressure.systolic) normalized.blood_pressure.systolic = 120;
      if (!normalized.blood_pressure.diastolic) normalized.blood_pressure.diastolic = 80;
    }
    
    return normalized;
  },
  
  /**
   * Extract key health features from patient data
   * @param data Patient health data
   * @returns Extracted features
   */
  extractFeatures(data: any) {
    const features = {
      cardiovascular: [],
      metabolic: [],
      genetic: [],
      lifestyle: []
    };
    
    // Extract cardiovascular features
    if (data.vitals?.blood_pressure) {
      const bp = data.vitals.blood_pressure;
      if (bp.systolic > 140 || bp.diastolic > 90) {
        features.cardiovascular.push("hypertension_risk");
      }
    }
    
    if (data.lab_results?.cholesterol?.total > 200) {
      features.cardiovascular.push("elevated_cholesterol");
    }
    
    // Extract metabolic features
    if (data.lab_results?.glucose?.level > 100) {
      features.metabolic.push("elevated_glucose");
    }
    
    // Calculate BMI if height and weight are available
    if (data.height_cm && data.weight_kg) {
      const heightInM = data.height_cm / 100;
      const bmi = data.weight_kg / (heightInM * heightInM);
      
      if (bmi >= 30) features.metabolic.push("obesity");
      else if (bmi >= 25) features.metabolic.push("overweight");
    }
    
    return features;
  },
  
  /**
   * Detect anomalies in health data that might indicate errors or health concerns
   * @param data Patient health data
   * @returns Detected anomalies
   */
  detectAnomalies(data: any) {
    const anomalies = [];
    
    // Check vital signs for extreme values
    if (data.vitals) {
      if (data.vitals.heart_rate && (data.vitals.heart_rate < 40 || data.vitals.heart_rate > 120)) {
        anomalies.push({
          type: "vital_sign",
          parameter: "heart_rate",
          value: data.vitals.heart_rate,
          message: "Heart rate outside normal range"
        });
      }
      
      if (data.vitals.blood_pressure) {
        const bp = data.vitals.blood_pressure;
        if (bp.systolic > 180 || bp.diastolic > 120) {
          anomalies.push({
            type: "vital_sign",
            parameter: "blood_pressure",
            value: `${bp.systolic}/${bp.diastolic}`,
            message: "Blood pressure critically high"
          });
        }
      }
    }
    
    return anomalies;
  },
  
  /**
   * Process patient data before sending to backend
   * @param data Raw patient data
   * @returns Processed data ready for backend analysis
   */
  async preprocessForAnalysis(data: any) {
    // Clean basic data
    const cleanedData = this.cleanPatientData(data);
    
    // Normalize vitals
    if (cleanedData.vitals) {
      cleanedData.vitals = this.normalizeVitals(cleanedData.vitals);
    }
    
    // Extract features
    cleanedData.features = this.extractFeatures(cleanedData);
    
    // Detect anomalies
    cleanedData.anomalies = this.detectAnomalies(cleanedData);
    
    // Format data for AI processing
    const formattedData = {
      patientInfo: {
        id: cleanedData.id,
        age: cleanedData.age || this.calculateAge(cleanedData.date_of_birth),
        gender: cleanedData.gender,
        bmi: cleanedData.bmi
      },
      vitalSigns: cleanedData.vitals ? {
        bloodPressure: cleanedData.vitals.blood_pressure,
        heartRate: cleanedData.vitals.heart_rate,
        temperature: cleanedData.vitals.temperature,
        respiratoryRate: cleanedData.vitals.respiratory_rate,
        oxygenSaturation: cleanedData.vitals.blood_oxygen
      } : undefined,
      labResults: cleanedData.lab_results,
      genomicData: cleanedData.genomic_data
    };
    
    return formattedData;
  },
  
  /**
   * Calculate age from date of birth
   */
  calculateAge(dateOfBirth: string) {
    if (!dateOfBirth) return undefined;
    
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  },
  
  /**
   * Send data to the server-side preprocessing and analysis pipeline
   * @param data Patient health data
   * @returns Processed health insights
   */
  async processAndAnalyze(data: any) {
    try {
      // Preprocess on the client side first
      const preprocessedData = await this.preprocessForAnalysis(data);
      
      // Send to server for full analysis
      const { data: processedData, error } = await supabase.functions.invoke(
        'data-processing',
        {
          body: preprocessedData
        }
      );
      
      if (error) throw error;
      
      return processedData;
    } catch (error) {
      console.error("Error in data preprocessing and analysis:", error);
      throw error;
    }
  }
};
