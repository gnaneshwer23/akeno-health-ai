
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useActiveLink } from '@/hooks/use-active-link';
import { MobileMenuLink } from './MobileMenuLink';
import { MobileMenuDropdown } from './MobileMenuDropdown';
import { 
  Users, 
  Stethoscope, 
  Microscope, 
  Atom, 
  Home, 
  Info, 
  HelpCircle,
  FileText,
  Phone
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen,
  onLinkClick = () => {} 
}) => {
  const { isActive } = useActiveLink();
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  // Reset solutions dropdown when main menu closes
  useEffect(() => {
    if (!isOpen) {
      setSolutionsOpen(false);
    }
  }, [isOpen]);

  const solutionsLinks = [
    { 
      to: '/patient-solutions', 
      icon: Users, 
      label: 'For Patients', 
      isActive: isActive('/patient-solutions') 
    },
    { 
      to: '/doctor-solutions', 
      icon: Stethoscope, 
      label: 'For Doctors', 
      isActive: isActive('/doctor-solutions') 
    },
    { 
      to: '/biotech-solutions', 
      icon: Microscope, 
      label: 'For Biotech', 
      isActive: isActive('/biotech-solutions') 
    },
    { 
      to: '/quantum-computing', 
      icon: Atom, 
      label: 'Quantum Computing', 
      isActive: isActive('/quantum-computing') 
    }
  ];

  return (
    <div
      className={cn(
        'lg:hidden fixed top-[60px] left-0 right-0 h-[calc(100vh-60px)] transition-all duration-300 overflow-hidden z-40',
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className="bg-white shadow-lg border-t border-gray-100 h-full overflow-y-auto">
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          <MobileMenuLink 
            to="/" 
            icon={Home} 
            label="Home" 
            isActive={isActive('/')} 
            onClick={onLinkClick} 
          />
          
          <MobileMenuLink 
            to="/about" 
            icon={Info} 
            label="About Us" 
            isActive={isActive('/about')} 
            onClick={onLinkClick} 
          />

          <MobileMenuLink 
            to="/how-it-works" 
            icon={HelpCircle} 
            label="How It Works" 
            isActive={isActive('/how-it-works')} 
            onClick={onLinkClick} 
          />

          <MobileMenuDropdown
            icon={Users}
            label="Solutions"
            isActive={
              isActive('/patient-solutions') || 
              isActive('/doctor-solutions') || 
              isActive('/biotech-solutions') || 
              isActive('/quantum-computing')
            }
            links={solutionsLinks}
            onLinkClick={onLinkClick}
          />

          <MobileMenuLink 
            to="/case-studies-blog" 
            icon={FileText} 
            label="Case Studies & Blog" 
            isActive={isActive('/case-studies-blog')} 
            onClick={onLinkClick} 
          />

          <MobileMenuLink 
            to="/contact" 
            icon={Phone} 
            label="Contact" 
            isActive={isActive('/contact')} 
            onClick={onLinkClick} 
          />
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
