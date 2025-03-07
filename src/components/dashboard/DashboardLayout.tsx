
import React, { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import MobileSidebar from './sidebar/MobileSidebar';
import { Button } from '@/components/Button';

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
        trigger={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" />}
      />
      
      {/* Header */}
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Main dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
