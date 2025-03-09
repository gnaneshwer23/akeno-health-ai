
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

export async function handleWearableData(supabase, userId, data) {
  // Get patient ID
  const { data: patient } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', userId)
    .single();
  
  if (!patient) {
    throw new Error('Patient profile not found. Please create a patient profile first.');
  }
  
  // Create new wearable data record
  const { data: wearableData, error } = await supabase
    .from('wearable_data')
    .insert({
      patient_id: patient.id,
      device_type: data.device_type,
      device_id: data.device_id,
      recorded_at: data.recorded_at || new Date(),
      heart_rate: data.heart_rate,
      blood_pressure: data.blood_pressure,
      blood_oxygen: data.blood_oxygen,
      steps_count: data.steps_count,
      sleep_data: data.sleep_data,
      temperature: data.temperature,
      additional_metrics: data.additional_metrics
    })
    .select()
    .single();
  
  if (error) throw error;
  return { message: 'Wearable data created', wearableData };
}
