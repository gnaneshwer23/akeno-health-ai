
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
      // Get risk assessment data
      return await dataProcessingService.generateRiskAssessment(patientId);
    } catch (error: any) {
      console.error("Error loading risk assessment:", error);
      throw error;
    }
  },

  /**
   * Retrieves the patient ID from local storage or uses a demo ID
   * @returns The patient ID
   */
  getPatientId(): string {
    // For demo, this would come from the authenticated user
    return localStorage.getItem('demoPatientId') || 'demo-patient-id';
  }
};
