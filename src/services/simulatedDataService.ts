
import { supabase } from "@/integrations/supabase/client";

export interface SimulatedPatient {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  contact_email?: string;
  contact_phone?: string;
  address?: string;
  emergency_contact?: string;
}

export interface SimulatedEHR {
  patient_id: string;
  record_date: string;
  physician_notes?: string;
  diagnosis?: string[];
  medications?: string[];
  allergies?: string[];
  vitals?: Record<string, any>;
  medical_history?: string;
}

export interface SimulatedWearableData {
  patient_id: string;
  device_type: string;
  device_id?: string;
  recorded_at: string;
  heart_rate?: number;
  blood_pressure?: Record<string, any>;
  blood_oxygen?: number;
  steps_count?: number;
  sleep_data?: Record<string, any>;
  temperature?: number;
  additional_metrics?: Record<string, any>;
}

export interface SimulatedGenomicData {
  patient_id: string;
  sample_id: string;
  collection_date: string;
  sequence_type: 'dna' | 'rna' | 'protein' | 'metabolome';
  sequence_data?: string;
  analysis_results?: Record<string, any>;
  biomarkers?: Record<string, any>;
}

export interface SimulatedMedicalImage {
  patient_id: string;
  image_type: 'mri' | 'ct' | 'xray' | 'pet' | 'ultrasound' | 'other';
  image_date: string;
  image_url?: string;
  storage_path?: string;
  body_part?: string;
  radiologist_notes?: string;
  ai_analysis_results?: Record<string, any>;
}

