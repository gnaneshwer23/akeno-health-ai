
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

export async function handleEHRData(supabase, userId, data) {
  // Get patient ID
  const { data: patient } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', userId)
    .single();
  
  if (!patient) {
    throw new Error('Patient profile not found. Please create a patient profile first.');
  }
  
  // Create new EHR record
  const { data: ehr, error } = await supabase
    .from('electronic_health_records')
    .insert({
      patient_id: patient.id,
      record_date: data.record_date || new Date(),
      physician_notes: data.physician_notes,
      diagnosis: data.diagnosis,
      medications: data.medications,
      allergies: data.allergies,
      vitals: data.vitals,
      medical_history: data.medical_history
    })
    .select()
    .single();
  
  if (error) throw error;
  return { message: 'Electronic health record created', ehr };
}
