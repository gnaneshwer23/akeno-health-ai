
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
        "lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col h-full p-6 overflow-y-auto">
        <nav className="flex flex-col space-y-4 mt-4">
          <Link
            to="/"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            How It Works
          </Link>
          <Link
            to="/case-studies-blog"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            Case Studies & Blog
          </Link>
          <Link
            to="/patient-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            For Patients
          </Link>
          <Link
            to="/doctor-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            For Doctors
          </Link>
          <Link
            to="/biotech-solutions"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            For Pharma & Biotech
          </Link>
          <Link
            to="/quantum-computing"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            Quantum
          </Link>
          <Link
            to="/contact"
            className="text-health-dark/80 hover:text-health-primary transition-colors text-base py-2"
            onClick={onLinkClick}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-8 flex flex-col gap-4 w-full">
          <Link
            to="/login"
            className="flex items-center justify-center h-12 text-health-dark/80 hover:text-health-primary transition-colors text-base"
            onClick={onLinkClick}
          >
            Sign In
          </Link>
          <Button 
            variant="primary" 
            fullWidth 
            className="rounded-full h-12 text-base"
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
