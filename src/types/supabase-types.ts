
// Custom types for Supabase integration
// These complement the auto-generated types in src/integrations/supabase/types.ts

export type ChatMessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  session_id: string;
  user_id?: string;
};

export type ProfileType = {
  id: string;
  name: string | null;
  email: string | null;
  role: 'patient' | 'doctor' | 'researcher' | null;
  profile_image: string | null;
  created_at: Date;
  updated_at: Date;
};

// New types for patient data

export type PatientType = {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  contact_email?: string;
  contact_phone?: string;
  address?: string;
  emergency_contact?: string;
  created_at: Date;
  updated_at: Date;
};

export type ElectronicHealthRecordType = {
  id: string;
  patient_id: string;
  record_date: Date;
  physician_notes?: string;
  diagnosis?: string[];
  medications?: string[];
  allergies?: string[];
  vitals?: Record<string, any>;
  medical_history?: string;
  created_at: Date;
  updated_at: Date;
};

export type WearableDataType = {
  id: string;
  patient_id: string;
  device_type: string;
  device_id?: string;
  recorded_at: Date;
  heart_rate?: number;
  blood_pressure?: Record<string, any>;
  blood_oxygen?: number;
  steps_count?: number;
  sleep_data?: Record<string, any>;
  temperature?: number;
  additional_metrics?: Record<string, any>;
  created_at: Date;
};

export type GenomicDataType = {
  id: string;
  patient_id: string;
  sample_id: string;
  collection_date: Date;
  sequence_type: 'dna' | 'rna' | 'protein' | 'metabolome';
  sequence_data?: string;
  analysis_results?: Record<string, any>;
  biomarkers?: Record<string, any>;
  created_at: Date;
  updated_at: Date;
};

export type MedicalImageType = {
  id: string;
  patient_id: string;
  image_type: 'mri' | 'ct' | 'xray' | 'pet' | 'ultrasound' | 'other';
  image_date: Date;
  image_url?: string;
  storage_path?: string;
  body_part?: string;
  radiologist_notes?: string;
  ai_analysis_results?: Record<string, any>;
  created_at: Date;
  updated_at: Date;
};
