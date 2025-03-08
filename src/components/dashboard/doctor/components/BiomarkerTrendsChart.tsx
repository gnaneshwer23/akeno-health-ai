
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

interface BiomarkerTrend {
  name: string;
  value: number;
  date: string;
  min: number;
  max: number;
  unit: string;
}

interface BiomarkerData {
  id: string;
  name: string;
  unit: string;
  description: string;
  category: string;
  trends: BiomarkerTrend[];
  color: string;
}

interface BiomarkerTrendsChartProps {
  biomarker: BiomarkerData;
  height?: number;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as BiomarkerTrend;
    
    return (
      <div className="bg-white p-3 border shadow-sm rounded-md">
        <p className="font-medium">{data.date}</p>
        <p className="text-sm">{`Value: ${data.value} ${data.unit}`}</p>
        <p className="text-xs text-gray-500">{`Normal range: ${data.min}-${data.max} ${data.unit}`}</p>
      </div>
    );
  }

  return null;
};

const BiomarkerTrendsChart: React.FC<BiomarkerTrendsChartProps> = ({ biomarker, height = 300 }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">{biomarker.name}</CardTitle>
            <CardDescription>{biomarker.description}</CardDescription>
          </div>
          <div className="px-2 py-1 rounded-md bg-slate-100 text-xs font-medium">
            {biomarker.category}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={biomarker.trends}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }} 
              tickMargin={10}
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              tickMargin={10}
              domain={[
                (dataMin: number) => Math.max(0, dataMin * 0.8),
                (dataMax: number) => dataMax * 1.2
              ]}
              label={{ 
                value: biomarker.unit, 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fontSize: 12 }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" height={36} />
            <Line
              type="monotone"
              dataKey="value"
              name={biomarker.name}
              stroke={biomarker.color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="min"
              name="Min Range"
              stroke="#e2e8f0"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="max"
              name="Max Range"
              stroke="#e2e8f0"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BiomarkerTrendsChart;
