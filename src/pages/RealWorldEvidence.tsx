
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import RealWorldEvidenceComponent from '@/components/products/RealWorldEvidence';
import { Toaster } from 'sonner';

const RealWorldEvidence = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Real-World Evidence - Akeno Health";
  }, []);
  
  return (
    <MainLayout>
      <RealWorldEvidenceComponent />
      <Toaster position="top-center" />
    </MainLayout>
  );
};

export default RealWorldEvidence;
