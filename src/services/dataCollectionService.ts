
import { supabase } from "@/integrations/supabase/client";
import { 
  PatientType, 
  ElectronicHealthRecordType, 
  WearableDataType, 
  GenomicDataType, 
  MedicalImageType 
} from "@/types/supabase-types";
import { Json } from "@/integrations/supabase/types";

// Define form data types
type PatientProfileFormData = Omit<PatientType, 'id' | 'created_at' | 'updated_at'> & {
  date_of_birth: Date;
};

type ElectronicHealthRecordFormData = Omit<ElectronicHealthRecordType, 'id' | 'created_at' | 'updated_at'> & {
  record_date: Date;
};

type WearableDataFormData = Omit<WearableDataType, 'id' | 'created_at'> & {
  recorded_at: Date;
};

type GenomicDataFormData = Omit<GenomicDataType, 'id' | 'created_at' | 'updated_at'> & {
  collection_date: Date;
};

type MedicalImageFormData = Omit<MedicalImageType, 'id' | 'created_at' | 'updated_at'> & {
  image_date: Date;
};

// Function to submit patient profile data
const submitPatientProfile = async (
  patientData: PatientProfileFormData
): Promise<PatientType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...patientData,
      date_of_birth: patientData.date_of_birth.toISOString().split('T')[0], // Format as YYYY-MM-DD
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
      date_of_birth: new Date(data.date_of_birth),
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
      date_of_birth: new Date(data.date_of_birth),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as PatientType;
  } catch (error) {
    console.error('Error in getPatientProfile:', error);
    return null;
  }
};

// Function to submit electronic health record data
const submitEHRData = async (
  ehrData: ElectronicHealthRecordFormData
): Promise<ElectronicHealthRecordType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...ehrData,
      record_date: ehrData.record_date.toISOString(),
    };

    const { data, error } = await supabase
      .from('electronic_health_records')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting EHR data:', error);
      return null;
    }

    // Convert string dates back to Date objects
    return {
      ...data,
      record_date: new Date(data.record_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as ElectronicHealthRecordType;
  } catch (error) {
    console.error('Error in submitEHRData:', error);
    return null;
  }
};

// Function to get electronic health record data
const getEHRData = async (patientId: string): Promise<ElectronicHealthRecordType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('electronic_health_records')
      .select('*')
      .eq('patient_id', patientId)
      .order('record_date', { ascending: false });

    if (error) {
      console.error('Error getting EHR data:', error);
      return null;
    }

    // Convert string dates to Date objects for each record
    return data.map(record => ({
      ...record,
      record_date: new Date(record.record_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at),
    })) as ElectronicHealthRecordType[];
  } catch (error) {
    console.error('Error in getEHRData:', error);
    return null;
  }
};

// Function to submit wearable device data
const submitWearableData = async (
  wearableData: WearableDataFormData
): Promise<WearableDataType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...wearableData,
      recorded_at: wearableData.recorded_at.toISOString(),
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

    // Convert string dates back to Date objects
    return {
      ...data,
      recorded_at: new Date(data.recorded_at),
      created_at: new Date(data.created_at),
    } as WearableDataType;
  } catch (error) {
    console.error('Error in submitWearableData:', error);
    return null;
  }
};

// Function to get wearable device data
const getWearableData = async (patientId: string): Promise<WearableDataType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('recorded_at', { ascending: false });

    if (error) {
      console.error('Error getting wearable data:', error);
      return null;
    }

    // Convert string dates to Date objects for each record
    return data.map(record => ({
      ...record,
      recorded_at: new Date(record.recorded_at),
      created_at: new Date(record.created_at),
    })) as WearableDataType[];
  } catch (error) {
    console.error('Error in getWearableData:', error);
    return null;
  }
};

// Function to submit genomic data
const submitGenomicData = async (
  genomicData: GenomicDataFormData
): Promise<GenomicDataType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...genomicData,
      collection_date: genomicData.collection_date.toISOString(),
    };

    const { data, error } = await supabase
      .from('genomic_data')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting genomic data:', error);
      return null;
    }

    // Convert string dates back to Date objects
    return {
      ...data,
      collection_date: new Date(data.collection_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as GenomicDataType;
  } catch (error) {
    console.error('Error in submitGenomicData:', error);
    return null;
  }
};

// Function to get genomic data
const getGenomicData = async (patientId: string): Promise<GenomicDataType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('genomic_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('collection_date', { ascending: false });

    if (error) {
      console.error('Error getting genomic data:', error);
      return null;
    }

    // Convert string dates to Date objects for each record
    return data.map(record => ({
      ...record,
      collection_date: new Date(record.collection_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at),
    })) as GenomicDataType[];
  } catch (error) {
    console.error('Error in getGenomicData:', error);
    return null;
  }
};

// Function to submit medical image data
const submitMedicalImageData = async (
  imageData: MedicalImageFormData
): Promise<MedicalImageType | null> => {
  try {
    // Convert Date objects to ISO strings for Supabase
    const formattedData = {
      ...imageData,
      image_date: imageData.image_date.toISOString(),
    };

    const { data, error } = await supabase
      .from('medical_images')
      .insert(formattedData)
      .select()
      .single();

    if (error) {
      console.error('Error submitting medical image data:', error);
      return null;
    }

    // Convert string dates back to Date objects
    return {
      ...data,
      image_date: new Date(data.image_date),
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    } as MedicalImageType;
  } catch (error) {
    console.error('Error in submitMedicalImageData:', error);
    return null;
  }
};

// Function to get medical image data
const getMedicalImageData = async (patientId: string): Promise<MedicalImageType[] | null> => {
  try {
    const { data, error } = await supabase
      .from('medical_images')
      .select('*')
      .eq('patient_id', patientId)
      .order('image_date', { ascending: false });

    if (error) {
      console.error('Error getting medical image data:', error);
      return null;
    }

    // Convert string dates to Date objects for each record
    return data.map(record => ({
      ...record,
      image_date: new Date(record.image_date),
      created_at: new Date(record.created_at),
      updated_at: new Date(record.updated_at),
    })) as MedicalImageType[];
  } catch (error) {
    console.error('Error in getMedicalImageData:', error);
    return null;
  }
};

// Export as a service object that components can import and use
export const dataCollectionService = {
  submitPatientProfile,
  getPatientProfile,
  submitEHRData,
  getEHRData,
  submitWearableData,
  getWearableData,
  submitGenomicData,
  getGenomicData,
  submitMedicalImageData,
  getMedicalImageData
};
