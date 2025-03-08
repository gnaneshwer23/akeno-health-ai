
import { supabase } from '@/integrations/supabase/client';
import {
  PatientType,
  ElectronicHealthRecordType,
  WearableDataType,
  GenomicDataType,
  MedicalImageType,
} from '@/types/supabase-types';

// Function to submit patient profile data
export const submitPatientProfile = async (patientData: Omit<PatientType, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
  const { 
    first_name, 
    last_name, 
    date_of_birth,
    gender,
    contact_email,
    contact_phone,
    address,
    emergency_contact
  } = patientData;

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('patients')
    .upsert({ 
      user_id: userData.user.id,
      first_name, 
      last_name, 
      date_of_birth,
      gender,
      contact_email,
      contact_phone,
      address,
      emergency_contact
    }, { onConflict: 'user_id' })
    .select()
    .single();

  if (error) throw error;
  return data;
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
export const submitEHR = async (ehrData: Omit<ElectronicHealthRecordType, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('electronic_health_records')
    .insert({
      ...ehrData,
      patient_id: patientData.id
    })
    .select()
    .single();

  if (error) throw error;
  return data;
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
export const submitWearableData = async (wearableData: Omit<WearableDataType, 'id' | 'created_at'>) => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('wearable_data')
    .insert({
      ...wearableData,
      patient_id: patientData.id
    })
    .select()
    .single();

  if (error) throw error;
  return data;
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
export const submitGenomicData = async (genomicData: Omit<GenomicDataType, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('genomic_data')
    .insert({
      ...genomicData,
      patient_id: patientData.id
    })
    .select()
    .single();

  if (error) throw error;
  return data;
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
export const submitMedicalImage = async (imageData: Omit<MedicalImageType, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: patientData, error: patientError } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (patientError) throw patientError;
  if (!patientData) throw new Error('Patient profile not found');

  const { data, error } = await supabase
    .from('medical_images')
    .insert({
      ...imageData,
      patient_id: patientData.id
    })
    .select()
    .single();

  if (error) throw error;
  return data;
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
