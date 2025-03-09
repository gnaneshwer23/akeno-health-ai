
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Heart, Brain, Sparkles, UserCircle2, Building, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTYwIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTE2Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptLTMyIDBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-health-primary/30 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-health-secondary/30 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      
      {/* DNA helix decoration - healthcare specific element */}
      <div className="absolute left-10 inset-y-0 w-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-3 h-3 rounded-full bg-health-primary/20"
            style={{ 
              top: `${i * 40}px`,
              left: `${Math.sin(i * 0.3) * 20}px`,
              animationDelay: `${i * 0.2}s`,
              animation: 'pulse 4s infinite ease-in-out'
            }}
          ></div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={i + 100} className="absolute w-3 h-3 rounded-full bg-health-secondary/20"
            style={{ 
              top: `${i * 40 + 20}px`,
              left: `${Math.sin((i + 0.5) * 0.3) * -20}px`,
              animationDelay: `${i * 0.2 + 0.1}s`,
              animation: 'pulse 4s infinite ease-in-out'
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-health-primary/10 text-health-primary text-sm font-medium mb-5">
          <Sparkles size={16} className="text-health-primary" />
          <span>Join the Future of Healthcare</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">
          Who We Serve – A Seamless AI Healthcare Ecosystem
        </h2>
        
        <p className="text-lg text-health-dark/80 max-w-3xl mx-auto mb-10">
          Akeno Health is designed for patients, doctors, hospitals, researchers, and pharmaceutical companies, 
          ensuring connected, intelligent, and proactive healthcare for all.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <UserCircle2 size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Patients</h3>
            <p className="mb-4 text-health-dark/70">Take control of your health with AI-driven personalised monitoring, early disease detection, and seamless telemedicine support.</p>
            <Button variant="ghost" size="sm" asChild className="w-full justify-center group">
              <Link to="/patient-solutions" className="flex items-center gap-2">
                Learn More
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Brain size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Doctors</h3>
            <p className="mb-4 text-health-dark/70">Reduce clinical burden with real-time AI-powered decision support, enhanced diagnostic accuracy, and automated documentation.</p>
            <Button variant="ghost" size="sm" asChild className="w-full justify-center group">
              <Link to="/doctor-solutions" className="flex items-center gap-2">
                Learn More
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-health-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Building size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Partners</h3>
            <p className="mb-4 text-health-dark/70">Pharmaceutical companies, hospitals, and researchers can optimize workflows and accelerate innovation with our AI ecosystem.</p>
            <Button variant="ghost" size="sm" asChild className="w-full justify-center group">
              <Link to="/biotech-solutions" className="flex items-center gap-2">
                Learn More
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-health-primary/10 shadow-lg mb-10">
          <p className="text-xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            The future of AI healthcare starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg" 
              className="group relative overflow-hidden"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2 bg-gradient-to-r from-health-primary to-health-secondary hover:from-health-primary/90 hover:to-health-secondary/90">
                Get Started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-health-primary/30 hover:border-health-primary/60"
              asChild
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-health-primary/5"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Users size={16} className="text-health-primary" />
                Join Our Network
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-px w-20 bg-health-primary/20"></div>
          <Heart size={20} className="text-health-primary/60 animate-pulse" />
          <div className="h-px w-20 bg-health-primary/20"></div>
        </div>
        
        <p className="text-sm text-health-dark/60">
          Akeno Health – Smarter, Faster, More Personalised Healthcare. Powered by AI.
        </p>
        <p className="text-xs text-health-dark/40 mt-2">
          Your Health. Your Data. Your Future.
        </p>
      </div>
    </section>
  );
};

export { CTASection };
