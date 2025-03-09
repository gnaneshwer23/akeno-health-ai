
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Heart, Brain, Sparkles, UserCircle2, Building, HandshakeIcon } from 'lucide-react';
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
      
      {/* Medical cross symbols - healthcare specific element */}
      <div className="absolute right-10 inset-y-0 w-20">
        {[...Array(10)].map((_, i) => (
          <div key={i + 200} className="absolute opacity-20"
            style={{ 
              top: `${i * 80 + Math.random() * 40}px`,
              right: `${Math.random() * 30}px`,
            }}
          >
            <div className="relative">
              <div className="absolute bg-health-primary/40 h-8 w-2 rounded-full left-3 top-0"></div>
              <div className="absolute bg-health-primary/40 h-2 w-8 rounded-full left-0 top-3"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-dark to-health-primary bg-clip-text text-transparent mb-6">
          Join the Future of Healthcare
        </h2>
        
        <p className="text-lg text-health-dark/80 max-w-3xl mx-auto mb-8">
          Akeno Health is revolutionising patient care, diagnostics, and medical innovation with cutting-edge AI technology.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <UserCircle2 size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Patients</h3>
            <p className="mb-4 text-health-dark/70">Looking for smarter healthcare with AI-powered continuous monitoring?</p>
            <Button variant="ghost" size="sm" as="Link" to="/patient-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Brain size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Doctors</h3>
            <p className="mb-4 text-health-dark/70">Seeking AI-powered clinical insights and decision support tools?</p>
            <Button variant="ghost" size="sm" as="Link" to="/doctor-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm border border-health-primary/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-health-primary/10 flex items-center justify-center">
                <Building size={28} className="text-health-primary group-hover:text-health-secondary transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-health-primary mb-3">For Partners</h3>
            <p className="mb-4 text-health-dark/70">Ready to optimise healthcare solutions with our AI ecosystem?</p>
            <Button variant="ghost" size="sm" as="Link" to="/biotech-solutions" className="w-full justify-center group">
              Learn More
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-health-primary/10 shadow-sm mb-10">
          <p className="text-xl font-medium bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            The future of AI healthcare starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              as="Link"
              to="/contact"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-health-primary to-health-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              as="Link"
              to="/contact"
              className="border-health-primary/30 hover:border-health-primary/60"
            >
              Request a Demo
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              as="Link"
              to="/contact"
              className="hover:bg-health-primary/5"
            >
              Join Our Network
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-px w-12 bg-health-primary/20"></div>
          <Heart size={20} className="text-health-primary/60 animate-pulse" />
          <div className="h-px w-12 bg-health-primary/20"></div>
        </div>
        
        <p className="text-sm text-health-dark/60">
          Akeno Health – Smarter, Faster, More Personalised Healthcare. Powered by AI.
        </p>
      </div>
    </section>
  );
};

export { CTASection };
