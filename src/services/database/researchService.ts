
import { supabase } from "@/integrations/supabase/client";

// Research findings interface
export interface ResearchFinding {
  id: string;
  user_id: string;
  title: string;
  finding_type: string;
  summary: string;
  date_published: string;
  reference_url: string | null;
  relevance_score: number | null;
  specialization: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Service for handling research findings database operations
 */
export const researchService = {
  /**
   * Fetch research findings with optional filtering
   */
  async getResearchFindings({
    specialization,
    findingType,
    relevanceMinimum = 0,
    limit = 10,
    searchTerm
  }: {
    specialization?: string;
    findingType?: string;
    relevanceMinimum?: number;
    limit?: number;
    searchTerm?: string;
  } = {}): Promise<ResearchFinding[]> {
    try {
      let query = supabase
        .from('research_findings')
        .select('*')
        .gte('relevance_score', relevanceMinimum)
        .order('date_published', { ascending: false });
      
      if (specialization) {
        query = query.eq('specialization', specialization);
      }
      
      if (findingType) {
        query = query.eq('finding_type', findingType);
      }
      
      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,summary.ilike.%${searchTerm}%`);
      }
      
      const { data, error } = await query.limit(limit);
      
      if (error) {
        console.error('Error fetching research findings:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error in getResearchFindings:', error);
      return [];
    }
  },

  /**
   * Add a new research finding
   */
  async addResearchFinding(finding: Omit<ResearchFinding, 'id' | 'created_at' | 'updated_at'>): Promise<ResearchFinding | null> {
    try {
      const { data, error } = await supabase
        .from('research_findings')
        .insert(finding)
        .select()
        .single();
      
      if (error) {
        console.error('Error adding research finding:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error in addResearchFinding:', error);
      return null;
    }
  }
};
