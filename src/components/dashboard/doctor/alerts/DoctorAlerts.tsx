
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data for alerts
const mockAlerts = [
  {
    id: 1,
    type: 'emergency',
    patient: 'Sarah Johnson',
    message: 'Blood glucose critically low (42 mg/dL)',
    time: '2 minutes ago',
    vitals: { bloodGlucose: '42 mg/dL', heartRate: '95 bpm', bloodPressure: '110/68' },
    read: false
  },
  {
    id: 2,
    type: 'emergency',
    patient: 'Robert Chen',
    message: 'Sudden spike in blood pressure (190/110)',
    time: '15 minutes ago',
    vitals: { bloodPressure: '190/110', heartRate: '88 bpm', oxygenLevel: '94%' },
    read: false
  },
  {
    id: 3,
    type: 'warning',
    patient: 'Maria Garcia',
    message: 'Missed cardiac medication for 3 days',
    time: '1 hour ago',
    adherence: { missedDoses: 3, medication: 'Lisinopril 10mg' },
    read: false
  },
  {
    id: 4,
    type: 'warning',
    patient: 'James Wilson',
    message: 'Abnormal heart rhythm detected',
    time: '3 hours ago',
    vitals: { heartRate: 'Irregular', bloodPressure: '145/90' },
    read: true
  },
  {
    id: 5,
    type: 'ai',
    patient: 'Emma Davis',
    message: 'AI detected early signs of pneumonia from recent chest scan',
    time: '5 hours ago',
    aiConfidence: '87%',
    read: true
  }
];

const AlertCard = ({ alert }: { alert: typeof mockAlerts[0] }) => {
  return (
    <Card className={`mb-4 ${!alert.read ? 'border-l-4 border-l-red-500' : ''}`}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`p-2 rounded-full ${
              alert.type === 'emergency' ? 'bg-red-100' : 
              alert.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'
            }`}>
              {alert.type === 'emergency' ? (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              ) : alert.type === 'warning' ? (
                <Bell className="h-5 w-5 text-amber-500" />
              ) : (
                <Bell className="h-5 w-5 text-blue-500" />
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-medium">{alert.patient}</h4>
                <Badge
                  variant="outline"
                  className={`${
                    alert.type === 'emergency' ? 'bg-red-50 text-red-700 border-red-200' : 
                    alert.type === 'warning' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                >
                  {alert.type === 'emergency' ? 'Emergency' : 
                   alert.type === 'warning' ? 'Warning' : 'AI Alert'}
                </Badge>
                {!alert.read && (
                  <Badge className="bg-red-500">New</Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              
              {alert.vitals && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {Object.entries(alert.vitals).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 px-2 py-1 rounded text-xs">
                      <span className="font-semibold">{key}: </span>
                      {value}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex items-center mt-3 text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {alert.time}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              View Details
            </Button>
            {alert.type === 'emergency' && (
              <Button size="sm" variant="destructive">
                Respond Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DoctorAlerts = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alerts Center</h1>
        <p className="text-muted-foreground">
          Monitor real-time patient alerts and AI-generated health warnings
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAlerts.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 since yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Emergency Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {mockAlerts.filter(a => a.type === 'emergency').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">
              {mockAlerts.filter(a => a.type === 'warning').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Need attention soon
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">
              {mockAlerts.filter(a => a.type === 'ai').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Generated by AI analysis
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Alerts</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="warnings">Warnings</TabsTrigger>
            <TabsTrigger value="ai">AI Insights</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>
        
        <TabsContent value="all" className="mt-6">
          {mockAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
        
        <TabsContent value="emergency" className="mt-6">
          {mockAlerts.filter(alert => alert.type === 'emergency').map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
        
        <TabsContent value="warnings" className="mt-6">
          {mockAlerts.filter(alert => alert.type === 'warning').map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
        
        <TabsContent value="ai" className="mt-6">
          {mockAlerts.filter(alert => alert.type === 'ai').map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorAlerts;
