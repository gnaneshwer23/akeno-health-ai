
export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  status: 'Critical' | 'Warning' | 'Stable';
  lastReading: string;
  lastVisit: string;
  riskScore: number;
  avatar: string;
}

export interface Appointment {
  id: string;
  patient: string;
  type: string;
  time: string;
  date: string;
  avatar: string;
}

// Mock patient data
export const patients: Patient[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    age: 58,
    condition: 'Type 2 Diabetes',
    status: 'Critical',
    lastReading: 'Blood Glucose: 210 mg/dL',
    lastVisit: '3 days ago',
    riskScore: 85,
    avatar: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=E57373&color=fff'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 42,
    condition: 'Hypertension',
    status: 'Warning',
    lastReading: 'BP: 150/95 mmHg',
    lastVisit: '1 week ago',
    riskScore: 65,
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=64B5F6&color=fff'
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    age: 35,
    condition: 'Asthma',
    status: 'Stable',
    lastReading: 'Peak Flow: 380 L/min',
    lastVisit: '2 weeks ago',
    riskScore: 30,
    avatar: 'https://ui-avatars.com/api/?name=Sophia+Rodriguez&background=81C784&color=fff'
  },
  {
    id: '4',
    name: 'James Wilson',
    age: 67,
    condition: 'Coronary Artery Disease',
    status: 'Warning',
    lastReading: 'Heart Rate: 92 bpm',
    lastVisit: '5 days ago',
    riskScore: 70,
    avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=FFB74D&color=fff'
  },
  {
    id: '5',
    name: 'Aisha Johnson',
    age: 29,
    condition: 'Multiple Sclerosis',
    status: 'Stable',
    lastReading: 'EDSS Score: 2.5',
    lastVisit: '1 month ago',
    riskScore: 45,
    avatar: 'https://ui-avatars.com/api/?name=Aisha+Johnson&background=9575CD&color=fff'
  }
];

// Mock appointment data
export const upcomingAppointments: Appointment[] = [
  {
    id: '1',
    patient: 'Emma Thompson',
    type: 'Follow-up',
    time: '10:30 AM',
    date: 'Today',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=E57373&color=fff'
  },
  {
    id: '2',
    patient: 'Robert Garcia',
    type: 'New Patient',
    time: '1:15 PM',
    date: 'Today',
    avatar: 'https://ui-avatars.com/api/?name=Robert+Garcia&background=4FC3F7&color=fff'
  },
  {
    id: '3',
    patient: 'Michael Chen',
    type: 'Urgent Care',
    time: '9:00 AM',
    date: 'Tomorrow',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=64B5F6&color=fff'
  }
];
