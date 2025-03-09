
import React from 'react';
import { 
  Hospital, 
  Database, 
  AlertTriangle, 
  UserPlus,
  Users,
  MessagesSquare,
  Clock
} from 'lucide-react';
import IntegrationFeature from './IntegrationFeature';

const IntegrationFeaturesList = () => {
  const features = [
    {
      icon: <Hospital size={24} />,
      title: "AI-Enhanced Hospital Management System",
      description: "Automates administrative processes, optimizes scheduling, and streamlines operational workflows to reduce staff workload."
    },
    {
      icon: <Database size={24} />,
      title: "Seamless EHR & IoT Integration",
      description: "AI pulls real-time data from EHRs, IoT medical devices, and wearables to provide instant health insights and decision support."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "AI-Powered Predictive Patient Monitoring",
      description: "Early warning alerts for sepsis, cardiac events, respiratory failure, and disease progression before critical deterioration."
    },
    {
      icon: <UserPlus size={24} />,
      title: "Automated Patient Flow Optimization",
      description: "AI improves bed management, discharge planning, ER wait times, and operating room scheduling for maximum efficiency."
    },
    {
      icon: <Clock size={24} />,
      title: "Real-Time Hospital Resource Tracking",
      description: "AI continuously optimizes staff allocation, equipment usage, and inventory management to reduce waste and costs."
    },
    {
      icon: <MessagesSquare size={24} />,
      title: "AI-Powered Patient Communication",
      description: "Automates appointment scheduling, follow-ups, medication reminders, and personalized health guidance."
    }
  ];

  return (
    <div className="space-y-5 mb-8">
      {features.map((feature, index) => (
        <IntegrationFeature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default IntegrationFeaturesList;
