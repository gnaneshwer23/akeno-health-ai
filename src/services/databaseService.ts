
import { researchService, ResearchFinding } from './database/researchService';
import { imageStorageService } from './database/imageStorageService';
import { genomicDataService } from './database/genomicDataService';
import { backupService, BackupLog } from './database/backupService';
import { databaseStatsService, DatabaseStats } from './database/databaseStatsService';

/**
 * Combined database service to maintain backward compatibility
 */
export const databaseService = {
  // Research findings operations (using mock data)
  getResearchFindings: researchService.getResearchFindings,
  addResearchFinding: researchService.addResearchFinding,

  // Image storage operations
  uploadMedicalImage: imageStorageService.uploadMedicalImage,

  // Genomic data operations
  uploadGenomicData: genomicDataService.uploadGenomicData,

  // Database statistics
  getDatabaseStats: databaseStatsService.getDatabaseStats,
  
  // Backup logs (using mock data)
  getBackupLogs: backupService.getBackupLogs
};

// Re-export interfaces for backward compatibility
export type { ResearchFinding, BackupLog, DatabaseStats };
