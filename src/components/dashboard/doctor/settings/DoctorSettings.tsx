
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Bell,
  Lock,
  Brain,
  Video,
  ListChecks,
  LayoutDashboard,
  BarChart4
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DoctorSettings = () => {
  const { toast } = useToast();

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Settings</h1>
        <p className="text-muted-foreground">Control workflow preferences, notifications, and AI customization</p>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="notifications">
            <Bell size={16} className="mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="data-access">
            <Lock size={16} className="mr-2" />
            Data Access
          </TabsTrigger>
          <TabsTrigger value="ai-customization">
            <Brain size={16} className="mr-2" />
            AI Customization
          </TabsTrigger>
          <TabsTrigger value="telehealth">
            <Video size={16} className="mr-2" />
            Telehealth
          </TabsTrigger>
        </TabsList>

        {/* Notification Preferences */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage alerts for patient emergencies & AI predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emergency-alerts" className="font-medium">Emergency Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts for critical patient conditions</p>
                  </div>
                  <Switch id="emergency-alerts" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="ai-predictions" className="font-medium">AI Predictions</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts for AI-detected health risks</p>
                  </div>
                  <Switch id="ai-predictions" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="patient-non-adherence" className="font-medium">Patient Non-Adherence</Label>
                    <p className="text-sm text-muted-foreground">Alerts when patients miss medication or appointments</p>
                  </div>
                  <Switch id="patient-non-adherence" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="lab-results" className="font-medium">Lab Results</Label>
                    <p className="text-sm text-muted-foreground">Notifications for new patient lab results</p>
                  </div>
                  <Switch id="lab-results" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="appointment-reminders" className="font-medium">Appointment Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive reminders for upcoming appointments</p>
                  </div>
                  <Switch id="appointment-reminders" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Access Settings */}
        <TabsContent value="data-access">
          <Card>
            <CardHeader>
              <CardTitle>Data Access Settings</CardTitle>
              <CardDescription>Define which patient records & analytics are viewable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="medical-history" className="font-medium">Medical History Access</Label>
                    <p className="text-sm text-muted-foreground">View complete patient medical history</p>
                  </div>
                  <Switch id="medical-history" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="genetic-data" className="font-medium">Genetic Data Access</Label>
                    <p className="text-sm text-muted-foreground">View patient genomic information</p>
                  </div>
                  <Switch id="genetic-data" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="wearable-data" className="font-medium">Wearable Device Data</Label>
                    <p className="text-sm text-muted-foreground">Access patient data from connected devices</p>
                  </div>
                  <Switch id="wearable-data" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="clinical-trials" className="font-medium">Clinical Trials Eligibility</Label>
                    <p className="text-sm text-muted-foreground">Identify patients eligible for clinical trials</p>
                  </div>
                  <Switch id="clinical-trials" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Customization */}
        <TabsContent value="ai-customization">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Customization</CardTitle>
              <CardDescription>Adjust thresholds for predictive disease alerts & biomarker analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <Label htmlFor="risk-threshold" className="font-medium">Risk Prediction Threshold</Label>
                    <span className="text-sm">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="my-4" />
                  <p className="text-sm text-muted-foreground">Adjust the sensitivity of AI risk predictions</p>
                </div>
                <Separator />

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <Label htmlFor="biomarker-threshold" className="font-medium">Biomarker Analysis Sensitivity</Label>
                    <span className="text-sm">65%</span>
                  </div>
                  <Slider defaultValue={[65]} max={100} step={1} className="my-4" />
                  <p className="text-sm text-muted-foreground">Set the sensitivity level for biomarker trend analysis</p>
                </div>
                <Separator />

                <div className="space-y-4">
                  <Label className="font-medium">AI Insight Focus Areas</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="cardio-focus" defaultChecked />
                      <Label htmlFor="cardio-focus">Cardiovascular Risks</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="oncology-focus" defaultChecked />
                      <Label htmlFor="oncology-focus">Oncology Markers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="metabolic-focus" defaultChecked />
                      <Label htmlFor="metabolic-focus">Metabolic Disorders</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="neuro-focus" />
                      <Label htmlFor="neuro-focus">Neurological Conditions</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Telehealth Settings */}
        <TabsContent value="telehealth">
          <Card>
            <CardHeader>
              <CardTitle>Telehealth & Consultation Settings</CardTitle>
              <CardDescription>Enable video calls, messaging, and patient interaction preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="video-consultations" className="font-medium">Video Consultations</Label>
                    <p className="text-sm text-muted-foreground">Enable video-based patient consultations</p>
                  </div>
                  <Switch id="video-consultations" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="secure-messaging" className="font-medium">Secure Messaging</Label>
                    <p className="text-sm text-muted-foreground">Allow secure messaging with patients</p>
                  </div>
                  <Switch id="secure-messaging" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="e-prescriptions" className="font-medium">E-Prescriptions</Label>
                    <p className="text-sm text-muted-foreground">Enable electronic prescription generation</p>
                  </div>
                  <Switch id="e-prescriptions" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="ai-assistant" className="font-medium">AI Consultation Assistant</Label>
                    <p className="text-sm text-muted-foreground">Use AI to assist during consultations</p>
                  </div>
                  <Switch id="ai-assistant" defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="automated-notes" className="font-medium">Automated Clinical Notes</Label>
                    <p className="text-sm text-muted-foreground">Generate AI-drafted clinical notes during consultations</p>
                  </div>
                  <Switch id="automated-notes" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={saveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default DoctorSettings;
