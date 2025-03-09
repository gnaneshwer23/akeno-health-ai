
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

export async function handleGenomicData(supabase, userId, data) {
  // Get patient ID
  const { data: patient } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', userId)
    .single();
  
  if (!patient) {
    throw new Error('Patient profile not found. Please create a patient profile first.');
  }
  
  // Create new genomic data record
  const { data: genomicData, error } = await supabase
    .from('genomic_data')
    .insert({
      patient_id: patient.id,
      sample_id: data.sample_id,
      collection_date: data.collection_date || new Date(),
      sequence_type: data.sequence_type,
      sequence_data: data.sequence_data,
      analysis_results: data.analysis_results,
      biomarkers: data.biomarkers
    })
    .select()
    .single();
  
  if (error) throw error;
  return { message: 'Genomic data created', genomicData };
}
