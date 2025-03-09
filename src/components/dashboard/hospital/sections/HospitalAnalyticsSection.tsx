
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, ArrowUpRight, ArrowDownRight, BarChart3, Dna, Microscope, FileCheck, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface HospitalAnalyticsSectionProps {
  onActionClick: (action: string) => void;
}

// Mock data
const qualityMetricsData = [
  { name: 'Jan', mortality: 1.8, readmission: 4.2, infection: 0.8 },
  { name: 'Feb', mortality: 1.9, readmission: 4.5, infection: 0.7 },
  { name: 'Mar', mortality: 1.7, readmission: 4.0, infection: 0.5 },
  { name: 'Apr', mortality: 1.6, readmission: 3.8, infection: 0.6 },
  { name: 'May', mortality: 1.5, readmission: 3.5, infection: 0.4 },
  { name: 'Jun', mortality: 1.4, readmission: 3.3, infection: 0.3 },
];

const infectionRiskData = [
  { name: 'Med/Surg', value: 35, color: '#10b981' },
  { name: 'ICU', value: 25, color: '#f59e0b' },
  { name: 'Surgery', value: 20, color: '#3b82f6' },
  { name: 'Outpatient', value: 15, color: '#8b5cf6' },
  { name: 'L&D', value: 5, color: '#ec4899' },
];

const readmissionInsights = [
  {
    patientGroup: 'COPD Patients',
    readmissionRate: '18.3%',
    trend: 'decreasing',
    insight: 'New respiratory therapy protocol showing positive results',
    recommendation: 'Expand program to all pulmonary patients'
  },
  {
    patientGroup: 'Heart Failure',
    readmissionRate: '22.7%',
    trend: 'increasing',
    insight: 'Post-discharge medication adherence issues identified',
    recommendation: 'Implement medication monitoring program'
  },
  {
    patientGroup: 'Post-Surgical',
    readmissionRate: '9.2%',
    trend: 'stable',
    insight: 'Wound care follow-up program effectiveness confirmed',
    recommendation: 'Continue current protocols'
  }
];

const benchmarkData = {
  mortality: { current: 1.4, target: 1.5, national: 1.7 },
  readmission: { current: 3.3, target: 3.2, national: 3.8 },
  infection: { current: 0.3, target: 0.4, national: 0.6 },
  patientSatisfaction: { current: 88, target: 90, national: 82 },
  avgLOS: { current: 4.2, target: 4.0, national: 4.7 }
};

