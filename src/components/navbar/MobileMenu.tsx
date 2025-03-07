
import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Users, 
  Stethoscope, 
  Microscope, 
  Atom, 
  Home, 
  Info, 
  HelpCircle,
  FileText,
  Phone,
  MessageCircle 
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen,
  onLinkClick = () => {} 
}) => {
  const location = useLocation();
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  // Helper function to check if the current path starts with the given path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    setSolutionsOpen(!solutionsOpen);
  };

  // Reset solutions dropdown when main menu closes
  React.useEffect(() => {
    if (!isOpen) {
      setSolutionsOpen(false);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        'lg:hidden fixed top-[60px] left-0 right-0 h-[calc(100vh-60px)] transition-all duration-300 overflow-hidden z-40',
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className="bg-white shadow-lg border-t border-gray-100 h-full overflow-y-auto">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          <Link
            to="/"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <Home className="h-5 w-5 mr-3" />
            Home
          </Link>
          
          <Link
            to="/about"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/about') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <Info className="h-5 w-5 mr-3" />
            About Us
          </Link>

          <Link
            to="/how-it-works"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/how-it-works') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <HelpCircle className="h-5 w-5 mr-3" />
            How It Works
          </Link>

          <div className="relative">
            <button
              onClick={toggleSolutions}
              className={cn(
                "flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg transition-colors",
                (isActive('/patient-solutions') || 
                isActive('/doctor-solutions') || 
                isActive('/biotech-solutions') || 
                isActive('/quantum-computing')) 
                  ? "text-health-primary bg-health-primary/5" 
                  : "text-health-dark hover:bg-gray-50"
              )}
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Solutions
              </div>
              <ChevronDown className={cn("h-5 w-5 transition-transform", solutionsOpen ? "transform rotate-180" : "")} />
            </button>
            
            <div className={cn(
              "pl-8 overflow-hidden transition-all duration-300",
              solutionsOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
            )}>
              <Link
                to="/patient-solutions"
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
                  isActive('/patient-solutions') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
                )}
                onClick={onLinkClick}
              >
                <Users className="h-5 w-5 mr-3" />
                For Patients
              </Link>
              
              <Link
                to="/doctor-solutions"
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
                  isActive('/doctor-solutions') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
                )}
                onClick={onLinkClick}
              >
                <Stethoscope className="h-5 w-5 mr-3" />
                For Doctors
              </Link>
              
              <Link
                to="/biotech-solutions"
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
                  isActive('/biotech-solutions') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
                )}
                onClick={onLinkClick}
              >
                <Microscope className="h-5 w-5 mr-3" />
                For Biotech
              </Link>
              
              <Link
                to="/quantum-computing"
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
                  isActive('/quantum-computing') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
                )}
                onClick={onLinkClick}
              >
                <Atom className="h-5 w-5 mr-3" />
                Quantum Computing
              </Link>
            </div>
          </div>

          <Link
            to="/case-studies-blog"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/case-studies-blog') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <FileText className="h-5 w-5 mr-3" />
            Case Studies & Blog
          </Link>

          <Link
            to="/contact"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/contact') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <Phone className="h-5 w-5 mr-3" />
            Contact
          </Link>
          
          <Link
            to="/chatbot"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-lg transition-colors",
              isActive('/chatbot') ? "text-health-primary bg-health-primary/5" : "text-health-dark hover:bg-gray-50"
            )}
            onClick={onLinkClick}
          >
            <MessageCircle className="h-5 w-5 mr-3" />
            AI Assistant
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