export const simulatedDataService = {
  async seedAllData() {
    try {
      console.log('Starting data seeding...');
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Create simulated patients
      const patients = await this.createSimulatedPatients(user.id);
      console.log('Created patients:', patients);

      // Create simulated EHR data
      for (const patient of patients) {
        await this.createSimulatedEHRData(patient.id);
        await this.createSimulatedWearableData(patient.id);
        await this.createSimulatedGenomicData(patient.id);
        await this.createSimulatedMedicalImages(patient.id);
      }

      console.log('Data seeding completed successfully');
      return { success: true, message: 'Simulated data created successfully' };
    } catch (error) {
      console.error('Error seeding data:', error);
      return { success: false, error: error.message };
    }
  },

  async createSimulatedPatients(userId: string): Promise<SimulatedPatient[]> {
    const simulatedPatients: Omit<SimulatedPatient, 'id'>[] = [
      {
        user_id: userId,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1985-03-15',
        gender: 'male' as const,
        contact_email: 'john.doe@email.com',
        contact_phone: '+1-555-0123',
        address: '123 Main St, Anytown, USA',
        emergency_contact: 'Jane Doe - +1-555-0124'
      }
    ];

    const { data, error } = await supabase
      .from('patients')
      .insert(simulatedPatients)
      .select();

    if (error) throw error;
    return data || [];
  },

  async createSimulatedEHRData(patientId: string) {
    const ehrData: SimulatedEHR[] = [
      {
        patient_id: patientId,
        record_date: new Date().toISOString(),
        physician_notes: 'Patient presents with mild hypertension. Recommended lifestyle changes.',
        diagnosis: ['Hypertension, Essential', 'Obesity'],
        medications: ['Lisinopril 10mg', 'Metformin 500mg'],
        allergies: ['Penicillin', 'Shellfish'],
        vitals: {
          blood_pressure: '140/90',
          heart_rate: 72,
          temperature: 98.6,
          weight: 185,
          height: 70
        },
        medical_history: 'Family history of diabetes and cardiovascular disease.'
      }
    ];

    const { error } = await supabase
      .from('electronic_health_records')
      .insert(ehrData);

    if (error) throw error;
  },

  async createSimulatedWearableData(patientId: string) {
    const wearableData: SimulatedWearableData[] = [];
    
    // Generate 30 days of wearable data
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      wearableData.push({
        patient_id: patientId,
        device_type: 'Apple Watch',
        device_id: 'AW-12345',
        recorded_at: date.toISOString(),
        heart_rate: 65 + Math.floor(Math.random() * 20),
        blood_pressure: {
          systolic: 120 + Math.floor(Math.random() * 30),
          diastolic: 80 + Math.floor(Math.random() * 15)
        },
        blood_oxygen: 95 + Math.floor(Math.random() * 5),
        steps_count: 8000 + Math.floor(Math.random() * 4000),
        sleep_data: {
          total_sleep_hours: 7 + Math.random() * 2,
          deep_sleep_hours: 1.5 + Math.random(),
          rem_sleep_hours: 1.2 + Math.random()
        },
        temperature: 98.0 + Math.random() * 2,
        additional_metrics: {
          calories_burned: 2000 + Math.floor(Math.random() * 500),
          active_minutes: 60 + Math.floor(Math.random() * 120)
        }
      });
    }

    const { error } = await supabase
      .from('wearable_data')
      .insert(wearableData);

    if (error) throw error;
  },

  async createSimulatedGenomicData(patientId: string) {
    const genomicData: SimulatedGenomicData[] = [
      {
        patient_id: patientId,
        sample_id: 'GNX-001',
        collection_date: new Date().toISOString(),
        sequence_type: 'dna',
        sequence_data: 'ATCGATCGATCG...',
        analysis_results: {
          variants_found: 12,
          risk_alleles: ['APOE4', 'BRCA1'],
          pharmacogenomics: {
            warfarin_sensitivity: 'high',
            clopidogrel_metabolism: 'normal'
          }
        },
        biomarkers: {
          cardiovascular_risk: 'moderate',
          diabetes_risk: 'low',
          alzheimer_risk: 'elevated'
        }
      }
    ];

    const { error } = await supabase
      .from('genomic_data')
      .insert(genomicData);

    if (error) throw error;
  },

  async createSimulatedMedicalImages(patientId: string) {
    const medicalImages: SimulatedMedicalImage[] = [
      {
        patient_id: patientId,
        image_type: 'xray',
        image_date: new Date().toISOString(),
        image_url: 'https://example.com/chest-xray.jpg',
        storage_path: '/medical-images/chest-xray-001.jpg',
        body_part: 'chest',
        radiologist_notes: 'Normal chest X-ray. No acute findings.',
        ai_analysis_results: {
          abnormalities_detected: false,
          confidence_score: 0.95,
          findings: []
        }
      },
      {
        patient_id: patientId,
        image_type: 'mri',
        image_date: new Date().toISOString(),
        image_url: 'https://example.com/brain-mri.jpg',
        storage_path: '/medical-images/brain-mri-001.jpg',
        body_part: 'brain',
        radiologist_notes: 'Brain MRI shows normal anatomy. No lesions identified.',
        ai_analysis_results: {
          abnormalities_detected: false,
          confidence_score: 0.92,
          findings: []
        }
      }
    ];

    const { error } = await supabase
      .from('medical_images')
      .insert(medicalImages);

    if (error) throw error;
  },

  async createSimulatedResearchFindings(userId: string) {
    const researchFindings = [
      {
        user_id: userId,
        title: 'AI-Driven Biomarker Discovery in Cardiovascular Disease',
        finding_type: 'Clinical Research',
        summary: 'Novel machine learning approach identifies 15 new biomarkers for early cardiovascular disease detection.',
        date_published: new Date().toISOString(),
        reference_url: 'https://example.com/research/cv-biomarkers',
        specialization: 'Cardiology',
        relevance_score: 0.95
      },
      {
        user_id: userId,
        title: 'Personalized Medicine Through Genomic Analysis',
        finding_type: 'Genomic Study',
        summary: 'Comprehensive genomic analysis reveals personalized treatment pathways for cancer patients.',
        date_published: new Date().toISOString(),
        reference_url: 'https://example.com/research/personalized-medicine',
        specialization: 'Oncology',
        relevance_score: 0.88
      }
    ];

    const { error } = await supabase
      .from('research_findings')
      .insert(researchFindings);

    if (error) throw error;
  },

  async getPatientData(userId: string) {
    const { data: patients, error } = await supabase
      .from('patients')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return patients;
  },

  async getEHRData(patientId: string) {
    const { data: ehrData, error } = await supabase
      .from('electronic_health_records')
      .select('*')
      .eq('patient_id', patientId)
      .order('record_date', { ascending: false });

    if (error) throw error;
    return ehrData;
  },

  async getWearableData(patientId: string) {
    const { data: wearableData, error } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('recorded_at', { ascending: false });

    if (error) throw error;
    return wearableData;
  },

  async getGenomicData(patientId: string) {
    const { data: genomicData, error } = await supabase
      .from('genomic_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('collection_date', { ascending: false });

    if (error) throw error;
    return genomicData;
  },

  async getMedicalImages(patientId: string) {
    const { data: medicalImages, error } = await supabase
      .from('medical_images')
      .select('*')
      .eq('patient_id', patientId)
      .order('image_date', { ascending: false });

    if (error) throw error;
    return medicalImages;
  },

  async getResearchFindings(userId: string) {
    const { data: researchFindings, error } = await supabase
      .from('research_findings')
      .select('*')
      .eq('user_id', userId)
      .order('date_published', { ascending: false });

    if (error) throw error;
    return researchFindings;
  }
};
