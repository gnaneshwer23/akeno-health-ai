
import React from 'react';
import { MessageSquare } from 'lucide-react';

export const TestimonialsPartnersSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Akeno is revolutionising how we treat chronic disease.",
      author: "Dr. Ramesh",
      organization: "NHS"
    },
    {
      quote: "The federated AI model helped us find 3x more trial participants.",
      author: "Clinical Researcher",
      organization: "India"
    },
    {
      quote: "Finally, an AI health platform built with privacy and ethics at its core.",
      author: "Patient Advocate",
      organization: "Healthcare Rights Alliance"
    }
  ];
  
  const partners = [
    "NHS", "Apollo", "Roche", "Pfizer", "Google Cloud", "NVIDIA"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-health-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-health-primary/10 text-health-primary font-medium mb-4">
            <MessageSquare size={16} className="mr-2" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our partners and users have to say about Akeno Health's impact.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-health-primary/10">
              <div className="mb-4 text-health-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              </div>
              <p className="text-lg mb-4 italic text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partners */}
        <div>
          <h3 className="text-xl font-medium text-center mb-8">Our Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="h-16 px-6 flex items-center justify-center rounded-lg bg-white shadow-sm border border-health-primary/10 hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
