
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
    
    // Step 2: Create patient profile - using correct schema
    const { data: patient, error: patientError } = await supabase
      .from('patients')
      .insert({
        user_id: userId,
        first_name: "Demo",
        last_name: "Patient",
        email: email,
        date_of_birth: "1985-07-15",
        gender: "other" as const,
        height_cm: 175,
        weight_kg: 70,
        timezone: "America/New_York"
      })
      .select()
      .single();
    
    if (patientError) throw new Error(patientError.message);
    
    // Step 3: Seed biomarker data instead of EHR (since electronic_health_records doesn't exist)
    const biomarkerData = [
      {
        patient_id: patient.id,
        biomarker_name: "total_cholesterol",
        value: 185,
        unit: "mg/dL",
        measured_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        lab_source: "Quest Diagnostics",
        reference_range_min: 100,
        reference_range_max: 200
      },
      {
        patient_id: patient.id,
        biomarker_name: "hdl_cholesterol",
        value: 58,
        unit: "mg/dL",
        measured_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        lab_source: "Quest Diagnostics",
        reference_range_min: 40,
        reference_range_max: 100
      },
      {
        patient_id: patient.id,
        biomarker_name: "glucose",
        value: 95,
        unit: "mg/dL",
        measured_at: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
        lab_source: "LabCorp",
        reference_range_min: 70,
        reference_range_max: 99
      }
    ];
    
    const { error: biomarkerError } = await supabase
      .from('biomarkers')
      .insert(biomarkerData);
    
    if (biomarkerError) throw new Error(biomarkerError.message);
    
    // Step 4: Seed wearable data - using correct schema
    const today = new Date();
    const wearableData = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      return {
        patient_id: patient.id,
        device_type: "Smartwatch",
        data_type: "daily_summary",
        sync_timestamp: date.toISOString(),
        raw_data: {
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
        },
        processed_metrics: {
          avg_heart_rate: 72,
          max_heart_rate: 145,
          active_minutes: 60 + Math.floor(Math.random() * 120)
        }
      };
    });
    
    const { error: wearableError } = await supabase
      .from('wearable_data')
      .insert(wearableData);
    
    if (wearableError) throw new Error(wearableError.message);
    
    // Step 5: Mock genomic data (since genomic_data table doesn't exist)
    console.log('Mock genomic data created for demo patient:', patient.id);
    
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
          total: 185,
          hdl: 58,
          ldl: 110
        },
        glucose: {
          level: 95
        },
        hemoglobin: 14.2
      },
      genomicData: {
        riskMarkers: ["APOE3/APOE3", "BRCA1-negative", "MTHFR-heterozygous"]
      }
    };
    
    // Call the data processing edge function to generate insights
    try {
      const { data: processedData, error: processingError } = await supabase.functions.invoke(
        'data-processing',
        {
          body: patientData
        }
      );
      
      if (processingError) {
        console.error("Error processing data:", processingError);
        toast("Data processing error", {
          description: "Could not generate health insights for demo data",
        });
      } else {
        console.log("Data processed successfully:", processedData);
        toast("Health insights generated", {
          description: "AI analysis complete for your health data",
        });
      }
    } catch (processingError) {
      console.error("Error calling data processing function:", processingError);
      toast("Demo data created", {
        description: "Demo account created successfully (without AI insights)",
      });
    }
    
    return { success: true, userId, patientId: patient.id };
    
  } catch (error: any) {
    console.error("Error seeding demo data:", error);
    toast("Error creating demo account", {
      description: error.message || "Failed to create demo account",
    });
    throw error;
  }
}
