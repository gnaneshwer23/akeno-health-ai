
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const PatientFAQ = () => {
  const faqs = [
    {
      question: "How accurate is Akeno Health AI's monitoring system?",
      answer: "Our AI-powered health monitoring system has demonstrated over 95% accuracy in clinical validations. It continuously improves through machine learning, analyzing millions of data points to provide increasingly precise health insights."
    },
    {
      question: "What kind of wearables are compatible with the Mobile Health App?",
      answer: "Our platform is compatible with most major consumer health devices including Apple Watch, Fitbit, Oura Ring, Dexcom CGMs, Withings devices, and many more. We're constantly expanding our device integrations to ensure comprehensive health monitoring."
    },
    {
      question: "How is my health data protected?",
      answer: "We implement advanced encryption and security protocols that exceed HIPAA requirements. Your health data is end-to-end encrypted, and you maintain complete control over who can access your information through granular permission settings."
    },
    {
      question: "Can Akeno Health AI's technology help with early disease detection?",
      answer: "Yes, our AI system analyzes patterns in your biometric data to identify potential health concerns before traditional symptoms appear. Studies show our predictive models can detect certain conditions 6-18 months earlier than conventional methods."
    },
    {
      question: "How is the Digital Twin technology personalized to my unique biology?",
      answer: "Your digital twin model integrates your genomic data, medical history, real-time biometrics, and lifestyle factors to create a comprehensive simulation of your biological systems, allowing for highly personalized health recommendations."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-health-primary/10 mb-4">
            <HelpCircle size={24} className="text-health-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our patient solutions.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-health-dark hover:text-health-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PatientFAQ;
