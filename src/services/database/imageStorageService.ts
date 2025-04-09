
import { supabase } from "@/integrations/supabase/client";

/**
 * Service for handling medical image storage and uploads
 */
export const imageStorageService = {
  /**
   * Upload a medical image to storage
   */
  async uploadMedicalImage(
    file: File, 
    patientId: string, 
    metadata: { 
      imageType: string, 
      bodyPart?: string 
    }
  ): Promise<{ path: string | null; error: Error | null }> {
    try {
      // Create folder structure: userId/patientId/imageType
      const userId = (await supabase.auth.getUser()).data.user?.id;
      if (!userId) {
        return { path: null, error: new Error('User not authenticated') };
      }
      
      const filePath = `${userId}/${patientId}/${metadata.imageType}/${Date.now()}_${file.name}`;
      
      const { data, error } = await supabase.storage
        .from('medical_images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        });
      
      if (error) {
        return { path: null, error: error };
      }
      
      return { path: data.path, error: null };
    } catch (error) {
      console.error('Error uploading medical image:', error);
      return { path: null, error: error as Error };
    }
  }
};
