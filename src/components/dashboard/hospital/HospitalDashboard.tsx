
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardSummaryCards from './components/DashboardSummaryCards';
import PatientRiskMonitorSection from './sections/PatientRiskMonitorSection';
import ResourceManagementSection from './sections/ResourceManagementSection';
import BillingAnalyticsSection from './sections/BillingAnalyticsSection';
import EmergencyResponseSection from './sections/EmergencyResponseSection';
import HospitalAnalyticsSection from './sections/HospitalAnalyticsSection';
import DischargeManagementSection from './sections/DischargeManagementSection';
import SurgerySchedulingSection from './sections/SurgerySchedulingSection';

const HospitalDashboard = () => {
  const { user } = useAuth();
  const [selectedSection, setSelectedSection] = useState<string>('overview');
  
  const handleActionClick = (action: string) => {
    console.log("Action clicked:", action);
    // This would be used to handle section-specific actions
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'patient-risk':
        return <PatientRiskMonitorSection onActionClick={handleActionClick} />;
      case 'resource-management':
        return <ResourceManagementSection onActionClick={handleActionClick} />;
      case 'billing':
        return <BillingAnalyticsSection onActionClick={handleActionClick} />;
      case 'emergency':
        return <EmergencyResponseSection onActionClick={handleActionClick} />;
      case 'analytics':
        return <HospitalAnalyticsSection onActionClick={handleActionClick} />;
      case 'discharge':
        return <DischargeManagementSection onActionClick={handleActionClick} />;
      case 'surgery':
        return <SurgerySchedulingSection onActionClick={handleActionClick} />;
      default:
        return <DashboardSummaryCards onActionClick={handleActionClick} />;
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-health-dark">Hospital Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {user?.name} - AI-powered insights for healthcare optimization
          </p>
        </div>
        <img 
          src={user?.profileImage} 
          alt={user?.name}
          className="h-12 w-12 rounded-full border-2 border-health-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Management Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1">
                {[
                  { id: 'overview', name: 'Dashboard Overview' },
                  { id: 'patient-risk', name: 'Patient Risk Monitor' },
                  { id: 'resource-management', name: 'Resource Management' },
                  { id: 'emergency', name: 'Emergency Response' },
                  { id: 'billing', name: 'Billing & Analytics' },
                  { id: 'analytics', name: 'Hospital Analytics' },
                  { id: 'discharge', name: 'Discharge Management' },
                  { id: 'surgery', name: 'Surgery Scheduling' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedSection === item.id
                        ? 'bg-health-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-5">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
