
import React from 'react';
import { Bell, AlertTriangle, Activity } from 'lucide-react';
import ConnectedDevicesDiagram from './ConnectedDevicesDiagram';
import AlertCard from './AlertCard';
import MetricCard from './MetricCard';
import StatCard from './StatCard';

const MonitoringDashboard = () => (
  <div className="relative">
    <div className="aspect-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <Bell size={24} className="text-health-primary" />
            <h3 className="font-medium">Remote Monitoring Dashboard</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">Live Monitoring</span>
          </div>
        </div>
        
        <ConnectedDevicesDiagram />
        
        <div className="flex-1 flex flex-col gap-5">
          <AlertCard 
            type="critical"
            icon={<AlertTriangle size={20} className="text-red-600" />}
            title="Critical Alert"
            timeAgo="2 min ago"
            description="Patient John Doe (ID: 45892) has experienced a sudden drop in blood oxygen levels (82%). Potential respiratory distress."
            primaryActionText="Respond Now"
            secondaryActionText="View Details"
          />
          
          <div className="grid grid-cols-2 gap-3">
            <MetricCard 
              icon={<Activity size={16} className="text-health-primary" />}
              title="Heart Rate"
              value="118"
              unit="bpm"
              status="↑ 32% above baseline"
              statusColor="text-red-500"
            />
            <MetricCard 
              icon={<Activity size={16} className="text-health-primary" />}
              title="Blood Pressure"
              value="145/95"
              unit="mmHg"
              status="↑ Stage 2 hypertension"
              statusColor="text-red-500"
            />
          </div>
          
          <AlertCard 
            type="warning"
            icon={<Bell size={20} className="text-yellow-600" />}
            title="Medication Alert"
            timeAgo="8:15 AM"
            description="Patient Sarah Johnson (ID: 32156) has missed Metformin dose for the third consecutive day. Blood glucose rising (178 mg/dL)."
            primaryActionText="Contact Patient"
            secondaryActionText="View Details"
          />
          
          <div className="mt-auto grid grid-cols-3 gap-2">
            <StatCard title="Active Patients" value="247" />
            <StatCard title="Alert Level" value="Medium" />
            <StatCard title="Interventions" value="12" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
    <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
  </div>
);

export default MonitoringDashboard;
