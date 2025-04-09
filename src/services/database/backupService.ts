
import { supabase } from "@/integrations/supabase/client";

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

/**
 * Service for handling database backup operations
 */
export const backupService = {
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
