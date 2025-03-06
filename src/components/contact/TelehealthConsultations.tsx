
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Calendar, Lock, Pill, Activity } from 'lucide-react';
import { Button } from '@/components/Button';

const TelehealthConsultations = () => {
  return (
    <section id="telehealth" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            Telehealth & Doctor Consultations
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with healthcare professionals through our secure telehealth platform for 
            personalized consultations, AI-assisted diagnoses, and treatment recommendations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <Video className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Virtual Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consult with specialists from the comfort of your home
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Calendar className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-optimized appointment slots based on your health needs
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Lock className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Secure Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  HIPAA and GDPR-compliant video conferencing for private consultations
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Pill className="h-6 w-6 text-health-primary mb-2" />
                <CardTitle className="text-lg">Medication Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered prescription assistance and monitoring
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <Button>
            Schedule a Consultation
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-health-dark mb-2">AI-Enhanced Doctor Visits</h3>
              <p className="text-gray-600">Our telehealth platform combines expert medical care with AI assistance</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <Activity className="h-8 w-8 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-health-dark">Real-time Health Monitoring</h4>
                  <p className="text-sm text-gray-600">AI continuously analyzes your health data before and after appointments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <Video className="h-8 w-8 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-health-dark">HD Video Consultations</h4>
                  <p className="text-sm text-gray-600">High-quality, encrypted video calls with medical specialists</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <Calendar className="h-8 w-8 text-health-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-health-dark">Available Specialists</h4>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Cardiologists</li>
                    <li>Endocrinologists</li>
                    <li>Neurologists</li>
                    <li>Mental Health Professionals</li>
                    <li>General Practitioners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-health-primary to-health-secondary rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TelehealthConsultations;
