
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth/useAuth';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import { DefaultLogo } from '@/components/animated-logo/DefaultLogo';
import { MobileMenu } from './MobileMenu';
import { CustomButton } from '@/components/ui/custom-button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // We'll handle the case where auth context might not be available
  const auth = React.useCallback(() => {
    try {
      return useAuth();
    } catch (error) {
      console.warn('Auth context not available:', error);
      return { 
        user: null, 
        isAuthenticated: false, 
        logout: () => Promise.resolve() 
      };
    }
  }, [])();

  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" aria-label="Home">
              <div className="w-10 h-10">
                <DefaultLogo />
              </div>
              <span className="text-xl font-bold text-health-dark">Akeno Health</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <NavLinks className="hidden lg:flex" />

          {/* Auth Buttons or User Menu */}
          <div className="flex items-center space-x-4">
            {auth.isAuthenticated ? (
              <div className="flex items-center gap-4">
                <CustomButton
                  variant="outline"
                  size="sm"
                  className="hidden sm:block"
                  onClick={() => auth.logout()}
                >
                  Log Out
                </CustomButton>
                <CustomButton 
                  to="/dashboard" 
                  variant="primary"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  Dashboard
                </CustomButton>
                {auth.user?.profileImage && (
                  <img
                    src={auth.user.profileImage}
                    alt={auth.user.name || "User"}
                    className="w-8 h-8 rounded-full border border-gray-200"
                  />
                )}
              </div>
            ) : (
              <AuthButtons />
            )}
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="block lg:hidden text-health-dark" 
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onLinkClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
