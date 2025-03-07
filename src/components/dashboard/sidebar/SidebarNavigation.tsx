
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
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

const SidebarNavigation = () => {
  const { user } = useAuth();

  // Role-specific navigation items
  const getNavItems = () => {
    const commonItems = [
      { icon: <Home size={20} />, label: 'Dashboard', href: '#' },
      { icon: <User size={20} />, label: 'Profile', href: '#' },
      { icon: <Settings size={20} />, label: 'Settings', href: '#' },
      { icon: <HelpCircle size={20} />, label: 'Help', href: '#' },
    ];

    switch (user?.role) {
      case 'patient':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Health Tracking', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'AI Assistant', href: '#' },
          { icon: <Bell size={20} />, label: 'Notifications', href: '#' },
        ];
      case 'doctor':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Patient Reports', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'Consultations', href: '#' },
          { icon: <Bell size={20} />, label: 'Alerts', href: '#' },
        ];
      case 'researcher':
        return [
          ...commonItems,
          { icon: <Activity size={20} />, label: 'Research Data', href: '#' },
          { icon: <MessageCircle size={20} />, label: 'Collaborations', href: '#' },
          { icon: <Bell size={20} />, label: 'Updates', href: '#' },
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
        />
      ))}
    </nav>
  );
};

export default SidebarNavigation;
