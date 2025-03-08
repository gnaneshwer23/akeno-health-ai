
/**
 * Re-exports from the modular processing services
 * This file maintains the same API as before for backward compatibility
 */
import {
  patientDataProcessor,
  riskAssessmentProcessor,
  treatmentRecommendationProcessor,
  medicalImagingProcessor,
  securityService
} from './processing';

/**
 * Service for processing and analyzing health data
 */
export const dataProcessingService = {
  // From patientDataProcessor
  processPatientData: patientDataProcessor.processPatientData,
  calculateAge: patientDataProcessor.calculateAge,
  
  // From riskAssessmentProcessor
  generateRiskAssessment: riskAssessmentProcessor.generateRiskAssessment,
  
  // From treatmentRecommendationProcessor
  generateTreatmentRecommendations: treatmentRecommendationProcessor.generateTreatmentRecommendations,
  
  // From medicalImagingProcessor
  analyzeMedicalImaging: medicalImagingProcessor.analyzeMedicalImaging,
  
  // From securityService
  encryptSensitiveData: securityService.encryptSensitiveData,
  decryptProcessedData: securityService.decryptProcessedData,
  logDataAccess: securityService.logDataAccess,
  verifyAccessPermission: securityService.verifyAccessPermission
};
