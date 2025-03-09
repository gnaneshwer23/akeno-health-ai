
import { dataProcessingService } from '@/services/dataProcessingService';
import { AssessmentResponse } from '../types/riskAssessmentTypes';

export const riskAssessmentService = {
  /**
   * Fetches the risk assessment data for a specific patient
   * @param patientId The patient identifier
   * @returns The risk assessment data
   */
  async fetchRiskAssessment(patientId: string): Promise<AssessmentResponse> {
    try {
      // Validate patient ID
      if (!patientId) {
        throw new Error("Patient ID is required");
      }
      
      console.log("Fetching risk assessment for patient:", patientId);
      
      // Get risk assessment data
      const data = await dataProcessingService.generateRiskAssessment(patientId);
      
      console.log("Risk assessment data received:", data ? "success" : "empty");
      
      return data;
    } catch (error: any) {
      console.error("Error loading risk assessment:", error);
      throw new Error(`Failed to load risk assessment: ${error.message || "Unknown error"}`);
    }
  },

  /**
   * Retrieves the patient ID from local storage or uses a demo ID
   * @returns The patient ID
   */
  getPatientId(): string {
    const storedId = localStorage.getItem('demoPatientId');
    const patientId = storedId || 'demo-patient-id';
    console.log("Using patient ID:", patientId);
    return patientId;
  }
};
