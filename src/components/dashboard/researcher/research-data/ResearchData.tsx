
import React, { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';
import ResearchHeader from './components/ResearchHeader';
import SearchFilterBar from './components/SearchFilterBar';
import ResearchTabsList from './components/ResearchTabsList';
import ResearchTabsContent from './components/ResearchTabsContent';

const ResearchData = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <ResearchHeader />
      <SearchFilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Tabs defaultValue="genomics" className="w-full">
        <ResearchTabsList />
        <ResearchTabsContent />
      </Tabs>
    </div>
  );
};

export default ResearchData;
