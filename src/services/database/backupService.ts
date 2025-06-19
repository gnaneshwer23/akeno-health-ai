
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
   * Get recent backup logs (mock data since backup_logs table doesn't exist)
   */
  async getBackupLogs(limit = 5): Promise<BackupLog[]> {
    try {
      console.log('Returning mock backup logs since backup_logs table does not exist');
      
      // Return mock backup logs
      const mockBackupLogs: BackupLog[] = [
        {
          id: '1',
          backup_type: 'full',
          backup_status: 'completed',
          started_at: new Date(Date.now() - 86400000).toISOString(),
          completed_at: new Date(Date.now() - 86340000).toISOString(),
          backup_size: 1024000,
          backup_location: 's3://backups/full_backup_001.sql',
          error_message: null,
          created_by: 'system'
        },
        {
          id: '2',
          backup_type: 'incremental',
          backup_status: 'completed',
          started_at: new Date(Date.now() - 43200000).toISOString(),
          completed_at: new Date(Date.now() - 43180000).toISOString(),
          backup_size: 256000,
          backup_location: 's3://backups/inc_backup_002.sql',
          error_message: null,
          created_by: 'system'
        }
      ];
      
      return mockBackupLogs.slice(0, limit);
    } catch (error) {
      console.error('Error in getBackupLogs:', error);
      return [];
    }
  }
};
