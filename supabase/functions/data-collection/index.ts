
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

// Define CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get JWT token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the JWT token and get the user
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized', details: userError }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Parse the request to get the data source and payload
    const { source, data } = await req.json();
    
    console.log(`Processing ${source} data for user ${user.id}:`, data);

    // Process data based on source
    let result;
    switch (source) {
      case 'patient':
        result = await handlePatientData(supabase, user.id, data);
        break;
      case 'ehr':
        result = await handleEHRData(supabase, user.id, data);
        break;
      case 'wearable':
        result = await handleWearableData(supabase, user.id, data);
        break;
      case 'genomic':
        result = await handleGenomicData(supabase, user.id, data);
        break;
      case 'medical_image':
        result = await handleMedicalImageData(supabase, user.id, data);
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid data source' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
    
    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

// Handler functions for each data type
async function handlePatientData(supabase, userId, data) {
  // Check if patient record exists
  const { data: existingPatient } = await supabase
    .from('patients')
    .select('id')
    .eq('user_id', userId)
    .single();
  
  if (existingPatient) {
    // Update existing patient
    const { data: patient, error } = await supabase
      .from('patients')
      .update({
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        contact_email: data.contact_email,
        contact_phone: data.contact_phone,
        address: data.address,
        emergency_contact: data.emergency_contact,
        updated_at: new Date()
      })
      .eq('id', existingPatient.id)
      .select()
      .single();
    
    if (error) throw error;
    return { message: 'Patient data updated', patient };
  } else {
    // Create new patient
    const { data: patient, error } = await supabase
      .from('patients')
      .insert({
        user_id: userId,
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        contact_email: data.contact_email,
        contact_phone: data.contact_phone,
        address: data.address,
        emergency_contact: data.emergency_contact
      })
      .select()
      .single();
    
    if (error) throw error;
    return { message: 'Patient data created', patient };
  }
}

async function handleEHRData(supabase, userId, data) {
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

async function handleWearableData(supabase, userId, data) {
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

async function handleGenomicData(supabase, userId, data) {
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

async function handleMedicalImageData(supabase, userId, data) {
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
