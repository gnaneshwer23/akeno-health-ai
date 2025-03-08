
import { supabase } from "@/integrations/supabase/client";
import { 
  PatientType, 
  ElectronicHealthRecordType, 
  WearableDataType, 
  GenomicDataType, 
  MedicalImageType 
} from "@/types/supabase-types";

// Helper function to call the data collection edge function
async function collectData(source: string, data: any) {
  try {
    const { data: response, error } = await supabase.functions.invoke("data-collection", {
      body: { source, data },
    });

    if (error) throw error;
    return response;
  } catch (error) {
    console.error(`Error collecting ${source} data:`, error);
    throw error;
  }
}

// Patient data submission
export async function submitPatientData(patientData: Omit<PatientType, 'id' | 'user_id' | 'created_at' | 'updated_at'>) {
  return collectData('patient', patientData);
}

// EHR data submission
export async function submitEHRData(ehrData: Omit<ElectronicHealthRecordType, 'id' | 'patient_id' | 'created_at' | 'updated_at'>) {
  return collectData('ehr', ehrData);
}

// Wearable data submission
export async function submitWearableData(wearableData: Omit<WearableDataType, 'id' | 'patient_id' | 'created_at'>) {
  return collectData('wearable', wearableData);
}

// Genomic data submission
export async function submitGenomicData(genomicData: Omit<GenomicDataType, 'id' | 'patient_id' | 'created_at' | 'updated_at'>) {
  return collectData('genomic', genomicData);
}

// Medical image data submission
export async function submitMedicalImageData(imageData: Omit<MedicalImageType, 'id' | 'patient_id' | 'created_at' | 'updated_at'>) {
  return collectData('medical_image', imageData);
}

// Get patient profile
export async function getPatientProfile() {
  try {
    const { data: profile, error } = await supabase
      .from('patients')
      .select('*')
      .single();
    
    if (error) throw error;
    return profile;
  } catch (error) {
    console.error('Error fetching patient profile:', error);
    return null;
  }
}

// Get health records for a patient
export async function getHealthRecords() {
  try {
    const { data: records, error } = await supabase
      .from('electronic_health_records')
      .select('*')
      .order('record_date', { ascending: false });
    
    if (error) throw error;
    return records;
  } catch (error) {
    console.error('Error fetching health records:', error);
    return [];
  }
}

// Get wearable data for a patient
export async function getWearableData(limit = 100) {
  try {
    const { data: wearableData, error } = await supabase
      .from('wearable_data')
      .select('*')
      .order('recorded_at', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    return wearableData;
  } catch (error) {
    console.error('Error fetching wearable data:', error);
    return [];
  }
}

// Get genomic data for a patient
export async function getGenomicData() {
  try {
    const { data: genomicData, error } = await supabase
      .from('genomic_data')
      .select('*')
      .order('collection_date', { ascending: false });
    
    if (error) throw error;
    return genomicData;
  } catch (error) {
    console.error('Error fetching genomic data:', error);
    return [];
  }
}

// Get medical images for a patient
export async function getMedicalImages() {
  try {
    const { data: images, error } = await supabase
      .from('medical_images')
      .select('*')
      .order('image_date', { ascending: false });
    
    if (error) throw error;
    return images;
  } catch (error) {
    console.error('Error fetching medical images:', error);
    return [];
  }
}
