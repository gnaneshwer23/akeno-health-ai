
import React from 'react';
import { Smartphone, Heart, Activity, Stethoscope } from 'lucide-react';
import ConnectedDeviceItem from './ConnectedDeviceItem';

const ConnectedDevicesDiagram = () => (
  <div className="mb-4 bg-health-light/30 p-3 rounded-lg">
    <div className="text-sm font-medium mb-2 text-center">Connected Patient Devices</div>
    <div className="flex justify-between items-center">
      <ConnectedDeviceItem icon={<Smartphone size={20} className="text-health-primary" />} name="Mobile App" />
      <ConnectedDeviceItem icon={<Heart size={20} className="text-health-primary" />} name="Heart Monitor" />
      <ConnectedDeviceItem icon={<Activity size={20} className="text-health-primary" />} name="Fitness Tracker" />
      <ConnectedDeviceItem icon={<Stethoscope size={20} className="text-health-primary" />} name="Medical Device" />
    </div>
  </div>
);

export default ConnectedDevicesDiagram;
