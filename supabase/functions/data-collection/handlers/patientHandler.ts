
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

export async function handlePatientData(supabase, userId, data) {
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
