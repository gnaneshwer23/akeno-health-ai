
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

// Define simplified form data types that match the actual database schema
type PatientProfileFormData = {
  user_id?: string;
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth?: Date;
  gender?: 'male' | 'female' | 'other';
  height_cm?: number;
  weight_kg?: number;
  timezone?: string;
};

type PatientType = {
  id: string;
  user_id: string | null;
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date | null;
  gender: 'male' | 'female' | 'other' | null;
  height_cm: number | null;
  weight_kg: number | null;
  timezone: string | null;
  created_at: Date;
  updated_at: Date;
};

type BiomarkerFormData = {
  patient_id?: string;
  biomarker_name: string;
  value: number;
  unit: string;
  measured_at: Date;
  lab_source?: string;
  reference_range_min?: number;
  reference_range_max?: number;
};

type BiomarkerType = {
  id: string;
  patient_id: string | null;
  biomarker_name: string;
  value: number;
  unit: string;
  measured_at: Date;
  lab_source: string | null;
  reference_range_min: number | null;
  reference_range_max: number | null;
  created_at: Date;
};

// Function to submit patient profile data
const submitPatientProfile = async (
  patientData: PatientProfileFormData
): Promise<PatientType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...patientData,
      date_of_birth: patientData.date_of_birth?.toISOString().split('T')[0], // Format as YYYY-MM-DD
    };

    const { data, error } = await supabase
      .from('patients')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting patient profile:', error);
      return null;
    }

    // Convert string dates back to Date objects for frontend use
    return {
      ...data,
      date_of_birth: data.date_of_birth ? new Date(data.date_of_birth) : null,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as PatientType;
  } catch (error) {
    console.error('Error in submitPatientProfile:', error);
    return null;
  }
};

// Function to get patient profile data
const getPatientProfile = async (): Promise<PatientType | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error('Error getting user:', userError);
      return null;
    }

    const { data, error } = await supabase
      .from('patients')
      .select('*')
      .eq('user_id', userData.user.id)
      .single();

    if (error) {
      console.error('Error getting patient profile:', error);
      return null;
    }

    // Convert string dates to Date objects
    return {
      ...data,
      date_of_birth: data.date_of_birth ? new Date(data.date_of_birth) : null,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as PatientType;
  } catch (error) {
    console.error('Error in getPatientProfile:', error);
    return null;
  }
};

// Function to submit biomarker data
const submitBiomarkerData = async (
  biomarkerData: BiomarkerFormData
): Promise<BiomarkerType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...biomarkerData,
      measured_at: biomarkerData.measured_at.toISOString(),
    };

    const { data, error } = await supabase
      .from('biomarkers')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting biomarker data:', error);
      return null;
    }

    // Convert string dates back to Date objects
    return {
      ...data,
      measured_at: new Date(data.measured_at),
      created_at: new Date(data.created_at),
    } as BiomarkerType;
  } catch (error) {
    console.error('Error in submitBiomarkerData:', error);
    return null;
  }
};

// Function to get biomarker data
const getBiomarkerData = async (patientId: string): Promise<BiomarkerType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('biomarkers')
      .select('*')
      .eq('patient_id', patientId)
      .order('measured_at', { ascending: false });

    if (error) {
      console.error('Error getting biomarker data:', error);
      return null;
    }

    // Convert string dates to Date objects for each record
    return data.map(record => ({
      ...record,
      measured_at: new Date(record.measured_at),
      created_at: new Date(record.created_at),
    })) as BiomarkerType[];
  } catch (error) {
    console.error('Error in getBiomarkerData:', error);
    return null;
  }
};

// Function to submit wearable device data
const submitWearableData = async (
  wearableData: {
    patient_id?: string;
    device_type: string;
    data_type: string;
    raw_data: Json;
    sync_timestamp: Date;
    processed_metrics?: Json;
  }
): Promise<any | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...wearableData,
      sync_timestamp: wearableData.sync_timestamp.toISOString(),
    };

    const { data, error } = await supabase
      .from('wearable_data')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting wearable data:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in submitWearableData:', error);
    return null;
  }
};

// Function to get wearable device data
const getWearableData = async (patientId: string): Promise<any[] | null> => {
  try {
    const { data, error } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('sync_timestamp', { ascending: false });

    if (error) {
      console.error('Error getting wearable data:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getWearableData:', error);
    return null;
  }
};

// Mock functions for genomic and medical image data since tables don't exist
const getGenomicData = async (patientId: string): Promise<any[] | null> => {
  console.log('Mock genomic data for patient:', patientId);
  // Return mock data since genomic_data table doesn't exist
  return [
    {
      id: '1',
      patient_id: patientId,
      sample_id: 'SAMPLE_001',
      collection_date: new Date().toISOString(),
      sequence_type: 'dna',
      sequence_data: 'ATCGATCGATCGATCG...',
      analysis_results: { variants: 5, quality_score: 0.95 },
      biomarkers: { APOE: 'e3/e4', BRCA1: 'wildtype' }
    }
  ];
};

const getMedicalImageData = async (patientId: string): Promise<any[] | null> => {
  console.log('Mock medical image data for patient:', patientId);
  // Return mock data since medical_images table doesn't exist
  return [
    {
      id: '1',
      patient_id: patientId,
      image_type: 'xray',
      image_date: new Date().toISOString(),
      image_url: 'https://via.placeholder.com/400x300?text=X-Ray+Sample',
      body_part: 'chest',
      radiologist_notes: 'Normal chest X-ray'
    }
  ];
};

// Export as a service object that components can import and use
export const dataCollectionService = {
  submitPatientProfile,
  getPatientProfile,
  submitBiomarkerData,
  getBiomarkerData,
  submitWearableData,
  getWearableData,
  getGenomicData,
  getMedicalImageData
};
