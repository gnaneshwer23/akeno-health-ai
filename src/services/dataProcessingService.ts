
import { supabase } from "@/integrations/supabase/client";
import { dataPreprocessingService } from "./dataPreprocessingService";

/**
 * Service for processing and analyzing health data
 */
export const dataProcessingService = {
  /**
   * Process patient data and generate health insights
   * @param patientData The patient data to process
   * @returns Processed health insights
   */
  async processPatientData(patientData: any) {
    try {
      console.log("Starting patient data processing...");
      
      // Preprocess the data first
      const preprocessedData = await dataPreprocessingService.preprocessForAnalysis(patientData);
      console.log("Data preprocessed successfully:", preprocessedData);
      
      // Send to edge function for AI-driven processing
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: preprocessedData
      });
      
      if (error) {
        console.error("Error processing patient data:", error);
        throw new Error(`Data processing failed: ${error.message}`);
      }
      
      console.log("Data processed successfully with insights:", data);
      return data;
    } catch (error) {
      console.error("Error in data processing service:", error);
      throw error;
    }
  },
  
  /**
   * Generate health risk assessments for a patient
   * @param patientId The ID of the patient
   * @returns Health risk assessment results
   */
  async generateRiskAssessment(patientId: string) {
    try {
      // Get the latest patient data
      const { data: patient, error: patientError } = await supabase
        .from('patients')
        .select('*')
        .eq('id', patientId)
        .single();
      
      if (patientError) throw patientError;
      
      // Get the latest EHR data
      const { data: ehrData, error: ehrError } = await supabase
        .from('electronic_health_records')
        .select('*')
        .eq('patient_id', patientId)
        .order('record_date', { ascending: false })
        .limit(1)
        .single();
      
      if (ehrError && ehrError.code !== 'PGRST116') throw ehrError;
      
      // Get the latest wearable data
      const { data: wearableData, error: wearableError } = await supabase
        .from('wearable_data')
        .select('*')
        .eq('patient_id', patientId)
        .order('recorded_at', { ascending: false })
        .limit(7);
      
      if (wearableError) throw wearableError;
      
      // Get genomic data if available
      const { data: genomicData, error: genomicError } = await supabase
        .from('genomic_data')
        .select('*')
        .eq('patient_id', patientId)
        .limit(1)
        .single();
      
      if (genomicError && genomicError.code !== 'PGRST116') throw genomicError;
      
      // Combine all data for processing
      const combinedData = {
        patient,
        ehr: ehrData || null,
        wearable: wearableData || [],
        genomic: genomicData || null
      };
      
      // Format the data for processing
      const formattedData = {
        patientInfo: {
          id: patient.id,
          age: this.calculateAge(patient.date_of_birth),
          gender: patient.gender,
          bmi: 24.5 // Placeholder - would normally be calculated from height/weight
        },
        vitalSigns: ehrData?.vitals || {},
        labResults: {
          cholesterol: {
            total: 180, // Placeholder values for demonstration
            hdl: 50,
            ldl: 120
          },
          glucose: {
            level: 95
          }
        },
        genomicData: genomicData ? {
          riskMarkers: genomicData.biomarkers?.risk_markers || []
        } : {}
      };
      
      // Process the data and return insights
      return await this.processPatientData(formattedData);
    } catch (error) {
      console.error("Error generating risk assessment:", error);
      throw error;
    }
  },
  
  /**
   * Calculate age from date of birth
   */
  calculateAge(dateOfBirth: string) {
    return dataPreprocessingService.calculateAge(dateOfBirth);
  }
};
