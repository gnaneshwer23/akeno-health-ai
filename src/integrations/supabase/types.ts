export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      backup_logs: {
        Row: {
          backup_location: string | null
          backup_size: number | null
          backup_status: string
          backup_type: string
          completed_at: string | null
          created_by: string | null
          error_message: string | null
          id: string
          started_at: string
        }
        Insert: {
          backup_location?: string | null
          backup_size?: number | null
          backup_status: string
          backup_type: string
          completed_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: string
          started_at?: string
        }
        Update: {
          backup_location?: string | null
          backup_size?: number | null
          backup_status?: string
          backup_type?: string
          completed_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: string
          started_at?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          id: string
          sender: string
          session_id: string
          timestamp: string
          user_id: string
        }
        Insert: {
          content: string
          id?: string
          sender: string
          session_id: string
          timestamp?: string
          user_id: string
        }
        Update: {
          content?: string
          id?: string
          sender?: string
          session_id?: string
          timestamp?: string
          user_id?: string
        }
        Relationships: []
      }
      electronic_health_records: {
        Row: {
          allergies: string[] | null
          created_at: string
          diagnosis: string[] | null
          id: string
          medical_history: string | null
          medications: string[] | null
          patient_id: string
          physician_notes: string | null
          record_date: string
          updated_at: string
          vitals: Json | null
        }
        Insert: {
          allergies?: string[] | null
          created_at?: string
          diagnosis?: string[] | null
          id?: string
          medical_history?: string | null
          medications?: string[] | null
          patient_id: string
          physician_notes?: string | null
          record_date?: string
          updated_at?: string
          vitals?: Json | null
        }
        Update: {
          allergies?: string[] | null
          created_at?: string
          diagnosis?: string[] | null
          id?: string
          medical_history?: string | null
          medications?: string[] | null
          patient_id?: string
          physician_notes?: string | null
          record_date?: string
          updated_at?: string
          vitals?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "electronic_health_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      genomic_data: {
        Row: {
          analysis_results: Json | null
          biomarkers: Json | null
          collection_date: string
          created_at: string
          id: string
          patient_id: string
          sample_id: string
          sequence_data: string | null
          sequence_type: string
          updated_at: string
        }
        Insert: {
          analysis_results?: Json | null
          biomarkers?: Json | null
          collection_date: string
          created_at?: string
          id?: string
          patient_id: string
          sample_id: string
          sequence_data?: string | null
          sequence_type: string
          updated_at?: string
        }
        Update: {
          analysis_results?: Json | null
          biomarkers?: Json | null
          collection_date?: string
          created_at?: string
          id?: string
          patient_id?: string
          sample_id?: string
          sequence_data?: string | null
          sequence_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "genomic_data_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_images: {
        Row: {
          ai_analysis_results: Json | null
          body_part: string | null
          created_at: string
          id: string
          image_date: string
          image_type: string
          image_url: string | null
          patient_id: string
          radiologist_notes: string | null
          storage_path: string | null
          updated_at: string
        }
        Insert: {
          ai_analysis_results?: Json | null
          body_part?: string | null
          created_at?: string
          id?: string
          image_date: string
          image_type: string
          image_url?: string | null
          patient_id: string
          radiologist_notes?: string | null
          storage_path?: string | null
          updated_at?: string
        }
        Update: {
          ai_analysis_results?: Json | null
          body_part?: string | null
          created_at?: string
          id?: string
          image_date?: string
          image_type?: string
          image_url?: string | null
          patient_id?: string
          radiologist_notes?: string | null
          storage_path?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "medical_images_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      patients: {
        Row: {
          address: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          date_of_birth: string
          emergency_contact: string | null
          first_name: string
          gender: string | null
          id: string
          last_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          date_of_birth: string
          emergency_contact?: string | null
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          date_of_birth?: string
          emergency_contact?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          profile_image: string | null
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          profile_image?: string | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          profile_image?: string | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      research_findings: {
        Row: {
          created_at: string
          date_published: string
          finding_type: string
          id: string
          reference_url: string | null
          relevance_score: number | null
          specialization: string | null
          summary: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_published?: string
          finding_type: string
          id?: string
          reference_url?: string | null
          relevance_score?: number | null
          specialization?: string | null
          summary: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_published?: string
          finding_type?: string
          id?: string
          reference_url?: string | null
          relevance_score?: number | null
          specialization?: string | null
          summary?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wearable_data: {
        Row: {
          additional_metrics: Json | null
          blood_oxygen: number | null
          blood_pressure: Json | null
          created_at: string
          device_id: string | null
          device_type: string
          heart_rate: number | null
          id: string
          patient_id: string
          recorded_at: string
          sleep_data: Json | null
          steps_count: number | null
          temperature: number | null
        }
        Insert: {
          additional_metrics?: Json | null
          blood_oxygen?: number | null
          blood_pressure?: Json | null
          created_at?: string
          device_id?: string | null
          device_type: string
          heart_rate?: number | null
          id?: string
          patient_id: string
          recorded_at: string
          sleep_data?: Json | null
          steps_count?: number | null
          temperature?: number | null
        }
        Update: {
          additional_metrics?: Json | null
          blood_oxygen?: number | null
          blood_pressure?: Json | null
          created_at?: string
          device_id?: string | null
          device_type?: string
          heart_rate?: number | null
          id?: string
          patient_id?: string
          recorded_at?: string
          sleep_data?: Json | null
          steps_count?: number | null
          temperature?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "wearable_data_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      user_has_patient_access: {
        Args: {
          patient_uuid: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
