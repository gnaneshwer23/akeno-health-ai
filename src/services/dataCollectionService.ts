
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';
import {
  PatientType,
  ElectronicHealthRecordType,
  WearableDataType,
  GenomicDataType,
  MedicalImageType,
} from '@/types/supabase-types';
import {
  standardizePatientData,
  standardizeEHRData,
  standardizeWearableData,
  standardizeGenomicData,
  standardizeMedicalImageData,
  extractStructuredData
} from './dataStandardizationService';

// Define form data types to match our component needs
type PatientProfileFormData = Omit<PatientType, 'id' | 'created_at' | 'updated_at'>;
type ElectronicHealthRecordFormData = Omit<ElectronicHealthRecordType, 'id' | 'created_at' | 'updated_at'>;
type WearableDataFormData = Omit<WearableDataType, 'id' | 'created_at'>;
type GenomicDataFormData = Omit<GenomicDataType, 'id' | 'created_at' | 'updated_at'>;
type MedicalImageFormData = Omit<MedicalImageType, 'id' | 'created_at' | 'updated_at'>;

// Function to submit patient profile data
export const submitPatientProfile = async (
  patientData: PatientProfileFormData
): Promise<PatientType | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error('Authentication error:', userError);
      return null;
    }

    // Standardize data for AI processing
    const standardizedData = standardizePatientData(patientData);
    console.log('Standardized patient data:', standardizedData);

    // Convert Date to ISO string for Supabase
    const formattedPatientData = {
      ...patientData,
      user_id: userData.user.id,
      date_of_birth: patientData.date_of_birth.toISOString().split('T')[0]
    };

    // Insert patient data into the database
    const { data, error } = await supabase
      .from('patients')
      .insert(formattedPatientData)
      .select()
      .single();

    if (error) throw error;

    // Convert date string back to Date object for our app
    return {
      ...data,
      date_of_birth: new Date(data.date_of_birth),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    } as PatientType;

  } catch (error) {
    console.error('Error submitting patient profile:', error);
    return null;
  }
};

// Function to get patient profile data
export const getPatientProfile = async (): Promise<PatientType | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      console.error('Authentication error:', userError);
      return null;
    }

    const { data, error } = await supabase
      .from('patients')
      .select('*')
      .eq('user_id', userData.user.id)
      .single();

    if (error) throw error;
    if (!data) return null;

    return {
      ...data,
      date_of_birth: new Date(data.date_of_birth),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    } as PatientType;

  } catch (error) {
    console.error('Error getting patient profile:', error);
    return null;
  }
};

// Function to submit electronic health record data
export const submitEHRData = async (
  ehrData: ElectronicHealthRecordFormData
): Promise<ElectronicHealthRecordType | null> => {
  try {
    // Process unstructured data in physician notes if present
    if (ehrData.physician_notes) {
      const structuredNotes = extractStructuredData(ehrData.physician_notes);
      console.log('Extracted structured data from notes:', structuredNotes);
      // Could update ehrData with extracted information here
    }

    // Standardize data for AI processing
    const standardizedData = standardizeEHRData(ehrData);
    console.log('Standardized EHR data:', standardizedData);

    // Convert Date to ISO string for Supabase
    const formattedEhrData = {
      ...ehrData,
      record_date: ehrData.record_date.toISOString().split('T')[0]
    };

    // Insert EHR data into the database
    const { data, error } = await supabase
      .from('electronic_health_records')
      .insert(formattedEhrData)
      .select()
      .single();

    if (error) throw error;

    // Convert date string back to Date object for our app
    return {
      ...data,
      record_date: new Date(data.record_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    } as ElectronicHealthRecordType;

  } catch (error) {
    console.error('Error submitting EHR data:', error);
    return null;
  }
};

// Function to get electronic health record data
export const getEHRData = async (patientId: string): Promise<ElectronicHealthRecordType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('electronic_health_records')
      .select('*')
      .eq('patient_id', patientId);

    if (error) throw error;
    if (!data) return null;

    return data.map(record => ({
      ...record,
      record_date: new Date(record.record_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at)
    })) as ElectronicHealthRecordType[];

  } catch (error) {
    console.error('Error getting EHR data:', error);
    return null;
  }
};

