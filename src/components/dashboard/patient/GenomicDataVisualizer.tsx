
import React, { useState, useEffect } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { GenomicDataType } from '@/types/supabase-types';
import { dataCollectionService } from '@/services/dataCollectionService';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Dna, AlertCircle } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const GenomicDataVisualizer: React.FC = () => {
  const [genomicData, setGenomicData] = useState<GenomicDataType[]>([]);
  const [activeView, setActiveView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGenomicData = async () => {
      try {
        setIsLoading(true);
        const data = await dataCollectionService.getGenomicData();
        setGenomicData(data);
      } catch (error) {
        console.error('Error fetching genomic data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenomicData();
  }, []);

  const renderGeneticRiskFactors = () => {
    // This would be calculated from the genomic data
    const riskFactors = [
      { name: 'Alzheimer\'s Disease', risk: 10, category: 'low' },
      { name: 'Type 2 Diabetes', risk: 35, category: 'moderate' },
      { name: 'Breast Cancer', risk: 22, category: 'low' },
      { name: 'Cardiovascular Disease', risk: 45, category: 'moderate' },
      { name: 'Colorectal Cancer', risk: 18, category: 'low' },
    ];

    return (
      <div className="space-y-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={riskFactors}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Risk %', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="risk" name="Genetic Risk Factor">
                {riskFactors.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.risk > 40 ? '#f87171' : entry.risk > 20 ? '#facc15' : '#4ade80'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {riskFactors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between p-2 border rounded-md">
              <span>{factor.name}</span>
              <Badge className={
                factor.category === 'high' ? 'bg-red-100 text-red-800' : 
                factor.category === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-green-100 text-green-800'
              }>
                {factor.category.charAt(0).toUpperCase() + factor.category.slice(1)} Risk
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBiomarkerDistribution = () => {
    // Mock data for biomarker distribution
    const biomarkerData = [
      { name: 'Normal', value: 70 },
      { name: 'Borderline', value: 20 },
      { name: 'Abnormal', value: 10 },
    ];

    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={biomarkerData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {biomarkerData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  if (isLoading) {
    return <Skeleton className="h-[400px] w-full" />;
  }

  if (genomicData.length === 0) {
    return (
      <div className="text-center py-8">
        <Dna className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
        <h3 className="text-lg font-medium mb-2">No Genomic Data Available</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your genetic data hasn't been uploaded yet. Speak with your healthcare provider about genetic testing options.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeView} onValueChange={setActiveView}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Genetic Risk Assessment</TabsTrigger>
          <TabsTrigger value="biomarkers">Biomarker Distribution</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-4">
          <Card>
            <CardContent className="pt-6">
              {renderGeneticRiskFactors()}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="biomarkers" className="pt-4">
          <Card>
            <CardContent className="pt-6">
              {renderBiomarkerDistribution()}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GenomicDataVisualizer;
