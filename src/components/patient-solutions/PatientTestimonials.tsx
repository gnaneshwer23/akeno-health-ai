
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
  color: string;
}

const PatientTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Akeno's AI health monitoring has completely transformed how I manage my diabetes. The real-time insights and personalized recommendations have helped me maintain optimal glucose levels for months.",
      name: "Sarah Johnson",
      title: "Type 1 Diabetes Patient",
      rating: 5,
      color: "from-cyan-500 to-blue-500"
    },
    {
      quote: "The digital twin technology accurately predicted how I would respond to different treatment options for my heart condition. My cardiologist was amazed by the precision of the AI recommendations.",
      name: "Robert Chen",
      title: "Cardiovascular Patient",
      rating: 5,
      color: "from-purple-500 to-indigo-500"
    },
    {
      quote: "Using the mobile app for daily health tracking has made it so much easier to stay on top of my health goals. The AI coach feels like having a personal healthcare assistant with me at all times.",
      name: "Maya Patel",
      title: "Wellness Enthusiast",
      rating: 4,
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-indigo-700 font-medium shadow-sm">
            Patient Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-indigo-800 to-purple-600 text-transparent bg-clip-text mb-4">
            Patient Success Stories
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg text-indigo-900/70 max-w-3xl mx-auto">
            See how Akeno Health AI has made a meaningful difference in the lives of real patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full relative bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-md`}>
                      <Quote size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <p className="text-indigo-900/80 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <div className="font-medium text-indigo-900">{testimonial.name}</div>
                    <div className={`text-sm bg-gradient-to-r ${testimonial.color} text-transparent bg-clip-text`}>{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
