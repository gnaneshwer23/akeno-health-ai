
import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import ResearchStats from './components/ResearchStats';
import DataExplorerTabs from './components/DataExplorerTabs';
import AIModelDiscoveryCard from './components/AIModelDiscoveryCard';

const ResearcherDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Dashboard Header with Welcome Message */}
      <DashboardHeader />

      {/* Research Stats */}
      <ResearchStats />

      {/* Research Data Explorer */}
      <DataExplorerTabs />

      {/* AI Model Discovery */}
      <AIModelDiscoveryCard />
    </div>
  );
};

export default ResearcherDashboard;
