
import React, { useState } from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { simulatedDataService } from '@/services/simulatedDataService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Users, Activity, DNA, Image, FileText, Loader2 } from 'lucide-react';

const SimulatedDataManager = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedingStatus, setSeedingStatus] = useState<string>('');
  const { toast } = useToast();

  const handleSeedData = async () => {
    setIsSeeding(true);
    setSeedingStatus('Initializing data seeding...');
    
    try {
      const result = await simulatedDataService.seedAllData();
      
      if (result.success) {
        toast({
          title: "Data Seeded Successfully",
          description: "Simulated healthcare data has been created and is ready for use.",
        });
        setSeedingStatus('Data seeding completed successfully!');
      } else {
        throw new Error(result.error || 'Unknown error occurred');
      }
    } catch (error: any) {
      console.error('Error seeding data:', error);
      toast({
        title: "Seeding Failed",
        description: error.message || "Failed to create simulated data. Please try again.",
        variant: "destructive",
      });
      setSeedingStatus(`Error: ${error.message}`);
    } finally {
      setIsSeeding(false);
    }
  };

  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Patient Profiles",
      description: "Simulated patient demographics and contact information"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Electronic Health Records",
      description: "Medical history, diagnoses, medications, and vital signs"
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Wearable Device Data",
      description: "Heart rate, blood pressure, steps, sleep patterns (30 days)"
    },
    {
      icon: <DNA className="h-5 w-5" />,
      title: "Genomic Data",
      description: "DNA sequences, variants, and biomarker analysis"
    },
    {
      icon: <Image className="h-5 w-5" />,
      title: "Medical Images",
      description: "Simulated X-rays, MRIs with AI analysis results"
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Research Findings",
      description: "Scientific publications and study results"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-6 w-6 text-health-primary" />
            Simulated Data Manager
          </CardTitle>
          <CardDescription>
            Generate realistic healthcare data to demonstrate the platform's capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <div className="flex-shrink-0 text-health-primary">
                  {type.icon}
                </div>
                <div>
                  <h3 className="font-medium text-sm">{type.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{type.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <div className="flex flex-col space-y-4">
              <CustomButton
                onClick={handleSeedData}
                disabled={isSeeding}
                size="lg"
                className="w-full"
              >
                {isSeeding ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Seeding Data...
                  </>
                ) : (
                  <>
                    <Database className="h-4 w-4 mr-2" />
                    Generate Simulated Data
                  </>
                )}
              </CustomButton>
              
              {seedingStatus && (
                <div className="text-sm text-center p-3 bg-gray-50 rounded-md">
                  {seedingStatus}
                </div>
              )}
            </div>
          </div>

          <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-md">
            <strong>Note:</strong> This will create realistic but fictional healthcare data 
            for demonstration purposes. The data includes patient profiles, medical records, 
            wearable device readings, genomic information, and medical images with AI analysis results.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulatedDataManager;
