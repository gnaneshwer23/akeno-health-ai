
import { supabase } from "@/integrations/supabase/client";

// Research findings interface
export interface ResearchFinding {
  id: string;
  user_id: string;
  title: string;
  finding_type: string;
  summary: string;
  date_published: string;
  reference_url: string | null;
  relevance_score: number | null;
  specialization: string | null;
  created_at: string;
  updated_at: string;
}

// Backup log interface
export interface BackupLog {
  id: string;
  backup_type: string;
  backup_status: string;
  started_at: string;
  completed_at: string | null;
  backup_size: number | null;
  backup_location: string | null;
  error_message: string | null;
  created_by: string | null;
}

// Database statistics interface
export interface DatabaseStats {
  totalPatients: number;
  totalRecords: number;
  storageUsed: string;
  backupStatus: 'success' | 'pending' | 'error';
  lastBackup: string;
}

/**
 * Service for handling database operations related to medical data
 */
export const databaseService = {
  /**
   * Fetch research findings with optional filtering
   */
  async getResearchFindings({
    specialization,
    findingType,
    relevanceMinimum = 0,
    limit = 10,
    searchTerm
  }: {
    specialization?: string;
    findingType?: string;
    relevanceMinimum?: number;
    limit?: number;
    searchTerm?: string;
  } = {}): Promise<ResearchFinding[]> {
    try {
      let query = supabase
        .from('research_findings')
        .select('*')
        .gte('relevance_score', relevanceMinimum)
        .order('date_published', { ascending: false });
      
      if (specialization) {
        query = query.eq('specialization', specialization);
      }
      
      if (findingType) {
        query = query.eq('finding_type', findingType);
      }
      
      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,summary.ilike.%${searchTerm}%`);
      }
      
      const { data, error } = await query.limit(limit);
      
      if (error) {
        console.error('Error fetching research findings:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error in getResearchFindings:', error);
      return [];
    }
  },

  /**
   * Add a new research finding
   */
  async addResearchFinding(finding: Omit<ResearchFinding, 'id' | 'created_at' | 'updated_at'>): Promise<ResearchFinding | null> {
    try {
      const { data, error } = await supabase
        .from('research_findings')
        .insert(finding)
        .select()
        .single();
      
      if (error) {
        console.error('Error adding research finding:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error in addResearchFinding:', error);
      return null;
    }
  },

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
  },

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
  },

  /**
   * Get database statistics (mock implementation)
   * In a real-world scenario, this would fetch actual stats from the database
   */
  async getDatabaseStats(): Promise<DatabaseStats> {
    try {
      // This would normally be a real database query to count records
      // For demo purposes, we're returning mock data
      return {
        totalPatients: 157,
        totalRecords: 2843,
        storageUsed: '4.2 GB',
        backupStatus: 'success',
        lastBackup: new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleDateString()
      };
    } catch (error) {
      console.error('Error getting database stats:', error);
      return {
        totalPatients: 0,
        totalRecords: 0,
        storageUsed: '0 GB',
        backupStatus: 'error',
        lastBackup: 'Unknown'
      };
    }
  },
  
  /**
   * Get recent backup logs
   */
  async getBackupLogs(limit = 5): Promise<BackupLog[]> {
    try {
      const { data, error } = await supabase
        .from('backup_logs')
        .select('*')
        .order('started_at', { ascending: false })
        .limit(limit);
      
      if (error) {
        console.error('Error fetching backup logs:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error in getBackupLogs:', error);
      return [];
    }
  }
};
