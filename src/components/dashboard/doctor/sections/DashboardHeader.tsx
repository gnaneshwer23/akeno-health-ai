
import React from 'react';
import { Database, HardDrive } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DashboardHeaderProps {
  userName?: string;
  databaseStats?: {
    totalPatients?: number;
    totalRecords?: number;
    storageUsed?: string;
    backupStatus?: 'success' | 'pending' | 'error';
    lastBackup?: string;
  };
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  userName = 'Doctor',
  databaseStats
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Welcome, {userName}</h1>
        <p className="text-muted-foreground">Here's your AI-enhanced clinical dashboard</p>
      </div>
      
      {databaseStats && (
        <div className="flex items-center space-x-4 bg-white/80 p-2 rounded-lg shadow-sm border border-gray-100">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Database className="h-4 w-4 text-health-secondary mr-2" />
                  <span className="text-sm font-medium">
                    {databaseStats.totalPatients} patients
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total patients in database</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <HardDrive className="h-4 w-4 text-health-primary mr-2" />
                  <span className="text-sm font-medium">
                    {databaseStats.storageUsed} used
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Storage used across all medical data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {databaseStats.lastBackup && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-2 ${
                      databaseStats.backupStatus === 'success' ? 'bg-green-500' :
                      databaseStats.backupStatus === 'pending' ? 'bg-amber-500' : 'bg-red-500'
                    }`} />
                    <span className="text-xs text-muted-foreground">
                      Backup: {databaseStats.lastBackup}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Last successful data backup</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
