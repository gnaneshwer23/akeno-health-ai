
import React, { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import MobileSidebar from './sidebar/MobileSidebar';
import DashboardSecurityBanner from './security/DashboardSecurityBanner';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={mobileMenuOpen} 
        setIsOpen={setMobileMenuOpen}
        trigger={
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        }
      />
      
      {/* Header */}
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Main dashboard content */}
        <motion.main 
          className="flex-1 p-6 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DashboardSecurityBanner />
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
