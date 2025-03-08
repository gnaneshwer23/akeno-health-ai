
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Activity, 
  MessageCircle, 
  Bell,
  Settings, 
  HelpCircle
} from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';
import { useToast } from '@/hooks/use-toast';

const SidebarNavigation = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleNavigation = (path: string) => {
    if (path === '#') {
      toast({
        title: "Coming Soon",
        description: "This feature is under development and will be available soon!",
      });
      return;
    }
    navigate(path);
  };

  // Role-specific navigation items
  const getNavItems = () => {
    const dashboardPath = `/dashboard/${user?.role || 'patient'}`;
    
    const commonItems = [
      { icon: <Home size={20} />, label: 'Dashboard', href: dashboardPath, isActive: location.pathname === dashboardPath },
      { icon: <User size={20} />, label: 'Profile', href: '#', isActive: false },
      { icon: <Settings size={20} />, label: 'Settings', href: '#', isActive: false },
      { icon: <HelpCircle size={20} />, label: 'Help', href: '#', isActive: false },
    ];

    switch (user?.role) {
      case 'patient':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Health Tracking', href: '#', isActive: false },
          { icon: <MessageCircle size={20} />, label: 'AI Assistant', href: '#', isActive: false },
          { icon: <Bell size={20} />, label: 'Notifications', href: '#', isActive: false },
        ];
      case 'doctor':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Patient Reports', href: '#', isActive: false },
          { icon: <MessageCircle size={20} />, label: 'Consultations', href: '#', isActive: false },
          { icon: <Bell size={20} />, label: 'Alerts', href: '#', isActive: false },
        ];
      case 'researcher':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Research Data', href: '#', isActive: false },
          { icon: <MessageCircle size={20} />, label: 'Collaborations', href: '#', isActive: false },
          { icon: <Bell size={20} />, label: 'Updates', href: '#', isActive: false },
        ];
      default:
        return commonItems;
    }
  };

  return (
    <nav className="space-y-1">
      {getNavItems().map((item, index) => (
        <SidebarNavItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isActive={item.isActive}
          onClick={() => handleNavigation(item.href)}
        />
      ))}
    </nav>
  );
};

export default SidebarNavigation;
