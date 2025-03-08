
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Sample FAQ data - could be moved to a database table for easier management
const faqs = [
  {
    question: "What is Akeno Health AI?",
    answer: "Akeno Health AI is a platform that uses artificial intelligence to transform healthcare with precision medicine and digital twin technology for personalized care."
  },
  {
    question: "How does the AI risk assessment work?",
    answer: "Our AI risk assessment uses multiple data points from your health profile, genetic information, and real-time biometrics to create predictive models. The system is trained on millions of patient records and validated against clinical outcomes. These assessments should be used alongside professional medical advice."
  },
  {
    question: "How is my health data protected?",
    answer: "Your health data is protected using industry-leading encryption standards both in transit and at rest. We implement strict access controls and adhere to HIPAA compliance requirements. You have complete control over who can access your data through privacy settings."
  },
  {
    question: "Can I connect wearable devices to the platform?",
    answer: "Yes, our platform supports integration with a wide range of wearable devices and health monitors, including Apple Watch, Fitbit, Oura Ring, continuous glucose monitors, and many more. You can connect these in the Profile section under 'Connected Devices'."
  },
  {
    question: "How do I share my health data with my doctor?",
    answer: "You can share your health data with healthcare providers through the Data Sharing Settings in your profile. Add your doctor's information, and they will receive an invitation to access your health dashboard. You control exactly what information they can see and for how long."
  },
  {
    question: "What should I do if I receive a high-risk alert?",
    answer: "If you receive a high-risk alert, first review the specific details in the notification. For urgent alerts (marked in red), contact your healthcare provider immediately or seek emergency care if recommended. For moderate risk alerts, schedule a consultation with your doctor within the suggested timeframe."
  },
  {
    question: "Can I customize the AI recommendations I receive?",
    answer: "Yes, you can customize AI recommendations through the Settings page under 'AI Customization'. Here, you can set health priorities, adjust notification frequency, and select the interaction style that works best for you."
  },
  {
    question: "What types of health data can the platform analyze?",
    answer: "Our platform can analyze various types of health data including biometric readings, genetic information, medical history, lab results, imaging data, lifestyle metrics, and data from wearable devices to provide comprehensive health insights."
  },
  {
    question: "How can I get started with Akeno Health AI?",
    answer: "To get started, create an account on our platform, complete your health profile, connect any health devices you use, and set up your preferences. Our onboarding process will guide you through each step to ensure you get the most value from our AI-powered health solutions."
  },
  {
    question: "Do you offer solutions for healthcare providers?",
    answer: "Yes, we offer specialized solutions for physicians that include diagnostic assistance, medical imaging analysis, patient risk monitoring, and treatment recommendations based on the latest research and clinical data."
  }
];

function findBestMatch(query: string) {
  // Simple matching algorithm - could be improved with more sophisticated NLP
  query = query.toLowerCase();
  
  // First try exact matches
  const exactMatch = faqs.find(faq => 
    faq.question.toLowerCase().includes(query) || 
    query.includes(faq.question.toLowerCase())
  );
  
  if (exactMatch) return exactMatch;
  
  // Then try keyword matching
  const words = query.split(/\s+/).filter(word => word.length > 3);
  
  if (words.length === 0) {
    return {
      question: "I'm not sure I understand",
      answer: "Could you please rephrase your question? I'm here to help with information about Akeno Health AI, our features, privacy policies, and how our platform works."
    };
  }
  
  // Score each FAQ based on word matches
  const scoredFaqs = faqs.map(faq => {
    const faqText = (faq.question + " " + faq.answer).toLowerCase();
    const score = words.reduce((acc, word) => {
      return acc + (faqText.includes(word) ? 1 : 0);
    }, 0);
    return { ...faq, score };
  });
  
  // Sort by score and get the best match
  scoredFaqs.sort((a, b) => b.score - a.score);
  
  if (scoredFaqs[0].score > 0) {
    return scoredFaqs[0];
  }
  
  // Fallback response
  return {
    question: "I don't have specific information on that",
    answer: "I don't have specific information on that topic yet. Would you like to contact our support team for more detailed assistance? You can reach them through our Contact page or by emailing support@akenohealth.ai."
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error("No message provided");
    }

    // Find the best matching FAQ
    const response = findBestMatch(message);
    
    // Add a small delay to make it feel more natural
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({ response }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error processing FAQ request:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Something went wrong processing your request",
        details: error.message 
      }),
      { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
