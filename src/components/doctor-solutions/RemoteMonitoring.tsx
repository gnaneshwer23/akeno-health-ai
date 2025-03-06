
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

const RemoteMonitoring = () => {
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
    <section className="py-20 px-6 bg-health-light/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              Solution 3
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
              Real-Time Alerts & Remote Patient Monitoring
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our AI-powered remote monitoring system provides continuous patient tracking, real-time critical alerts, and comprehensive telehealth solutions for healthcare providers.
            </p>
            
            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-health-primary/20 text-health-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-health-dark">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-health-primary/5 border border-health-primary/10 rounded-lg">
              <p className="font-medium text-health-dark">Outcome:</p>
              <p className="text-muted-foreground">AI-powered alerts and remote monitoring improve early intervention, reduce hospital readmissions, and enhance patient safety, ensuring long-term health stability.</p>
            </div>
          </div>
          
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
                
                <div className="flex-1 flex flex-col gap-5">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle size={20} className="text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-red-600">Critical Alert</span>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">2 min ago</span>
                      </div>
                      <p className="text-sm text-gray-700">Patient John Doe (ID: 45892) has experienced a sudden drop in blood oxygen levels (82%). Potential respiratory distress.</p>
                      <div className="mt-2 flex gap-2">
                        <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-full">Respond Now</button>
                        <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full">View Details</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity size={16} className="text-health-primary" />
                        <span className="text-sm font-medium">Heart Rate</span>
                      </div>
                      <div className="text-2xl font-bold">118 <span className="text-sm font-normal text-gray-500">bpm</span></div>
                      <div className="mt-1 text-xs text-red-500">↑ 32% above baseline</div>
                    </div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity size={16} className="text-health-primary" />
                        <span className="text-sm font-medium">Blood Pressure</span>
                      </div>
                      <div className="text-2xl font-bold">145/95 <span className="text-sm font-normal text-gray-500">mmHg</span></div>
                      <div className="mt-1 text-xs text-red-500">↑ Stage 2 hypertension</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Bell size={20} className="text-yellow-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-yellow-600">Medication Alert</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">8:15 AM</span>
                      </div>
                      <p className="text-sm text-gray-700">Patient Sarah Johnson (ID: 32156) has missed Metformin dose for the third consecutive day. Blood glucose rising (178 mg/dL).</p>
                      <div className="mt-2 flex gap-2">
                        <button className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full">Contact Patient</button>
                        <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full">View Details</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-3 gap-2">
                    <div className="text-center p-3 bg-health-light rounded-lg">
                      <div className="text-sm font-medium mb-1">Active Patients</div>
                      <div className="text-2xl font-bold text-health-primary">247</div>
                    </div>
                    <div className="text-center p-3 bg-health-light rounded-lg">
                      <div className="text-sm font-medium mb-1">Alert Level</div>
                      <div className="text-2xl font-bold text-health-primary">Medium</div>
                    </div>
                    <div className="text-center p-3 bg-health-light rounded-lg">
                      <div className="text-sm font-medium mb-1">Interventions</div>
                      <div className="text-2xl font-bold text-health-primary">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-health-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-health-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteMonitoring;
