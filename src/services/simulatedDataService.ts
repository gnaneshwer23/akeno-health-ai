
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

export interface SimulatedPatient {
  id: string;
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'male' | 'female' | 'other';
  height_cm?: number;
  weight_kg?: number;
  timezone?: string;
}

export interface SimulatedBiomarker {
  patient_id: string;
  biomarker_name: string;
  value: number;
  unit: string;
  measured_at: string;
  lab_source?: string;
  reference_range_min?: number;
  reference_range_max?: number;
}

export interface SimulatedWearableData {
  patient_id: string;
  device_type: string;
  data_type: string;
  raw_data: Json;
  sync_timestamp: string;
  processed_metrics?: Json;
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

      // Create simulated data for each patient
      for (const patient of patients) {
        await this.createSimulatedBiomarkerData(patient.id);
        await this.createSimulatedWearableData(patient.id);
      }

      console.log('Data seeding completed successfully');
      return { success: true, message: 'Simulated data created successfully' };
    } catch (error: any) {
      console.error('Error seeding data:', error);
      return { success: false, error: error.message };
    }
  },

  async createSimulatedPatients(userId: string) {
    // Create patient data that matches the actual patients table schema
    const simulatedPatients = [
      {
        user_id: userId,
        email: 'john.doe@email.com',
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1985-03-15',
        gender: 'male' as const,
        height_cm: 178,
        weight_kg: 75,
        timezone: 'America/New_York'
      },
      {
        user_id: userId,
        email: 'jane.smith@email.com',
        first_name: 'Jane',
        last_name: 'Smith',
        date_of_birth: '1990-07-22',
        gender: 'female' as const,
        height_cm: 165,
        weight_kg: 62,
        timezone: 'America/Los_Angeles'
      }
    ];

    const { data, error } = await supabase
      .from('patients')
      .insert(simulatedPatients)
      .select();

    if (error) throw error;
    return data || [];
  },

  async createSimulatedBiomarkerData(patientId: string) {
    const biomarkerData: SimulatedBiomarker[] = [
      {
        patient_id: patientId,
        biomarker_name: 'total_cholesterol',
        value: 180,
        unit: 'mg/dL',
        measured_at: new Date().toISOString(),
        lab_source: 'Quest Diagnostics',
        reference_range_min: 100,
        reference_range_max: 200
      },
      {
        patient_id: patientId,
        biomarker_name: 'hdl_cholesterol',
        value: 55,
        unit: 'mg/dL',
        measured_at: new Date().toISOString(),
        lab_source: 'Quest Diagnostics',
        reference_range_min: 40,
        reference_range_max: 100
      },
      {
        patient_id: patientId,
        biomarker_name: 'ldl_cholesterol',
        value: 110,
        unit: 'mg/dL',
        measured_at: new Date().toISOString(),
        lab_source: 'Quest Diagnostics',
        reference_range_min: 0,
        reference_range_max: 100
      },
      {
        patient_id: patientId,
        biomarker_name: 'glucose',
        value: 95,
        unit: 'mg/dL',
        measured_at: new Date().toISOString(),
        lab_source: 'LabCorp',
        reference_range_min: 70,
        reference_range_max: 99
      }
    ];

    const { error } = await supabase
      .from('biomarkers')
      .insert(biomarkerData);

    if (error) throw error;
  },

  async createSimulatedWearableData(patientId: string) {
    const wearableData: SimulatedWearableData[] = [];
    
    // Generate 7 days of wearable data
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      wearableData.push({
        patient_id: patientId,
        device_type: 'Apple Watch',
        data_type: 'daily_summary',
        raw_data: {
          heart_rate: 65 + Math.floor(Math.random() * 20),
          steps_count: 8000 + Math.floor(Math.random() * 4000),
          calories_burned: 2000 + Math.floor(Math.random() * 500),
          sleep_hours: 7 + Math.random() * 2
        },
        sync_timestamp: date.toISOString(),
        processed_metrics: {
          avg_heart_rate: 72,
          max_heart_rate: 145,
          active_minutes: 60 + Math.floor(Math.random() * 120)
        }
      });
    }

    const { error } = await supabase
      .from('wearable_data')
      .insert(wearableData);

    if (error) throw error;
  },

  // Mock data functions for tables that don't exist
  async createSimulatedEHRData(patientId: string) {
    console.log('Mock EHR data creation for patient:', patientId);
    // Return mock success since table doesn't exist
    return { success: true };
  },

  async createSimulatedGenomicData(patientId: string) {
    console.log('Mock genomic data creation for patient:', patientId);
    // Return mock success since table doesn't exist
    return { success: true };
  },

  async createSimulatedMedicalImages(patientId: string) {
    console.log('Mock medical images creation for patient:', patientId);
    // Return mock success since table doesn't exist
    return { success: true };
  },

  async createSimulatedResearchFindings(userId: string) {
    console.log('Mock research findings creation for user:', userId);
    // Return mock success since table doesn't exist
    return { success: true };
  },

  // Data retrieval functions
  async getPatientData(userId: string) {
    const { data: patients, error } = await supabase
      .from('patients')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return patients;
  },

  async getBiomarkerData(patientId: string) {
    const { data: biomarkerData, error } = await supabase
      .from('biomarkers')
      .select('*')
      .eq('patient_id', patientId)
      .order('measured_at', { ascending: false });

    if (error) throw error;
    return biomarkerData;
  },

  async getWearableData(patientId: string) {
    const { data: wearableData, error } = await supabase
      .from('wearable_data')
      .select('*')
      .eq('patient_id', patientId)
      .order('sync_timestamp', { ascending: false });

    if (error) throw error;
    return wearableData;
  },

  // Mock data getters for non-existent tables
  async getEHRData(patientId: string) {
    console.log('Mock EHR data retrieval for patient:', patientId);
    return [
      {
        id: '1',
        patient_id: patientId,
        record_date: new Date().toISOString(),
        physician_notes: 'Patient presents with mild hypertension.',
        diagnosis: ['Hypertension', 'Obesity'],
        medications: ['Lisinopril 10mg', 'Metformin 500mg'],
        allergies: ['Penicillin', 'Shellfish'],
        vitals: {
          blood_pressure: '140/90',
          heart_rate: 72,
          temperature: 98.6
        }
      }
    ];
  },

  async getGenomicData(patientId: string) {
    console.log('Mock genomic data retrieval for patient:', patientId);
    return [
      {
        id: '1',
        patient_id: patientId,
        sample_id: 'GNX-001',
        collection_date: new Date().toISOString(),
        sequence_type: 'dna',
        analysis_results: {
          variants_found: 12,
          risk_alleles: ['APOE4', 'BRCA1']
        },
        biomarkers: {
          cardiovascular_risk: 'moderate',
          diabetes_risk: 'low'
        }
      }
    ];
  },

  async getMedicalImages(patientId: string) {
    console.log('Mock medical images retrieval for patient:', patientId);
    return [
      {
        id: '1',
        patient_id: patientId,
        image_type: 'xray',
        image_date: new Date().toISOString(),
        image_url: 'https://via.placeholder.com/400x300?text=X-Ray+Sample',
        body_part: 'chest',
        radiologist_notes: 'Normal chest X-ray.'
      }
    ];
  },

  async getResearchFindings(userId: string) {
    console.log('Mock research findings retrieval for user:', userId);
    return [
      {
        id: '1',
        user_id: userId,
        title: 'AI-Driven Biomarker Discovery',
        finding_type: 'Clinical Research',
        summary: 'Novel ML approach identifies biomarkers for early disease detection.',
        date_published: new Date().toISOString(),
        relevance_score: 0.95
      }
    ];
  }
};
