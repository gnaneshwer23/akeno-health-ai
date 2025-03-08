import React, { useEffect, useState } from 'react';
import { Dna, Activity, FileSpreadsheet } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { GenomicDataType } from '@/types/supabase-types';
import { dataCollectionService } from '@/services/dataCollectionService';

const GenomicDataVisualizer = ({ patientId }: { patientId: string }) => {
  const [genomicData, setGenomicData] = useState<GenomicDataType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenomicData = async () => {
      try {
        setLoading(true);
        const data = await dataCollectionService.getGenomicData(patientId);
        setGenomicData(data);
      } catch (err) {
        console.error('Error fetching genomic data:', err);
        setError('Failed to load genomic data');
      } finally {
        setLoading(false);
      }
    };

    fetchGenomicData();
  }, [patientId]);

  if (loading) {
    return <div className="flex justify-center items-center">Loading genomic data...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!genomicData || genomicData.length === 0) {
    return <div className="text-gray-500">No genomic data available for this patient.</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Dna className="h-5 w-5 text-blue-500" />
          Genomic Data
        </CardTitle>
        <CardDescription>Analysis of patient's genetic information</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="space-y-4">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="rawdata">Raw Data</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="space-y-2">
            <h4 className="text-sm font-medium">Key Biomarkers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {genomicData[0].biomarkers &&
                Object.entries(genomicData[0].biomarkers).map(([key, value]) => (
                  <div key={key} className="p-3 rounded-md bg-gray-50">
                    <span className="text-xs font-semibold uppercase text-gray-500">{key}</span>
                    <p className="text-sm">{JSON.stringify(value)}</p>
                  </div>
                ))}
            </div>
            <h4 className="text-sm font-medium mt-4">Analysis Results</h4>
            <p className="text-sm text-muted-foreground">
              {genomicData[0].analysis_results
                ? JSON.stringify(genomicData[0].analysis_results)
                : 'No analysis results available.'}
            </p>
          </TabsContent>
          <TabsContent value="details" className="space-y-2">
            <h4 className="text-sm font-medium">Detailed Genomic Information</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sample ID</TableHead>
                  <TableHead>Collection Date</TableHead>
                  <TableHead>Sequence Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{genomicData[0].sample_id}</TableCell>
                  <TableCell>{new Date(genomicData[0].collection_date).toLocaleDateString()}</TableCell>
                  <TableCell>{genomicData[0].sequence_type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="rawdata">
            <h4 className="text-sm font-medium">Raw Sequence Data</h4>
            <p className="text-sm text-muted-foreground">
              {genomicData[0].sequence_data ? genomicData[0].sequence_data.substring(0, 200) + '...' : 'No raw data available.'}
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GenomicDataVisualizer;
