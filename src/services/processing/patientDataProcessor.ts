
import { supabase } from "@/integrations/supabase/client";
import { dataPreprocessingService } from "../dataPreprocessingService";
import { securityService } from "./securityService";

/**
 * Service for processing patient data and generating health insights
 */
export const patientDataProcessor = {
  /**
   * Process patient data and generate health insights
   * @param patientData The patient data to process
   * @returns Processed health insights
   */
  async processPatientData(patientData: any) {
    try {
      console.log("Starting patient data processing...");
      
      // Encrypt sensitive data before preprocessing
      const encryptedData = await securityService.encryptSensitiveData(patientData);
      console.log("Data encrypted for secure processing");
      
      // Preprocess the data first
      const preprocessedData = await dataPreprocessingService.preprocessForAnalysis(encryptedData);
      console.log("Data preprocessed successfully:", preprocessedData);
      
      // Send to edge function for AI-driven processing
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: {
          ...preprocessedData,
          requestType: 'comprehensive-analysis', // Specify that we want full AI processing
          securityLevel: 'high' // Enable advanced security measures
        }
      });
      
      if (error) {
        console.error("Error processing patient data:", error);
        throw new Error(`Data processing failed: ${error.message}`);
      }
      
      // Decrypt data before returning to client
      const decryptedResults = await securityService.decryptProcessedData(data);
      console.log("Data processed successfully with insights:", decryptedResults);
      
      // Log access for compliance
      await securityService.logDataAccess('process_patient_data', patientData.patientInfo?.id);
      
      return decryptedResults;
    } catch (error) {
      console.error("Error in data processing service:", error);
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
