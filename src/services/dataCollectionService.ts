import { supabase } from '@/integrations/supabase/client';
import {
  PatientType,
  ElectronicHealthRecordType,
  WearableDataType,
  GenomicDataType,
  MedicalImageType,
} from '@/types/supabase-types';

// Function to submit patient profile data
export const submitPatientProfile = async (
  patientData: PatientProfileFormData
): Promise<PatientType | null> => {
  try {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      console.error('No authenticated user found');
      return null;
    }

    // Convert Date to string for Supabase
    const formattedPatientData = {
      ...patientData,
      user_id: userData.user.id,
      date_of_birth: patientData.date_of_birth.toISOString().split('T')[0]
    };

    const { data, error } = await supabase
      .from('patients')
      .insert(formattedPatientData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting patient profile:', error);
      return null;
    }

    // Convert date string back to Date object for our app
    return {
      ...data,
      date_of_birth: new Date(data.date_of_birth)
    } as PatientType;

  } catch (error) {
    console.error('Error in submitPatientProfile:', error);
    return null;
  }
};

// Function to get the patient profile
export const getPatientProfile = async (): Promise<PatientType> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('user_id', userData.user.id)
    .single();

  if (error) throw error;
  
  // Convert string date to Date object
  return {
    ...data,
    date_of_birth: new Date(data.date_of_birth),
    created_at: new Date(data.created_at),
    updated_at: new Date(data.updated_at)
  } as PatientType;
};

// Function to submit electronic health record data
export const submitEHR = async (
  ehrData: ElectronicHealthRecordFormData
): Promise<ElectronicHealthRecordType | null> => {
  try {
    // Convert Date to string for Supabase
    const formattedEhrData = {
      ...ehrData,
      record_date: ehrData.record_date.toISOString().split('T')[0]
    };

    const { data, error } = await supabase
      .from('electronic_health_records')
      .insert(formattedEhrData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting EHR:', error);
      return null;
    }

    // Convert date string back to Date object for our app
    return {
      ...data,
      record_date: new Date(data.record_date)
    } as ElectronicHealthRecordType;

  } catch (error) {
    console.error('Error in submitEHR:', error);
    return null;
  }
};

// Function to get electronic health records
export const getEHRs = async (): Promise<ElectronicHealthRecordType[]> => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('electronic_health_records')
    .select('*')
    .eq('patient_id', patientData.id)
    .order('record_date', { ascending: false });

  if (error) throw error;
  
  // Convert string dates to Date objects
  return data.map(record => ({
    ...record,
    record_date: new Date(record.record_date),
    created_at: new Date(record.created_at),
    updated_at: new Date(record.updated_at)
  })) as ElectronicHealthRecordType[];
};

// Function to submit wearable device data
export const submitWearableData = async (
  wearableData: WearableDataFormData
): Promise<WearableDataType | null> => {
  try {
    // Convert Date to string for Supabase
    const formattedWearableData = {
      ...wearableData,
      recorded_at: wearableData.recorded_at.toISOString()
    };

    const { data, error } = await supabase
      .from('wearable_data')
      .insert(formattedWearableData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting wearable data:', error);
      return null;
    }

    // Convert date string back to Date object for our app
    return {
      ...data,
      recorded_at: new Date(data.recorded_at)
    } as WearableDataType;

  } catch (error) {
    console.error('Error in submitWearableData:', error);
    return null;
  }
};

// Function to get wearable data
export const getWearableData = async (): Promise<WearableDataType[]> => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('wearable_data')
    .select('*')
    .eq('patient_id', patientData.id)
    .order('recorded_at', { ascending: false });

  if (error) throw error;
  
  // Convert string dates to Date objects
  return data.map(record => ({
    ...record,
    recorded_at: new Date(record.recorded_at),
    created_at: new Date(record.created_at)
  })) as WearableDataType[];
};

// Function to submit genomic data
export const submitGenomicData = async (
  genomicData: GenomicDataFormData
): Promise<GenomicDataType | null> => {
  try {
    // Convert Date to string for Supabase
    const formattedGenomicData = {
      ...genomicData,
      collection_date: genomicData.collection_date.toISOString().split('T')[0]
    };

    const { data, error } = await supabase
      .from('genomic_data')
      .insert(formattedGenomicData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting genomic data:', error);
      return null;
    }

    // Convert date string back to Date object for our app
    return {
      ...data,
      collection_date: new Date(data.collection_date)
    } as GenomicDataType;

  } catch (error) {
    console.error('Error in submitGenomicData:', error);
    return null;
  }
};

// Function to get genomic data
export const getGenomicData = async (): Promise<GenomicDataType[]> => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('genomic_data')
    .select('*')
    .eq('patient_id', patientData.id)
    .order('collection_date', { ascending: false });

  if (error) throw error;
  
  // Convert string dates to Date objects
  return data.map(record => ({
    ...record,
    collection_date: new Date(record.collection_date),
    created_at: new Date(record.created_at),
    updated_at: new Date(record.updated_at)
  })) as GenomicDataType[];
};

// Function to submit medical image data
export const submitMedicalImage = async (
  imageData: MedicalImageFormData
): Promise<MedicalImageType | null> => {
  try {
    // Convert Date to string for Supabase
    const formattedImageData = {
      ...imageData,
      image_date: imageData.image_date.toISOString().split('T')[0]
    };

    const { data, error } = await supabase
      .from('medical_images')
      .insert(formattedImageData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting medical image:', error);
      return null;
    }

    // Convert date string back to Date object for our app
    return {
      ...data,
      image_date: new Date(data.image_date)
    } as MedicalImageType;

  } catch (error) {
    console.error('Error in submitMedicalImage:', error);
    return null;
  }
};

// Function to get medical images
export const getMedicalImages = async (): Promise<MedicalImageType[]> => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('medical_images')
    .select('*')
    .eq('patient_id', patientData.id)
    .order('image_date', { ascending: false });

  if (error) throw error;
  
  // Convert string dates to Date objects
  return data.map(record => ({
    ...record,
    image_date: new Date(record.image_date),
    created_at: new Date(record.created_at),
    updated_at: new Date(record.updated_at)
  })) as MedicalImageType[];
};

export const dataCollectionService = {
  submitPatientProfile,
  getPatientProfile,
  submitEHR,
  getEHRs,
  submitWearableData,
  getWearableData,
  submitGenomicData,
  getGenomicData,
  submitMedicalImage,
  getMedicalImages
};
