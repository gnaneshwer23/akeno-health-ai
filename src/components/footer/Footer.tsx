
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { DefaultLogo } from '@/components/animated-logo/DefaultLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="w-16 h-16 mb-4">
              <DefaultLogo />
            </div>
            <h3 className="text-xl font-bold text-health-dark mb-2">Akeno Health</h3>
            <p className="text-muted-foreground max-w-md">
              Revolutionizing healthcare with AI-powered solutions that empower patients, 
              doctors, hospitals, and biotech companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-health-dark mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/patient-solutions" className="text-muted-foreground hover:text-health-primary transition-colors">For Patients</Link></li>
              <li><Link to="/doctor-solutions" className="text-muted-foreground hover:text-health-primary transition-colors">For Doctors</Link></li>
              <li><Link to="/hospital-solutions" className="text-muted-foreground hover:text-health-primary transition-colors">For Hospitals</Link></li>
              <li><Link to="/biotech-solutions" className="text-muted-foreground hover:text-health-primary transition-colors">For Biotech</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-health-dark mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-health-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-health-primary transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies-blog" className="text-muted-foreground hover:text-health-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-health-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-health-dark mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-muted-foreground hover:text-health-primary transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-muted-foreground hover:text-health-primary transition-colors">Sign Up</Link></li>
              <li><Link to="/quantum-computing" className="text-muted-foreground hover:text-health-primary transition-colors">Quantum Computing</Link></li>
              <li><Link to="/healthcare-decision-making" className="text-muted-foreground hover:text-health-primary transition-colors">AI Decision Making</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Akeno Health Technologies. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-health-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-health-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-health-primary transition-colors">Cookies</a>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Akeno Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