// Function to submit wearable device data
export const submitWearableData = async (
  wearableData: WearableDataFormData
): Promise<WearableDataType | null> => {
  try {
    // Standardize data for AI processing
    const standardizedData = standardizeWearableData(wearableData);
    console.log('Standardized wearable data:', standardizedData);

    // Convert Date to ISO string for Supabase
    const formattedWearableData = {
      ...wearableData,
      recorded_at: wearableData.recorded_at.toISOString()
    };

    // Insert wearable data into the database
    const { data, error } = await supabase
      .from('wearable_data')
      .insert(formattedWearableData)
      .select()
      .single();

    if (error) throw error;

    // Convert date string back to Date object for our app
    return {
      ...data,
      recorded_at: new Date(data.recorded_at),
      created_at: new Date(data.created_at)
    } as WearableDataType;

  } catch (error) {
    console.error('Error submitting wearable data:', error);
    return null;
  }
};

// Function to get wearable device data
export const getWearableData = async (patientId: string): Promise<WearableDataType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId);

    if (error) throw error;
    if (!data) return null;

    return data.map(record => ({
      ...record,
      recorded_at: new Date(record.recorded_at),
      created_at: new Date(record.created_at)
    })) as WearableDataType[];

  } catch (error) {
    console.error('Error getting wearable data:', error);
    return null;
  }
};

// Function to submit genomic data
export const submitGenomicData = async (
  genomicData: GenomicDataFormData
): Promise<GenomicDataType | null> => {
  try {
    // Standardize data for AI processing
    const standardizedData = standardizeGenomicData(genomicData);
    console.log('Standardized genomic data:', standardizedData);

    // Convert Date to ISO string for Supabase
    const formattedGenomicData = {
      ...genomicData,
      collection_date: genomicData.collection_date.toISOString().split('T')[0]
    };

    // Insert genomic data into the database
    const { data, error } = await supabase
      .from('genomic_data')
      .insert(formattedGenomicData)
      .select()
      .single();

    if (error) throw error;

    // Convert date string back to Date object for our app
    return {
      ...data,
      collection_date: new Date(data.collection_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    } as GenomicDataType;

  } catch (error) {
    console.error('Error submitting genomic data:', error);
    return null;
  }
};

// Function to get genomic data
export const getGenomicData = async (patientId: string): Promise<GenomicDataType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('genomic_data')
      .select('*')
      .eq('patient_id', patientId);

    if (error) throw error;
    if (!data) return null;

    return data.map(record => ({
      ...record,
      collection_date: new Date(record.collection_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at)
    })) as GenomicDataType[];

  } catch (error) {
    console.error('Error getting genomic data:', error);
    return null;
  }
};

// Function to submit medical image data
export const submitMedicalImageData = async (
  imageData: MedicalImageFormData
): Promise<MedicalImageType | null> => {
  try {
    // Standardize data for AI processing
    const standardizedData = standardizeMedicalImageData(imageData);
    console.log('Standardized medical image data:', standardizedData);

    // Convert Date to ISO string for Supabase
    const formattedImageData = {
      ...imageData,
      image_date: imageData.image_date.toISOString().split('T')[0]
    };

    // Insert medical image data into the database
    const { data, error } = await supabase
      .from('medical_images')
      .insert(formattedImageData)
      .select()
      .single();

    if (error) throw error;

    // Convert date string back to Date object for our app
    return {
      ...data,
      image_date: new Date(data.image_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    } as MedicalImageType;

  } catch (error) {
    console.error('Error submitting medical image data:', error);
    return null;
  }
};

// Function to get medical image data
export const getMedicalImageData = async (patientId: string): Promise<MedicalImageType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('medical_images')
      .select('*')
      .eq('patient_id', patientId);

    if (error) throw error;
    if (!data) return null;

    return data.map(record => ({
      ...record,
      image_date: new Date(record.image_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at)
    })) as MedicalImageType[];

  } catch (error) {
    console.error('Error getting medical image data:', error);
    return null;
  }
};
