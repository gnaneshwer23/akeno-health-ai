
import React from 'react';
import { Hospital, BarChart3, UserRound, Clock, Bell } from 'lucide-react';
import HospitalMetricCard from './HospitalMetricCard';
import HospitalResourcesDisplay from './HospitalResourcesDisplay';
import HospitalAlertCard from './HospitalAlertCard';

const HospitalDashboard = () => (
  <div className="relative">
    <div className="aspect-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-health-primary/10 p-6">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <Hospital size={24} className="text-health-primary" />
            <h3 className="font-medium">Hospital Management Dashboard</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">Live Analytics</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <HospitalMetricCard 
            icon={<UserRound size={18} className="text-health-primary" />}
            title="Patient Flow"
            value="87%"
            status="Optimized"
            statusColor="text-green-600"
          />
          <HospitalMetricCard 
            icon={<BarChart3 size={18} className="text-health-primary" />}
            title="Bed Utilization"
            value="92%"
            status="Efficient"
            statusColor="text-green-600"
          />
          <HospitalMetricCard 
            icon={<Clock size={18} className="text-health-primary" />}
            title="ER Wait Time"
            value="12min"
            status="Below average"
            statusColor="text-green-600"
          />
        </div>
        
        <HospitalResourcesDisplay />
        
        <div className="flex-1 flex flex-col gap-3 mt-4">
          <HospitalAlertCard 
            type="warning"
            icon={<Bell size={20} className="text-yellow-600" />}
            title="Resource Alert"
            timeAgo="10 min ago"
            description="Potential ICU staffing shortage predicted for overnight shift. AI suggests redistribution of nursing staff from Med-Surg unit."
            primaryActionText="Review Plan"
            secondaryActionText="View Details"
          />
          
          <div className="p-4 bg-health-primary/5 rounded-lg mt-auto">
            <h4 className="font-medium mb-2">AI-Powered Recommendations</h4>
            <ul className="text-sm space-y-1">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-health-primary rounded-full mr-2"></span>
                Pre-schedule additional radiology staff for Thursday peak hours
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-health-primary rounded-full mr-2"></span>
                Restock emergency supplies in west wing before weekend rush
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-health-primary rounded-full mr-2"></span>
                Review predicted surgical backlog and optimize OR scheduling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
    <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
  </div>
);

export default HospitalDashboard;
