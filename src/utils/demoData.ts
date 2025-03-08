
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

/**
 * Seeds the database with demo data for the currently authenticated user
 */
export const seedDemoData = async () => {
  try {
    console.log('Seeding demo data...');
    
    // Get the current authenticated user
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      throw new Error('User not authenticated');
    }
    
    const userId = userData.user.id;
    
    // Create a patient record for the user
    const patientData = {
      user_id: userId,
      first_name: 'Jane',
      last_name: 'Doe',
      date_of_birth: '1985-05-15', // YYYY-MM-DD format
      gender: 'female',
      contact_email: userData.user.email,
      contact_phone: '555-123-4567',
      address: '123 Health St, Medical City, CA 90210',
      emergency_contact: 'John Doe: 555-987-6543'
    };
    
    // Insert patient data
    const { data: patient, error: patientError } = await supabase
      .from('patients')
      .upsert(patientData, { onConflict: 'user_id' })
      .select()
      .single();
      
    if (patientError) {
      throw new Error(`Error creating patient: ${patientError.message}`);
    }
    
    const patientId = patient.id;
    
    // Create electronic health record
    const ehrData = {
      patient_id: patientId,
      record_date: new Date().toISOString(),
      physician_notes: 'Patient is in good health overall. Regular check-ups recommended.',
      diagnosis: ['Mild hypertension', 'Seasonal allergies'],
      medications: ['Lisinopril 10mg daily', 'Zyrtec as needed'],
      allergies: ['Penicillin', 'Peanuts'],
      vitals: {
        height_cm: 165,
        weight_kg: 65,
        bmi: 23.9,
        temperature_c: 36.7,
        blood_pressure: {
          systolic: 128,
          diastolic: 82
        },
        heart_rate: 72,
        respiratory_rate: 16
      },
      medical_history: 'No significant past medical history. Family history of cardiovascular disease.'
    };
    
    // Insert EHR data
    const { error: ehrError } = await supabase
      .from('electronic_health_records')
      .upsert(ehrData);
      
    if (ehrError) {
      throw new Error(`Error creating health record: ${ehrError.message}`);
    }
    
    // Create wearable data (last 7 days)
    const wearableData = [];
    const now = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Create some variation in the data
      const heartRateVariation = Math.floor(Math.random() * 10) - 5;
      const stepsVariation = Math.floor(Math.random() * 2000) - 1000;
      const sleepVariation = Math.floor(Math.random() * 60) - 30;
      
      wearableData.push({
        patient_id: patientId,
        device_type: 'smartwatch',
        device_id: 'DEMO-WATCH-123',
        recorded_at: date.toISOString(),
        heart_rate: 68 + heartRateVariation,
        blood_pressure: {
          systolic: 120 + heartRateVariation,
          diastolic: 80 + Math.floor(heartRateVariation / 2)
        },
        blood_oxygen: 98 + (Math.random() > 0.5 ? -1 : 0),
        steps_count: 7500 + stepsVariation,
        sleep_data: {
          total_minutes: 420 + sleepVariation,
          deep_sleep_minutes: 120 + Math.floor(sleepVariation / 3),
          rem_sleep_minutes: 90 + Math.floor(sleepVariation / 3),
          light_sleep_minutes: 210 + Math.floor(sleepVariation / 3)
        },
        temperature: 36.6 + (Math.random() * 0.4 - 0.2)
      });
    }
    
    // Insert wearable data
    for (const data of wearableData) {
      const { error: wearableError } = await supabase
        .from('wearable_data')
        .upsert(data);
        
      if (wearableError) {
        console.error(`Error creating wearable data: ${wearableError.message}`);
        // Continue with other records
      }
    }
    
    // Create genomic data
    const genomicData = {
      patient_id: patientId,
      sample_id: 'DEMO-DNA-123',
      collection_date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
      sequence_type: 'dna',
      sequence_data: null, // Would contain actual sequence data in a real app
      analysis_results: {
        ancestry: {
          european: 65,
          east_asian: 20,
          african: 10,
          other: 5
        },
        traits: [
          { name: 'Lactose tolerance', status: 'positive' },
          { name: 'Caffeine metabolism', status: 'normal' }
        ]
      },
      biomarkers: {
        metabolic: {
          insulin_sensitivity: 'normal',
          vitamin_d: 'normal'
        },
        cardiovascular: {
          ldl_response: 'normal',
          hdl_levels: 'optimal'
        },
        riskMarkers: []
      }
    };
    
    // Insert genomic data
    const { error: genomicError } = await supabase
      .from('genomic_data')
      .upsert(genomicData);
      
    if (genomicError) {
      throw new Error(`Error creating genomic data: ${genomicError.message}`);
    }
    
    // Create medical image data
    const medicalImageData = {
      patient_id: patientId,
      image_type: 'xray',
      image_date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
      image_url: 'https://via.placeholder.com/500x500?text=Demo+X-Ray+Image',
      body_part: 'chest',
      radiologist_notes: 'Normal chest X-ray. No significant findings.',
      ai_analysis_results: {
        findings: 'No abnormalities detected',
        confidence: 0.92,
        processing_time_ms: 1243
      }
    };
    
    // Insert medical image data
    const { error: imageError } = await supabase
      .from('medical_images')
      .upsert(medicalImageData);
      
    if (imageError) {
      throw new Error(`Error creating medical image data: ${imageError.message}`);
    }
    
    console.log('Demo data seeded successfully');
    return {
      success: true,
      patientId
    };
    
  } catch (error) {
    console.error('Error seeding demo data:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const useDemoData = () => {
  const { toast } = useToast();
  
  const loadDemoData = async () => {
    try {
      toast({
        title: 'Loading Demo Data',
        description: 'Please wait while we prepare your demonstration data...',
      });
      
      const result = await seedDemoData();
      
      if (result.success) {
        toast({
          title: 'Demo Data Loaded',
          description: 'Sample patient data has been added to your account',
          variant: 'success',
        });
        return result.patientId;
      } else {
        toast({
          title: 'Error Loading Demo Data',
          description: result.error || 'An unknown error occurred',
          variant: 'destructive',
        });
        return null;
      }
    } catch (error) {
      console.error('Error in loadDemoData:', error);
      toast({
        title: 'Error Loading Demo Data',
        description: error.message || 'An unknown error occurred',
        variant: 'destructive',
      });
      return null;
    }
  };
  
  return { loadDemoData };
};
