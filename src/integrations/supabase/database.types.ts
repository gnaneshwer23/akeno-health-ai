
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      backup_logs: {
        Row: {
          id: string
          started_at: string
          completed_at: string | null
          backup_size: number | null
          created_by: string | null
          backup_type: string
          backup_status: string
          backup_location: string | null
          error_message: string | null
        }
        Insert: {
          id?: string
          started_at?: string
          completed_at?: string | null
          backup_size?: number | null
          created_by?: string | null
          backup_type: string
          backup_status: string
          backup_location?: string | null
          error_message?: string | null
        }
        Update: {
          id?: string
          started_at?: string
          completed_at?: string | null
          backup_size?: number | null
          created_by?: string | null
          backup_type?: string
          backup_status?: string
          backup_location?: string | null
          error_message?: string | null
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          organization: string | null
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          organization?: string | null
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          organization?: string | null
          message?: string
        }
        Relationships: []
      }
      electronic_health_records: {
        Row: {
          id: string
          patient_id: string
          record_date: string
          physician_notes: string | null
          diagnosis: string[] | null
          medications: string[] | null
          allergies: string[] | null
          vitals: Json | null
          medical_history: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          patient_id: string
          record_date?: string
          physician_notes?: string | null
          diagnosis?: string[] | null
          medications?: string[] | null
          allergies?: string[] | null
          vitals?: Json | null
          medical_history?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          patient_id?: string
          record_date?: string
          physician_notes?: string | null
          diagnosis?: string[] | null
          medications?: string[] | null
          allergies?: string[] | null
          vitals?: Json | null
          medical_history?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "electronic_health_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          }
        ]
      }
      genomic_data: {
        Row: {
          id: string
          patient_id: string
          collection_date: string
          analysis_results: Json | null
          biomarkers: Json | null
          created_at: string
          updated_at: string
          sample_id: string
          sequence_type: string
          sequence_data: string | null
        }
        Insert: {
          id?: string
          patient_id: string
          collection_date: string
          analysis_results?: Json | null
          biomarkers?: Json | null
          created_at?: string
          updated_at?: string
          sample_id: string
          sequence_type: string
          sequence_data?: string | null
        }
        Update: {
          id?: string
          patient_id?: string
          collection_date?: string
          analysis_results?: Json | null
          biomarkers?: Json | null
          created_at?: string
          updated_at?: string
          sample_id?: string
          sequence_type?: string
          sequence_data?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "genomic_data_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          }
        ]
      }
      medical_images: {
        Row: {
          id: string
          patient_id: string
          image_date: string
          ai_analysis_results: Json | null
          created_at: string
          updated_at: string
          image_type: string
          image_url: string | null
          storage_path: string | null
          body_part: string | null
          radiologist_notes: string | null
        }
        Insert: {
          id?: string
          patient_id: string
          image_date: string
          ai_analysis_results?: Json | null
          created_at?: string
          updated_at?: string
          image_type: string
          image_url?: string | null
          storage_path?: string | null
          body_part?: string | null
          radiologist_notes?: string | null
        }
        Update: {
          id?: string
          patient_id?: string
          image_date?: string
          ai_analysis_results?: Json | null
          created_at?: string
          updated_at?: string
          image_type?: string
          image_url?: string | null
          storage_path?: string | null
          body_part?: string | null
          radiologist_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_images_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          }
        ]
      }
      newsletter_subscriptions: {
        Row: {
          id: string
          created_at: string
          email: string
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
        }
        Relationships: []
      }
      patients: {
        Row: {
          id: string
          user_id: string
          date_of_birth: string
          created_at: string
          updated_at: string
          last_name: string
          gender: string | null
          contact_email: string | null
          contact_phone: string | null
          address: string | null
          emergency_contact: string | null
          first_name: string
        }
        Insert: {
          id?: string
          user_id: string
          date_of_birth: string
          created_at?: string
          updated_at?: string
          last_name: string
          gender?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          address?: string | null
          emergency_contact?: string | null
          first_name: string
        }
        Update: {
          id?: string
          user_id?: string
          date_of_birth?: string
          created_at?: string
          updated_at?: string
          last_name?: string
          gender?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          address?: string | null
          emergency_contact?: string | null
          first_name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string | null
          email: string | null
          role: string | null
          profile_image: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          name?: string | null
          email?: string | null
          role?: string | null
          profile_image?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string | null
          email?: string | null
          role?: string | null
          profile_image?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      research_findings: {
        Row: {
          id: string
          user_id: string
          date_published: string
          relevance_score: number | null
          created_at: string
          updated_at: string
          summary: string
          reference_url: string | null
          specialization: string | null
          title: string
          finding_type: string
        }
        Insert: {
          id?: string
          user_id: string
          date_published?: string
          relevance_score?: number | null
          created_at?: string
          updated_at?: string
          summary: string
          reference_url?: string | null
          specialization?: string | null
          title: string
          finding_type: string
        }
        Update: {
          id?: string
          user_id?: string
          date_published?: string
          relevance_score?: number | null
          created_at?: string
          updated_at?: string
          summary?: string
          reference_url?: string | null
          specialization?: string | null
          title?: string
          finding_type?: string
        }
        Relationships: []
      }
      wearable_data: {
        Row: {
          id: string
          patient_id: string
          device_type: string
          device_id: string | null
          recorded_at: string
          heart_rate: number | null
          blood_pressure: Json | null
          blood_oxygen: number | null
          steps_count: number | null
          sleep_data: Json | null
          temperature: number | null
          additional_metrics: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          patient_id: string
          device_type: string
          device_id?: string | null
          recorded_at: string
          heart_rate?: number | null
          blood_pressure?: Json | null
          blood_oxygen?: number | null
          steps_count?: number | null
          sleep_data?: Json | null
          temperature?: number | null
          additional_metrics?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          patient_id?: string
          device_type?: string
          device_id?: string | null
          recorded_at?: string
          heart_rate?: number | null
          blood_pressure?: Json | null
          blood_oxygen?: number | null
          steps_count?: number | null
          sleep_data?: Json | null
          temperature?: number | null
          additional_metrics?: Json | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "wearable_data_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
