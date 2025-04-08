
import React from 'react';
import { useAuth } from '@/contexts/auth/useAuth';
import HealthScoreCard from './health-overview/HealthScoreCard';
import HealthMetricsGrid from './health-metrics/HealthMetricsGrid';
import RiskAssessmentCard from './risk-assessment/RiskAssessmentCard';
import AIHealthAssistant from './ai-assistant/AIHealthAssistant';
import WellnessPlanCard from './wellness-plan/WellnessPlanCard';
import { Button } from '@/components/ui/button'; 
import { Link } from 'react-router-dom';
import { User, Calendar, Clock, Pill } from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();

  const renderUpcomingAppointments = () => (
    <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-health-dark flex items-center gap-2">
          <Calendar size={18} className="text-health-primary" />
          Upcoming Appointments
        </h2>
        <Button variant="ghost" size="sm" className="text-health-primary">View All</Button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center p-3 border border-gray-100 rounded-md bg-gray-50 hover:bg-gray-100 transition">
          <div className="mr-3 bg-blue-100 p-2 rounded-full">
            <Clock size={16} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Dr. Sarah Chen</p>
            <p className="text-sm text-gray-500">Cardiology Follow-up • Apr 15, 2025 • 10:30 AM</p>
          </div>
          <Button variant="outline" size="sm">Prepare</Button>
        </div>
        <div className="flex items-center p-3 border border-gray-100 rounded-md bg-gray-50 hover:bg-gray-100 transition">
          <div className="mr-3 bg-green-100 p-2 rounded-full">
            <Clock size={16} className="text-green-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Dr. Michael Rodriguez</p>
            <p className="text-sm text-gray-500">Annual Physical • Apr 22, 2025 • 9:00 AM</p>
          </div>
          <Button variant="outline" size="sm">Prepare</Button>
        </div>
      </div>
    </div>
  );

  const renderMedicationReminders = () => (
    <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-health-dark flex items-center gap-2">
          <Pill size={18} className="text-health-primary" />
          Medication Reminders
        </h2>
        <Button variant="ghost" size="sm" className="text-health-primary">Manage</Button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center p-3 border border-gray-100 rounded-md bg-gray-50 hover:bg-gray-100 transition">
          <div className="mr-3 bg-rose-100 p-2 rounded-full">
            <Pill size={16} className="text-rose-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Atorvastatin 10mg</p>
            <p className="text-sm text-gray-500">1 tablet • Every evening • With food</p>
          </div>
          <Button variant="outline" size="sm">Taken</Button>
        </div>
        <div className="flex items-center p-3 border border-gray-100 rounded-md bg-gray-50 hover:bg-gray-100 transition">
          <div className="mr-3 bg-amber-100 p-2 rounded-full">
            <Pill size={16} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">Metformin 500mg</p>
            <p className="text-sm text-gray-500">1 tablet • Morning and evening • With meals</p>
          </div>
          <Button variant="outline" size="sm">Taken</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium text-health-dark">Welcome, {user?.name}</h1>
          <p className="text-muted-foreground">Here's your AI-powered health analysis</p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          asChild
        >
          <Link to="/dashboard/patient/profile">
            <User size={18} />
            View Profile
          </Link>
        </Button>
      </div>

      {/* Health Score Overview */}
      <HealthScoreCard />

      {/* Health Metrics */}
      <HealthMetricsGrid />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        {renderUpcomingAppointments()}
        
        {/* Medication Reminders */}
        {renderMedicationReminders()}
      </div>

      {/* Risk Assessment */}
      <RiskAssessmentCard />

      {/* AI Health Assistant */}
      <AIHealthAssistant />

      {/* Preventive Recommendations */}
      <WellnessPlanCard />
    </div>
  );
};

export default PatientDashboard;
