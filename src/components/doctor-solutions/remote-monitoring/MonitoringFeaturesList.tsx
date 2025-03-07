
import React from 'react';
import { 
  Bell, 
  Radio, 
  AlertTriangle, 
  Users, 
  Calendar, 
  Activity,
  Globe
} from 'lucide-react';
import MonitoringFeature from './MonitoringFeature';

const MonitoringFeaturesList = () => {
  const features = [
    {
      icon: <Bell size={24} />,
      title: "AI-Powered Early Warning & Critical Care Alerts",
      description: "AI continuously monitors patient vitals, symptoms, and real-time biomarkers, issuing instant alerts for critical conditions such as stroke, heart failure, and sepsis."
    },
    {
      icon: <Radio size={24} />,
      title: "Remote Patient Monitoring & Telehealth Integration",
      description: "AI seamlessly integrates with wearables, IoT medical devices, and at-home diagnostic tools to track patient health remotely, reducing unnecessary hospital visits."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Emergency Detection & Rapid Intervention",
      description: "AI detects early warning signs of life-threatening conditions, allowing physicians to act swiftly and improve emergency response times."
    },
    {
      icon: <Users size={24} />,
      title: "AI-Driven Doctor-Patient Communication Portal",
      description: "Physicians receive real-time AI-prioritized patient updates, ensuring faster intervention and streamlined collaboration across healthcare teams."
    },
    {
      icon: <Calendar size={24} />,
      title: "AI-Based Follow-Ups & Treatment Compliance Monitoring",
      description: "AI tracks medication adherence, post-surgical recovery, and chronic disease management, ensuring patients stay on track with their care plans."
    },
    {
      icon: <Activity size={24} />,
      title: "AI-Assisted Remote Chronic Disease Management",
      description: "AI continuously monitors hypertension, diabetes, COPD, and autoimmune conditions, adjusting treatment strategies based on real-time biomarker feedback."
    },
    {
      icon: <Globe size={24} />,
      title: "Population Health Management & Epidemiology Tracking",
      description: "AI aggregates de-identified data to track public health trends, predict disease outbreaks, and improve clinical outcomes on a large scale."
    }
  ];

  return (
    <div className="space-y-5 mb-8">
      {features.map((feature, index) => (
        <MonitoringFeature 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default MonitoringFeaturesList;
