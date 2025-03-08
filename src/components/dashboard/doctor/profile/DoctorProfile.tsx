
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Award, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const DoctorProfile = () => {
  const { user } = useAuth();

  // Mock data for doctor's profile
  const doctorData = {
    name: user?.name || 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
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
    contact: {
      email: 'sarah.johnson@healthai.com',
      phone: '+1 (555) 123-4567',
      address: '123 Medical Center Drive, Suite 300, Boston, MA 02115'
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Doctor Profile</h1>
        <p className="text-muted-foreground">Manage your personal profile, specializations, and settings</p>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-2">
                <AvatarImage src="/placeholder.svg" alt={doctorData.name} />
                <AvatarFallback className="text-xl">{doctorData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{doctorData.name}</CardTitle>
              <CardDescription>{doctorData.specialization}</CardDescription>
              <Button variant="outline" size="sm" className="mt-2">Edit Profile</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-health-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-1 text-sm">
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
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <div className="space-y-6">
            {/* Credentials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award size={18} className="text-health-primary" />
                  Qualifications & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <GraduationCap size={16} className="text-health-primary" />
                    Education & Training
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
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
                  <ul className="list-disc pl-6 space-y-1">
                    {doctorData.certifications.map((certification, index) => (
                      <li key={index} className="text-sm">{certification}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Hospital Associations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
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
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar size={18} className="text-health-primary" />
                  Availability & Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Telehealth Appointments</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {doctorData.availability.telehealth.map((slot, index) => (
                        <li key={index} className="text-sm">{slot}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">In-Person Appointments</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {doctorData.availability.inPerson.map((slot, index) => (
                        <li key={index} className="text-sm">{slot}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
