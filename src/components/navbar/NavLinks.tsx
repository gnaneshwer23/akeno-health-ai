
import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const location = useLocation();
  
  // Helper function to check if the current path starts with the given path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { 
      name: 'Solutions', 
      path: '#',
      sublinks: [
        { name: 'For Patients', path: '/patient-solutions' },
        { name: 'For Doctors', path: '/doctor-solutions' },
        { name: 'For Biotech', path: '/biotech-solutions' },
        { name: 'Quantum Computing', path: '/quantum-computing' },
      ]
    },
    { name: 'Case Studies & Blog', path: '/case-studies-blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={cn('hidden lg:flex items-center space-x-8', className)}>
      {links.map((link) => (
        <div key={link.name} className="relative group">
          {link.sublinks ? (
            <>
              <button className="text-health-dark hover:text-health-primary transition-colors py-2 font-medium text-sm">
                {link.name}
              </button>
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white shadow-lg rounded-xl p-2 border border-gray-100">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50",
                        isActive(sublink.path) ? "text-health-primary" : "text-gray-700"
                      )}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors py-2",
                isActive(link.path) ? "text-health-primary" : "text-health-dark hover:text-health-primary"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
      
      {/* Chatbot link with icon */}
      <Link
        to="/chatbot"
        className={cn(
          "flex items-center text-sm font-medium transition-colors py-2 ml-2",
          isActive('/chatbot') 
            ? "text-health-primary" 
            : "text-health-dark hover:text-health-primary"
        )}
      >
        <MessageCircle className="h-4 w-4 mr-1" />
        AI Assistant
      </Link>
    </div>
  );
};

export { NavLinks };
