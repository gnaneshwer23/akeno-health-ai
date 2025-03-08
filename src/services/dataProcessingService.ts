
import { supabase } from '@/integrations/supabase/client';
import { PatientType, ElectronicHealthRecordType, WearableDataType, GenomicDataType } from '@/types/supabase-types';

export interface ProcessedPatientData {
  riskScores: {
    cardiovascular: number;
    diabetes: number;
    cognitive: number;
    [key: string]: number;
  };
  recommendations: {
    category: string;
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    action: string;
  }[];
  processingTimestamp: string;
}

/**
 * Processes patient data using the Supabase Edge Function
 */
export const processPatientData = async (
  patientData: PatientType,
  ehrData: ElectronicHealthRecordType[],
  wearableData: WearableDataType[],
  genomicData: GenomicDataType[]
): Promise<ProcessedPatientData | null> => {
  try {
    console.log('Calling data processing edge function');
    
    // Prepare data for processing
    const latestEHR = ehrData && ehrData.length > 0 ? ehrData[0] : null;
    const latestWearableData = wearableData && wearableData.length > 0 
      ? wearableData.slice(0, 10) // Only send recent data
      : [];
      
    // Calculate age
    const age = patientData.date_of_birth 
      ? Math.floor((new Date().getTime() - new Date(patientData.date_of_birth).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
      : 0;
    
    // Prepare data payload for processing
    const dataPayload = {
      patientInfo: {
        id: patientData.id,
        age,
        gender: patientData.gender,
        bmi: 25, // Example value - would be calculated from actual data
      },
      vitalSigns: {
        bloodPressure: latestWearableData[0]?.blood_pressure || null,
        heartRate: latestWearableData[0]?.heart_rate || null,
        bloodOxygen: latestWearableData[0]?.blood_oxygen || null,
      },
      labResults: {
        glucose: 95, // Example value - would come from EHR
        cholesterol: { total: 180, ldl: 100, hdl: 50 }, // Example values
      },
      genomicData: {
        riskMarkers: genomicData?.length > 0 
          ? (genomicData[0].biomarkers as any)?.riskMarkers || [] 
          : [],
      },
      medicalHistory: {
        conditions: latestEHR?.diagnosis || [],
        medications: latestEHR?.medications || [],
        allergies: latestEHR?.allergies || [],
      }
    };
    
    // Call the edge function
    const { data, error } = await supabase.functions.invoke('data-processing', {
      body: dataPayload,
    });
    
    if (error) {
      console.error('Error calling data processing function:', error);
      return null;
    }
    
    console.log('Received processed data:', data);
    return data as ProcessedPatientData;
    
  } catch (error) {
    console.error('Error in processPatientData:', error);
    return null;
  }
};

/**
 * Gets a comprehensive health assessment for a patient
 */
export const getHealthAssessment = async (patientId: string): Promise<ProcessedPatientData | null> => {
  try {
    // Import the data collection service
    const { dataCollectionService } = await import('./dataCollectionService');
    
    // Fetch all required patient data
    const patientData = await dataCollectionService.getPatientProfile();
    if (!patientData) {
      throw new Error('Patient data not found');
    }
    
    const ehrData = await dataCollectionService.getEHRData(patientId);
    const wearableData = await dataCollectionService.getWearableData(patientId);
    const genomicData = await dataCollectionService.getGenomicData(patientId);
    
    // Process the data to generate insights
    return await processPatientData(
      patientData,
      ehrData || [],
      wearableData || [],
      genomicData || []
    );
    
  } catch (error) {
    console.error('Error in getHealthAssessment:', error);
    return null;
  }
};

export const dataProcessingService = {
  processPatientData,
  getHealthAssessment
};
