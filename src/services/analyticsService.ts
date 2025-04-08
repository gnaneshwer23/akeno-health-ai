
import { supabase } from "@/integrations/supabase/client";
import { dataProcessingService } from "./dataProcessingService";

/**
 * Service for advanced analytics and data visualization
 */
export const analyticsService = {
  /**
   * Get predictive analytics data for a patient
   * @param patientId The ID of the patient
   * @param predictionType Type of prediction to generate
   * @returns Prediction results
   */
  async getPredictiveAnalytics(patientId: string, predictionType: 'readmission' | 'progression' | 'treatment' = 'progression') {
    try {
      // Call the health-risk-api edge function
      const { data, error } = await supabase.functions.invoke('health-risk-api', {
        body: {
          patientId,
          riskType: predictionType === 'progression' ? 'disease' : predictionType,
          includeBiomarkers: true,
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error("Error generating predictive analytics:", error);
      throw error;
    }
  },
  
  /**
   * Get dashboard analytics data
   * @param filters Optional filters for dashboard data
   * @returns Dashboard analytics data
   */
  async getDashboardAnalytics(filters: {
    timeRange?: 'week' | 'month' | 'quarter' | 'year', 
    category?: string,
    patientId?: string
  }) {
    try {
      // Build the query based on filters
      let query = supabase.from('electronic_health_records');
      
      if (filters.patientId) {
        query = query.eq('patient_id', filters.patientId);
      }
      
      // Get aggregated data
      const { data, error } = await query
        .select('*')
        .order('record_date', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      
      // Process and transform the data
      return dataProcessingService.processPatientData({
        records: data,
        analysisType: 'dashboard',
        filters
      });
    } catch (error) {
      console.error("Error generating dashboard analytics:", error);
      throw error;
    }
  },
  
  /**
   * Get population health trends
   * @returns Population health trends data
   */
  async getPopulationHealthTrends() {
    try {
      // This would typically involve more complex aggregation queries
      // For this implementation, we'll simulate with a function call
      const { data, error } = await supabase.functions.invoke('health-risk-api', {
        body: {
          requestType: 'population-health',
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error("Error generating population health trends:", error);
      throw error;
    }
  }
};
