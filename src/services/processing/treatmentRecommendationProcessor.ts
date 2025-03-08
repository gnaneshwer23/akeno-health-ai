
import { supabase } from "@/integrations/supabase/client";
import { securityService } from "./securityService";
import { riskAssessmentProcessor } from "./riskAssessmentProcessor";

/**
 * Service for generating treatment recommendations
 */
export const treatmentRecommendationProcessor = {
  /**
   * Generate personalized treatment recommendations based on patient data
   * @param patientId The ID of the patient
   * @returns Personalized treatment recommendations
   */
  async generateTreatmentRecommendations(patientId: string) {
    try {
      // Verify user has permissions to access this patient's data
      if (!(await securityService.verifyAccessPermission(patientId))) {
        throw new Error("Access denied: Insufficient permissions to view this patient's data");
      }
      
      // Get risk assessment first
      const riskAssessment = await riskAssessmentProcessor.generateRiskAssessment(patientId);
      
      // Send to edge function specifically for treatment recommendations
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: {
          patientId,
          riskAssessment,
          requestType: 'treatment-recommendations',
          securityLevel: 'high' // Enable advanced security measures
        }
      });
      
      if (error) throw error;
      
      // Log successful access for compliance
      await securityService.logDataAccess('treatment_recommendations_generated', patientId);
      
      return data;
    } catch (error) {
      console.error("Error generating treatment recommendations:", error);
      // Log access failure for security monitoring
      await securityService.logDataAccess('treatment_recommendations_failed', patientId, error);
      throw error;
    }
  }
};
