
import { supabase } from "@/integrations/supabase/client";
import { securityService } from "./securityService";
import { patientDataProcessor } from "./patientDataProcessor";

/**
 * Service for generating health risk assessments
 */
export const riskAssessmentProcessor = {
  /**
   * Generate health risk assessments for a patient
   * @param patientId The ID of the patient
   * @returns Health risk assessment results
   */
  async generateRiskAssessment(patientId: string) {
    try {
      // Log access attempt for audit trail
      await securityService.logDataAccess('risk_assessment_request', patientId);
      
      // Verify user has permissions to access this patient's data
      if (!(await securityService.verifyAccessPermission(patientId))) {
        throw new Error("Access denied: Insufficient permissions to view this patient's data");
      }
      
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
      
      // Get medical images if available
      const { data: medicalImages, error: imagesError } = await supabase
        .from('medical_images')
        .select('*')
        .eq('patient_id', patientId)
        .order('image_date', { ascending: false })
        .limit(5);
        
      if (imagesError && imagesError.code !== 'PGRST116') throw imagesError;
      
      // Combine all data for processing
      const combinedData = {
        patient,
        ehr: ehrData || null,
        wearable: wearableData || [],
        genomic: genomicData || null,
        medicalImages: medicalImages || []
      };
      
      // Format the data for processing
      const formattedData = {
        patientInfo: {
          id: patient.id,
          age: patientDataProcessor.calculateAge(patient.date_of_birth),
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
          // Fix the type issue by safely checking and casting the data
          riskMarkers: typeof genomicData.biomarkers === 'object' && genomicData.biomarkers 
            ? (genomicData.biomarkers as any)?.risk_markers || []
            : []
        } : {},
        medicalImaging: medicalImages ? medicalImages.map(img => ({
          type: img.image_type,
          bodyPart: img.body_part,
          date: img.image_date,
          url: img.image_url
        })) : []
      };
      
      // Encrypt sensitive data before sending for processing
      const encryptedData = await securityService.encryptSensitiveData(formattedData);
      
      // Process the data and return insights with specified focus on AI/ML analysis
      const result = await patientDataProcessor.processPatientData({
        ...encryptedData,
        analysisType: 'risk-prediction',
        includeBiomarkerAnalysis: true,
        includeMultiOmicsAnalysis: genomicData ? true : false
      });
      
      // Log successful access for compliance
      await securityService.logDataAccess('risk_assessment_complete', patientId);
      
      return result;
    } catch (error) {
      console.error("Error generating risk assessment:", error);
      // Log access failure for security monitoring
      await securityService.logDataAccess('risk_assessment_failed', patientId, error);
      throw error;
    }
  }
};
