
import { ChatMessageType } from '@/types/supabase-types';

// Enhanced patient-specific responses
const PATIENT_RESPONSES: Record<string, string[]> = {
  appointment: [
    "I've scheduled your appointment request. Our team will confirm the details within 2 hours.",
    "Your appointment request has been received. We'll check the doctor's availability and get back to you shortly.",
    "I've sent your appointment request to our scheduling team. You'll receive a confirmation notification soon."
  ],
  medication: [
    "I've set a medication reminder for you. You'll receive notifications at your specified times.",
    "Your medication reminder has been scheduled. I'll send you notifications to help you stay on track.",
    "Medication reminder set! Would you like me to also send you information about potential side effects?"
  ],
  symptoms: [
    "Based on your symptoms, I recommend scheduling a telehealth consultation. Would you like me to arrange that?",
    "I've logged your symptoms. Would you like me to share this with your healthcare provider?",
    "Thank you for sharing your symptoms. This information will help your doctor prepare for your next visit."
  ],
  vitals: [
    "I've recorded your vitals. Your readings are within normal range compared to your baseline.",
    "Your vitals have been logged. I've noticed a slight elevation in your blood pressure compared to last week.",
    "Thanks for tracking your vitals. This consistent monitoring helps us provide better care for you."
  ]
};

// Use the existing mock responses for general questions
const MOCK_RESPONSES: Record<string, string[]> = {
  general: [
    "Akeno Health AI combines artificial intelligence, quantum computing, and healthcare expertise to provide personalized healthcare solutions.",
    "Our platform is designed for patients, doctors, and biotech researchers with specialized tools for each user group.",
    "You can create an account by clicking the 'Sign Up' button in the top right corner of our website.",
  ],
  patient: [
    "Our patient solutions include personalized health monitoring, digital twin technology, and a comprehensive mobile health app.",
    "The digital twin technology creates a virtual model of your body to simulate how different treatments might affect you specifically.",
    "Yes, all your health data is encrypted and securely stored according to HIPAA regulations.",
  ],
  doctor: [
    "Our AI diagnostics system analyzes patient data to suggest potential diagnoses with supporting evidence.",
    "The remote monitoring tools allow you to track patients' vitals and health metrics in real-time.",
    "Our health reports feature provides comprehensive analysis of patient data with actionable insights.",
  ],
  biotech: [
    "Our drug discovery platform uses AI to identify potential drug candidates more efficiently.",
    "The clinical research tools help streamline trial design and participant selection.",
    "Our synthetic biology solutions assist in designing and testing biological systems.",
  ],
  quantum: [
    "Quantum computing allows us to process complex biological simulations that would be impossible with traditional computing.",
    "We currently use quantum algorithms for drug discovery and personalized medicine applications.",
    "The main advantage of quantum computing in healthcare is the ability to analyze complex biological systems more accurately.",
  ],
  support: [
    "You can contact our support team via email at support@akenohealthai.com or through the Contact page.",
    "Our standard support hours are Monday through Friday, 9 AM to 6 PM Eastern Time.",
    "For urgent technical issues, please use the 'Emergency Support' option in your dashboard.",
  ],
};

