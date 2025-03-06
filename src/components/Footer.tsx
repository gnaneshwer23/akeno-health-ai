
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-health-dark text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <AnimatedLogo className="opacity-90" />
            <span className="text-xl font-medium bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">Akeno Health AI</span>
          </Link>
          
          <p className="text-health-light/80 mb-6">
            Transforming healthcare with AI-driven precision medicine and digital twin technology for personalized care.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="#facebook"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-health-primary transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook size={18} className="opacity-80" />
            </a>
            <a
              href="#twitter"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-health-primary transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter size={18} className="opacity-80" />
            </a>
            <a
              href="#linkedin"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-health-primary transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={18} className="opacity-80" />
            </a>
            <a
              href="#instagram"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-health-primary transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram size={18} className="opacity-80" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-6">Company</h3>
          <ul className="space-y-4">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Blog', path: '/case-studies-blog' },
              { name: 'Contact', path: '/contact' },
              { name: 'How It Works', path: '/how-it-works' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-health-light/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-6">Solutions</h3>
          <ul className="space-y-4">
            {[
              { name: 'For Patients', path: '/patient-solutions' },
              { name: 'For Physicians', path: '/doctor-solutions' },
              { name: 'For Pharma & Biotech', path: '/biotech-solutions' },
              { name: 'Quantum Integration', path: '/quantum-computing' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-health-light/80 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-6">Subscribe</h3>
          <p className="text-health-light/80 mb-4">
            Stay updated with our latest news and developments in AI healthcare.
          </p>
          
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-health-primary"
              />
            </div>
            <Button 
              variant="primary" 
              size="md" 
              className="w-full shadow hover:shadow-lg transition-all group"
            >
              Subscribe
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-health-light/60 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Akeno Health AI. All rights reserved.
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="text-health-light/80 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-health-light/80 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-health-light/80 hover:text-white transition-colors">
            HIPAA Compliance
          </a>
          <a href="#" className="text-health-light/80 hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
