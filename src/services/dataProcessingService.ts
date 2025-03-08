
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
        body: {
          ...preprocessedData,
          requestType: 'comprehensive-analysis' // Specify that we want full AI processing
        }
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
      
      // Process the data and return insights with specified focus on AI/ML analysis
      return await this.processPatientData({
        ...formattedData,
        analysisType: 'risk-prediction',
        includeBiomarkerAnalysis: true,
        includeMultiOmicsAnalysis: genomicData ? true : false
      });
    } catch (error) {
      console.error("Error generating risk assessment:", error);
      throw error;
    }
  },
  
  /**
   * Generate personalized treatment recommendations based on patient data
   * @param patientId The ID of the patient
   * @returns Personalized treatment recommendations
   */
  async generateTreatmentRecommendations(patientId: string) {
    try {
      // Get risk assessment first
      const riskAssessment = await this.generateRiskAssessment(patientId);
      
      // Send to edge function specifically for treatment recommendations
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: {
          patientId,
          riskAssessment,
          requestType: 'treatment-recommendations'
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error("Error generating treatment recommendations:", error);
      throw error;
    }
  },
  
  /**
   * Analyze medical imaging using AI detection models
   * @param imageId The ID of the medical image
   * @returns AI analysis results for the image
   */
  async analyzeMedicalImaging(imageId: string) {
    try {
      // Get the image data
      const { data: imageData, error: imageError } = await supabase
        .from('medical_images')
        .select('*')
        .eq('id', imageId)
        .single();
      
      if (imageError) throw imageError;
      
      // Send to edge function for imaging analysis
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: {
          imageData,
          requestType: 'imaging-analysis'
        }
      });
      
      if (error) throw error;
      
      // Store the analysis results back in the database
      await supabase
        .from('medical_images')
        .update({
          ai_analysis_results: data.results
        })
        .eq('id', imageId);
      
      return data;
    } catch (error) {
      console.error("Error analyzing medical imaging:", error);
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
