
import React, { useEffect, useState } from 'react';
import HealthScoreCard from './health-overview/HealthScoreCard';
import RiskAssessmentCard from './risk-assessment/RiskAssessmentCard';
import WellnessPlanCard from './wellness-plan/WellnessPlanCard';
import HealthMetricsGrid from './health-metrics/HealthMetricsGrid';
import PatientVitalsChart from './PatientVitalsChart';
import GenomicDataVisualizer from './GenomicDataVisualizer';
import MedicalImagesGallery from './MedicalImagesGallery';
import { PatientType } from '@/types/supabase-types';
import { dataCollectionService } from '@/services/dataCollectionService';
import { useToast } from '@/hooks/use-toast';

const PatientDataDashboard = () => {
  const [patient, setPatient] = useState<PatientType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        setLoading(true);
        const patientData = await dataCollectionService.getPatientProfile();
        setPatient(patientData);
      } catch (err) {
        console.error('Error fetching patient data:', err);
        setError('Failed to load patient data');
        toast({
          title: 'Error',
          description: 'Could not load patient data. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [toast]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen"><span>Loading patient data...</span></div>;
  }

  if (error || !patient) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Error Loading Data</h2>
        <p className="text-muted-foreground">{error || 'Patient data not found'}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-health-primary text-white rounded-md hover:bg-health-secondary transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HealthScoreCard />
        <RiskAssessmentCard />
        <WellnessPlanCard />
      </div>
      
      <HealthMetricsGrid />
      
      <div className="grid grid-cols-1 gap-4">
        <PatientVitalsChart patientId={patient.id} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GenomicDataVisualizer patientId={patient.id} />
        <MedicalImagesGallery patientId={patient.id} />
      </div>
    </div>
  );
};

export default PatientDataDashboard;
