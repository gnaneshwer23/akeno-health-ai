import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { Activity, Heart } from 'lucide-react';
import { WearableDataType } from '@/types/supabase-types';
import { dataCollectionService } from '@/services/dataCollectionService';

const PatientVitalsChart = ({ patientId }: { patientId: string }) => {
  const [vitalsData, setVitalsData] = useState<WearableDataType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVitalsData = async () => {
      try {
        setLoading(true);
        const data = await dataCollectionService.getWearableData(patientId);
        setVitalsData(data);
      } catch (err) {
        console.error('Error fetching vitals data:', err);
        setError('Failed to load vitals data');
      } finally {
        setLoading(false);
      }
    };

    fetchVitalsData();
  }, [patientId]);

  if (loading) {
    return <Card>
      <CardHeader>
        <CardTitle>Vitals Data</CardTitle>
      </CardHeader>
      <CardContent>
        Loading vitals data...
      </CardContent>
    </Card>;
  }

  if (error) {
    return <Card>
      <CardHeader>
        <CardTitle>Vitals Data</CardTitle>
      </CardHeader>
      <CardContent>
        Error: {error}
      </CardContent>
    </Card>;
  }

  if (!vitalsData || vitalsData.length === 0) {
    return <Card>
      <CardHeader>
        <CardTitle>Vitals Data</CardTitle>
      </CardHeader>
      <CardContent>
        No vitals data available.
      </CardContent>
    </Card>;
  }

  // Format the data for the chart
  const chartData = vitalsData.map(item => ({
    time: new Date(item.recorded_at).toLocaleTimeString(),
    heartRate: item.heart_rate,
    bloodPressureSystolic: item.blood_pressure?.systolic,
    bloodPressureDiastolic: item.blood_pressure?.diastolic,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vitals Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" label={{ value: 'Heart Rate', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Blood Pressure', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="bloodPressureSystolic" stroke="#82ca9d" name="Blood Pressure (Systolic)" />
            <Line yAxisId="right" type="monotone" dataKey="bloodPressureDiastolic" stroke="#ffc658" name="Blood Pressure (Diastolic)" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PatientVitalsChart;
