
import { supabase } from '@/integrations/supabase/client';
import { 
  PatientType, 
  ElectronicHealthRecordType, 
  WearableDataType, 
  GenomicDataType, 
  MedicalImageType 
} from '@/types/supabase-types';

// Function to submit patient profile data
const submitPatientProfile = async (data: Partial<PatientType>) => {
  const response = await fetch('/api/data-collection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
    },
    body: JSON.stringify({
      source: 'patient',
      data
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit patient data');
  }

  return await response.json();
};

// Function to get patient profile data
const getPatientProfile = async (): Promise<PatientType> => {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
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
const submitEHR = async (data: Partial<ElectronicHealthRecordType>) => {
  const response = await fetch('/api/data-collection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
    },
    body: JSON.stringify({
      source: 'ehr',
      data
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit EHR data');
  }

  return await response.json();
};

// Function to get electronic health records
const getEHRs = async (): Promise<ElectronicHealthRecordType[]> => {
  const { data, error } = await supabase
    .from('electronic_health_records')
    .select('*')
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
const submitWearableData = async (data: Partial<WearableDataType>) => {
  const response = await fetch('/api/data-collection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
    },
    body: JSON.stringify({
      source: 'wearable',
      data
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit wearable data');
  }

  return await response.json();
};

// Function to get wearable device data
const getWearableData = async (): Promise<WearableDataType[]> => {
  const { data, error } = await supabase
    .from('wearable_data')
    .select('*')
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
const submitGenomicData = async (data: Partial<GenomicDataType>) => {
  const response = await fetch('/api/data-collection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
    },
    body: JSON.stringify({
      source: 'genomic',
      data
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit genomic data');
  }

  return await response.json();
};

// Function to get genomic data
const getGenomicData = async (): Promise<GenomicDataType[]> => {
  const { data, error } = await supabase
    .from('genomic_data')
    .select('*')
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
const submitMedicalImage = async (data: Partial<MedicalImageType>) => {
  const response = await fetch('/api/data-collection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
    },
    body: JSON.stringify({
      source: 'medical_image',
      data
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit medical image data');
  }

  return await response.json();
};

// Function to get medical images
const getMedicalImages = async (): Promise<MedicalImageType[]> => {
  const { data, error } = await supabase
    .from('medical_images')
    .select('*')
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
