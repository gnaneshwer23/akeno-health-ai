
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Search, Beaker, FileText } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import ResearchInsight from '../components/ResearchInsight';
import { useToast } from '@/hooks/use-toast';

interface ResearchFinding {
  id: string;
  title: string;
  finding_type: string;
  summary: string;
  date_published: string;
  reference_url: string | null;
  relevance_score: number | null;
  specialization: string | null;
}

const ResearchFindingsSection = () => {
  const [findings, setFindings] = useState<ResearchFinding[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    fetchResearchFindings();
    
    // Listen for real-time updates
    const channel = supabase
      .channel('research_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'research_findings'
        },
        () => {
          fetchResearchFindings();
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchResearchFindings = async () => {
    try {
      setIsLoading(true);
      
      let query = supabase
        .from('research_findings')
        .select('*')
        .order('date_published', { ascending: false });
      
      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,summary.ilike.%${searchTerm}%,specialization.ilike.%${searchTerm}%`);
      }
      
      const { data, error } = await query.limit(10);
      
      if (error) {
        throw error;
      }
      
      setFindings(data || []);
    } catch (error) {
      console.error('Error fetching research findings:', error);
      toast({
        title: 'Error fetching research data',
        description: 'Unable to load the latest research findings.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchResearchFindings();
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>Medical Research Findings</CardTitle>
            <CardDescription>Latest research data relevant to your practice</CardDescription>
          </div>
          
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search findings..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" variant="outline" size="sm">Search</Button>
          </form>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-4">Loading research findings...</div>
          ) : findings.length > 0 ? (
            findings.map((finding) => (
              <ResearchInsight
                key={finding.id}
                relevance={finding.title}
                content={finding.summary}
                link={finding.reference_url || '#'}
                linkText="View research details"
                color={
                  finding.finding_type === 'clinical_trial' ? 'border-green-500' :
                  finding.finding_type === 'case_study' ? 'border-blue-500' :
                  finding.finding_type === 'systematic_review' ? 'border-purple-500' :
                  'border-gray-500'
                }
                score={finding.relevance_score || undefined}
                specialty={finding.specialization || undefined}
                date={formatDate(finding.date_published)}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-2">
                {searchTerm ? <FileText className="h-12 w-12 text-gray-300" /> : <Beaker className="h-12 w-12 text-gray-300" />}
              </div>
              <h3 className="text-lg font-medium text-gray-500">
                {searchTerm ? 'No matching research findings' : 'No research findings available'}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {searchTerm ? 'Try adjusting your search terms' : 'Research findings will appear here as they become available'}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchFindingsSection;