// New function to handle healthcare specific actions
export const handleHealthAction = (message: string, user: any) => {
  const lowerMessage = message.toLowerCase();
  
  // Default response for non-actions
  const defaultResponse = {
    isAction: false,
    response: '',
    success: false,
    toastTitle: '',
    toastDescription: ''
  };
  
  // Handle appointment scheduling
  if (lowerMessage.includes('schedule') && lowerMessage.includes('appointment')) {
    return {
      isAction: true,
      response: user 
        ? `I've scheduled your appointment request, ${user.name}. Our scheduling team will send you confirmation details shortly.`
        : "I've received your appointment request. Please log in so I can connect this to your patient account.",
      success: true,
      toastTitle: "Appointment Scheduled",
      toastDescription: "Your appointment request has been received. We'll confirm the details soon."
    };
  }
  
  // Handle medication reminders
  if ((lowerMessage.includes('medication') || lowerMessage.includes('medicine')) && 
      (lowerMessage.includes('reminder') || lowerMessage.includes('remind'))) {
    return {
      isAction: true,
      response: user 
        ? `I've set up your medication reminder, ${user.name}. You'll receive notifications at your specified times.`
        : "I've noted your medication reminder request. Please log in to set up personalized reminders.",
      success: true,
      toastTitle: "Medication Reminder Set",
      toastDescription: "You'll receive notifications to help you stay on track with your medication."
    };
  }
  
  // Track health metrics
  if (lowerMessage.includes('track') || lowerMessage.includes('log')) {
    if (lowerMessage.includes('blood pressure') || lowerMessage.includes('glucose') || 
        lowerMessage.includes('weight') || lowerMessage.includes('heart rate')) {
      return {
        isAction: true,
        response: user 
          ? `I've logged your health metrics, ${user.name}. You can view your trends in the Health Tracking section.`
          : "To track your health metrics, please log in to your patient account first.",
        success: true,
        toastTitle: "Health Data Recorded",
        toastDescription: "Your health metrics have been saved to your profile."
      };
    }
  }
  
  return defaultResponse;
};

// Enhanced response generation with patient-specific options
export const getPatientSpecificResponse = (message: string, user: any): string => {
  const lowerMessage = message.toLowerCase();
  
  // Check for patient-specific contexts first
  if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
    const responses = PATIENT_RESPONSES['appointment'];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (lowerMessage.includes('medication') || lowerMessage.includes('medicine') || 
      lowerMessage.includes('pill') || lowerMessage.includes('reminder')) {
    const responses = PATIENT_RESPONSES['medication'];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (lowerMessage.includes('symptom') || lowerMessage.includes('feel') || 
      lowerMessage.includes('pain') || lowerMessage.includes('sick')) {
    const responses = PATIENT_RESPONSES['symptoms'];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  if (lowerMessage.includes('vital') || lowerMessage.includes('pressure') || 
      lowerMessage.includes('temperature') || lowerMessage.includes('heart rate')) {
    const responses = PATIENT_RESPONSES['vitals'];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Fall back to general responses
  return getResponseForMessage(message);
};

export const getResponseForMessage = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  let responseCategory = 'general';
  
  // Simple keyword matching for demo purposes
  if (lowerMessage.includes('patient') || lowerMessage.includes('app') || lowerMessage.includes('monitoring')) {
    responseCategory = 'patient';
  } else if (lowerMessage.includes('doctor') || lowerMessage.includes('diagnostic') || lowerMessage.includes('monitor')) {
    responseCategory = 'doctor';
  } else if (lowerMessage.includes('biotech') || lowerMessage.includes('drug') || lowerMessage.includes('research')) {
    responseCategory = 'biotech';
  } else if (lowerMessage.includes('quantum') || lowerMessage.includes('computing')) {
    responseCategory = 'quantum';
  } else if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('contact')) {
    responseCategory = 'support';
  }
  
  // Get random response from the appropriate category
  const responses = MOCK_RESPONSES[responseCategory];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const createUserMessage = (content: string): ChatMessageType => {
  return {
    id: Date.now().toString(),
    content,
    sender: 'user',
    timestamp: new Date(),
    session_id: Date.now().toString(), // Simplified session ID for client-side
  };
};

export const createBotMessage = (content: string): ChatMessageType => {
  return {
    id: Date.now().toString(),
    content,
    sender: 'bot',
    timestamp: new Date(),
    session_id: Date.now().toString(), // Simplified session ID for client-side
  };
};

export const getInitialMessage = (): ChatMessageType => {
  const hour = new Date().getHours();
  let greeting = "Good morning";
  if (hour >= 12 && hour < 18) greeting = "Good afternoon";
  else if (hour >= 18) greeting = "Good evening";
  
  return {
    id: '1',
    content: `${greeting}! I'm Akeno's Health Assistant. I can help you schedule appointments, set medication reminders, and answer your health questions. How can I assist you today?`,
    sender: 'bot',
    timestamp: new Date(),
    session_id: Date.now().toString(), // Simplified session ID for client-side
  };
};
