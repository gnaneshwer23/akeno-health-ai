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
      agent_analyses: {
        Row: {
          agent_type: Database["public"]["Enums"]["agent_type"]
          analysis_data: Json
          confidence_score: number | null
          created_at: string | null
          id: string
          patient_id: string | null
          recommendations: string[] | null
          status: Database["public"]["Enums"]["agent_status"] | null
        }
        Insert: {
          agent_type: Database["public"]["Enums"]["agent_type"]
          analysis_data: Json
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          patient_id?: string | null
          recommendations?: string[] | null
          status?: Database["public"]["Enums"]["agent_status"] | null
        }
        Update: {
          agent_type?: Database["public"]["Enums"]["agent_type"]
          analysis_data?: Json
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          patient_id?: string | null
          recommendations?: string[] | null
          status?: Database["public"]["Enums"]["agent_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_analyses_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      alert_escalation_rules: {
        Row: {
          backup_provider_id: string | null
          created_at: string | null
          escalation_delay_minutes: number | null
          id: string
          is_active: boolean | null
          max_escalation_attempts: number | null
          provider_id: string
          updated_at: string | null
        }
        Insert: {
          backup_provider_id?: string | null
          created_at?: string | null
          escalation_delay_minutes?: number | null
          id?: string
          is_active?: boolean | null
          max_escalation_attempts?: number | null
          provider_id: string
          updated_at?: string | null
        }
        Update: {
          backup_provider_id?: string | null
          created_at?: string | null
          escalation_delay_minutes?: number | null
          id?: string
          is_active?: boolean | null
          max_escalation_attempts?: number | null
          provider_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alert_escalation_rules_backup_provider_id_fkey"
            columns: ["backup_provider_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alert_escalation_rules_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          resource_id: string | null
          resource_type: string | null
          success: boolean | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string | null
          success?: boolean | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string | null
          success?: boolean | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      biomarkers: {
        Row: {
          biomarker_name: string
          created_at: string | null
          id: string
          lab_source: string | null
          measured_at: string
          patient_id: string | null
          reference_range_max: number | null
          reference_range_min: number | null
          unit: string
          value: number
        }
        Insert: {
          biomarker_name: string
          created_at?: string | null
          id?: string
          lab_source?: string | null
          measured_at: string
          patient_id?: string | null
          reference_range_max?: number | null
          reference_range_min?: number | null
          unit: string
          value: number
        }
        Update: {
          biomarker_name?: string
          created_at?: string | null
          id?: string
          lab_source?: string | null
          measured_at?: string
          patient_id?: string | null
          reference_range_max?: number | null
          reference_range_min?: number | null
          unit?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "biomarkers_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      cardiovascular_metrics: {
        Row: {
          created_at: string | null
          device_source: string | null
          diastolic_bp: number | null
          heart_rate: number | null
          hrv_score: number | null
          id: string
          metric_type: string
          patient_id: string | null
          recorded_at: string
          systolic_bp: number | null
        }
        Insert: {
          created_at?: string | null
          device_source?: string | null
          diastolic_bp?: number | null
          heart_rate?: number | null
          hrv_score?: number | null
          id?: string
          metric_type: string
          patient_id?: string | null
          recorded_at: string
          systolic_bp?: number | null
        }
        Update: {
          created_at?: string | null
          device_source?: string | null
          diastolic_bp?: number | null
          heart_rate?: number | null
          hrv_score?: number | null
          id?: string
          metric_type?: string
          patient_id?: string | null
          recorded_at?: string
          systolic_bp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cardiovascular_metrics_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      clinical_notes: {
        Row: {
          content: string
          created_at: string
          id: string
          note_type: string
          patient_id: string
          provider_id: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          note_type: string
          patient_id: string
          provider_id: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          note_type?: string
          patient_id?: string
          provider_id?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_notes_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinical_notes_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      comprehensive_insights: {
        Row: {
          confidence_score: number | null
          domain: string
          expires_at: string | null
          generated_at: string | null
          id: string
          insight_data: Json
          insight_type: string
          patient_id: string | null
          priority_level: string | null
          recommendations: string[] | null
        }
        Insert: {
          confidence_score?: number | null
          domain: string
          expires_at?: string | null
          generated_at?: string | null
          id?: string
          insight_data: Json
          insight_type: string
          patient_id?: string | null
          priority_level?: string | null
          recommendations?: string[] | null
        }
        Update: {
          confidence_score?: number | null
          domain?: string
          expires_at?: string | null
          generated_at?: string | null
          id?: string
          insight_data?: Json
          insight_type?: string
          patient_id?: string | null
          priority_level?: string | null
          recommendations?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "comprehensive_insights_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      consultation_biomarkers: {
        Row: {
          action_items: string | null
          biomarker_id: string | null
          consultation_id: string | null
          created_at: string | null
          discussed: boolean | null
          id: string
          patient_id: string | null
          patient_questions: string | null
          provider_interpretation: string | null
        }
        Insert: {
          action_items?: string | null
          biomarker_id?: string | null
          consultation_id?: string | null
          created_at?: string | null
          discussed?: boolean | null
          id?: string
          patient_id?: string | null
          patient_questions?: string | null
          provider_interpretation?: string | null
        }
        Update: {
          action_items?: string | null
          biomarker_id?: string | null
          consultation_id?: string | null
          created_at?: string | null
          discussed?: boolean | null
          id?: string
          patient_id?: string | null
          patient_questions?: string | null
          provider_interpretation?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consultation_biomarkers_biomarker_id_fkey"
            columns: ["biomarker_id"]
            isOneToOne: false
            referencedRelation: "biomarkers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_biomarkers_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "voice_consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_biomarkers_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      consultation_notes: {
        Row: {
          ai_generated: boolean | null
          clinical_notes: string
          consultation_id: string | null
          created_at: string | null
          id: string
          note_type: string | null
          patient_id: string | null
          provider_id: string | null
          reviewed_by_provider: boolean | null
          updated_at: string | null
        }
        Insert: {
          ai_generated?: boolean | null
          clinical_notes: string
          consultation_id?: string | null
          created_at?: string | null
          id?: string
          note_type?: string | null
          patient_id?: string | null
          provider_id?: string | null
          reviewed_by_provider?: boolean | null
          updated_at?: string | null
        }
        Update: {
          ai_generated?: boolean | null
          clinical_notes?: string
          consultation_id?: string | null
          created_at?: string | null
          id?: string
          note_type?: string | null
          patient_id?: string | null
          provider_id?: string | null
          reviewed_by_provider?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consultation_notes_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "voice_consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_notes_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_notes_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      critical_alert_tracking: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          alert_type: string
          created_at: string | null
          id: string
          lab_result_id: string | null
          notification_method: string[] | null
          outcome: string | null
          patient_id: string | null
          provider_id: string | null
          response_time_minutes: number | null
          severity: string
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type: string
          created_at?: string | null
          id?: string
          lab_result_id?: string | null
          notification_method?: string[] | null
          outcome?: string | null
          patient_id?: string | null
          provider_id?: string | null
          response_time_minutes?: number | null
          severity: string
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type?: string
          created_at?: string | null
          id?: string
          lab_result_id?: string | null
          notification_method?: string[] | null
          outcome?: string | null
          patient_id?: string | null
          provider_id?: string | null
          response_time_minutes?: number | null
          severity?: string
        }
        Relationships: [
          {
            foreignKeyName: "critical_alert_tracking_lab_result_id_fkey"
            columns: ["lab_result_id"]
            isOneToOne: false
            referencedRelation: "lab_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "critical_alert_tracking_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "critical_alert_tracking_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      data_access_logs: {
        Row: {
          access_reason: string | null
          created_at: string | null
          data_type: string
          fields_accessed: string[] | null
          id: string
          ip_address: unknown | null
          patient_id: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          access_reason?: string | null
          created_at?: string | null
          data_type: string
          fields_accessed?: string[] | null
          id?: string
          ip_address?: unknown | null
          patient_id?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          access_reason?: string | null
          created_at?: string | null
          data_type?: string
          fields_accessed?: string[] | null
          id?: string
          ip_address?: unknown | null
          patient_id?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "data_access_logs_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      diabetes_insights: {
        Row: {
          data: Json
          generated_at: string | null
          id: string
          insight_type: string
          patient_id: string | null
        }
        Insert: {
          data: Json
          generated_at?: string | null
          id?: string
          insight_type: string
          patient_id?: string | null
        }
        Update: {
          data?: Json
          generated_at?: string | null
          id?: string
          insight_type?: string
          patient_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diabetes_insights_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      drug_interactions: {
        Row: {
          clinical_significance: string
          created_at: string
          description: string
          id: string
          management: string
          medication_a: string
          medication_b: string
          severity: string
        }
        Insert: {
          clinical_significance: string
          created_at?: string
          description: string
          id?: string
          management: string
          medication_a: string
          medication_b: string
          severity: string
        }
        Update: {
          clinical_significance?: string
          created_at?: string
          description?: string
          id?: string
          management?: string
          medication_a?: string
          medication_b?: string
          severity?: string
        }
        Relationships: []
      }
      early_access_signups: {
        Row: {
          email: string
          id: string
          interest_areas: string[] | null
          name: string | null
          signup_date: string | null
          status: string | null
        }
        Insert: {
          email: string
          id?: string
          interest_areas?: string[] | null
          name?: string | null
          signup_date?: string | null
          status?: string | null
        }
        Update: {
          email?: string
          id?: string
          interest_areas?: string[] | null
          name?: string | null
          signup_date?: string | null
          status?: string | null
        }
        Relationships: []
      }
      ehr_integrations: {
        Row: {
          client_id: string | null
          config: Json | null
          created_at: string | null
          ehr_type: string
          fhir_base_url: string | null
          id: string
          last_sync: string | null
          organization_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          client_id?: string | null
          config?: Json | null
          created_at?: string | null
          ehr_type: string
          fhir_base_url?: string | null
          id?: string
          last_sync?: string | null
          organization_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          client_id?: string | null
          config?: Json | null
          created_at?: string | null
          ehr_type?: string
          fhir_base_url?: string | null
          id?: string
          last_sync?: string | null
          organization_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ehr_integrations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      fhir_subscriptions: {
        Row: {
          created_at: string | null
          criteria: string
          id: string
          integration_id: string | null
          status: string | null
          subscription_id: string
          updated_at: string | null
          webhook_endpoint: string | null
        }
        Insert: {
          created_at?: string | null
          criteria: string
          id?: string
          integration_id?: string | null
          status?: string | null
          subscription_id: string
          updated_at?: string | null
          webhook_endpoint?: string | null
        }
        Update: {
          created_at?: string | null
          criteria?: string
          id?: string
          integration_id?: string | null
          status?: string | null
          subscription_id?: string
          updated_at?: string | null
          webhook_endpoint?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fhir_subscriptions_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "ehr_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      fitness_metrics: {
        Row: {
          activity_type: string
          calories_burned: number | null
          created_at: string | null
          device_source: string | null
          duration_minutes: number | null
          id: string
          intensity_level: string | null
          patient_id: string | null
          performance_data: Json | null
          recorded_at: string
        }
        Insert: {
          activity_type: string
          calories_burned?: number | null
          created_at?: string | null
          device_source?: string | null
          duration_minutes?: number | null
          id?: string
          intensity_level?: string | null
          patient_id?: string | null
          performance_data?: Json | null
          recorded_at: string
        }
        Update: {
          activity_type?: string
          calories_burned?: number | null
          created_at?: string | null
          device_source?: string | null
          duration_minutes?: number | null
          id?: string
          intensity_level?: string | null
          patient_id?: string | null
          performance_data?: Json | null
          recorded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fitness_metrics_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      health_events: {
        Row: {
          biomarker_changes: Json | null
          created_at: string | null
          description: string | null
          event_type: string
          id: string
          occurred_at: string
          patient_id: string | null
          severity: Database["public"]["Enums"]["severity_type"] | null
          title: string
          triggered_by_agent: string | null
        }
        Insert: {
          biomarker_changes?: Json | null
          created_at?: string | null
          description?: string | null
          event_type: string
          id?: string
          occurred_at: string
          patient_id?: string | null
          severity?: Database["public"]["Enums"]["severity_type"] | null
          title: string
          triggered_by_agent?: string | null
        }
        Update: {
          biomarker_changes?: Json | null
          created_at?: string | null
          description?: string | null
          event_type?: string
          id?: string
          occurred_at?: string
          patient_id?: string | null
          severity?: Database["public"]["Enums"]["severity_type"] | null
          title?: string
          triggered_by_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "health_events_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      hl7_messages: {
        Row: {
          control_id: string | null
          error_message: string | null
          id: string
          integration_id: string | null
          message_type: string
          parsed_data: Json | null
          processed_at: string | null
          processing_status: string | null
          raw_message: string | null
          received_at: string | null
        }
        Insert: {
          control_id?: string | null
          error_message?: string | null
          id?: string
          integration_id?: string | null
          message_type: string
          parsed_data?: Json | null
          processed_at?: string | null
          processing_status?: string | null
          raw_message?: string | null
          received_at?: string | null
        }
        Update: {
          control_id?: string | null
          error_message?: string | null
          id?: string
          integration_id?: string | null
          message_type?: string
          parsed_data?: Json | null
          processed_at?: string | null
          processing_status?: string | null
          raw_message?: string | null
          received_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hl7_messages_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "lis_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_status: {
        Row: {
          connection_metadata: Json | null
          created_at: string | null
          id: string
          integration_type: string
          last_sync: string | null
          patient_id: string | null
          provider_name: string
          status: string
          sync_frequency: string | null
          updated_at: string | null
        }
        Insert: {
          connection_metadata?: Json | null
          created_at?: string | null
          id?: string
          integration_type: string
          last_sync?: string | null
          patient_id?: string | null
          provider_name: string
          status?: string
          sync_frequency?: string | null
          updated_at?: string | null
        }
        Update: {
          connection_metadata?: Json | null
          created_at?: string | null
          id?: string
          integration_type?: string
          last_sync?: string | null
          patient_id?: string | null
          provider_name?: string
          status?: string
          sync_frequency?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_status_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      interventions: {
        Row: {
          created_at: string | null
          description: string | null
          dosage: string | null
          end_date: string | null
          frequency: string | null
          id: string
          intervention_type: Database["public"]["Enums"]["intervention_type"]
          name: string
          patient_id: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["intervention_status"] | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          dosage?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          intervention_type: Database["public"]["Enums"]["intervention_type"]
          name: string
          patient_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["intervention_status"] | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          dosage?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          intervention_type?: Database["public"]["Enums"]["intervention_type"]
          name?: string
          patient_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["intervention_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "interventions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      lab_orders: {
        Row: {
          expected_results: string | null
          id: string
          lab_provider: string
          ordered_at: string
          patient_id: string
          priority: string
          provider_id: string
          status: string
          test_names: string[]
        }
        Insert: {
          expected_results?: string | null
          id?: string
          lab_provider: string
          ordered_at?: string
          patient_id: string
          priority?: string
          provider_id: string
          status?: string
          test_names: string[]
        }
        Update: {
          expected_results?: string | null
          id?: string
          lab_provider?: string
          ordered_at?: string
          patient_id?: string
          priority?: string
          provider_id?: string
          status?: string
          test_names?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "lab_orders_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_orders_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      lab_results: {
        Row: {
          abnormal_flag: string | null
          created_at: string | null
          critical_flag: boolean | null
          id: string
          lab_order_id: string | null
          lab_source: string
          patient_id: string | null
          provider_id: string | null
          reference_range: Json | null
          result_date: string
          result_text: string | null
          result_value: number | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          test_name: string
          unit: string | null
        }
        Insert: {
          abnormal_flag?: string | null
          created_at?: string | null
          critical_flag?: boolean | null
          id?: string
          lab_order_id?: string | null
          lab_source: string
          patient_id?: string | null
          provider_id?: string | null
          reference_range?: Json | null
          result_date: string
          result_text?: string | null
          result_value?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          test_name: string
          unit?: string | null
        }
        Update: {
          abnormal_flag?: string | null
          created_at?: string | null
          critical_flag?: boolean | null
          id?: string
          lab_order_id?: string | null
          lab_source?: string
          patient_id?: string | null
          provider_id?: string | null
          reference_range?: Json | null
          result_date?: string
          result_text?: string | null
          result_value?: number | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          test_name?: string
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lab_results_lab_order_id_fkey"
            columns: ["lab_order_id"]
            isOneToOne: false
            referencedRelation: "lab_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_results_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_results_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lab_results_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      lab_test_configs: {
        Row: {
          created_at: string | null
          critical_high: number | null
          critical_low: number | null
          description: string | null
          id: string
          panic_high: number | null
          panic_low: number | null
          test_code: string | null
          test_name: string
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          critical_high?: number | null
          critical_low?: number | null
          description?: string | null
          id?: string
          panic_high?: number | null
          panic_low?: number | null
          test_code?: string | null
          test_name: string
          unit: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          critical_high?: number | null
          critical_low?: number | null
          description?: string | null
          id?: string
          panic_high?: number | null
          panic_low?: number | null
          test_code?: string | null
          test_name?: string
          unit?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      lis_integrations: {
        Row: {
          config: Json | null
          connection_type: string
          created_at: string | null
          endpoint: string | null
          id: string
          last_message: string | null
          lis_type: string
          organization_id: string | null
          port: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          config?: Json | null
          connection_type: string
          created_at?: string | null
          endpoint?: string | null
          id?: string
          last_message?: string | null
          lis_type: string
          organization_id?: string | null
          port?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          config?: Json | null
          connection_type?: string
          created_at?: string | null
          endpoint?: string | null
          id?: string
          last_message?: string | null
          lis_type?: string
          organization_id?: string | null
          port?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lis_integrations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      longevity_markers: {
        Row: {
          created_at: string | null
          id: string
          lab_source: string | null
          marker_type: string
          measured_at: string
          patient_id: string | null
          reference_range: Json | null
          unit: string
          value: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          lab_source?: string | null
          marker_type: string
          measured_at: string
          patient_id?: string | null
          reference_range?: Json | null
          unit: string
          value: number
        }
        Update: {
          created_at?: string | null
          id?: string
          lab_source?: string | null
          marker_type?: string
          measured_at?: string
          patient_id?: string | null
          reference_range?: Json | null
          unit?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "longevity_markers_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      medication_entries: {
        Row: {
          created_at: string
          dosage: string
          end_date: string | null
          frequency: string
          id: string
          medication_name: string
          patient_id: string
          prescriber_id: string | null
          start_date: string
          status: string
        }
        Insert: {
          created_at?: string
          dosage: string
          end_date?: string | null
          frequency: string
          id?: string
          medication_name: string
          patient_id: string
          prescriber_id?: string | null
          start_date: string
          status?: string
        }
        Update: {
          created_at?: string
          dosage?: string
          end_date?: string | null
          frequency?: string
          id?: string
          medication_name?: string
          patient_id?: string
          prescriber_id?: string | null
          start_date?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "medication_entries_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medication_entries_prescriber_id_fkey"
            columns: ["prescriber_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      mental_health_assessments: {
        Row: {
          assessed_at: string
          assessment_data: Json
          assessment_type: string
          created_at: string | null
          id: string
          patient_id: string | null
          score: number
        }
        Insert: {
          assessed_at: string
          assessment_data: Json
          assessment_type: string
          created_at?: string | null
          id?: string
          patient_id?: string | null
          score: number
        }
        Update: {
          assessed_at?: string
          assessment_data?: Json
          assessment_type?: string
          created_at?: string | null
          id?: string
          patient_id?: string | null
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "mental_health_assessments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_settings: {
        Row: {
          created_at: string | null
          enabled: boolean | null
          id: string
          notification_type: string
          priority_threshold: string | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          notification_type: string
          priority_threshold?: string | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          notification_type?: string
          priority_threshold?: string | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      nutrition_entries: {
        Row: {
          created_at: string | null
          food_items: Json
          id: string
          logged_at: string
          macronutrients: Json | null
          meal_type: string
          micronutrients: Json | null
          patient_id: string | null
          total_calories: number | null
        }
        Insert: {
          created_at?: string | null
          food_items: Json
          id?: string
          logged_at: string
          macronutrients?: Json | null
          meal_type: string
          micronutrients?: Json | null
          patient_id?: string | null
          total_calories?: number | null
        }
        Update: {
          created_at?: string | null
          food_items?: Json
          id?: string
          logged_at?: string
          macronutrients?: Json | null
          meal_type?: string
          micronutrients?: Json | null
          patient_id?: string | null
          total_calories?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nutrition_entries_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      oauth_tokens: {
        Row: {
          access_token: string
          created_at: string
          expires_at: string | null
          id: string
          provider: string
          refresh_token: string | null
          scope: string | null
          token_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          expires_at?: string | null
          id?: string
          provider: string
          refresh_token?: string | null
          scope?: string | null
          token_type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          provider?: string
          refresh_token?: string | null
          scope?: string | null
          token_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      patient_provider_access: {
        Row: {
          access_level: string
          consent_signed: boolean
          expires_at: string | null
          granted_at: string
          id: string
          is_active: boolean
          patient_id: string
          permissions: string[]
          provider_id: string
        }
        Insert: {
          access_level: string
          consent_signed?: boolean
          expires_at?: string | null
          granted_at?: string
          id?: string
          is_active?: boolean
          patient_id: string
          permissions?: string[]
          provider_id: string
        }
        Update: {
          access_level?: string
          consent_signed?: boolean
          expires_at?: string | null
          granted_at?: string
          id?: string
          is_active?: boolean
          patient_id?: string
          permissions?: string[]
          provider_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "patient_provider_access_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patient_provider_access_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          email: string
          first_name: string
          gender: Database["public"]["Enums"]["gender_type"] | null
          height_cm: number | null
          id: string
          last_name: string
          timezone: string | null
          updated_at: string | null
          user_id: string | null
          weight_kg: number | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          first_name: string
          gender?: Database["public"]["Enums"]["gender_type"] | null
          height_cm?: number | null
          id?: string
          last_name: string
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight_kg?: number | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string
          gender?: Database["public"]["Enums"]["gender_type"] | null
          height_cm?: number | null
          id?: string
          last_name?: string
          timezone?: string | null
          updated_at?: string | null
          user_id?: string | null
          weight_kg?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          license_number: string | null
          npi_number: string | null
          phone: string | null
          practice_name: string | null
          role: string | null
          specialty: string | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          license_number?: string | null
          npi_number?: string | null
          phone?: string | null
          practice_name?: string | null
          role?: string | null
          specialty?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          license_number?: string | null
          npi_number?: string | null
          phone?: string | null
          practice_name?: string | null
          role?: string | null
          specialty?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      providers: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          license_number: string
          npi_number: string | null
          phone: string
          practice_name: string | null
          specialty: string
          title: string
          updated_at: string
          user_id: string
          verified: boolean
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          license_number: string
          npi_number?: string | null
          phone: string
          practice_name?: string | null
          specialty: string
          title: string
          updated_at?: string
          user_id: string
          verified?: boolean
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          license_number?: string
          npi_number?: string | null
          phone?: string
          practice_name?: string | null
          specialty?: string
          title?: string
          updated_at?: string
          user_id?: string
          verified?: boolean
        }
        Relationships: []
      }
      real_time_vitals: {
        Row: {
          consultation_id: string | null
          created_at: string | null
          device_source: string | null
          id: string
          patient_id: string | null
          recorded_at: string | null
          unit: string | null
          value_numeric: number | null
          value_text: string | null
          vital_type: string
        }
        Insert: {
          consultation_id?: string | null
          created_at?: string | null
          device_source?: string | null
          id?: string
          patient_id?: string | null
          recorded_at?: string | null
          unit?: string | null
          value_numeric?: number | null
          value_text?: string | null
          vital_type: string
        }
        Update: {
          consultation_id?: string | null
          created_at?: string | null
          device_source?: string | null
          id?: string
          patient_id?: string | null
          recorded_at?: string | null
          unit?: string | null
          value_numeric?: number | null
          value_text?: string | null
          vital_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "real_time_vitals_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "voice_consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "real_time_vitals_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      sleep_data: {
        Row: {
          bedtime: string | null
          created_at: string | null
          deep_sleep_duration: number | null
          device_source: string | null
          id: string
          light_sleep_duration: number | null
          patient_id: string | null
          rem_sleep_duration: number | null
          sleep_date: string
          sleep_efficiency: number | null
          sleep_score: number | null
          total_sleep_duration: number | null
          wake_time: string | null
        }
        Insert: {
          bedtime?: string | null
          created_at?: string | null
          deep_sleep_duration?: number | null
          device_source?: string | null
          id?: string
          light_sleep_duration?: number | null
          patient_id?: string | null
          rem_sleep_duration?: number | null
          sleep_date: string
          sleep_efficiency?: number | null
          sleep_score?: number | null
          total_sleep_duration?: number | null
          wake_time?: string | null
        }
        Update: {
          bedtime?: string | null
          created_at?: string | null
          deep_sleep_duration?: number | null
          device_source?: string | null
          id?: string
          light_sleep_duration?: number | null
          patient_id?: string | null
          rem_sleep_duration?: number | null
          sleep_date?: string
          sleep_efficiency?: number | null
          sleep_score?: number | null
          total_sleep_duration?: number | null
          wake_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sleep_data_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      voice_consultations: {
        Row: {
          consultation_date: string | null
          consultation_type: string | null
          created_at: string | null
          duration_minutes: number | null
          id: string
          patient_id: string | null
          provider_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          consultation_date?: string | null
          consultation_type?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          patient_id?: string | null
          provider_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          consultation_date?: string | null
          consultation_type?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          patient_id?: string | null
          provider_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_consultations_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "voice_consultations_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      voice_transcripts: {
        Row: {
          confidence_score: number | null
          consultation_id: string | null
          created_at: string | null
          id: string
          is_final: boolean | null
          speaker_type: string
          timestamp_offset: number | null
          transcript_text: string
        }
        Insert: {
          confidence_score?: number | null
          consultation_id?: string | null
          created_at?: string | null
          id?: string
          is_final?: boolean | null
          speaker_type: string
          timestamp_offset?: number | null
          transcript_text: string
        }
        Update: {
          confidence_score?: number | null
          consultation_id?: string | null
          created_at?: string | null
          id?: string
          is_final?: boolean | null
          speaker_type?: string
          timestamp_offset?: number | null
          transcript_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "voice_transcripts_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "voice_consultations"
            referencedColumns: ["id"]
          },
        ]
      }
      wearable_data: {
        Row: {
          created_at: string | null
          data_type: string
          device_type: string
          id: string
          patient_id: string | null
          processed_metrics: Json | null
          raw_data: Json
          sync_timestamp: string
        }
        Insert: {
          created_at?: string | null
          data_type: string
          device_type: string
          id?: string
          patient_id?: string | null
          processed_metrics?: Json | null
          raw_data: Json
          sync_timestamp: string
        }
        Update: {
          created_at?: string | null
          data_type?: string
          device_type?: string
          id?: string
          patient_id?: string | null
          processed_metrics?: Json | null
          raw_data?: Json
          sync_timestamp?: string
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
      check_critical_lab_value: {
        Args: { test_name_param: string; result_value_param: number }
        Returns: string
      }
      escalate_unacknowledged_alerts: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      access_level: "read" | "write" | "full"
      agent_status: "analyzing" | "monitoring" | "alert" | "idle"
      agent_type:
        | "longevity"
        | "immune"
        | "cardio_metabolic"
        | "brain"
        | "bone"
        | "muscle"
      gender_type: "male" | "female" | "other"
      intervention_status: "active" | "paused" | "completed" | "discontinued"
      intervention_type: "supplement" | "lifestyle" | "treatment" | "protocol"
      severity_type: "low" | "medium" | "high" | "critical"
      trial_status:
        | "screening"
        | "enrolled"
        | "active"
        | "completed"
        | "withdrawn"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      access_level: ["read", "write", "full"],
      agent_status: ["analyzing", "monitoring", "alert", "idle"],
      agent_type: [
        "longevity",
        "immune",
        "cardio_metabolic",
        "brain",
        "bone",
        "muscle",
      ],
      gender_type: ["male", "female", "other"],
      intervention_status: ["active", "paused", "completed", "discontinued"],
      intervention_type: ["supplement", "lifestyle", "treatment", "protocol"],
      severity_type: ["low", "medium", "high", "critical"],
      trial_status: [
        "screening",
        "enrolled",
        "active",
        "completed",
        "withdrawn",
      ],
    },
  },
} as const