const HospitalAnalyticsSection: React.FC<HospitalAnalyticsSectionProps> = ({ onActionClick }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-health-primary" />
              Hospital-Wide AI Analytics & Quality Metrics
            </CardTitle>
            <CardDescription>
              Comprehensive analytics for patient safety, infection control, and outcome quality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="quality">
              <TabsList className="mb-4">
                <TabsTrigger value="quality" className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4" />
                  Quality Metrics
                </TabsTrigger>
                <TabsTrigger value="infection" className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  Infection Control
                </TabsTrigger>
                <TabsTrigger value="readmission" className="flex items-center gap-2">
                  <Dna className="h-4 w-4" />
                  Readmission Analysis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="quality">
                <div className="space-y-4">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={qualityMetricsData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="mortality" 
                          name="Mortality Rate (%)" 
                          stroke="#ef4444" 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="readmission" 
                          name="Readmission Rate (%)" 
                          stroke="#f59e0b" 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="infection" 
                          name="HAI Rate (%)" 
                          stroke="#3b82f6" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                    {Object.entries(benchmarkData).map(([metric, data], index) => {
                      const formattedMetric = metric
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (str) => str.toUpperCase())
                        .replace('LOS', 'Length of Stay')
                        .replace('HAI', 'Hospital Acquired Infection');

                      const isPositive = metric === 'patientSatisfaction' 
                        ? data.current >= data.target 
                        : data.current <= data.target;

                      return (
                        <Card key={index} className="p-3">
                          <div className="text-xs text-muted-foreground">{formattedMetric}</div>
                          <div className="text-xl font-bold mt-1">
                            {metric === 'avgLOS' ? `${data.current} days` : 
                             metric === 'patientSatisfaction' ? `${data.current}%` : 
                             `${data.current}%`}
                          </div>
                          <div className="flex gap-2 mt-1">
                            <div className={`text-xs ${isPositive ? 'text-green-600' : 'text-amber-600'} flex items-center`}>
                              {isPositive ? 
                                <ArrowDownRight className="h-3 w-3 mr-1" /> : 
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                              }
                              Target: {metric === 'avgLOS' ? `${data.target} days` : `${data.target}%`}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="infection">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Infection Distribution by Unit</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-56">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={infectionRiskData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {infectionRiskData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value) => [`${value}%`, '']} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">AI Infection Prevention Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-2 border rounded bg-green-50 border-green-200">
                            <div className="font-medium text-sm text-green-800">Central Line Infections</div>
                            <p className="text-xs mt-1 text-green-700">
                              35% reduction achieved with new catheter protocol and AI monitoring. Continue current practice.
                            </p>
                          </div>
                          <div className="p-2 border rounded bg-amber-50 border-amber-200">
                            <div className="font-medium text-sm text-amber-800">Surgical Site Infections</div>
                            <p className="text-xs mt-1 text-amber-700">
                              AI detected patterns in SSI cases in OR 3. Environmental sampling recommended.
                            </p>
                          </div>
                          <div className="p-2 border rounded bg-red-50 border-red-200">
                            <div className="font-medium text-sm text-red-800">C. difficile Risk Alert</div>
                            <p className="text-xs mt-1 text-red-700">
                              AI predicts potential C. diff cluster in Med/Surg unit within 7 days based on antibiotic usage patterns.
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-3"
                          onClick={() => onActionClick('View infection control dashboard')}
                        >
                          View Full Infection Control Dashboard
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="readmission">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {readmissionInsights.map((insight, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium flex justify-between">
                            <span>{insight.patientGroup}</span>
                            <Badge 
                              variant={
                                insight.trend === 'decreasing' ? 'outline' : 
                                insight.trend === 'increasing' ? 'destructive' : 'secondary'
                              }
                              className={
                                insight.trend === 'decreasing' ? 'bg-green-50 text-green-600 border-green-200' : 
                                insight.trend === 'increasing' ? '' : 'bg-blue-50 text-blue-600 border-blue-200'
                              }
                            >
                              {insight.readmissionRate}
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm space-y-2">
                            <div className="flex gap-2 items-center text-xs">
                              <span className={
                                insight.trend === 'decreasing' ? 'text-green-600' : 
                                insight.trend === 'increasing' ? 'text-red-600' : 'text-blue-600'
                              }>Trend: {insight.trend}</span>
                              {insight.trend === 'decreasing' ? 
                                <ArrowDownRight className="h-3 w-3 text-green-600" /> : 
                                insight.trend === 'increasing' ? 
                                <ArrowUpRight className="h-3 w-3 text-red-600" /> : 
                                null
                              }
                            </div>
                            <div className="p-2 bg-gray-50 rounded text-xs">
                              <div className="font-medium mb-1">AI Insight:</div>
                              <p>{insight.insight}</p>
                            </div>
                            <div className="p-2 bg-blue-50 rounded text-xs text-blue-800">
                              <div className="font-medium mb-1">Recommendation:</div>
                              <p>{insight.recommendation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Top Readmission Reduction Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 border rounded">
                          <div className="text-sm">
                            <div className="font-medium">Medication Adherence</div>
                            <div className="text-xs text-muted-foreground">
                              Potential 24% reduction in CHF readmissions
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => onActionClick('Implement medication adherence program')}
                          >
                            Implement
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <div className="text-sm">
                            <div className="font-medium">Post-Discharge Follow-up</div>
                            <div className="text-xs text-muted-foreground">
                              Potential 18% reduction in COPD readmissions
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => onActionClick('Enhance discharge follow-up')}
                          >
                            Enhance
                          </Button>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <div className="text-sm">
                            <div className="font-medium">Home Care Coordination</div>
                            <div className="text-xs text-muted-foreground">
                              Potential 15% reduction in surgical readmissions
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => onActionClick('Improve home care coordination')}
                          >
                            Improve
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-health-primary" />
              Analytics Reports
            </CardTitle>
            <CardDescription>
              Access detailed AI-generated reports and analytics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer" onClick={() => onActionClick('Download quality dashboard')}>
              <div className="font-medium">Quality Dashboard</div>
              <div className="text-xs text-muted-foreground mt-1">
                Comprehensive metrics on patient outcomes and safety
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs">Last updated: Today, 8:32 AM</span>
                <Badge variant="outline" className="text-xs">PDF</Badge>
              </div>
            </div>

            <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer" onClick={() => onActionClick('Download infection control report')}>
              <div className="font-medium">Infection Control Report</div>
              <div className="text-xs text-muted-foreground mt-1">
                Hospital-acquired infection trends and prevention
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs">Last updated: Yesterday, 4:15 PM</span>
                <Badge variant="outline" className="text-xs">Excel</Badge>
              </div>
            </div>

            <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer" onClick={() => onActionClick('Download readmission analysis')}>
              <div className="font-medium">Readmission Analysis</div>
              <div className="text-xs text-muted-foreground mt-1">
                Patterns and risk factors for patient readmissions
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs">Last updated: Jun 12, 2023</span>
                <Badge variant="outline" className="text-xs">PDF</Badge>
              </div>
            </div>

            <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer" onClick={() => onActionClick('Download AI benchmarking data')}>
              <div className="font-medium">AI Benchmarking</div>
              <div className="text-xs text-muted-foreground mt-1">
                Comparison with national performance standards
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs">Last updated: Jun 10, 2023</span>
                <Badge variant="outline" className="text-xs">Dashboard</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quality Improvement Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-medium">Fall Prevention Program</div>
                  <div className="text-xs text-muted-foreground">32% reduction in falls since implementation</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div>
                  <div className="font-medium">Medication Reconciliation</div>
                  <div className="text-xs text-muted-foreground">45% reduction in medication errors</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div>
                  <div className="font-medium">Pressure Ulcer Prevention</div>
                  <div className="text-xs text-muted-foreground">18% reduction, below target of 25%</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div>
                  <div className="font-medium">Hand Hygiene Compliance</div>
                  <div className="text-xs text-muted-foreground">78% compliance, below target of 95%</div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-2"
                onClick={() => onActionClick('View all quality initiatives')}
              >
                View All Initiatives
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HospitalAnalyticsSection;
