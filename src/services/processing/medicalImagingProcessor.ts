
import { supabase } from "@/integrations/supabase/client";
import { securityService } from "./securityService";

/**
 * Service for analyzing medical images
 */
export const medicalImagingProcessor = {
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
      
      // Verify user has permissions to access this patient's image
      if (!(await securityService.verifyAccessPermission(imageData.patient_id))) {
        throw new Error("Access denied: Insufficient permissions to view this patient's image");
      }
      
      // Log access for audit trail
      await securityService.logDataAccess('medical_imaging_analysis', imageData.patient_id);
      
      // Send to edge function for imaging analysis with enhanced security
      const { data, error } = await supabase.functions.invoke('data-processing', {
        body: {
          imageData,
          requestType: 'imaging-analysis',
          securityLevel: 'high'
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
  }
};
