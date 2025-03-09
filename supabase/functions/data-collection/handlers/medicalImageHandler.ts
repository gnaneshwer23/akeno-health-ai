
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

export async function handleMedicalImageData(supabase, userId, data) {
  // Get patient ID
  const { data: patient } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', userId)
    .single();
  
  if (!patient) {
    throw new Error('Patient profile not found. Please create a patient profile first.');
  }
  
  // Create new medical image record
  const { data: medicalImage, error } = await supabase
    .from('medical_images')
    .insert({
      patient_id: patient.id,
      image_type: data.image_type,
      image_date: data.image_date || new Date(),
      image_url: data.image_url,
      storage_path: data.storage_path,
      body_part: data.body_part,
      radiologist_notes: data.radiologist_notes,
      ai_analysis_results: data.ai_analysis_results
    })
    .select()
    .single();
  
  if (error) throw error;
  return { message: 'Medical image data created', medicalImage };
}
