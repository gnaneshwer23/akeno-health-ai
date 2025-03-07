
export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Use the existing mock responses
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

export const createUserMessage = (content: string): MessageType => {
  return {
    id: Date.now().toString(),
    content,
    sender: 'user',
    timestamp: new Date(),
  };
};

export const createBotMessage = (content: string): MessageType => {
  return {
    id: Date.now().toString(),
    content,
    sender: 'bot',
    timestamp: new Date(),
  };
};

export const getInitialMessage = (): MessageType => {
  return {
    id: '1',
    content: "Hi there! I'm Akeno's AI Assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  };
};
