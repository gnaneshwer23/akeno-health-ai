
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, AlertTriangle, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BillingAnalyticsSectionProps {
  onActionClick: (action: string) => void;
}

// Mock data
const claimsStatusData = [
  { name: 'Approved', value: 67, color: '#10b981' },
  { name: 'Pending', value: 24, color: '#f59e0b' },
  { name: 'Denied', value: 9, color: '#ef4444' },
];

const revenueData = [
  { month: 'Jan', actual: 320000, projected: 300000 },
  { month: 'Feb', actual: 340000, projected: 325000 },
  { month: 'Mar', actual: 330000, projected: 350000 },
  { month: 'Apr', actual: 365000, projected: 340000 },
  { month: 'May', actual: 350000, projected: 355000 },
  { month: 'Jun', actual: 380000, projected: 360000 },
];

const fraudAlerts = [
  { id: 'F-1001', type: 'Duplicate Billing', patient: 'P-4587', amount: '$1,240', risk: 'High' },
  { id: 'F-1002', type: 'Upcoding', patient: 'P-3214', amount: '$950', risk: 'Medium' },
  { id: 'F-1003', type: 'Unusual Charges', patient: 'P-6728', amount: '$3,600', risk: 'Medium' },
];

const BillingAnalyticsSection: React.FC<BillingAnalyticsSectionProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-health-primary" />
              Automated Billing & Revenue Analytics
            </CardTitle>
            <CardDescription>
              AI-powered billing optimization, fraud detection, and financial forecasting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-4">
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-sm font-medium text-green-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Claims Approved
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">67%</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    5% higher than last month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-sm font-medium text-amber-800">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      Claims Pending
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-800">24%</div>
                  <div className="text-xs text-amber-600 mt-1">
                    Avg processing time: 8.2 days
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-sm font-medium text-red-800">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      Claims Denied
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-800">9%</div>
                  <div className="text-xs text-red-600 mt-1">
                    Top reason: Incomplete documentation
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis 
                    tickFormatter={(value) => `$${value/1000}k`}
                    label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }} 
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Bar 
                    dataKey="actual" 
                    name="Actual Revenue" 
                    fill="#3b82f6" 
                  />
                  <Bar 
                    dataKey="projected" 
                    name="AI Projected" 
                    fill="#10b981" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="outline" onClick={() => onActionClick('View revenue details')}>
                View Detailed Reports
              </Button>
              <Button variant="default" onClick={() => onActionClick('Export financial data')}>
                Export Financial Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Claims Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={claimsStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {claimsStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4" 
              onClick={() => onActionClick('Process pending claims')}
            >
              Process Pending Claims
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              AI Fraud Detection Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {fraudAlerts.map((alert, index) => (
                <div key={index} className="p-2 border rounded-md bg-red-50 border-red-200">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <Badge variant={
                      alert.risk === 'High' ? "destructive" : 
                      alert.risk === 'Medium' ? "default" : "outline"
                    }>
                      {alert.risk}
                    </Badge>
                  </div>
                  <div className="mt-1 flex justify-between text-xs">
                    <span>Patient: {alert.patient}</span>
                    <span>Amount: {alert.amount}</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs" 
                      onClick={() => onActionClick(`Investigate fraud alert ${alert.id}`)}
                    >
                      Investigate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              variant="default" 
              className="w-full mt-4" 
              onClick={() => onActionClick('View all fraud alerts')}
            >
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BillingAnalyticsSection;
