
import React from 'react';
import NotificationCenter from './components/NotificationCenter';
import QuickActions from './components/QuickActions';
import NotificationsList from './components/NotificationsList';

const PatientNotifications = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-health-dark">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with your health alerts and reminders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NotificationCenter />
        <QuickActions />
      </div>

      <NotificationsList />
    </div>
  );
};

export default PatientNotifications;
