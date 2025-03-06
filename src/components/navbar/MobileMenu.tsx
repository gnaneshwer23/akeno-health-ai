
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onLinkClick }) => {
  return (
    <div
      className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg transition-transform duration-300 z-40 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-6 overflow-y-auto">
        <nav className="flex flex-col space-y-6 mt-6">
          <Link
            to="/"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            How It Works
          </Link>
          <Link
            to="/case-studies-blog"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            Case Studies & Blog
          </Link>
          <Link
            to="/patient-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            For Patients
          </Link>
          <Link
            to="/doctor-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            For Doctors
          </Link>
          <Link
            to="/biotech-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            For Pharma & Biotech
          </Link>
          <Link
            to="/quantum-computing"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            Quantum Integration
          </Link>
          <Link
            to="/contact"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-xl font-medium"
            onClick={onLinkClick}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-auto mb-8 flex flex-col gap-4 w-full">
          <Button 
            variant="outline" 
            fullWidth 
            className="shadow-sm"
            as="Link"
            to="/login"
            onClick={onLinkClick}
          >
            Sign In
          </Button>
          <Button 
            variant="primary" 
            fullWidth 
            className="shadow"
            as="Link"
            to="/contact"
            onClick={onLinkClick}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
