
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * Seeds demo data for a new demo user
 */
export async function seedDemoData() {
  try {
    // Step 1: Create a demo user account
    const email = `demo${Math.floor(Math.random() * 10000)}@healthai.demo`;
    const password = "demo1234";
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: "Demo User",
          role: "patient"
        }
      }
    });
    
    if (error) throw new Error(error.message);
    if (!data?.user) throw new Error("Failed to create demo user");
    
    const userId = data.user.id;
    
    // Auto sign in the demo user
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (signInError) throw new Error(signInError.message);
    
    // Step 2: Create patient profile
    const { data: patient, error: patientError } = await supabase
      .from('patients')
      .insert({
        user_id: userId,
        first_name: "Demo",
        last_name: "Patient",
        date_of_birth: "1985-07-15",
        gender: "other",
        contact_email: email,
        contact_phone: "555-123-4567",
        address: "123 Health St, Digital City",
        emergency_contact: "Family Member: 555-987-6543"
      })
      .select()
      .single();
    
    if (patientError) throw new Error(patientError.message);
    
    // Step 3: Seed electronic health records
    const ehrData = [
      {
        patient_id: patient.id,
        record_date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
        physician_notes: "Patient reports occasional headaches and fatigue. Recommended lifestyle modifications and follow-up in 3 months.",
        diagnosis: ["Tension headache", "Fatigue"],
        medications: ["Acetaminophen PRN", "Multivitamin daily"],
        allergies: ["Penicillin"],
        vitals: {
          blood_pressure: { systolic: 128, diastolic: 82 },
          heart_rate: 76,
          temperature: 98.6,
          respiratory_rate: 16,
          oxygen_saturation: 98
        },
        medical_history: "No significant past medical history."
      },
      {
        patient_id: patient.id,
        record_date: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(), // 180 days ago
        physician_notes: "Annual physical examination. All vitals within normal limits. Recommended standard health screenings based on age.",
        diagnosis: ["Routine physical examination"],
        medications: ["Multivitamin daily"],
        allergies: ["Penicillin"],
        vitals: {
          blood_pressure: { systolic: 124, diastolic: 78 },
          heart_rate: 68,
          temperature: 98.4,
          respiratory_rate: 14,
          oxygen_saturation: 99
        },
        medical_history: "No significant past medical history."
      }
    ];
    
    const { error: ehrError } = await supabase
      .from('electronic_health_records')
      .insert(ehrData);
    
    if (ehrError) throw new Error(ehrError.message);
    
    // Step 4: Seed wearable data
    const today = new Date();
    const wearableData = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      return {
        patient_id: patient.id,
        device_type: "Smartwatch",
        device_id: "Demo-Device-123",
        recorded_at: date.toISOString(),
        heart_rate: 60 + Math.floor(Math.random() * 20),
        blood_pressure: { 
          systolic: 115 + Math.floor(Math.random() * 15),
          diastolic: 75 + Math.floor(Math.random() * 10)
        },
        blood_oxygen: 95 + Math.floor(Math.random() * 5),
        steps_count: 7000 + Math.floor(Math.random() * 4000),
        sleep_data: {
          total_duration_minutes: 400 + Math.floor(Math.random() * 120),
          deep_sleep_minutes: 120 + Math.floor(Math.random() * 60),
          rem_sleep_minutes: 90 + Math.floor(Math.random() * 45)
        },
        temperature: 98.4 + (Math.random() * 0.8 - 0.4)
      };
    });
    
    const { error: wearableError } = await supabase
      .from('wearable_data')
      .insert(wearableData);
    
    if (wearableError) throw new Error(wearableError.message);
    
    // Step 5: Seed genomic data
    const genomicData = {
      patient_id: patient.id,
      sample_id: `DEMO-DNA-${Math.floor(Math.random() * 10000)}`,
      collection_date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days ago
      sequence_type: "dna",
      sequence_data: "Demo genome sequence data (abbreviated)",
      analysis_results: {
        ancestry: {
          european: 65,
          east_asian: 20,
          african: 15
        },
        risk_markers: ["APOE3/APOE3", "BRCA1-negative", "MTHFR-heterozygous"],
        carrier_status: {
          cystic_fibrosis: "negative",
          sickle_cell_anemia: "negative",
          tay_sachs: "negative"
        }
      },
      biomarkers: {
        telomere_length: "average",
        metabolic_markers: "normal",
        inflammatory_markers: "slightly_elevated"
      }
    };
    
    const { error: genomicError } = await supabase
      .from('genomic_data')
      .insert(genomicData);
    
    if (genomicError) throw new Error(genomicError.message);
    
    // Process the demo data to generate insights
    const patientData = {
      patientInfo: {
        id: patient.id,
        age: 38,
        gender: "other",
        bmi: 23.5
      },
      vitalSigns: {
        bloodPressure: {
          systolic: 124,
          diastolic: 78
        },
        heartRate: 68,
        temperature: 98.4,
        respiratoryRate: 14,
        oxygenSaturation: 99
      },
      labResults: {
        cholesterol: {
          total: 175,
          hdl: 55,
          ldl: 110
        },
        glucose: {
          level: 92
        },
        hemoglobin: 14.2
      },
      genomicData: {
        riskMarkers: ["APOE3/APOE3", "BRCA1-negative", "MTHFR-heterozygous"]
      }
    };
    
    // Call the data processing edge function to generate insights
    const { data: processedData, error: processingError } = await supabase.functions.invoke(
      'data-processing',
      {
        body: patientData
      }
    );
    
    if (processingError) {
      console.error("Error processing data:", processingError);
      // Fix toast implementation (using direct function call, not jsx properties)
      toast("Data processing error", {
        description: "Could not generate health insights for demo data",
      });
    } else {
      console.log("Data processed successfully:", processedData);
      // Fix toast implementation
      toast("Health insights generated", {
        description: "AI analysis complete for your health data",
      });
    }
    
    return { success: true, userId, patientId: patient.id };
    
  } catch (error) {
    console.error("Error seeding demo data:", error);
    // Fix toast implementation
    toast("Error creating demo account", {
      description: error.message || "Failed to create demo account",
    });
    throw error;
  }
}
