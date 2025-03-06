
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

const PatientTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Akeno's AI health monitoring has completely transformed how I manage my diabetes. The real-time insights and personalized recommendations have helped me maintain optimal glucose levels for months.",
      name: "Sarah Johnson",
      title: "Type 1 Diabetes Patient",
      rating: 5
    },
    {
      quote: "The digital twin technology accurately predicted how I would respond to different treatment options for my heart condition. My cardiologist was amazed by the precision of the AI recommendations.",
      name: "Robert Chen",
      title: "Cardiovascular Patient",
      rating: 5
    },
    {
      quote: "Using the mobile app for daily health tracking has made it so much easier to stay on top of my health goals. The AI coach feels like having a personal healthcare assistant with me at all times.",
      name: "Maya Patel",
      title: "Wellness Enthusiast",
      rating: 4
    }
  ];

  return (
    <section className="py-16 px-6 bg-health-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Akeno Health AI has made a meaningful difference in the lives of real patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-4 text-health-primary">
                  <Quote size={32} className="opacity-50" />
                </div>
                
                <p className="text-health-dark/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <div className="font-medium text-health-dark">{testimonial.name}</div>
                  <div className="text-sm text-health-primary">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
