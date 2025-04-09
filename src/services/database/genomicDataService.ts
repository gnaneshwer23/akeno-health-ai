
import { supabase } from "@/integrations/supabase/client";

/**
 * Service for handling genomic data operations
 */
export const genomicDataService = {
  /**
   * Upload genomic data file
   */
  async uploadGenomicData(
    file: File,
    patientId: string,
    sequenceType: string
  ): Promise<{ path: string | null; error: Error | null }> {
    try {
      const userId = (await supabase.auth.getUser()).data.user?.id;
      if (!userId) {
        return { path: null, error: new Error('User not authenticated') };
      }
      
      const filePath = `${userId}/${patientId}/${sequenceType}/${Date.now()}_${file.name}`;
      
      const { data, error } = await supabase.storage
        .from('genomic_data')
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
      console.error('Error uploading genomic data:', error);
      return { path: null, error: error as Error };
    }
  }
};
