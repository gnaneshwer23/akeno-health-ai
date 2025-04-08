
import React, { useState } from 'react';
import { useAuth } from '@/contexts/auth/useAuth';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { 
  Award, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap,
  User,
  FileEdit,
  MessageCircle,
  Clock,
  BrainCircuit,
  ArrowLeft,
  Shield,
  Settings,
  Workflow,
  Stethoscope,
  UserCog,
  Users
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const DoctorProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('general');

  // Mock data for doctor's profile
  const doctorData = {
    name: user?.name || 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    experience: '15+ years',
    rating: 4.9,
    totalPatients: 1250,
    activeResearch: 3,
    qualifications: ['MD, Harvard Medical School', 'Fellowship in Interventional Cardiology', 'Board Certified in Internal Medicine'],
    certifications: ['American Board of Internal Medicine', 'Advanced Cardiac Life Support'],
    hospitals: [
      { name: 'Central Hospital', role: 'Senior Cardiologist', years: '2018-Present' },
      { name: 'Medical Research Center', role: 'Visiting Consultant', years: '2020-Present' }
    ],
    availability: {
      telehealth: ['Monday: 9am-12pm', 'Wednesday: 2pm-5pm', 'Friday: 9am-12pm'],
      inPerson: ['Tuesday: 9am-5pm', 'Thursday: 1pm-6pm']
    },
    expertise: [
      'Cardiovascular Disease', 
      'Echocardiography', 
      'Nuclear Cardiology', 
      'Heart Failure Management', 
      'Preventive Cardiology'
    ],
    aiTools: [
      { name: 'Clinical Decision Support', accessLevel: 'Full' },
      { name: 'AI Imaging Analysis', accessLevel: 'Full' },
      { name: 'Patient Risk Prediction', accessLevel: 'Full' },
      { name: 'Research Analytics', accessLevel: 'Limited' },
      { name: 'Virtual Scribing', accessLevel: 'Full' }
    ],
    alerts: {
      pending: 3,
      critical: 1
    },
    contact: {
      email: 'sarah.johnson@healthai.com',
      phone: '+1 (555) 123-4567',
      address: '123 Medical Center Drive, Suite 300, Boston, MA 02115'
    },
    publications: [
      { title: 'Advances in AI-Assisted Cardiology', journal: 'New England Journal of Medicine', year: 2023 },
      { title: 'Machine Learning Applications in Preventive Cardiac Care', journal: 'Journal of the American Heart Association', year: 2022 },
      { title: 'Digital Twins for Personalized Cardiac Treatment', journal: 'Digital Health', year: 2021 }
    ],
    aiStats: {
      diagnosisAccuracy: 92,
      patientRiskAssessments: 347,
      documentationHoursSaved: 124,
      researchContributions: 8
    }
  };

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing feature will be available soon!",
    });
  };

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} feature activated successfully!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium text-health-dark">Doctor Profile</h1>
          <p className="text-muted-foreground">Manage your professional profile, credentials, and AI settings</p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          asChild
        >
          <Link to="/dashboard/doctor">
            <ArrowLeft size={16} />
            Return to Dashboard
          </Link>
        </Button>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="border-health-primary/10 shadow-sm">
            <CardHeader className="text-center">
              <div className="relative mx-auto">
                <Avatar className="h-24 w-24 mx-auto mb-2 border-2 border-health-primary/20">
                  <AvatarImage src={user?.profileImage || "/placeholder.svg"} alt={doctorData.name} />
                  <AvatarFallback className="text-xl bg-health-primary/10 text-health-primary">{doctorData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-2 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
              <CardTitle>{doctorData.name}</CardTitle>
              <CardDescription className="flex flex-col items-center gap-1">
                <Badge variant="secondary" className="mt-1 bg-health-primary/10 text-health-primary hover:bg-health-primary/20">
                  {doctorData.specialization}
                </Badge>
                <span className="text-sm text-muted-foreground mt-1">{doctorData.experience} Experience</span>
              </CardDescription>
              <div className="flex justify-center mt-3 space-x-3">
                <Button variant="outline" size="sm" className="border-health-primary/30 hover:border-health-primary/60" onClick={handleEditProfile}>
                  <FileEdit size={14} className="mr-1" /> Edit
                </Button>
                <Button size="sm" className="bg-health-primary hover:bg-health-primary/90" onClick={() => handleAction("Update Availability")}>
                  <Calendar size={14} className="mr-1" /> Availability
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Stats summary */}
                <div className="grid grid-cols-2 gap-3 pt-2 pb-4">
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <p className="text-2xl font-semibold text-health-primary">{doctorData.totalPatients}</p>
                    <p className="text-xs text-muted-foreground">Total Patients</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold text-health-primary">{doctorData.rating}</p>
                      <span className="text-yellow-500 text-lg ml-1">★</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-health-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Mail size={14} className="text-muted-foreground" />
                      {doctorData.contact.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-muted-foreground" />
                      {doctorData.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={14} className="text-muted-foreground" />
                      {doctorData.contact.address}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <User size={16} className="text-health-primary" />
                    AI Profile Status
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                      onClick={() => handleAction("Check Pending Alerts")}
                    >
                      <Clock size={14} className="mr-1" />
                      {doctorData.alerts.pending} Pending
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
                      onClick={() => handleAction("View Critical Alerts")}
                    >
                      <Shield size={14} className="mr-1" />
                      {doctorData.alerts.critical} Critical
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <BrainCircuit size={16} className="text-health-primary" />
                    AI Tools & Capabilities
                  </h3>
                  <div className="space-y-2">
                    {doctorData.aiTools.map((tool, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <p className="text-sm">{tool.name}</p>
                        <Badge 
                          variant="outline" 
                          className={tool.accessLevel === 'Full' 
                            ? 'bg-green-50 text-green-700 border-green-200' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                          }
                        >
                          {tool.accessLevel}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-3 text-health-primary"
                    onClick={() => handleAction("Manage AI Permissions")}
                  >
                    <Settings size={14} className="mr-1" />
                    Manage AI Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Performance Stats */}
          <Card className="mt-6 border-health-primary/10 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BrainCircuit size={18} className="text-health-primary" />
                AI Collaboration Stats
              </CardTitle>
              <CardDescription>Your performance with AI assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Diagnosis Accuracy</p>
                  <div className="flex items-center">
                    <span className="text-health-primary font-medium">{doctorData.aiStats.diagnosisAccuracy}%</span>
                    <span className="text-green-500 text-xs ml-1">↑4%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Patient Risk Assessments</p>
                  <div className="flex items-center">
                    <span className="text-health-primary font-medium">{doctorData.aiStats.patientRiskAssessments}</span>
                    <span className="text-green-500 text-xs ml-1">↑12</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Documentation Hours Saved</p>
                  <div className="flex items-center">
                    <span className="text-health-primary font-medium">{doctorData.aiStats.documentationHoursSaved}h</span>
                    <span className="text-green-500 text-xs ml-1">↑8h</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Research Contributions</p>
                  <div className="flex items-center">
                    <span className="text-health-primary font-medium">{doctorData.aiStats.researchContributions}</span>
                    <span className="text-green-500 text-xs ml-1">↑1</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4 border-health-primary/30 hover:border-health-primary/60"
                onClick={() => handleAction("View AI Performance Report")}
              >
                <Workflow size={14} className="mr-1" />
                View Full Report
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            {/* General Tab */}
            <TabsContent value="general" className="space-y-6">
              {/* Professional Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Stethoscope size={18} className="text-health-primary" />
                    Professional Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-health-dark/80">
                      Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in cardiovascular medicine. 
                      Her practice focuses on preventive cardiology, heart failure management, and the integration of AI technologies 
                      in cardiac care. She is passionate about using artificial intelligence to improve diagnostic accuracy and 
                      patient outcomes in cardiology.
                    </p>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctorData.expertise.map((area, index) => (
                          <Badge key={index} variant="secondary" className="bg-health-primary/10 text-health-primary">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleEditProfile}
                  >
                    <FileEdit size={14} className="mr-1" />
                    Edit Summary
                  </Button>
                </CardFooter>
              </Card>

              {/* Hospital Associations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 size={18} className="text-health-primary" />
                    Hospital & Clinic Associations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {doctorData.hospitals.map((hospital, index) => (
                      <div key={index} className={index > 0 ? "pt-4 border-t" : ""}>
                        <h3 className="font-medium">{hospital.name}</h3>
                        <p className="text-sm text-muted-foreground">{hospital.role}</p>
                        <p className="text-xs text-muted-foreground">{hospital.years}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAction("Update Hospital Affiliations")}
                  >
                    <FileEdit size={14} className="mr-1" />
                    Update Affiliations
                  </Button>
                </CardFooter>
              </Card>

              {/* AI-Powered Patient Management */}
              <Card className="border-health-primary/20">
                <CardHeader className="bg-health-primary/5">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UserCog size={18} className="text-health-primary" />
                    AI-Powered Patient Management
                  </CardTitle>
                  <CardDescription>
                    Enhanced tools to deliver precision medicine with AI assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      className="justify-start h-auto py-3 bg-gradient-to-r from-health-primary/90 to-health-primary"
                      onClick={() => handleAction("View AI-Generated Patient Insights")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium">Patient Risk Analysis</span>
                        <span className="text-xs opacity-80">AI-powered patient risk stratification</span>
                      </div>
                    </Button>
                    
                    <Button 
                      className="justify-start h-auto py-3 bg-gradient-to-r from-health-secondary/90 to-health-secondary"
                      onClick={() => handleAction("Open Clinical Decision Support")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium">Clinical Decision Support</span>
                        <span className="text-xs opacity-80">AI-assisted diagnostic recommendations</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Open AI Documentation Assistant")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">AI Documentation</span>
                        <span className="text-xs text-muted-foreground">Automated clinical notes & SOAP</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Access Medical Imaging AI")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">Medical Imaging AI</span>
                        <span className="text-xs text-muted-foreground">AI-enhanced radiology insights</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Credentials Tab */}
            <TabsContent value="credentials" className="space-y-6">
              {/* Qualifications & Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap size={18} className="text-health-primary" />
                    Qualifications & Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <GraduationCap size={16} className="text-health-primary" />
                      Education & Training
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {doctorData.qualifications.map((qualification, index) => (
                        <li key={index} className="text-sm">{qualification}</li>
                      ))}
                    </ul>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Award size={16} className="text-health-primary" />
                      Certifications
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {doctorData.certifications.map((certification, index) => (
                        <li key={index} className="text-sm">{certification}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAction("Update Credentials")}
                  >
                    <FileEdit size={14} className="mr-1" />
                    Update Credentials
                  </Button>
                </CardFooter>
              </Card>

              {/* Publications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileEdit size={18} className="text-health-primary" />
                    Publications & Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {doctorData.publications.map((pub, index) => (
                      <div key={index} className={index > 0 ? "pt-4 border-t" : ""}>
                        <h3 className="font-medium">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground">{pub.journal}, {pub.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAction("Add Publication")}
                  >
                    <FileEdit size={14} className="mr-1" />
                    Add Publication
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar size={18} className="text-health-primary" />
                    Availability Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Telehealth Appointments</h3>
                      <div className="space-y-2 border rounded-md p-3 bg-gray-50">
                        {doctorData.availability.telehealth.map((slot, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Calendar size={14} className="text-health-primary" />
                            <span className="text-sm">{slot}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 w-full border-health-primary/30 hover:border-health-primary/60"
                        onClick={() => handleAction("Update Telehealth Schedule")}
                      >
                        <FileEdit size={14} className="mr-1" />
                        Update Telehealth Hours
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">In-Person Appointments</h3>
                      <div className="space-y-2 border rounded-md p-3 bg-gray-50">
                        {doctorData.availability.inPerson.map((slot, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Calendar size={14} className="text-health-primary" />
                            <span className="text-sm">{slot}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 w-full border-health-primary/30 hover:border-health-primary/60"
                        onClick={() => handleAction("Update In-Person Schedule")}
                      >
                        <FileEdit size={14} className="mr-1" />
                        Update Office Hours
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-health-primary hover:bg-health-primary/90"
                    onClick={() => handleAction("Open Schedule Manager")}
                  >
                    <Calendar size={16} className="mr-2" />
                    Open Full Schedule Manager
                  </Button>
                </CardFooter>
              </Card>

              {/* Patient Communications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageCircle size={18} className="text-health-primary" />
                    Patient Communications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Open Secure Messaging")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">Secure Messaging</span>
                        <span className="text-xs text-muted-foreground">Patient communications</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Start Telehealth Session")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">Telehealth</span>
                        <span className="text-xs text-muted-foreground">Virtual consultations</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Manage Automated Follow-ups")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">AI Follow-ups</span>
                        <span className="text-xs text-muted-foreground">Automated patient check-ins</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("View Patient Education Materials")}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="font-medium text-health-dark">Patient Education</span>
                        <span className="text-xs text-muted-foreground">Educational resources</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              {/* Active Research Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BrainCircuit size={18} className="text-health-primary" />
                    Active Research Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-md p-4 bg-gradient-to-r from-health-primary/5 to-transparent">
                      <h3 className="font-medium">AI-Enhanced Prediction of Cardiac Events</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Using machine learning to predict cardiac events before traditional symptoms manifest.
                      </p>
                      <div className="flex items-center mt-3">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                        <span className="text-xs text-muted-foreground ml-3">Started: Jan 2023</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 border-health-primary/30 hover:border-health-primary/60"
                        onClick={() => handleAction("View Research Details")}
                      >
                        View Details
                      </Button>
                    </div>

                    <div className="border rounded-md p-4 bg-gradient-to-r from-health-primary/5 to-transparent">
                      <h3 className="font-medium">Digital Twin Modeling for Personalized Cardiac Care</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Creating computational models of patient cardiovascular systems for treatment simulation.
                      </p>
                      <div className="flex items-center mt-3">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                        <span className="text-xs text-muted-foreground ml-3">Started: Mar 2023</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 border-health-primary/30 hover:border-health-primary/60"
                        onClick={() => handleAction("View Research Details")}
                      >
                        View Details
                      </Button>
                    </div>

                    <div className="border rounded-md p-4 bg-gradient-to-r from-health-primary/5 to-transparent">
                      <h3 className="font-medium">Wearable-Based Early Warning System</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Developing algorithms to detect subtle ECG changes from wearable devices.
                      </p>
                      <div className="flex items-center mt-3">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                        <span className="text-xs text-muted-foreground ml-3">Started: Jun 2023</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 border-health-primary/30 hover:border-health-primary/60"
                        onClick={() => handleAction("View Research Details")}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-health-primary hover:bg-health-primary/90"
                    onClick={() => handleAction("Create New Research Project")}
                  >
                    <BrainCircuit size={16} className="mr-2" />
                    Create New Research Project
                  </Button>
                </CardFooter>
              </Card>

              {/* Research Collaborations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users size={18} className="text-health-primary" />
                    Research Collaborations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start py-3 text-left border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("View Collaboration Requests")}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-health-dark">Collaboration Requests</span>
                        <span className="text-xs text-muted-foreground">3 pending invitations</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start py-3 text-left border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Browse Research Network")}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-health-dark">Research Network</span>
                        <span className="text-xs text-muted-foreground">Find potential collaborators</span>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start py-3 text-left border-health-primary/30 hover:border-health-primary/60"
                      onClick={() => handleAction("Access Research Analytics")}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-health-dark">Research Analytics</span>
                        <span className="text-xs text-muted-foreground">Publication metrics and impact factors</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
