
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SimulatedDataManagerComponent from '@/components/SimulatedDataManager';

const SimulatedDataManager = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Simulated Data Manager - Akeno Health";
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-8">
        <SimulatedDataManagerComponent />
      </div>
    </MainLayout>
  );
};

export default SimulatedDataManager;
