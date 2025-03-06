
import React from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title, className }) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-2xl shadow-card border border-health-primary/10 flex flex-col relative", 
      className
    )}>
      <div className="absolute -top-4 -left-2 w-10 h-10 flex items-center justify-center bg-health-primary rounded-full text-white">
        <Quote size={18} />
      </div>
      <p className="text-muted-foreground italic mb-6">{quote}</p>
      <div className="mt-auto">
        <h4 className="font-medium text-health-dark">{author}</h4>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Akeno Health AI detected early signs of my condition months before traditional screening methods would have. It's truly revolutionary.",
      author: "Sarah Johnson",
      title: "Patient"
    },
    {
      quote: "As a physician, I've seen diagnostic accuracy improve dramatically with Akeno's AI platform. It's transforming how we practice medicine.",
      author: "Dr. Michael Chen",
      title: "Cardiologist"
    },
    {
      quote: "The AI-driven trial matching has accelerated our drug development timeline by nearly 40%. This technology is a game-changer.",
      author: "Emily Rodriguez",
      title: "Clinical Research Director"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-health-light/30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
            Hear from Our Community
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Akeno Health AI is transforming healthcare experiences for patients, doctors, and healthcare organizations worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              className={`fade-up-${Math.min(index + 2, 5)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
