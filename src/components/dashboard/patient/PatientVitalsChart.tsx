
import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataCollectionService } from '@/services/dataCollectionService';
import { Heart, Activity, Droplet, Thermometer } from 'lucide-react';
import { WearableDataType } from '@/types/supabase-types';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

const VitalsHistoryChart: React.FC = () => {
  const [vitalType, setVitalType] = useState('heart_rate');
  const [vitalData, setVitalData] = useState<WearableDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVitalsData = async () => {
      try {
        setIsLoading(true);
        const data = await dataCollectionService.getWearableData();
        setVitalData(data);
      } catch (error) {
        console.error('Error fetching vitals data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVitalsData();
  }, []);

  const renderVitalsData = () => {
    if (vitalData.length === 0) {
      return [];
    }

    // Transform data for charts
    return vitalData.map(entry => {
      let value = null;
      
      switch (vitalType) {
        case 'heart_rate':
          value = entry.heart_rate;
          break;
        case 'blood_oxygen':
          value = entry.blood_oxygen;
          break;
        case 'temperature':
          value = entry.temperature;
          break;
        case 'steps_count':
          value = entry.steps_count;
          break;
        default:
          value = null;
      }
      
      return {
        date: format(new Date(entry.recorded_at), 'MMM dd, HH:mm'),
        value: value
      };
    }).filter(item => item.value !== null);
  };

  const getYAxisLabel = () => {
    switch (vitalType) {
      case 'heart_rate':
        return 'BPM';
      case 'blood_oxygen':
        return '%';
      case 'temperature':
        return '°C';
      case 'steps_count':
        return 'Steps';
      default:
        return '';
    }
  };

  const getLineColor = () => {
    switch (vitalType) {
      case 'heart_rate':
        return '#ef4444';
      case 'blood_oxygen':
        return '#3b82f6';
      case 'temperature':
        return '#f97316';
      case 'steps_count':
        return '#10b981';
      default:
        return '#6366f1';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-[300px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs value={vitalType} onValueChange={setVitalType}>
        <TabsList>
          <TabsTrigger value="heart_rate" className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            Heart Rate
          </TabsTrigger>
          <TabsTrigger value="blood_oxygen" className="flex items-center gap-2">
            <Droplet className="h-4 w-4 text-blue-500" />
            Blood Oxygen
          </TabsTrigger>
          <TabsTrigger value="temperature" className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            Temperature
          </TabsTrigger>
          <TabsTrigger value="steps_count" className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-green-500" />
            Steps
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardContent className="pt-6">
          <div className="h-[300px]">
            {vitalData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={renderVitalsData()}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }} 
                    tickMargin={10} 
                  />
                  <YAxis 
                    label={{ 
                      value: getYAxisLabel(), 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }} 
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name={vitalType.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    stroke={getLineColor()}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-muted-foreground">No vital data available for this period</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VitalsHistoryChart;
